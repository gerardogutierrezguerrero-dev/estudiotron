"""Extrae texto, figuras y páginas de tablas de un capítulo del Bates.

Uso:
    python tools/extract_bates.py "<ruta al PDF>" <salida> [--tablas 28-38]

Genera en <salida>:
    text/p###.txt        texto de cada página (para redactar el contenido)
    fig/p###_#.jpg       recorte renderizado de cada figura (cajas de imagen fusionadas)
    tablas/p###.jpg      página completa renderizada (solo el rango --tablas)
    index.txt            lista de figuras con el pie de figura detectado
"""
import argparse
import os
import re

import pymupdf

FIG_ZOOM = 2.0     # ~144 dpi
PAGE_ZOOM = 1.6    # ~115 dpi, suficiente para leer tablas
MIN_SIDE = 60      # puntos; ignora iconos y viñetas


def merge_boxes(rects, gap=12):
    """Fusiona cajas de imagen que se tocan o están a < gap puntos."""
    boxes = [pymupdf.Rect(r) for r in rects]
    changed = True
    while changed:
        changed = False
        out = []
        while boxes:
            b = boxes.pop()
            grown = pymupdf.Rect(b.x0 - gap, b.y0 - gap, b.x1 + gap, b.y1 + gap)
            for o in boxes[:]:
                if grown.intersects(o):
                    b |= o
                    boxes.remove(o)
                    changed = True
            out.append(b)
        boxes = out
    return boxes


def grow_with_labels(page, box, reach=30):
    """Incluye las líneas guía y etiquetas cortas que rodean a la figura."""
    lines = [d["rect"] for d in page.get_drawings() if d["rect"].width < 250 and d["rect"].height < 250]
    # Etiquetas de figura: fuente pequeña (<= 8 pt). El cuerpo (Berkeley 11 pt), la columna
    # roja (Myriad 9.5 pt) y los encabezados de página (Univers) quedan fuera.
    labels = [pymupdf.Rect(s["bbox"])
              for b in page.get_text("dict")["blocks"] for l in b.get("lines", [])
              for s in l["spans"]
              if s["size"] <= 8.2 and not s["font"].startswith("Univers") and s["text"].strip()]
    for _ in range(3):
        zone = pymupdf.Rect(box.x0 - reach, box.y0 - 6, box.x1 + reach, box.y1 + 6)
        for r in lines + labels:
            if zone.intersects(r) and (r.width < 200 or zone.contains(r)):
                box |= r
    return box


def caption_near(page, box):
    """Busca un 'FIGURE x-y' justo debajo (o encima) de la figura."""
    below = pymupdf.Rect(box.x0 - 20, box.y1, box.x1 + 20, box.y1 + 60)
    above = pymupdf.Rect(box.x0 - 20, box.y0 - 50, box.x1 + 20, box.y0)
    for area in (below, above):
        txt = page.get_text("text", clip=area).strip().replace("\n", " ")
        m = re.search(r"FIGURE\s+\d+-\d+\.?.{0,140}", txt)
        if m:
            return m.group(0)
    return ""


def parse_range(s):
    if not s:
        return set()
    a, b = s.split("-")
    return set(range(int(a), int(b) + 1))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("out")
    ap.add_argument("--tablas", default="")
    args = ap.parse_args()

    doc = pymupdf.open(args.pdf)
    for sub in ("text", "fig", "tablas"):
        os.makedirs(os.path.join(args.out, sub), exist_ok=True)
    tablas = parse_range(args.tablas)
    index = []

    for i, page in enumerate(doc, start=1):
        with open(os.path.join(args.out, "text", f"p{i:03}.txt"), "w", encoding="utf-8") as f:
            f.write(page.get_text("text"))

        rects = [info["bbox"] for info in page.get_image_info()
                 if (info["bbox"][2] - info["bbox"][0]) > MIN_SIDE
                 and (info["bbox"][3] - info["bbox"][1]) > MIN_SIDE]
        for n, box in enumerate(merge_boxes(rects), start=1):
            if i in tablas:
                break  # las páginas de tablas se guardan completas abajo
            box = grow_with_labels(page, box)
            box &= page.rect
            if box.is_empty:
                continue
            pix = page.get_pixmap(matrix=pymupdf.Matrix(FIG_ZOOM, FIG_ZOOM), clip=box)
            name = f"p{i:03}_{n}.jpg"
            pix.save(os.path.join(args.out, "fig", name), jpg_quality=85)
            index.append(f"{name}\t{int(box.width)}x{int(box.height)}\t{caption_near(page, box)}")

        if i in tablas:
            pix = page.get_pixmap(matrix=pymupdf.Matrix(PAGE_ZOOM, PAGE_ZOOM))
            pix.save(os.path.join(args.out, "tablas", f"p{i:03}.jpg"), jpg_quality=82)

    with open(os.path.join(args.out, "index.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(index))
    print(f"{doc.page_count} páginas, {len(index)} figuras -> {args.out}")


if __name__ == "__main__":
    main()
