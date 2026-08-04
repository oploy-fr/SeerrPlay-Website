"""Generate SeerrPlay favicon + mobile/PWA icon pack — ring glyph (logo variant 7).

Renders the gradient ring + white play triangle with PIL at 4x supersampling.
Outputs into public/icons/ plus public/favicon.ico.
"""
import os
import numpy as np
from PIL import Image, ImageDraw

C1 = np.array([0x62, 0x5F, 0xFF], dtype=float)  # #625fff indigo
C2 = np.array([0x98, 0x10, 0xFA], dtype=float)  # #9810fa purple
NIGHT = (7, 11, 22, 255)  # #070b16
SS = 4  # supersampling factor

# Ring + triangle geometry from /logo/icon-7.svg (viewBox 88, glyph translated +8)
RING_R = 28 / 88       # outer radius, relative to canvas
RING_W = 6.5 / 88      # stroke width, relative to canvas
TRI = [(0.432, 0.375), (0.636, 0.500), (0.432, 0.625)]


def diagonal_gradient(size: int) -> Image.Image:
    y, x = np.mgrid[0:size, 0:size]
    t = ((x + y) / (2 * (size - 1)))[..., None]
    arr = (C1 * (1 - t) + C2 * t).astype(np.uint8)
    return Image.fromarray(arr, "RGB")


def ring_glyph(size: int, background=None, ring_scale: float = 1.0) -> Image.Image:
    """Gradient ring + white play triangle. background=None -> transparent."""
    img = Image.new("RGBA", (size, size), background if background else (0, 0, 0, 0))
    grad = diagonal_gradient(size).convert("RGBA")
    c = size / 2
    r = size * RING_R * ring_scale
    w = max(1.0, size * RING_W * ring_scale)
    r2 = r - w
    mask = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(mask)
    d.ellipse([c - r, c - r, c + r - 1, c + r - 1], fill=255)
    d.ellipse([c - r2, c - r2, c + r2 - 1, c + r2 - 1], fill=0)
    img.paste(grad, (0, 0), mask)
    d = ImageDraw.Draw(img)
    tri_box = size * 0.95 * ring_scale  # triangle uses glyph-relative coords scaled
    pts = [(px * size * ring_scale + c * (1 - ring_scale), py * size * ring_scale + c * (1 - ring_scale)) for px, py in TRI]
    d.polygon(pts, fill=(255, 255, 255, 255))
    return img


def shrink(img: Image.Image, target: int) -> Image.Image:
    return img.resize((target, target), Image.LANCZOS)


OUT = "public/icons"
os.makedirs(OUT, exist_ok=True)

# Masters at 4x supersampling
glyph_master = ring_glyph(1024 * SS)                       # transparent background
store_master = ring_glyph(1024 * SS, background=NIGHT)     # dark background for stores

# --- Favicons (ring on transparency) ---
for s in (16, 32, 48):
    shrink(glyph_master, s).save(f"{OUT}/favicon-{s}.png")
shrink(glyph_master, 32).save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# --- Android / PWA ---
shrink(glyph_master, 192).save(f"{OUT}/android-chrome-192x192.png")
shrink(glyph_master, 512).save(f"{OUT}/android-chrome-512x512.png")
shrink(store_master, 512).save(f"{OUT}/maskable-512x512.png")  # dark bg, safe for masks

# --- Apple touch icon (opaque, iOS rounds corners itself) ---
shrink(store_master, 180).convert("RGB").save(f"{OUT}/apple-touch-icon.png")

# --- Store master (1024, for iOS App Store / Google Play / app icon) ---
shrink(store_master, 1024).convert("RGB").save(f"{OUT}/app-icon-1024.png")

print("icons generated (ring glyph / logo 7):")
for f in sorted(os.listdir(OUT)):
    print(" -", f)
print(" - ../favicon.ico")
