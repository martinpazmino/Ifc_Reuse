import ifcopenshell
from typing import Optional, Tuple


def get_type_and_material(ifc_path: str, express_id: int) -> Tuple[str, str]:
    """Return the IFC entity type name and material for an element."""
    try:
        model = ifcopenshell.open(ifc_path)
    except Exception:
        return "Unknown", "Unknown"

    try:
        element = model.by_id(express_id)
        if not element:
            return "Unknown", "Unknown"
        element_type = element.is_a()

        material_name = "Unknown"
        for rel in model.by_type("IfcRelAssociatesMaterial"):
            if element.id() in [obj.id() for obj in rel.RelatedObjects]:
                mat = rel.RelatingMaterial
                # The relating material can be IfcMaterial or another entity
                if hasattr(mat, "Name"):
                    material_name = mat.Name
                break
        return element_type or "Unknown", material_name
    except Exception:
        return "Unknown", "Unknown"
