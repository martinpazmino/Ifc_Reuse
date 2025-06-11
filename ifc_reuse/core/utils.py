import ifcopenshell
from typing import Dict, List, Optional


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