/* Caso de práctica elaborado para Estudiotron (no proviene de las presentaciones de clase). */
ECOE.register("casos", {
  id: "melanoma",
  sistema: "piel",
  orden: 12,
  titulo: "Un lunar que cambió",
  resumen: "Consulta: hombre de 56 años cuya esposa notó que un lunar de la espalda creció y cambió de color en los últimos meses.",
  dificultad: "Básico",
  fuente: "Caso de práctica (elaborado)",
  paciente: {
    avatar: "👨‍🦰",
    nombre: "F.G.T., 56 años",
    ficha: [["Sexo", "Masculino"], ["Ocupación", "Agricultor"], ["Escolaridad", "Primaria"], ["Estado civil", "Casado"]],
    motivo: "“Mi esposa dice que el lunar de la espalda está más grande y más oscuro; a veces me da comezón.”",
    escenario: "Consulta externa de medicina familiar.",
  },
  interrogatorio: [
    { q: "¿Desde cuándo tiene el lunar y qué ha cambiado?", a: "Lo tiene “de siempre”, pero en <b>6 meses</b> creció, se volvió <b>más oscuro con zonas negras</b> y el borde se ve “corrido”.", clave: true },
    { q: "¿Sangra, pica o duele?", a: "Le da <b>comezón</b> y una vez <b>sangró</b> con la camisa.", clave: true },
    { q: "Exposición solar", a: "Trabaja en el campo <b>desde niño sin camisa</b>; varias <b>quemaduras con ampollas</b> en la juventud; nunca usa bloqueador.", clave: true },
    { q: "Antecedentes familiares de cáncer de piel", a: "Un hermano con “cáncer de lunar” operado.", clave: true },
    { q: "¿Bultos en axilas o ingles, pérdida de peso, tos?", a: "Niega." },
    { q: "Otras lesiones", a: "Tiene “manchas de sol” en brazos y unas “costritas ásperas” en la frente que no se quitan." },
  ],
  signos: [
    { l: "TA", v: "128/80" },
    { l: "FC", v: "74 lpm" },
    { l: "FR", v: "16 rpm" },
    { l: "Temp", v: "36.5 °C" },
  ],
  signosNota: "Signos vitales normales.",
  inspeccionGeneral: "Fototipo II (piel clara, se quema y apenas se broncea), con daño solar marcado en cara, cuello y brazos.",
  exploracion: {
    regiones: [
      {
        id: "lesion",
        nombre: "Lesión de la espalda",
        maniobras: [
          { n: "Inspección con buena luz y regla", fase: "I", rel: true, r: "Placa de <b>1.4 × 1.1 cm</b> en la región escapular derecha, <b>asimétrica</b>, de <b>bordes irregulares y mellados</b>, con <b>tonos café claro, café oscuro, negro y un área azul-grisácea</b>; pequeña zona central costrosa." },
          { n: "Comparar con los demás lunares (patito feo)", fase: "I", rel: true, r: "Unos 40 nevos de 2–4 mm, homogéneos y simétricos; <b>esta lesión es distinta a todas</b>." },
          { n: "Dermatoscopia", fase: "I", rel: false, r: "Red pigmentada atípica y velo azul-blanquecino (refuerza la sospecha)." },
          { n: "Palpación de la lesión", fase: "P", rel: true, r: "Parte central <b>ligeramente elevada y firme</b>; el resto plano." },
        ],
      },
      {
        id: "ganglios",
        nombre: "Ganglios regionales",
        maniobras: [
          { n: "Ganglios axilares", fase: "P", rel: true, r: "No palpables (axila derecha e izquierda)." },
          { n: "Ganglios supraclaviculares y cervicales", fase: "P", rel: true, r: "No palpables." },
          { n: "Ganglios inguinales", fase: "P", rel: false, r: "Pequeños, móviles, &lt; 1 cm, bilaterales (normales)." },
        ],
      },
      {
        id: "resto",
        nombre: "Resto de la piel",
        maniobras: [
          { n: "Cara y cuero cabelludo", fase: "I", rel: true, r: "Arrugas profundas, léntigos. En la frente, 3 <b>placas eritematosas con escama adherente</b>, de 5–8 mm." },
          { n: "Dorso de manos y antebrazos", fase: "I", rel: false, r: "Léntigos solares, piel atrófica." },
          { n: "Plantas, palmas y uñas", fase: "I", rel: true, r: "Sin lesiones pigmentadas ni bandas ungueales." },
          { n: "Palpación de las placas de la frente", fase: "P", rel: true, r: "<b>Ásperas como lija</b>: queratosis actínicas." },
        ],
      },
      {
        id: "abdomen",
        nombre: "Abdomen",
        orden: ["I", "A", "Pe", "P"],
        maniobras: [
          { n: "Palpación del hígado", fase: "P", rel: false, r: "Sin hepatomegalia." },
        ],
      },
    ],
  },
  sindromes: [
    { t: "Lesión pigmentada sospechosa de melanoma (ABCDE positivo)", ok: true, exp: "Asimetría, bordes irregulares, 4 colores, 14 mm, evolución en 6 meses, sangrado." },
    { t: "Daño solar crónico con queratosis actínicas", ok: true, exp: "Placas ásperas escamosas en la frente: lesiones premalignas del espinocelular." },
    { t: "Síndrome adenopático regional", ok: false, exp: "No hay ganglios palpables en axilas ni cuello." },
    { t: "Queratosis seborreica", ok: false, exp: "Sería “pegada”, verrugosa y de color homogéneo, sin evolución rápida." },
    { t: "Síndrome purpúrico", ok: false, exp: "La lesión no es sangre extravasada sino pigmento." },
  ],
  estudios: [
    { t: "Biopsia escisional con margen de 2 mm", ok: true, resultado: "<b>Melanoma de extensión superficial</b>, <b>Breslow 0.9 mm</b>, sin ulceración, márgenes libres." },
    { t: "Biopsia por rasurado (shave)", ok: false, exp: "No se recomienda: impide medir el Breslow." },
    { t: "Biopsia de ganglio centinela", ok: true, resultado: "Negativa.", exp: "Se ofrece con Breslow 0.8–1 mm o más." },
    { t: "PET-CT de cuerpo entero", ok: false, exp: "No está indicado en estadios tempranos sin datos clínicos de metástasis." },
    { t: "Marcadores tumorales (CEA, CA 19-9)", ok: false, exp: "No sirven para melanoma." },
  ],
  diagnostico: [
    { t: "Melanoma de extensión superficial en región escapular derecha, Breslow 0.9 mm (estadio I), con queratosis actínicas por daño solar", ok: true, exp: "ABCDE + histopatología; ganglio centinela negativo." },
    { t: "Nevo displásico", ok: false, exp: "La biopsia mostró melanoma invasor." },
    { t: "Carcinoma basocelular pigmentado", ok: false, exp: "Sería una pápula perlada con telangiectasias." },
    { t: "Queratosis seborreica irritada", ok: false, exp: "La histología lo descarta." },
  ],
  cierre: {
    resumen: "<p>Hombre con fototipo claro, exposición solar crónica, quemaduras en la juventud y un hermano con melanoma. Presenta una lesión que <b>cumple todos los criterios ABCDE</b> y es distinta a sus otros lunares (“patito feo”). La <b>evolución</b> es el dato más sensible. Se hizo biopsia <b>escisional</b> para medir el <b>Breslow</b>, que define el pronóstico y el tratamiento. Las placas ásperas de la frente son queratosis actínicas que también requieren tratamiento.</p>",
    hallazgos: {
      cols: ["Hallazgo", "Criterio", "Qué significa"],
      filas: [
        ["Mitades distintas", "A", "Asimetría"],
        ["Borde mellado, “corrido”", "B", "Bordes irregulares"],
        ["Café, negro y azul-gris", "C", "Varios colores"],
        ["14 mm", "D", "&gt; 6 mm"],
        ["Creció y se oscureció en 6 meses; sangra", "E", "Evolución: el más sensible"],
        ["Distinto a los demás", "Patito feo", "Sospecha aunque no cumpla todos"],
      ],
    },
    perlas: ["Explora la <b>espalda</b> de todos tus pacientes: el paciente no la ve.", "Biopsia <b>escisional</b>, nunca por rasurado, si sospechas melanoma.", "Palpa los <b>ganglios regionales</b> de la zona de drenaje.", "Aprovecha para enseñar fotoprotección y autoexploración."],
    tratamiento: "<ul><li><b>Ampliación de márgenes</b> de 1 cm (Breslow ≤ 1 mm).</li><li>Seguimiento con exploración completa de piel y ganglios cada 3–6 meses; autoexploración mensual.</li><li>Fotoprotección (FPS ≥ 30 amplio espectro, ropa, sombrero).</li><li>Queratosis actínicas: crioterapia o 5-fluorouracilo tópico.</li><li>Valorar a familiares de primer grado.</li></ul>",
  },
});
