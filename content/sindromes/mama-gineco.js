/* Síndromes de mama y genitales femeninos. Fuente: Bates caps. 10 y 14 (Tablas 10-1, 10-2, 14-1 a 14-9).
   No hay resumen de clase de estos temas. */

ECOE.register("sindromes", {
  id: "cancer-mama",
  sistema: "mama",
  orden: 1,
  emoji: "🎗️",
  titulo: "Cáncer de mama",
  resumen: "Masa dura, irregular, fija, indolora; retracción, piel de naranja, adenopatía axilar dura.",
  definicion: "Neoplasia maligna del epitelio ductal (la más frecuente) o lobulillar. Es el cáncer más común en la mujer.",
  causas: ["Edad (&gt; 50)", "Antecedente familiar; <b>BRCA1/BRCA2</b>", "Exposición prolongada a estrógenos: menarca temprana, menopausia tardía, nuliparidad, primer embarazo &gt; 30, terapia hormonal", "Obesidad posmenopáusica, alcohol, radiación torácica previa", "Mama densa, hiperplasia atípica"],
  sintomas: ["Masa indolora, a menudo descubierta por la paciente", "Cambio en la piel o el pezón", "Secreción sanguinolenta unilateral", "Dolor óseo, pérdida de peso (metástasis)"],
  inspeccionGeneral: "Busca datos de metástasis: dolor óseo, hepatomegalia, disnea, ganglio supraclavicular.",
  ippa: [
    { fase: "I", clave: "Retracción, hoyuelo, piel de naranja, desviación del pezón", detalle: "Enfermedad de Paget: lesión eccematosa del pezón. Carcinoma inflamatorio: mama roja, caliente, edematosa sin fiebre." },
    { fase: "P", clave: "Masa dura, irregular, mal delimitada, fija", detalle: "Más frecuente en el cuadrante superoexterno. Adenopatía axilar <b>dura, fija, conglomerada</b>; ganglio supraclavicular." },
  ],
  pista: "Masa <b>dura + irregular + fija + indolora</b> en mujer &gt; 40: es cáncer hasta demostrar lo contrario. Pide <b>mastografía + USG y biopsia con aguja gruesa</b>.",
  diferenciales: {
    cols: ["", "Cáncer", "Fibroadenoma", "Quiste"],
    filas: [
      ["Consistencia", "Dura", "Elástica", "Tensa, blanda"],
      ["Bordes", "Irregulares", "Lisos", "Lisos"],
      ["Movilidad", "Fija", "Muy móvil", "Móvil"],
      ["Dolor", "No", "No", "Sí, cíclico"],
    ],
  },
  estudios: ["<b>Mastografía</b> (BI-RADS) y USG", "<b>Biopsia con aguja gruesa</b> (tru-cut): diagnóstico histológico", "Receptores de estrógeno, progesterona y HER2", "Estadificación según el caso (TC, gammagrama óseo)"],
  figs: [{ src: "mama/tabla-10-2.jpg", pie: "Bates Tabla 10-2: signos visibles de cáncer de mama" }, { src: "mama/tabla-10-1.jpg", pie: "Bates Tabla 10-1: masas mamarias" }],
  quiz: [
    { tipo: "mc", p: "Características de una masa sugestiva de cáncer:", ops: ["Elástica, móvil, lisa", "Dura, irregular, fija", "Blanda, dolorosa, cíclica", "Fluctuante, caliente"], r: 1, exp: "" },
    { tipo: "mc", p: "Estudio que confirma el diagnóstico:", ops: ["Mastografía", "USG", "Biopsia", "Marcadores tumorales"], r: 2, exp: "" },
    { tipo: "mc", p: "Genes de alto riesgo hereditario:", ops: ["APC", "BRCA1/BRCA2", "RET", "HLA-B27"], r: 1, exp: "" },
    { tipo: "vf", p: "La piel de naranja se debe a edema por bloqueo linfático.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "masa-mamaria-benigna",
  sistema: "mama",
  orden: 2,
  emoji: "⚪",
  titulo: "Fibroadenoma y cambios fibroquísticos",
  resumen: "Masa móvil y elástica en mujer joven (fibroadenoma); nódulos dolorosos que cambian con el ciclo (fibroquístico).",
  definicion: "<b>Fibroadenoma</b>: tumor benigno fibroepitelial, la masa más común en menores de 30. <b>Cambios fibroquísticos</b>: quistes y nodularidad por respuesta hormonal cíclica, frecuentes entre los 30 y 50.",
  causas: ["Sensibilidad del tejido a estrógenos y progesterona", "Edad reproductiva"],
  sintomas: ["Fibroadenoma: “bolita” indolora que se mueve", "Fibroquístico: <b>mastalgia premenstrual</b>, nódulos que crecen antes de la menstruación"],
  inspeccionGeneral: "",
  ippa: [
    { fase: "I", clave: "Sin retracción ni cambios de piel", detalle: "" },
    { fase: "P", clave: "Fibroadenoma: redondo, elástico, liso, muy móvil (“ratón de la mama”)", detalle: "Quistes: redondos, tensos, dolorosos, a veces múltiples y bilaterales; cambian con el ciclo." },
  ],
  pista: "En mujer joven con masa móvil, el <b>USG</b> es el primer estudio (distingue quiste de sólido). Reexplora después de la menstruación si la masa parece cíclica.",
  estudios: ["<b>USG mamario</b> (&lt; 30–35 años)", "Mastografía en mayores", "Aspiración de quiste (si el líquido no es sanguinolento y desaparece, basta)", "Biopsia si es sólida y crece"],
  quiz: [
    { tipo: "mc", p: "Masa mamaria más frecuente en menores de 30:", ops: ["Quiste", "Fibroadenoma", "Cáncer", "Lipoma"], r: 1, exp: "" },
    { tipo: "mc", p: "Primer estudio de imagen en una mujer de 22 años con masa:", ops: ["Mastografía", "USG", "RM", "TC"], r: 1, exp: "" },
    { tipo: "vf", p: "Los cambios fibroquísticos suelen doler antes de la menstruación.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "mastitis",
  sistema: "mama",
  orden: 3,
  emoji: "🍼",
  titulo: "Mastitis y absceso mamario",
  resumen: "Mujer lactando con mama roja, caliente, dolorosa y fiebre; fluctuación = absceso.",
  definicion: "Inflamación de la mama, casi siempre <b>infecciosa en la lactancia</b> (<i>S. aureus</i>) por estasis de leche y grietas del pezón. Si se forma una colección, es un <b>absceso</b>.",
  causas: ["Lactancia: grietas, vaciado incompleto, destete brusco", "<i>S. aureus</i> (incluido SAMR)", "No puerperal: tabaquismo, ectasia ductal"],
  sintomas: ["Dolor, enrojecimiento y calor en un segmento de la mama", "<b>Fiebre</b>, escalofríos, malestar"],
  inspeccionGeneral: "Fiebre, taquicardia.",
  ippa: [
    { fase: "I", clave: "Eritema segmentario en cuña, grieta del pezón", detalle: "" },
    { fase: "P", clave: "Calor, induración dolorosa; fluctuación = absceso", detalle: "Ganglios axilares dolorosos." },
  ],
  pista: "En mastitis <b>no suspendas la lactancia</b>: vaciar la mama es parte del tratamiento. Mama roja <b>sin fiebre ni lactancia</b> que no mejora con antibiótico → descartar <b>carcinoma inflamatorio</b>.",
  estudios: ["Diagnóstico clínico", "USG si se sospecha absceso", "Cultivo de leche o del pus"],
  quiz: [
    { tipo: "mc", p: "Germen más frecuente de la mastitis puerperal:", ops: ["E. coli", "S. aureus", "Streptococcus agalactiae", "Candida"], r: 1, exp: "" },
    { tipo: "vf", p: "En la mastitis se debe suspender la lactancia.", r: false, exp: "Continuar el vaciado ayuda a resolverla." },
    { tipo: "mc", p: "Hallazgo que indica absceso:", ops: ["Eritema", "Fluctuación", "Fiebre", "Grieta del pezón"], r: 1, exp: "Requiere drenaje." },
  ],
});

ECOE.register("sindromes", {
  id: "secrecion-pezon",
  sistema: "mama",
  orden: 4,
  emoji: "💧",
  titulo: "Secreción por el pezón y galactorrea",
  resumen: "Unilateral, de un ducto y sanguinolenta → papiloma o cáncer; bilateral lechosa → galactorrea (prolactina).",
  definicion: "Salida de líquido por el pezón fuera de la lactancia. Se clasifica en <b>fisiológica</b> (bilateral, multiductal, al exprimir) o <b>patológica</b> (espontánea, unilateral, un ducto, sanguinolenta o serosa).",
  causas: ["<b>Papiloma intraductal</b> (causa más común de secreción sanguinolenta)", "Cáncer ductal", "Ectasia ductal (secreción verdosa, espesa, mujer perimenopáusica)", "<b>Galactorrea</b>: prolactinoma, antipsicóticos, metoclopramida, hipotiroidismo, embarazo"],
  sintomas: ["Manchas en la ropa", "Galactorrea: amenorrea, infertilidad, cefalea, alteraciones visuales (prolactinoma)"],
  inspeccionGeneral: "",
  ippa: [
    { fase: "I", clave: "Color y número de ductos", detalle: "Lechosa, verdosa, serosa o sanguinolenta." },
    { fase: "P", clave: "Compresión radial de la areola", detalle: "Identifica qué ducto y en qué cuadrante; busca masa subareolar." },
  ],
  pista: "<b>Unilateral + un ducto + sangre + espontánea</b> = patológica: imagen y valoración quirúrgica. <b>Bilateral lechosa</b>: prueba de embarazo, prolactina y TSH.",
  estudios: ["Galactorrea: prueba de embarazo, <b>prolactina</b>, TSH; RM de hipófisis si la prolactina está alta", "Patológica: mastografía, USG, ductografía o ductoscopia"],
  figs: [{ src: "mama/papiloma-intraductal.jpg", pie: "Papiloma intraductal" }],
  quiz: [
    { tipo: "mc", p: "Causa más común de secreción sanguinolenta por un ducto:", ops: ["Cáncer", "Papiloma intraductal", "Ectasia ductal", "Galactorrea"], r: 1, exp: "" },
    { tipo: "mc", p: "Primeros estudios en galactorrea bilateral:", ops: ["Mastografía", "Prueba de embarazo, prolactina y TSH", "Biopsia", "Ductografía"], r: 1, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "ginecomastia",
  sistema: "mama",
  orden: 5,
  emoji: "👨",
  titulo: "Ginecomastia",
  resumen: "Disco firme subareolar en el hombre; fisiológica en pubertad, o por fármacos, cirrosis, hipogonadismo o tumores.",
  definicion: "Proliferación benigna del <b>tejido glandular</b> mamario en el hombre por desequilibrio entre estrógenos y andrógenos. Distínguela de la <b>pseudoginecomastia</b> (grasa).",
  causas: ["Fisiológica: neonato, <b>pubertad</b>, vejez", "Fármacos: <b>espironolactona</b>, antiandrógenos, ketoconazol, cimetidina, anabólicos, marihuana", "<b>Cirrosis</b>, ERC, hipertiroidismo", "<b>Hipogonadismo</b> (Klinefelter)", "Tumores productores de estrógenos o hCG (testículo)"],
  sintomas: ["Aumento de volumen, a veces doloroso"],
  inspeccionGeneral: "Busca estigmas de cirrosis, testículos pequeños, datos de hipertiroidismo.",
  ippa: [
    { fase: "I", clave: "Aumento de volumen areolar, simétrico o unilateral", detalle: "" },
    { fase: "P", clave: "Disco firme, móvil, centrado bajo la areola", detalle: "Grasa = blanda sin disco. Masa dura, excéntrica, fija → cáncer. <b>Explora los testículos</b>." },
  ],
  pista: "Siempre <b>explora los testículos</b>: un tumor testicular puede producir ginecomastia.",
  estudios: ["Pruebas de función hepática, renal y tiroidea", "Testosterona, LH, estradiol, hCG", "USG testicular si hay masa o hCG alta", "Mastografía si es unilateral, dura o sospechosa"],
  quiz: [
    { tipo: "mc", p: "Diurético que causa ginecomastia:", ops: ["Furosemida", "Espironolactona", "Hidroclorotiazida", "Amilorida"], r: 1, exp: "" },
    { tipo: "vf", p: "La ginecomastia puberal es frecuente y suele remitir.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "vaginitis",
  sistema: "genitales-femeninos",
  orden: 1,
  emoji: "🧫",
  titulo: "Cervicovaginitis",
  resumen: "Secreción vaginal anormal: vaginosis (olor a pescado), candidosis (requesón, prurito), tricomoniasis (espumosa, cérvix en fresa).",
  definicion: "Inflamación o infección de vagina y cérvix. Las tres causas principales de secreción anormal son <b>vaginosis bacteriana</b> (la más común), <b>candidosis</b> y <b>tricomoniasis</b>. La cervicitis mucopurulenta se debe a clamidia o gonococo.",
  causas: ["Vaginosis: pérdida de lactobacilos, duchas vaginales, nuevas parejas", "Candidosis: antibióticos, diabetes, embarazo, inmunosupresión", "Tricomoniasis, clamidia, gonococo: transmisión sexual"],
  sintomas: ["Secreción con cambio de color, olor o cantidad", "Prurito, ardor, disuria externa, dispareunia"],
  inspeccionGeneral: "",
  ippa: [
    { fase: "I", clave: "Características de la secreción", detalle: "Gris homogénea (vaginosis), grumosa blanca (candida), amarilla-verdosa espumosa con cérvix en fresa (tricomonas), mucopurulenta del orificio (cervicitis)." },
    { fase: "P", clave: "pH, prueba de aminas y microscopía", detalle: "pH &gt; 4.5 en vaginosis y tricomoniasis; normal en candidosis." },
  ],
  pista: "Mide el <b>pH</b> y haz la prueba de aminas (KOH: olor a pescado). Criterios de Amsel para vaginosis: 3 de 4 (secreción homogénea, pH &gt; 4.5, aminas +, <b>células clave</b>).",
  estudios: ["pH vaginal", "Examen en fresco (células clave, tricomonas) y KOH (hifas)", "Pruebas de amplificación de ácidos nucleicos para clamidia y gonococo"],
  figs: [{ src: "genf/tabla-14-3.jpg", pie: "Bates Tabla 14-3: secreción vaginal" }],
  quiz: [
    { tipo: "mc", p: "Causa más frecuente de secreción vaginal anormal:", ops: ["Candidosis", "Vaginosis bacteriana", "Tricomoniasis", "Gonorrea"], r: 1, exp: "" },
    { tipo: "mc", p: "Hallazgo microscópico de vaginosis:", ops: ["Hifas", "Células clave", "Tricomonas móviles", "Diplococos"], r: 1, exp: "" },
    { tipo: "vf", p: "En la tricomoniasis se debe tratar también a la pareja.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "epi",
  sistema: "genitales-femeninos",
  orden: 2,
  emoji: "🔥",
  titulo: "Enfermedad pélvica inflamatoria",
  resumen: "Dolor pélvico bajo con dolor a la movilización cervical, útero y anexos dolorosos; fiebre y secreción mucopurulenta.",
  definicion: "Infección ascendente del tracto genital superior: endometritis, <b>salpingitis</b>, absceso tubo-ovárico y peritonitis pélvica. Secuelas: infertilidad, embarazo ectópico, dolor crónico.",
  causas: ["<i>Chlamydia trachomatis</i> y <i>Neisseria gonorrhoeae</i>", "Flora polimicrobiana (anaerobios)", "Factores: múltiples parejas, &lt; 25 años, ITS previa, colocación reciente de DIU"],
  sintomas: ["Dolor abdominal bajo bilateral", "Secreción vaginal, sangrado intermenstrual o poscoital", "Dispareunia", "Fiebre"],
  inspeccionGeneral: "Fiebre; descarta embarazo (ectópico).",
  ippa: [
    { fase: "I", clave: "Secreción mucopurulenta, cérvix friable", detalle: "" },
    { fase: "P", clave: "Dolor a la movilización cervical, útero y anexos dolorosos", detalle: "Criterios mínimos: con uno basta para tratar. Masa anexial dolorosa → absceso tubo-ovárico. Dolor en hipocondrio derecho → perihepatitis (Fitz-Hugh-Curtis)." },
  ],
  pista: "Mujer joven sexualmente activa con dolor pélvico + <b>dolor a la movilización cervical, uterino o anexial</b> = trata como EPI. <b>Siempre</b> prueba de embarazo.",
  estudios: ["<b>Prueba de embarazo</b>", "NAAT para clamidia y gonococo", "BH, PCR, VSG", "USG transvaginal (absceso)", "VIH y sífilis"],
  quiz: [
    { tipo: "mc", p: "Hallazgo clave de EPI a la exploración bimanual:", ops: ["Útero aumentado y nodular", "Dolor a la movilización cervical", "Cérvix blando", "Ovario no palpable"], r: 1, exp: "" },
    { tipo: "mc", p: "Agentes principales:", ops: ["Candida y Gardnerella", "Clamidia y gonococo", "E. coli y Klebsiella", "VPH"], r: 1, exp: "" },
    { tipo: "mc", p: "Secuela a largo plazo:", ops: ["Cáncer cervical", "Infertilidad y embarazo ectópico", "Miomatosis", "Prolapso"], r: 1, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "embarazo-ectopico",
  sistema: "genitales-femeninos",
  orden: 3,
  emoji: "🚨",
  titulo: "Embarazo ectópico",
  resumen: "Amenorrea + dolor pélvico + sangrado transvaginal; masa anexial dolorosa; si se rompe: choque y fondo de saco abombado.",
  definicion: "Implantación del embrión fuera de la cavidad uterina, en &gt; 95 % en la <b>trompa</b>. La rotura produce hemoperitoneo: es una <b>urgencia</b>.",
  causas: ["EPI previa, cirugía tubaria", "Ectópico previo", "DIU, reproducción asistida", "Tabaquismo"],
  sintomas: ["<b>Tríada</b>: amenorrea, dolor abdominal bajo, sangrado transvaginal", "Dolor en hombro (irritación diafragmática por sangre)", "Síncope"],
  inspeccionGeneral: "Taquicardia, hipotensión y palidez → <b>choque hemorrágico</b> por rotura.",
  ippa: [
    { fase: "I", clave: "Sangrado escaso por el orificio cervical", detalle: "" },
    { fase: "P", clave: "Masa anexial dolorosa; dolor a la movilización cervical", detalle: "Útero algo aumentado pero menor de lo esperado. <b>Fondo de saco abombado y muy doloroso</b> (grito de Douglas) → hemoperitoneo. Abdomen con rebote." },
  ],
  pista: "Toda mujer en edad reproductiva con dolor abdominal: <b>prueba de embarazo</b>. hCG positiva + útero vacío en el USG transvaginal = ectópico hasta demostrar lo contrario.",
  estudios: ["<b>β-hCG cuantitativa</b> (seriada)", "<b>USG transvaginal</b>", "BH, grupo y Rh"],
  quiz: [
    { tipo: "mc", p: "Localización más frecuente:", ops: ["Ovario", "Trompa", "Cérvix", "Abdomen"], r: 1, exp: "" },
    { tipo: "mc", p: "Estudio inicial obligado en mujer fértil con dolor pélvico:", ops: ["TC", "Prueba de embarazo", "Colonoscopia", "EGO"], r: 1, exp: "" },
    { tipo: "vf", p: "El dolor en el hombro puede indicar hemoperitoneo.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "miomatosis",
  sistema: "genitales-femeninos",
  orden: 4,
  emoji: "🟤",
  titulo: "Miomatosis uterina",
  resumen: "Útero aumentado, irregular y nodular; sangrado menstrual abundante, presión pélvica, anemia.",
  definicion: "<b>Leiomiomas</b>: tumores benignos de músculo liso uterino, los tumores pélvicos más frecuentes en la mujer. Pueden ser submucosos, intramurales o subserosos.",
  causas: ["Estrógenos y progesterona (crecen en edad reproductiva, involucionan en la menopausia)", "Raza negra, nuliparidad, obesidad, antecedente familiar"],
  sintomas: ["<b>Sangrado menstrual abundante</b> (submucosos)", "Presión pélvica, polaquiuria, estreñimiento", "Dismenorrea", "Infertilidad", "Fatiga por anemia"],
  inspeccionGeneral: "Palidez (anemia ferropénica).",
  ippa: [
    { fase: "P", clave: "Útero aumentado, irregular, nodular, firme, no doloroso", detalle: "Puede palparse en el abdomen si es grande. Se mueve con el cérvix (lo distingue de una masa anexial)." },
  ],
  pista: "Útero <b>grande e irregular</b> en el bimanual + menstruaciones abundantes + anemia = miomatosis. Si es grande, <b>globoso, blando y doloroso</b>, piensa en adenomiosis.",
  estudios: ["<b>USG pélvico / transvaginal</b>", "BH (anemia)", "Prueba de embarazo", "Histeroscopia en submucosos"],
  figs: [{ src: "genf/tabla-14-8.jpg", pie: "Bates Tabla 14-8: anormalidades del útero" }],
  quiz: [
    { tipo: "mc", p: "Hallazgo bimanual típico:", ops: ["Útero pequeño y liso", "Útero aumentado, irregular y nodular", "Útero blando y globoso", "Útero fijo y doloroso"], r: 1, exp: "" },
    { tipo: "mc", p: "Tipo de mioma que más produce sangrado:", ops: ["Subseroso", "Submucoso", "Intramural", "Pediculado subseroso"], r: 1, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "cancer-cervicouterino",
  sistema: "genitales-femeninos",
  orden: 5,
  emoji: "🎗️",
  titulo: "Cáncer cervicouterino",
  resumen: "Sangrado poscoital o intermenstrual; cérvix con lesión exofítica, ulcerada y friable. Prevención con vacuna VPH y tamizaje.",
  definicion: "Carcinoma (epidermoide en la mayoría) que se origina en la <b>zona de transformación</b> por infección persistente por <b>VPH de alto riesgo</b> (16 y 18), precedido por lesiones intraepiteliales.",
  causas: ["<b>VPH 16 y 18</b>", "Inicio temprano de vida sexual, múltiples parejas", "Tabaquismo, inmunosupresión (VIH)", "Falta de tamizaje"],
  sintomas: ["Asintomático en etapas tempranas", "<b>Sangrado poscoital</b> o intermenstrual", "Flujo fétido", "Dolor pélvico, edema de piernas, uropatía obstructiva (avanzado)"],
  inspeccionGeneral: "Palidez; adenopatías inguinales o supraclaviculares en enfermedad avanzada.",
  ippa: [
    { fase: "I", clave: "Lesión exofítica, ulcerada, friable que sangra al contacto", detalle: "Puede verse normal en etapas tempranas: por eso se hace citología." },
    { fase: "P", clave: "Cérvix duro, irregular", detalle: "Rectovaginal: infiltración de parametrios (estadificación)." },
  ],
  pista: "Lo detecta el <b>tamizaje</b> antes de que haya síntomas. Sangrado poscoital = mira el cérvix con espéculo.",
  estudios: ["Citología y prueba de VPH", "<b>Colposcopia con biopsia</b>", "Estadificación clínica (FIGO) e imagen"],
  figs: [{ src: "genf/tabla-14-5.jpg", pie: "Bates Tablas 14-5/6: cérvix" }, { src: "genf/zona-transformacion.jpg", pie: "Zona de transformación" }],
  quiz: [
    { tipo: "mc", p: "Agente causal:", ops: ["VHS-2", "VPH de alto riesgo", "Clamidia", "VIH"], r: 1, exp: "" },
    { tipo: "mc", p: "Síntoma típico:", ops: ["Prurito vulvar", "Sangrado poscoital", "Dismenorrea", "Galactorrea"], r: 1, exp: "" },
    { tipo: "vf", p: "La vacuna contra VPH previene la mayoría de los cánceres cervicouterinos.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "prolapso-pelvico",
  sistema: "genitales-femeninos",
  orden: 6,
  emoji: "⬇️",
  titulo: "Prolapso de órganos pélvicos",
  resumen: "Sensación de “bolita” en la vagina que empeora al pujar; cistocele, rectocele o prolapso uterino.",
  definicion: "Descenso de la vejiga (<b>cistocele</b>), recto (<b>rectocele</b>), intestino (enterocele) o útero a través de la vagina por debilidad del piso pélvico.",
  causas: ["<b>Partos vaginales</b> (multiparidad, fetos grandes)", "Menopausia (hipoestrogenismo)", "Edad, obesidad", "Aumento crónico de la presión abdominal: tos, estreñimiento, cargar peso"],
  sintomas: ["Sensación de bulto o peso vaginal que empeora de pie y al final del día", "Incontinencia o retención urinaria", "Dificultad para evacuar (rectocele)"],
  inspeccionGeneral: "",
  ippa: [
    { fase: "I", clave: "Abultamiento al pujar", detalle: "Pared anterior → cistocele; posterior → rectocele; cérvix descendido → prolapso uterino. Atrofia de la mucosa." },
    { fase: "P", clave: "Piso pélvico débil", detalle: "Contracción &lt; 3 s, escape de orina al toser (incontinencia de esfuerzo)." },
  ],
  pista: "Explora con <b>Valsalva</b>, acostada y, si es necesario, de pie. Usa una valva del espéculo para ver cada pared por separado.",
  estudios: ["Diagnóstico clínico (clasificación POP-Q)", "EGO, volumen residual posmiccional"],
  figs: [{ src: "genf/tabla-14-2.jpg", pie: "Bates Tabla 14-2: abultamientos de vulva, vagina y uretra" }],
  quiz: [
    { tipo: "mc", p: "Abultamiento de la pared vaginal posterior:", ops: ["Cistocele", "Rectocele", "Uretrocele", "Prolapso uterino"], r: 1, exp: "" },
    { tipo: "mc", p: "Principal factor de riesgo:", ops: ["Nuliparidad", "Partos vaginales", "Anticonceptivos", "VPH"], r: 1, exp: "" },
  ],
});
