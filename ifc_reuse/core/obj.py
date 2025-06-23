import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from scipy.spatial import ConvexHull

COLORS = {
    "cambridge_blue": (156/255, 185/255, 157/255),
    "gunmetal": (31/255, 40/255, 55/255),
    "oxford_blue": (31/255, 40/255, 58/255),
    "dark_slate_gray": (28/255, 71/255, 68/255),
    "honeydew": (239/255, 249/255, 238/255)
}

def generate_thumbnail(obj_path, output_image_path):
    vertices = []

    with open(obj_path, 'r') as file:
        for line in file:
            if line.startswith('v '):
                parts = line.strip().split()
                vertex = [float(parts[1]), float(parts[2]), float(parts[3])]
                vertices.append(vertex)

    vertices = np.array(vertices)
    yz_coords = vertices[:, [1, 2]]
    shift = np.min(yz_coords, axis=0)
    yz_coords_shifted = yz_coords - shift
    hull = ConvexHull(yz_coords_shifted)

    fig, ax = plt.subplots(figsize=(6, 6))
    fig.patch.set_facecolor(COLORS["honeydew"])
    ax.set_facecolor(COLORS["honeydew"])
    plt.scatter(yz_coords_shifted[:, 0], yz_coords_shifted[:, 1], s=10, color=COLORS["oxford_blue"], alpha=0.8)

    for simplex in hull.simplices:
        plt.plot(yz_coords_shifted[simplex, 0], yz_coords_shifted[simplex, 1], color=COLORS["dark_slate_gray"], lw=1)

    plt.fill(yz_coords_shifted[hull.vertices, 0], yz_coords_shifted[hull.vertices, 1], color=COLORS["gunmetal"], alpha=0.2)
    plt.axis('equal')
    plt.xlabel("Y (meters)", fontsize=12)
    plt.ylabel("Z (meters)", fontsize=12)
    plt.grid(False)
    plt.box(False)
    plt.savefig(output_image_path, dpi=300, bbox_inches='tight', facecolor=fig.get_facecolor())
    plt.close()
