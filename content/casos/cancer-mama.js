/* Caso de práctica elaborado para Estudiotron (no proviene de las presentaciones de clase). */
ECOE.register("casos", {
  id: "cancer-mama",
  sistema: "mama",
  orden: 14,
  titulo: "Una bolita en el seno",
  resumen: "Consulta: mujer de 52 años que se palpó una “bolita” en la mama derecha hace 2 meses; no le duele.",
  dificultad: "Básico",
  fuente: "Caso de práctica (elaborado)",
  paciente: {
    avatar: "👩‍🦳",
    nombre: "G.A.R., 52 años",
    ficha: [["Sexo", "Femenino"], ["Ocupación", "Maestra"], ["Escolaridad", "Licenciatura"], ["Estado civil", "Casada"]],
    motivo: "“Me encontré una bolita en el seno derecho bañándome; no me duele, pero no se quita.”",
    escenario: "Consulta externa de medicina familiar.",
  },
  interrogatorio: [
    { q: "Padecimiento actual", a: "Hace <b>2 meses</b> se palpó una masa en la mama derecha, <b>indolora</b>; siente que <b>ha crecido</b>. Nota que el pezón derecho “se metió” hace unas semanas.", clave: true },
    { q: "¿Cambia con la menstruación?", a: "Menopausia a los <b>51 años</b>: ya no menstrúa. La masa no ha cambiado de tamaño en ningún momento.", clave: true },
    { q: "Antecedentes ginecoobstétricos", a: "Menarca a los <b>10 años</b>, <b>nuligesta</b>. Usó terapia hormonal de reemplazo 1 año.", clave: true },
    { q: "Antecedentes familiares", a: "<b>Madre con cáncer de mama</b> a los 60 años.", clave: true },
    { q: "¿Secreción por el pezón?", a: "Niega." },
    { q: "¿Mastografías previas?", a: "<b>Nunca</b> se ha hecho una.", clave: true },
    { q: "¿Dolor de huesos, pérdida de peso, tos?", a: "Niega." },
  ],
  signos: [
    { l: "TA", v: "126/78" },
    { l: "FC", v: "76 lpm" },
    { l: "FR", v: "16 rpm" },
    { l: "Temp", v: "36.6 °C" },
    { l: "IMC", v: "31.2", estado: "alto" },
  ],
  signosNota: "Obesidad posmenopáusica: factor de riesgo.",
  inspeccionGeneral: "Buen estado general.",
  exploracion: {
    regiones: [
      {
        id: "inspeccion",
        nombre: "Inspección sentada",
        maniobras: [
          { n: "Brazos a los lados", fase: "I", rel: true, r: "Mama derecha ligeramente más alta; <b>pezón derecho retraído</b> y desviado hacia arriba y afuera." },
          { n: "Brazos arriba", fase: "I", rel: true, r: "Aparece un <b>hoyuelo</b> en el cuadrante superoexterno derecho." },
          { n: "Manos presionando las caderas", fase: "I", rel: true, r: "El hoyuelo se acentúa." },
          { n: "Piel de ambas mamas", fase: "I", rel: true, r: "Sobre el hoyuelo, área de 2 cm con <b>piel de naranja</b>." },
        ],
      },
      {
        id: "palpacion",
        nombre: "Palpación de las mamas (decúbito)",
        maniobras: [
          { n: "Mama derecha en franjas verticales", fase: "P", rel: true, r: "Masa de <b>2.5 × 2 cm</b> a las <b>10</b>, a 4 cm del pezón, <b>dura, irregular, mal delimitada</b>, no dolorosa." },
          { n: "Movilidad de la masa (con contracción del pectoral)", fase: "P", rel: true, r: "<b>Fija a la piel</b>; se mueve sobre el pectoral." },
          { n: "Pezón y areola derechos", fase: "P", rel: true, r: "Sin secreción a la compresión." },
          { n: "Mama izquierda", fase: "P", rel: true, r: "Tejido nodular fino, sin masas." },
        ],
      },
      {
        id: "ganglios",
        nombre: "Axilas y supraclaviculares",
        maniobras: [
          { n: "Axila derecha", fase: "P", rel: true, r: "Ganglio <b>central de 1.5 cm, duro, móvil</b>, no doloroso." },
          { n: "Axila izquierda", fase: "P", rel: true, r: "Sin adenopatías." },
          { n: "Supraclaviculares", fase: "P", rel: true, r: "No palpables." },
        ],
      },
      {
        id: "abdomen",
        nombre: "Abdomen y columna",
        orden: ["I", "A", "Pe", "P"],
        maniobras: [
          { n: "Palpación del hígado", fase: "P", rel: true, r: "Sin hepatomegalia." },
        ],
      },
    ],
  },
  sindromes: [
    { t: "Síndrome de masa mamaria sospechosa de malignidad", ok: true, exp: "Dura, irregular, fija a la piel, indolora, que crece, en posmenopáusica." },
    { t: "Signos de retracción cutánea y del pezón", ok: true, exp: "Pezón retraído, hoyuelo, piel de naranja." },
    { t: "Síndrome adenopático axilar regional", ok: true, exp: "Ganglio axilar central duro de 1.5 cm." },
    { t: "Cambios fibroquísticos", ok: false, exp: "Es posmenopáusica, la masa no duele ni cambia, y hay retracción." },
    { t: "Fibroadenoma", ok: false, exp: "Sería elástico, liso y muy móvil, en mujer joven." },
    { t: "Mastitis", ok: false, exp: "No hay fiebre, dolor, calor ni lactancia." },
  ],
  estudios: [
    { t: "Mastografía diagnóstica bilateral", ok: true, resultado: "Masa espiculada de 24 mm con microcalcificaciones pleomórficas en CSE derecho: <b>BI-RADS 5</b>." },
    { t: "USG mamario y axilar", ok: true, resultado: "Nódulo hipoecoico, irregular, más alto que ancho; ganglio axilar con corteza engrosada." },
    { t: "Biopsia con aguja gruesa de la masa y del ganglio", ok: true, resultado: "<b>Carcinoma ductal infiltrante</b> grado 2; ganglio positivo. RE +, RP +, HER2 negativo." },
    { t: "Marcadores tumorales (CA 15-3) para diagnóstico", ok: false, exp: "No sirven para diagnosticar." },
    { t: "Aspiración con aguja fina como único estudio", ok: false, exp: "La aguja gruesa da histología y receptores." },
    { t: "RM de cráneo", ok: false, exp: "Sin síntomas neurológicos." },
  ],
  diagnostico: [
    { t: "Carcinoma ductal infiltrante de mama derecha, receptores hormonales positivos, HER2 negativo, con metástasis ganglionar axilar (localmente avanzado)", ok: true, exp: "Clínica + BI-RADS 5 + histología." },
    { t: "Fibroadenoma", ok: false, exp: "La histología y la clínica lo descartan." },
    { t: "Necrosis grasa", ok: false, exp: "Puede retraer la piel, pero suele haber trauma previo; la biopsia muestra carcinoma." },
    { t: "Carcinoma inflamatorio", ok: false, exp: "La piel de naranja es localizada, sin eritema difuso ni calor." },
  ],
  cierre: {
    resumen: "<p>Mujer posmenopáusica con varios factores de riesgo (menarca temprana, nuliparidad, madre con cáncer de mama, obesidad, terapia hormonal) y <b>sin tamizaje</b>. La exploración en 4 posiciones mostró <b>retracción del pezón, hoyuelo y piel de naranja</b>; la palpación, una masa <b>dura, irregular y fija</b> en el cuadrante superoexterno con <b>ganglio axilar duro</b>. Todo apunta a cáncer; la biopsia con aguja gruesa lo confirma y da los receptores que guían el tratamiento.</p>",
    hallazgos: {
      cols: ["Exploración", "Hallazgo", "Qué significa"],
      filas: [
        ["Inspección", "Pezón retraído, hoyuelo, piel de naranja", "Tracción de ligamentos y bloqueo linfático"],
        ["Palpación", "Masa dura, irregular, fija a piel", "Malignidad"],
        ["Axila", "Ganglio central duro 1.5 cm", "Metástasis ganglionar"],
        ["Localización", "CSE, a las 10", "El cuadrante más frecuente"],
      ],
    },
    perlas: ["Inspecciona en <b>4 posiciones</b>: las retracciones aparecen al mover los brazos.", "Describe la masa como en un <b>reloj</b> y en cm del pezón.", "Toda masa dominante en posmenopáusica requiere imagen y biopsia.", "Palpa siempre la axila y los supraclaviculares."],
    tratamiento: "<ul><li>Referencia a oncología; estadificación.</li><li>Opciones según estadio: quimioterapia neoadyuvante, <b>cirugía</b> (conservadora o mastectomía) con manejo axilar, radioterapia.</li><li><b>Hormonoterapia</b> (inhibidor de aromatasa en posmenopáusica) por receptores positivos.</li><li>Asesoría genética por antecedente familiar.</li></ul>",
  },
});
