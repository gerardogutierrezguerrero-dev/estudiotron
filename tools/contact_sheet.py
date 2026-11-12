"""Hoja de contactos: junta las figuras extraídas en una cuadrícula con su nombre.

Uso: python tools/contact_sheet.py <carpeta fig> <salida.jpg> [columnas]
"""
import os
import sys

import pymupdf

folder, out = sys.argv[1], sys.argv[2]
cols = int(sys.argv[3]) if len(sys.argv) > 3 else 5
names = sorted(n for n in os.listdir(folder) if n.endswith(".jpg"))
cell, label = 220, 14
rows = (len(names) + cols - 1) // cols
doc = pymupdf.open()
page = doc.new_page(width=cols * cell, height=rows * (cell + label))
for k, name in enumerate(names):
    x, y = (k % cols) * cell, (k // cols) * (cell + label)
    page.insert_image(pymupdf.Rect(x + 4, y + label, x + cell - 4, y + label + cell - 8),
                      filename=os.path.join(folder, name), keep_proportion=True)
    page.insert_text((x + 4, y + 11), name, fontsize=10, color=(0.8, 0, 0))
page.get_pixmap(matrix=pymupdf.Matrix(1, 1)).save(out, jpg_quality=80)
print(out, len(names))
