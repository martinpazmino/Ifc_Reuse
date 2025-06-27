import subprocess
from pathlib import Path

def convert_ifc_to_obj(input_ifc_path):
    input_path = Path(input_ifc_path)
    output_path = input_path.with_suffix('.obj')

    subprocess.run([
        "docker", "run", "--rm",
        "-v", f"{input_path.parent.absolute()}:/data",
        "aecgeeks/ifcopenshell",
        "IfcConvert",
        f"/data/{input_path.name}",
        f"/data/{output_path.name}"
    ], check=True)

    return output_path
