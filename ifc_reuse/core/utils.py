import json
import os
import subprocess
import django

import ifcopenshell
from typing import Dict, List, Optional, Tuple

from django.conf import settings
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage

from .models import UploadedIFC, ReusableComponent

IFCCONVERT_PATH = r"C:\IfcConvert\IfcConvert.exe"

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ifc_reuse.settings")
django.setup()


def extract_ifc_location(ifc_path: str) -> str:
    """Return a short textual location from an IFC file if available."""
    try:
        model = ifcopenshell.open(ifc_path)
    except Exception:
        return ""

    try:
        site = next(iter(model.by_type("IfcSite")), None)
    except Exception:
        site = None

    if not site:
        return ""

    try:
        addr = getattr(site, "Address", None)
        if addr:
            parts = [addr.Town, addr.Region, addr.Country]
            loc = ", ".join(p for p in parts if p)
            if loc:
                return loc
        return getattr(site, "LongName", "") or getattr(site, "Name", "") or ""
    except Exception:
        return ""

def get_element_info(ifc_path: str, express_id: int) -> Dict[str, object]:
    """Return basic IFC metadata for the given element."""

    info: Dict[str, object] = {"type": "Unknown", "materials": []}
    try:
        model = ifcopenshell.open(ifc_path)
    except Exception:
        return info

    element = model.by_id(express_id)
    if not element:
        return info

    # Entity type name
    info["type"] = element.is_a() or "Unknown"

    # PredefinedType if available (e.g. for walls, doors, windows)
    predefined = getattr(element, "PredefinedType", None)
    if predefined and predefined != "NOTDEFINED":
        info["predefinedType"] = str(predefined)

    # PartitioningType if available (e.g. for IfcDoor, IfcWindow)
    partitioning = getattr(element, "PartitioningType", None)
    if partitioning and partitioning != "NOTDEFINED":
        info["partitioningType"] = str(partitioning)

    # Associated materials and optional layer thickness
    materials: List[Dict[str, object]] = []
    try:
        for rel in model.by_type("IfcRelAssociatesMaterial"):
            if element.id() in [obj.id() for obj in rel.RelatedObjects]:
                mat = rel.RelatingMaterial

                def add_material(mat_obj, thickness: Optional[float] = None):
                    name = getattr(mat_obj, "Name", None)
                    entry: Dict[str, object] = {}
                    if name:
                        entry["name"] = name
                    if thickness is not None:
                        entry["thickness"] = thickness
                    if entry:
                        materials.append(entry)

                if mat.is_a("IfcMaterialLayerSetUsage"):
                    for layer in mat.ForLayerSet.MaterialLayers:
                        add_material(layer.Material, getattr(layer, "LayerThickness", None))

                elif mat.is_a("IfcMaterialLayerSet"):
                    for layer in mat.MaterialLayers:
                        add_material(layer.Material, getattr(layer, "LayerThickness", None))

                elif mat.is_a("IfcMaterialList"):
                    for mat_item in mat.Materials:
                        add_material(mat_item)

                elif mat.is_a("IfcMaterial"):
                    add_material(mat)

                elif hasattr(mat, "Name"):
                    add_material(mat)

                break  # Assume only one material relation per element

    except Exception:
        pass

    if materials:
        info["materials"] = materials
        # Keep backward compatibility with single material
        info["material"] = materials[0].get("name", "Unknown")

    # Determine containing building storey if any
    try:
        for rel in model.by_type("IfcRelContainedInSpatialStructure"):
            if element.id() in [obj.id() for obj in rel.RelatedElements]:
                storey = rel.RelatingStructure
                if storey and storey.is_a("IfcBuildingStorey"):
                    info["storey"] = getattr(storey, "Name", None)
                break
    except Exception:
        pass

    return info


def save_metadata_and_create_component(
    metadata: Dict[str, object],
    filename: str,
    model_id: Optional[int] = None
) -> str:
    """
    Save metadata as a JSON file and create a ReusableComponent entry in the database.

    - Stores the JSON in MEDIA_ROOT/reusable_components/<filename>
    - Extracts info from the IFC model using expressID and modelUUID
    - Links the component to the corresponding UploadedIFC entry using model_id
    """

    # 1. Save JSON metadata to disk
    base_path = "reusable_components"
    json_content = json.dumps(metadata, indent=2)
    json_file = os.path.join(base_path, filename)

    if default_storage.exists(json_file):
        default_storage.delete(json_file)

    json_path = default_storage.save(
        json_file,
        ContentFile(json_content.encode("utf-8")),
    )

    # 2. Extract expressID and modelUUID
    express_id = metadata.get("expressID")
    model_uuid = metadata.get("modelUUID")

    if express_id is None or not model_uuid:
        # Required keys missing
        return json_path

    try:
        express_id = int(express_id)
    except (TypeError, ValueError):
        return json_path

    # 3. Get element info from IFC file (for type/material/etc.)
    ifc_path = os.path.join(settings.MEDIA_ROOT, "ifc_files", f"{model_uuid}.ifc")
    info = get_element_info(ifc_path, express_id)

    # 4. Lookup UploadedIFC from model_id
    upload = None
    if model_id is not None:
        try:
            upload = UploadedIFC.objects.get(id=model_id)
        except UploadedIFC.DoesNotExist:
            pass

    # 5. Extract global_id from metadata or filename
    global_id = metadata.get("GlobalId", {}).get("value") or filename.replace(".json", "")

    # 6. Save to database if everything is in place
    if upload:
        materials = metadata.get("materials")
        if isinstance(materials, list) and materials:
            material = materials[0].get("name", "xxx")
        else:
            material = "xxx"
        ReusableComponent.objects.create(
            ifc_file=upload,
            component_type=metadata.get("type", "Unknown"),
            storey=info.get("storey"),
            material_name=material,
            json_file_path=json_path,
            global_id=global_id,
        )

    return json_path




def extract_component_files(ifc_path: str, express_id: int, global_id: str):
    """Extract a single IFC element and convert to OBJ using IfcConvert."""

    # Create output folders
    fragments_dir = os.path.join(settings.MEDIA_ROOT, 'fragments')
    temp_ifcs_dir = os.path.join(settings.MEDIA_ROOT, 'temp_ifcs')
    os.makedirs(fragments_dir, exist_ok=True)
    os.makedirs(temp_ifcs_dir, exist_ok=True)

    # Define output file paths
    temp_ifc_path = os.path.join(temp_ifcs_dir, f"{global_id}.ifc")
    output_obj_path = os.path.join(fragments_dir, f"{global_id}.obj")

    # Load full IFC and extract element
    model = ifcopenshell.open(ifc_path)
    element = model.by_id(express_id)
    if not element:
        raise ValueError(f"Element with expressID {express_id} not found")

    # Create mini IFC file with single element
    mini_ifc = ifcopenshell.file(schema=model.schema)
    mini_ifc.add(element)
    mini_ifc.write(temp_ifc_path)

    # Call IfcConvert on mini IFC
    command = [
        settings.IFCCONVERT_PATH,
        temp_ifc_path,
        output_obj_path,
        "--use-element-guids"
    ]

    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"IfcConvert failed: {e.stderr}") from e
    finally:
        # Cleanup temporary IFC
        if os.path.exists(temp_ifc_path):
            os.remove(temp_ifc_path)

    return output_obj_path
