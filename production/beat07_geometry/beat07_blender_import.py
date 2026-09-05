"""Beat 07 — Opportunity Detail plan geometry -> Blender planes.

Auto-generated from production/beat07_geometry/beat07_geometry.json, whose
bounds were recovered from vector objects on page 7 of
PEOPLEGROVE_CANONICAL_V2_SOURCE.pdf.

plan geometry verified - depth authored.

Each verified 2D zone becomes one plane in the native 390 x 844 source
coordinate system (top-left origin, +x right, +y down), mapped to Blender XY.
Z-depth is NOT recovered from product geometry: every plane starts at Z=0.
AUTHORED_DEPTH exposes editable per-zone Z, all initialized to 0.0 -- author
downstream. This script creates NO camera, lighting, material, or render.
"""
import bpy

FRAME_W, FRAME_H = 390.0, 844.0

# Verified 2D plan geometry (source pixels, top-left origin, +y down).
PLANES = [
    {
        "name": "PG07_FRAME",
        "x": 0,
        "y": 0,
        "w": 390,
        "h": 844
    },
    {
        "name": "PG07_IDENTITY",
        "x": 0,
        "y": 0,
        "w": 390,
        "h": 318
    },
    {
        "name": "PG07_TERMS",
        "x": 20,
        "y": 286,
        "w": 350,
        "h": 244
    },
    {
        "name": "PG07_NEXT_ACTION",
        "x": 20,
        "y": 550,
        "w": 350,
        "h": 78
    },
    {
        "name": "PG07_ROLE_NARRATIVE",
        "x": 20,
        "y": 650,
        "w": 350,
        "h": 64
    },
    {
        "name": "PG07_ORG_STRIP",
        "x": 20,
        "y": 728,
        "w": 350,
        "h": 54
    },
    {
        "name": "PG07_STICKY_CTA",
        "x": 20,
        "y": 790,
        "w": 270,
        "h": 54
    },
    {
        "name": "PG07_ACTION_CONTROL",
        "x": 302,
        "y": 790,
        "w": 54,
        "h": 54
    }
]

# Authored Z-depth -- initialized to 0.0. NOT from verified product geometry.
AUTHORED_DEPTH = {
    "PG07_FRAME": 0.0,
    "PG07_IDENTITY": 0.0,
    "PG07_TERMS": 0.0,
    "PG07_NEXT_ACTION": 0.0,
    "PG07_ROLE_NARRATIVE": 0.0,
    "PG07_ORG_STRIP": 0.0,
    "PG07_STICKY_CTA": 0.0,
    "PG07_ACTION_CONTROL": 0.0,
}

def make_plane(name, x, y, w, h, z):
    # source top-left (x, y) with +y down -> Blender center, +y up
    cx = x + w / 2.0
    cy = FRAME_H - (y + h / 2.0)   # flip Y so the frame reads upright in Blender
    mesh = bpy.data.meshes.new(name)
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    hw, hh = w / 2.0, h / 2.0
    verts = [(cx-hw, cy-hh, z), (cx+hw, cy-hh, z), (cx+hw, cy+hh, z), (cx-hw, cy+hh, z)]
    faces = [(0, 1, 2, 3)]
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    return obj

def main():
    for p in PLANES:
        z = AUTHORED_DEPTH.get(p["name"], 0.0)
        make_plane(p["name"], p["x"], p["y"], p["w"], p["h"], z)
    print("Created %d Beat 07 plan planes at Z=0 (depth authored downstream)." % len(PLANES))

if __name__ == "__main__":
    main()
