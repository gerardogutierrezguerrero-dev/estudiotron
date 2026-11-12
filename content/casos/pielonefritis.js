/* Adaptado del caso clínico de clase (Cordero, Ontiveros): pielonefritis aguda complicada por E. coli BLEE.
   Las diapositivas de resultados eran imágenes; los valores se redactaron para el ejercicio,
   respetando la creatinina de 1.9 mg/dL mencionada en el caso. */
ECOE.register("casos", {
  id: "pielonefritis",
  sistema: "genitourinario",
  orden: 5,
  titulo: "Fiebre y dolor lumbar en mujer diabética",
  resumen: "Consulta: mujer de 57 años con disuria que evolucionó a fiebre de 38.7 °C y dolor lumbar bilateral.",
  dificultad: "Intermedio",
  fuente: "Adaptado de caso de clase (pielonefritis)",
  paciente: {
    avatar: "👩‍🦳",
    nombre: "D.F.G.O., 57 años",
    ficha: [["Sexo", "Femenino"], ["Ocupación", "Dedicada al hogar"], ["Estado civil", "Casada"], ["Religión", "Católica"]],
    motivo: "“Empecé con ardor al orinar y ahora tengo calentura y me duele mucho la espalda.”",
    escenario: "Urgencias de segundo nivel.",
  },
  interrogatorio: [
    { q: "Padecimiento actual", a: "2 días de evolución: inició con <b>disuria y polaquiuria</b>; después <b>dolor lumbar bilateral</b>, constante y progresivo, que se irradia a la región suprapúbica.", clave: true },
    { q: "¿Fiebre? ¿Otros síntomas?", a: "<b>Fiebre de hasta 38.7 °C con escalofríos</b>, astenia e hiporexia.", clave: true },
    { q: "Enfermedades crónicas y fármacos", a: "<b>DM2</b> de 12 años (metformina 850 mg c/12 h, glibenclamida 5 mg/día), <b>HAS</b> (enalapril 10 mg/día).", clave: true },
    { q: "¿Infecciones urinarias previas? ¿Antibióticos recientes?", a: "<b>Varios episodios de IVU en el último año</b>, tratados con antibióticos.", clave: true },
    { q: "Antecedentes ginecológicos", a: "Posmenopáusica.", clave: true },
    { q: "Vida sexual y entorno de pareja (con privacidad)", a: "Refiere relaciones sin preservativo y coito vaginal y anal en la misma sesión sin higiene intermedia. Al preguntar con privacidad, refiere <b>presión y coerción por parte de su pareja</b> para tener relaciones.", clave: true },
    { q: "¿Cálculos renales, sonda vesical o cirugías urológicas?", a: "Niega." },
    { q: "Antecedentes heredofamiliares", a: "Madre finada por complicaciones de DM2; padre por EVC (HAS); hermana con DM2." },
  ],
  signos: [
    { l: "TA", v: "160/95", estado: "alto" },
    { l: "FC", v: "112 lpm", estado: "alto" },
    { l: "FR", v: "20 rpm" },
    { l: "Temp", v: "38.5 °C", estado: "alto" },
    { l: "SpO₂", v: "98 %" },
  ],
  signosNota: "Fiebre + taquicardia: cumple criterios de <b>respuesta inflamatoria sistémica</b> (≥ 2: T &gt; 38, FC &gt; 90, FR &gt; 20, leucocitos alterados). Vigila datos de sepsis.",
  inspeccionGeneral: "Paciente álgica, febril, con mucosas secas.",
  exploracion: {
    regiones: [
      {
        id: "abdomen",
        nombre: "Abdomen",
        orden: ["I", "A", "Pe", "P"],
        maniobras: [
          { n: "Inspección", fase: "I", rel: false, r: "Abdomen plano, sin cicatrices." },
          { n: "Ruidos intestinales", fase: "A", rel: false, r: "Presentes, normales." },
          { n: "Percusión suprapúbica", fase: "Pe", rel: true, r: "Sin matidez suprapúbica (no hay globo vesical)." },
          { n: "Palpación superficial y profunda", fase: "P", rel: true, r: "Blando, depresible, <b>doloroso a la palpación profunda en hipogastrio</b>." },
          { n: "Signo de Blumberg", fase: "P", rel: true, r: "<b>Negativo</b>: sin irritación peritoneal." },
          { n: "Palpación renal bimanual (Guyon)", fase: "P", rel: true, r: "Dolorosa bilateralmente; riñones no palpables." },
          { n: "Puntos ureterales", fase: "P", rel: true, r: "Superior y medio <b>dolorosos</b> bilateralmente." },
        ],
      },
      {
        id: "lumbar",
        nombre: "Fosas renales (espalda)",
        maniobras: [
          { n: "Inspección de la espalda", fase: "I", rel: false, r: "Sin lesiones ni aumento de volumen." },
          { n: "Puñopercusión (Giordano)", fase: "Pe", rel: true, r: "<b>Positivo bilateral</b>, francamente doloroso." },
        ],
      },
      {
        id: "genitales",
        nombre: "Genitales externos",
        maniobras: [
          { n: "Inspección perineal y del meato", fase: "I", rel: true, r: "<b>Eritema perineal leve</b>, sin lesiones activas ni secreción uretral o vaginal." },
        ],
      },
      {
        id: "cardiopulmonar",
        nombre: "Cardiopulmonar",
        maniobras: [
          { n: "Auscultación cardiaca", fase: "A", rel: true, r: "Taquicardia rítmica, sin soplos." },
          { n: "Auscultación pulmonar", fase: "A", rel: true, r: "Murmullo vesicular normal, sin crepitantes (descarta foco pulmonar)." },
        ],
      },
      {
        id: "extremidades",
        nombre: "Extremidades",
        maniobras: [
          { n: "Edema", fase: "I", rel: false, r: "Sin edema." },
          { n: "Llenado capilar y temperatura", fase: "P", rel: true, r: "Llenado capilar de 2 s, piel caliente (sin hipoperfusión por ahora)." },
        ],
      },
    ],
  },
  sindromes: [
    { t: "Síndrome febril", ok: true, exp: "38.5 °C con escalofríos." },
    { t: "Síndrome miccional / irritativo bajo", ok: true, exp: "Disuria, polaquiuria, dolor suprapúbico." },
    { t: "Síndrome doloroso lumbar / renoureteral", ok: true, exp: "Dolor lumbar bilateral, Giordano +, puntos ureterales +." },
    { t: "Síndrome de respuesta inflamatoria sistémica", ok: true, exp: "Fiebre + taquicardia (+ leucocitosis)." },
    { t: "Síndrome de abdomen agudo", ok: false, exp: "Blumberg negativo, abdomen blando." },
    { t: "Síndrome anémico", ok: false, exp: "No hay palidez ni datos de anemia." },
    { t: "Síndrome nefrótico", ok: false, exp: "Sin edema ni orina espumosa." },
  ],
  estudios: [
    { t: "Examen general de orina", ok: true, resultado: "Turbia · leucocitos &gt; 50/campo · <b>nitritos positivos</b> · bacterias abundantes · <b>cilindros leucocitarios</b> · eritrocitos 10–15/campo · glucosuria ++." },
    { t: "Biometría hemática", ok: true, resultado: "Leucocitos <b>18,500/µL</b>, neutrófilos 88 %, bandas 4 %; Hb 13.1 g/dL; plaquetas 245,000." },
    { t: "Química sanguínea", ok: true, resultado: "Glucosa <b>286</b> mg/dL · creatinina <b>1.9</b> mg/dL (basal 0.9) · urea 58 · Na 134 · K 4.6. <br><span class='small muted'>Lesión renal aguda (KDIGO) y descontrol glucémico.</span>" },
    { t: "PCR / procalcitonina", ok: true, resultado: "PCR 186 mg/L · procalcitonina 3.2 ng/mL." },
    { t: "Urocultivo con antibiograma", ok: true, resultado: "<b><i>E. coli</i> &gt; 100,000 UFC/mL, productora de BLEE</b>; resistente a ceftriaxona, ciprofloxacino y TMP-SMX; sensible a carbapenémicos." },
    { t: "Hemocultivos (2 sets)", ok: true, resultado: "<i>E. coli</i> BLEE en ambos sets (bacteriemia)." },
    { t: "USG renal y de vías urinarias", ok: true, resultado: "Riñones de tamaño normal, ligeramente edematosos; <b>sin hidronefrosis ni litos</b>; sin abscesos." },
    { t: "TC de abdomen urgente", ok: false, exp: "Se reserva para mala evolución a 48–72 h o sospecha de absceso/obstrucción." },
    { t: "Cultivo de exudado vaginal", ok: false, exp: "No hay secreción vaginal ni datos de vaginitis." },
  ],
  diagnostico: [
    { t: "Pielonefritis aguda complicada bilateral por E. coli BLEE con urosepsis y lesión renal aguda", ok: true, exp: "Fiebre, Giordano bilateral, cilindros leucocitarios, urocultivo y hemocultivos positivos, Cr 1.9; complicada por DM2, recurrencia y germen BLEE." },
    { t: "Cistitis aguda no complicada", ok: false, exp: "La fiebre, el dolor lumbar y el Giordano indican infección alta." },
    { t: "Cólico renoureteral por litiasis", ok: false, exp: "Fiebre alta y USG sin litos ni hidronefrosis." },
    { t: "Glomerulonefritis aguda", ok: false, exp: "No hay cilindros eritrocitarios ni edema; hay cultivo positivo." },
  ],
  cierre: {
    resumen: "<p>Mujer <b>posmenopáusica con DM2 descontrolada, HAS e IVU recurrentes</b> que pasa de un síndrome miccional a <b>fiebre, dolor lumbar bilateral y Giordano positivo</b>: infección urinaria alta. Los cultivos confirman <b><i>E. coli</i> BLEE con bacteriemia</b> (urosepsis) y la creatinina muestra <b>lesión renal aguda</b>. El interrogatorio con privacidad revela además <b>violencia y coerción sexual de pareja</b>, que forma parte del problema de salud y requiere intervención.</p>",
    hallazgos: {
      cols: ["Región", "Hallazgo", "Qué significa"],
      filas: [
        ["Signos vitales", "T 38.5, FC 112", "Respuesta inflamatoria sistémica"],
        ["Abdomen", "Dolor suprapúbico profundo sin rebote", "Cistitis sin peritonitis"],
        ["Abdomen", "Guyon y puntos ureterales dolorosos", "Afección renal / ureteral"],
        ["Fosas renales", "Giordano + bilateral", "Pielonefritis bilateral"],
        ["Genitales", "Eritema perineal", "Factor local de colonización"],
      ],
    },
    perlas: ["<b>Fiebre + dolor lumbar + Giordano</b> = pielonefritis hasta demostrar lo contrario.", "DM2, IVU recurrentes, uso previo de antibióticos → sospecha <b>germen resistente (BLEE)</b>.", "Suspende <b>metformina</b> (LRA, riesgo de acidosis láctica) y evita <b>AINEs</b>.", "Interroga la vida sexual y el entorno de pareja <b>a solas</b>: detectar violencia es parte de la atención."],
    tratamiento: "<ul><li><b>Ertapenem</b> 1 g IV c/24 h (o meropenem), ajustado a función renal, según antibiograma.</li><li>Hidratación IV, paracetamol; <b>evitar AINEs</b>.</li><li>Suspender metformina y glibenclamida; <b>insulina</b> intrahospitalaria; vigilar enalapril por la creatinina.</li><li>Control de diuresis y creatinina.</li><li>Educación: micción poscoital, higiene, uso de preservativo; <b>derivación a Psicología y Trabajo Social</b> por violencia de pareja.</li></ul>",
  },
});
