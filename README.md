# Estudiotron

Plataforma de estudio personal para medicina. Por ahora solo está la sección **ECOE**, una guía de exploración física orientada al diagnóstico:

- **Por sistema:** 11 sistemas con exploración paso a paso, hallazgos normales y patológicos, mapas mentales, tablas e imágenes.
- **Por síndrome:** 74 síndromes con exploración IPPA, pista ECOE, diferenciales y estudios.
- **Casos simulados:** 15 pacientes que se exploran paso a paso, desde el interrogatorio hasta el diagnóstico.
- **Mi progreso:** puntajes de los exámenes rápidos y los casos, guardados en el navegador.

## Cómo usarlo

Abre `index.html` en el navegador. No necesita instalación, servidor ni internet.

## Estructura

- `index.html`: shell del sitio; carga todos los scripts.
- `assets/`: estilos y lógica (router, componentes, exámenes, motor de casos).
- `content/`: contenido en archivos `.js` (`sistemas/`, `sindromes/`, `casos/`).
- `img/bates/`: figuras y tablas extraídas del Bates.
- `tools/`: scripts de Python para extraer figuras de los PDF.

## Fuentes

Bickley LS. *Bates' Guide to Physical Examination and History Taking*, 12ª ed., y resúmenes colaborativos de clase. Las figuras y tablas del Bates pertenecen a sus autores y editorial; se incluyen con fines de estudio.
