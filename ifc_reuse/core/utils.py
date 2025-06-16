import json
import os

import ifcopenshell
from typing import Dict, List, Optional

from django.conf import settings
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage

from .models import UploadedIFC, ReusableComponent


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


def save_metadata_and_create_component(metadata: Dict[str, object], filename: str) -> str:
    """Save metadata JSON and create a :class:`ReusableComponent`.

    The JSON file is stored under ``MEDIA_ROOT/reusable_components`` and a
    corresponding database row is inserted using information extracted from the
    referenced IFC model.
    """

    base_path = "reusable_components"
    json_content = json.dumps(metadata, indent=2)
    json_path = default_storage.save(
        os.path.join(base_path, filename),
        ContentFile(json_content.encode("utf-8")),
    )

    express_id = metadata.get("expressID")
    model_uuid = metadata.get("modelUUID")
    if express_id is None or not model_uuid:
        return json_path

    try:
        express_id_int = int(express_id)
    except (TypeError, ValueError):
        return json_path

    ifc_path = os.path.join(settings.MEDIA_ROOT, "ifc_files", f"{model_uuid}.ifc")
    info = get_element_info(ifc_path, express_id_int)

    try:
        upload = UploadedIFC.objects.get(file__contains=model_uuid)
    except UploadedIFC.DoesNotExist:
        upload = None
    except UploadedIFC.MultipleObjectsReturned:
        upload = UploadedIFC.objects.filter(file__contains=model_uuid).first()

    ReusableComponent.objects.create(
        ifc_file=upload,
        component_type=info.get("type", "Unknown"),
        storey=info.get("storey"),
        material_name=info.get("material"),
        json_file_path=json_path,
    )

    return json_path
