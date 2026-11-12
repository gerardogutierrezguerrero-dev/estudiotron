/* Síndromes digestivos. Fuentes: Bates cap. 11 y resumen colaborativo de Aparato gastrointestinal.
   En abdomen el orden de exploración es I → A → Pe → P. */

ECOE.register("sindromes", {
  id: "abdomen-agudo",
  sistema: "abdomen",
  orden: 1,
  emoji: "🚑",
  titulo: "Síndrome de abdomen agudo / irritación peritoneal",
  resumen: "Dolor abdominal intenso de inicio reciente con rigidez y rebote: casi siempre quirúrgico.",
  definicion: "Dolor abdominal <b>agudo</b> (&lt; 7 días, habitualmente horas) que requiere decisión rápida, con frecuencia quirúrgica. Cuando el peritoneo parietal se inflama aparece el <b>dolor somático localizado</b>, la <b>rigidez</b> y el <b>rebote</b>.",
  causas: ["Inflamatorias: apendicitis, colecistitis, diverticulitis, pancreatitis", "Perforación: úlcera péptica, divertículo", "Obstructivas: oclusión intestinal, hernia estrangulada, vólvulo", "Vasculares: isquemia mesentérica, aneurisma roto", "Ginecológicas: embarazo ectópico roto, torsión de ovario"],
  sintomas: ["Dolor intenso: precisa inicio, localización y migración (periumbilical → CID en apendicitis)", "Náusea y vómito (si el vómito precede al dolor, piensa en causa médica)", "Fiebre, anorexia", "Alteración del tránsito"],
  inspeccionGeneral: "Paciente <b>inmóvil</b> (cualquier movimiento duele), en posición antiálgica, con las piernas flexionadas. Taquicardia, fiebre; hipotensión si hay sepsis o sangrado.",
  ippa: [
    { fase: "I", clave: "Inmóvil, abdomen que no se mueve con la respiración", detalle: "Distensión si hay obstrucción; equimosis (Cullen, Grey Turner)." },
    { fase: "A", clave: "Ruidos ↓ o ausentes", detalle: "Silencio abdominal en peritonitis generalizada (íleo reflejo)." },
    { fase: "Pe", clave: "Dolor a la percusión", detalle: "La percusión suave ya provoca dolor (signo de irritación). Pérdida de la matidez hepática → neumoperitoneo." },
    { fase: "P", clave: "Defensa involuntaria, rigidez, Blumberg +", detalle: "Abdomen “en tabla” en perforación. Busca Rovsing, psoas, obturador, Murphy." },
  ],
  pista: "El paciente con cólico (renal, biliar) <b>se mueve</b> buscando posición; el paciente con peritonitis <b>no se mueve</b>.",
  diferenciales: {
    cols: ["Causa", "Dato clave"],
    filas: [
      ["Apendicitis", "Dolor periumbilical que migra a CID, McBurney, Rovsing, psoas"],
      ["Colecistitis", "Dolor CSD tras comida grasa, Murphy +, fiebre"],
      ["Pancreatitis", "Dolor epigástrico en barra irradiado a espalda, alcohol o litiasis; lipasa ↑"],
      ["Úlcera perforada", "Dolor súbito “en puñalada”, abdomen en tabla, aire libre subdiafragmático"],
      ["Isquemia mesentérica", "Dolor desproporcionado a la exploración, FA, ancianos; lactato ↑"],
      ["Embarazo ectópico roto", "Mujer en edad fértil, retraso menstrual, choque; β-hCG +"],
    ],
  },
  estudios: ["BH (leucocitosis), PCR, química, lipasa, lactato, EGO, β-hCG en mujeres", "Rx de tórax de pie (neumoperitoneo) y de abdomen", "USG (vesícula, apéndice, pelvis) / TC de abdomen"],
  figs: [{ src: "abdomen/mcburney.jpg", pie: "Punto de McBurney" }, { src: "abdomen/tabla-11-11a.jpg", pie: "Bates Tabla 11-11: abdomen doloroso" }],
  quiz: [
    { tipo: "mc", p: "Signo que confirma irritación peritoneal al retirar la mano bruscamente:", ops: ["Murphy", "Blumberg", "Castell", "Courvoisier"], r: 1, exp: "Dolor al rebote." },
    { tipo: "vf", p: "El paciente con peritonitis suele moverse constantemente buscando posición.", r: false, exp: "Se queda inmóvil; el que se mueve es el del cólico." },
    { tipo: "mc", p: "Abdomen en tabla de inicio súbito tras dolor “en puñalada”:", ops: ["Apendicitis temprana", "Úlcera perforada", "Gastroenteritis", "Estreñimiento"], r: 1, exp: "Busca aire libre subdiafragmático." },
    { tipo: "mc", p: "Dolor intenso desproporcionado a una exploración casi normal en anciano con FA:", ops: ["Isquemia mesentérica", "Colecistitis", "Cistitis", "Hernia reductible"], r: 0, exp: "Lactato elevado." },
    { tipo: "vf", p: "En mujeres en edad fértil con abdomen agudo se debe solicitar β-hCG.", r: true, exp: "Descartar embarazo ectópico." },
  ],
});

ECOE.register("sindromes", {
  id: "oclusion-intestinal",
  sistema: "abdomen",
  orden: 2,
  emoji: "🚧",
  titulo: "Síndrome de oclusión intestinal",
  resumen: "Dolor cólico, vómito, distensión y ausencia de gases/evacuaciones; ruidos metálicos y timpanismo.",
  definicion: "Interrupción del tránsito intestinal. <b>Mecánica</b> (algo obstruye la luz) o <b>funcional</b> (íleo paralítico, pseudo-obstrucción de Ogilvie). Es <b>estrangulada</b> cuando se compromete la irrigación: urgencia quirúrgica.",
  causas: ["<b>Bridas/adherencias</b> postquirúrgicas (causa nº 1 de oclusión de delgado)", "<b>Hernias</b> incarceradas (inguinal, femoral, umbilical, incisional)", "Neoplasias (causa principal en colon)", "Vólvulo (sigmoides, ciego)", "Fecaloma / impactación fecal", "Íleo paralítico: postoperatorio, hipocalemia, peritonitis, opioides"],
  sintomas: ["<b>Tétrada</b>: dolor abdominal cólico, vómito, distensión y <b>ausencia de canalización de gases y heces</b>", "Vómito alimentario → bilioso → <b>fecaloide</b> (obstrucción distal o avanzada)", "Obstrucción alta: vómito temprano, poca distensión; baja: distensión marcada, vómito tardío", "Dolor que cambia de cólico a <b>continuo</b> → sugiere estrangulación"],
  inspeccionGeneral: "Deshidratación (mucosas secas, taquicardia, oliguria); fiebre y taquicardia progresiva si hay estrangulación.",
  ippa: [
    { fase: "I", clave: "Distensión, cicatrices, hernias", detalle: "Busca cicatrices de cirugías previas (bridas) y hernias irreductibles en ingles, ombligo y cicatrices. Peristaltismo visible." },
    { fase: "A", clave: "Ruidos metálicos, “de lucha”", detalle: "Hiperperistaltismo en fase temprana; <b>silencio abdominal</b> en fase tardía o íleo paralítico." },
    { fase: "Pe", clave: "Timpanismo acentuado", detalle: "Gas atrapado en asas distendidas. Matidez sobre una hernia con contenido." },
    { fase: "P", clave: "Dolor difuso; rebote = alarma", detalle: "Defensa, rigidez y Blumberg indican isquemia/perforación. <b>Tacto rectal</b>: ampolla vacía, fecaloma o masa." },
  ],
  pista: "En toda oclusión <b>explora siempre las regiones herniarias</b> y haz <b>tacto rectal</b>. Fiebre + taquicardia + dolor continuo + leucocitosis + lactato alto = estrangulación.",
  secciones: [
    {
      tipo: "tabla",
      titulo: "Datos de alarma (sugieren estrangulación o isquemia)",
      cols: ["Dato", "Simple", "Estrangulada"],
      filas: [
        ["Dolor", "Cólico intermitente", "<b>Continuo</b>, intenso"],
        ["Signos vitales", "Taquicardia leve por deshidratación", "Fiebre, taquicardia progresiva, hipotensión"],
        ["Abdomen", "Distendido, doloroso difuso", "<b>Rebote, rigidez</b>, hernia tensa eritematosa"],
        ["Laboratorio", "Alteraciones hidroelectrolíticas", "<b>Leucocitosis con bandas, lactato ↑</b>, acidosis"],
        ["Manejo", "SNG, ayuno, líquidos; observación 24–72 h", "<b>Cirugía urgente</b>"],
      ],
    },
  ],
  diferenciales: {
    cols: ["", "Obstrucción mecánica", "Íleo paralítico"],
    filas: [
      ["Dolor", "Cólico intenso", "Leve, difuso"],
      ["Ruidos", "Aumentados, metálicos", "Ausentes"],
      ["Contexto", "Cirugías previas, hernia, tumor", "Postoperatorio, hipocalemia, sepsis, opioides"],
      ["Rx", "Niveles hidroaéreos escalonados, poco gas distal", "Gas difuso en delgado y colon"],
    ],
  },
  estudios: ["Rx de abdomen de pie y decúbito: asas dilatadas, <b>niveles hidroaéreos</b> en “escalera”", "TC de abdomen y pelvis con contraste: sitio, causa y signos de isquemia", "BH, química, electrolitos (Na, K, Cl), función renal, <b>lactato</b>"],
  figs: [{ src: "abdomen/tabla-11-10.jpg", pie: "Bates Tabla 11-10: ruidos abdominales" }, { src: "genm/tabla-13-5.jpg", pie: "Bates Tabla 13-5: hernias de la ingle" }],
  quiz: [
    { tipo: "mc", p: "Causa más frecuente de oclusión de intestino delgado:", ops: ["Neoplasia", "Bridas/adherencias", "Vólvulo", "Fecaloma"], r: 1, exp: "En pacientes con cirugías previas." },
    { tipo: "mc", p: "Ruidos intestinales en la fase temprana de una obstrucción mecánica:", ops: ["Ausentes", "Aumentados y metálicos", "Normales siempre", "Soplo"], r: 1, exp: "" },
    { tipo: "vf", p: "El cambio de dolor cólico a continuo sugiere estrangulación.", r: true, exp: "" },
    { tipo: "mc", p: "Vómito fecaloide indica:", ops: ["Obstrucción alta", "Obstrucción distal o avanzada", "Gastritis", "Íleo biliar exclusivamente"], r: 1, exp: "" },
    { tipo: "mc", p: "Hallazgo radiológico característico:", ops: ["Broncograma aéreo", "Niveles hidroaéreos escalonados", "Línea pleural", "Cardiomegalia"], r: 1, exp: "" },
    { tipo: "vf", p: "En una oclusión intestinal no es necesario explorar las regiones herniarias si el paciente no refiere bultos.", r: false, exp: "Siempre se exploran: una hernia pequeña femoral puede pasar desapercibida." },
  ],
});

ECOE.register("sindromes", {
  id: "stda",
  sistema: "abdomen",
  orden: 3,
  emoji: "🩸",
  titulo: "Sangrado de tubo digestivo (alto y bajo)",
  resumen: "Hematemesis/melena (alto) vs hematoquecia (bajo). Lo primero: estado hemodinámico.",
  definicion: "Pérdida de sangre por el tubo digestivo. <b>Alto (STDA)</b>: proximal al <b>ángulo de Treitz</b> (esófago, estómago, duodeno) → hematemesis, “posos de café”, <b>melena</b>. <b>Bajo (STDB)</b>: distal a Treitz → <b>hematoquecia</b> o rectorragia.",
  causas: ["STDA: <b>úlcera péptica</b> (la más común; AINEs, <i>H. pylori</i>), <b>várices esofágicas</b> (hipertensión portal), Mallory-Weiss, gastritis erosiva, cáncer", "STDB: divertículos, angiodisplasias, hemorroides, colitis, cáncer colorrectal, enfermedad inflamatoria intestinal"],
  sintomas: ["Hematemesis (sangre fresca) o vómito en “posos de café”", "Melena: heces negras, brillantes, pegajosas y fétidas (≥ 50–100 mL de sangre)", "Hematoquecia: sangre roja por recto (un STDA masivo también puede darla)", "Mareo ortostático, síncope, diaforesis, disnea (anemia aguda)", "Antecedentes: AINEs, alcohol, hepatopatía, anticoagulantes"],
  inspeccionGeneral: "<b>Prioridad: hemodinamia.</b> Taquicardia, hipotensión, ortostatismo, palidez, llenado capilar lento, alteración del estado de conciencia → choque hipovolémico.",
  ippa: [
    { fase: "I", clave: "Palidez, estigmas de hepatopatía", detalle: "Ictericia, arañas vasculares, eritema palmar, ginecomastia, red venosa colateral → orientan a <b>várices</b>." },
    { fase: "A", clave: "Ruidos intestinales aumentados", detalle: "La sangre en la luz es catártica." },
    { fase: "Pe", clave: "Matidez cambiante si hay ascitis", detalle: "Hipertensión portal." },
    { fase: "P", clave: "Dolor epigástrico; esplenomegalia", detalle: "Dolor epigástrico → úlcera. Bazo grande → hipertensión portal. <b>Tacto rectal</b>: confirma melena o hematoquecia." },
  ],
  pista: "Antes de pensar en la causa, clasifica la <b>gravedad</b> con signos vitales. El <b>tacto rectal</b> es parte obligatoria de la exploración.",
  secciones: [
    {
      tipo: "tabla",
      titulo: "Escalas de riesgo",
      cols: ["Escala", "Cuándo", "Qué usa", "Para qué"],
      filas: [
        ["Glasgow-Blatchford", "Antes de la endoscopia", "Urea, Hb, TAS, FC, melena, síncope, hepatopatía, IC", "Puntaje 0–1: bajo riesgo, posible manejo ambulatorio"],
        ["Forrest", "Durante la endoscopia (úlcera)", "Ia chorro · Ib rezumante · IIa vaso visible · IIb coágulo · IIc mancha · III base limpia", "Ia–IIb: tratamiento endoscópico (alto riesgo de resangrado)"],
      ],
    },
  ],
  diferenciales: {
    cols: ["", "STDA", "STDB"],
    filas: [
      ["Manifestación", "Hematemesis, posos de café, <b>melena</b>", "<b>Hematoquecia</b>, rectorragia"],
      ["Urea / BUN", "<span class='up'>↑</span> (digestión de proteínas de la sangre)", "Normal"],
      ["Estudio inicial", "Endoscopia alta (&lt; 24 h)", "Colonoscopia"],
    ],
  },
  estudios: ["BH (Hb puede tardar en bajar), grupo y Rh, pruebas cruzadas", "Química: urea/BUN ↑ en STDA, creatinina", "Tiempos de coagulación (TP/INR)", "Endoscopia alta / colonoscopia"],
  figs: [{ src: "abdomen/tabla-11-5.jpg", pie: "Bates Tabla 11-5: heces negras y con sangre" }],
  quiz: [
    { tipo: "mc", p: "El STDA se define como proximal a:", ops: ["Píloro", "Ángulo de Treitz", "Válvula ileocecal", "Esfínter esofágico inferior"], r: 1, exp: "" },
    { tipo: "mc", p: "Causa más frecuente de STDA:", ops: ["Várices", "Úlcera péptica", "Mallory-Weiss", "Cáncer gástrico"], r: 1, exp: "" },
    { tipo: "vf", p: "La urea/BUN suele elevarse en el sangrado digestivo alto.", r: true, exp: "Por absorción de proteínas de la sangre." },
    { tipo: "mc", p: "Úlcera con vaso visible no sangrante en endoscopia:", ops: ["Forrest Ia", "Forrest IIa", "Forrest IIc", "Forrest III"], r: 1, exp: "Alto riesgo de resangrado: requiere terapia endoscópica." },
    { tipo: "mc", p: "Lo primero que debes valorar en un paciente con hematemesis:", ops: ["Causa del sangrado", "Estado hemodinámico", "Antecedentes familiares", "Dieta"], r: 1, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "hipertension-portal",
  sistema: "abdomen",
  orden: 4,
  emoji: "🍺",
  titulo: "Hipertensión portal e insuficiencia hepatocelular (cirrosis)",
  resumen: "Ascitis, esplenomegalia, red venosa colateral y várices + estigmas hepáticos, ictericia y encefalopatía.",
  definicion: "<b>Hipertensión portal:</b> presión venosa portal elevada (gradiente &gt; 5 mmHg; clínicamente relevante &gt; 10) que causa colaterales (várices, caput medusae), esplenomegalia y ascitis. <b>Insuficiencia hepatocelular:</b> pérdida de la función de síntesis y detoxificación (↓ albúmina, ↑ INR, ictericia, encefalopatía). La causa más común de ambas es la <b>cirrosis</b>.",
  causas: ["Cirrosis: alcohol, hepatitis C y B, esteatohepatitis metabólica", "Trombosis portal (prehepática)", "Síndrome de Budd-Chiari, IC derecha, pericarditis constrictiva (posthepática)", "Esquistosomiasis"],
  sintomas: ["Aumento de volumen abdominal, edema", "Hematemesis/melena (várices)", "Ictericia, prurito", "Confusión, somnolencia, inversión del ciclo sueño-vigilia (encefalopatía)", "Astenia, pérdida de masa muscular, sangrados fáciles"],
  inspeccionGeneral: "Ictericia, <b>arañas vasculares</b> (tórax), <b>eritema palmar</b>, <b>ginecomastia</b>, atrofia testicular, contractura de Dupuytren, uñas de Terry, desnutrición. <b>Asterixis</b> y alteración de conciencia (encefalopatía).",
  ippa: [
    { fase: "I", clave: "Abdomen globoso, caput medusae", detalle: "Flancos abombados (ascitis), red venosa colateral periumbilical, hernia umbilical, estigmas cutáneos." },
    { fase: "A", clave: "Ruidos presentes", detalle: "A veces soplo venoso periumbilical (Cruveilhier-Baumgarten)." },
    { fase: "Pe", clave: "Matidez cambiante, onda líquida", detalle: "Ascitis. Altura hepática disminuida en cirrosis avanzada. Castell + (esplenomegalia)." },
    { fase: "P", clave: "Hígado firme y nodular; bazo palpable", detalle: "Borde hepático duro e irregular (o no palpable si es pequeño). <b>Esplenomegalia</b>." },
  ],
  pista: "Hipertensión portal = <b>ascitis + esplenomegalia + colaterales</b>. Insuficiencia hepatocelular = <b>ictericia + estigmas + coagulopatía + encefalopatía</b>.",
  secciones: [
    {
      tipo: "tabla",
      titulo: "Child-Pugh (gravedad de la cirrosis)",
      cols: ["Parámetro", "1 punto", "2 puntos", "3 puntos"],
      filas: [
        ["Bilirrubina (mg/dL)", "&lt; 2", "2–3", "&gt; 3"],
        ["Albúmina (g/dL)", "&gt; 3.5", "2.8–3.5", "&lt; 2.8"],
        ["INR", "&lt; 1.7", "1.7–2.3", "&gt; 2.3"],
        ["Ascitis", "Ausente", "Leve", "Moderada-grave"],
        ["Encefalopatía", "Ausente", "Grado I–II", "Grado III–IV"],
      ],
      nota: "Clase A: 5–6 · B: 7–9 · C: 10–15 puntos.",
    },
  ],
  diferenciales: {
    cols: ["Causa de ascitis", "Dato clave"],
    filas: [
      ["Cirrosis", "Estigmas hepáticos, GASA ≥ 1.1 g/dL"],
      ["IC derecha", "PVY elevada, reflujo hepatoyugular, GASA ≥ 1.1"],
      ["Síndrome nefrótico", "Edema generalizado, proteinuria masiva, GASA &lt; 1.1"],
      ["Carcinomatosis / TB peritoneal", "Pérdida de peso, fiebre, GASA &lt; 1.1"],
    ],
  },
  estudios: ["Perfil hepático, albúmina, TP/INR, BH (plaquetas bajas por hiperesplenismo)", "USG Doppler: hígado nodular, vena porta dilatada (&gt; 13 mm), flujo hepatófugo, esplenomegalia, ascitis", "Paracentesis diagnóstica (GASA, PMN para peritonitis bacteriana espontánea)", "Endoscopia: tamizaje de várices", "Serologías virales"],
  figs: [{ src: "abdomen/ascitis-matidez-cambiante.jpg", pie: "Matidez cambiante" }, { src: "abdomen/onda-liquida.jpg", pie: "Onda líquida" }, { src: "abdomen/bazo-decubito-derecho.jpg", pie: "Palpación del bazo" }],
  quiz: [
    { tipo: "mc", p: "Tríada de la hipertensión portal en la exploración:", ops: ["Ictericia, fiebre, dolor", "Ascitis, esplenomegalia, red venosa colateral", "Hepatomegalia, R3, edema", "Rebote, rigidez, silencio"], r: 1, exp: "" },
    { tipo: "mc", p: "Signo de encefalopatía hepática:", ops: ["Murphy", "Asterixis", "Castell", "Rovsing"], r: 1, exp: "Temblor en aleteo al extender las muñecas." },
    { tipo: "vf", p: "Eritema palmar, arañas vasculares y ginecomastia son estigmas de insuficiencia hepatocelular.", r: true, exp: "Por hiperestrogenismo." },
    { tipo: "mc", p: "Un GASA ≥ 1.1 g/dL indica ascitis por:", ops: ["Hipertensión portal", "Carcinomatosis", "TB peritoneal", "Pancreatitis"], r: 0, exp: "" },
    { tipo: "mc", p: "Paciente con albúmina 2.6, bilirrubina 2.9, INR 1.8, ascitis moderada y encefalopatía grado II. Child-Pugh:", ops: ["A", "B", "C", "No aplica"], r: 2, exp: "3 + 2 + 2 + 3 + 2 = 12 → C." },
  ],
});

ECOE.register("sindromes", {
  id: "ictericia",
  sistema: "abdomen",
  orden: 5,
  emoji: "🟡",
  titulo: "Síndrome ictérico",
  resumen: "Piel y escleras amarillas; coluria y acolia te dicen si es pre, intra o posthepática.",
  definicion: "Coloración amarilla de piel, escleras y mucosas por <b>bilirrubina &gt; 2–3 mg/dL</b>. Se busca primero en <b>escleras</b> y en el <b>frenillo sublingual</b>, con luz natural.",
  causas: ["<b>Prehepática</b> (bilirrubina indirecta): hemólisis, Gilbert, eritropoyesis ineficaz", "<b>Hepática</b> (mixta): hepatitis viral, alcohólica, por fármacos; cirrosis", "<b>Posthepática / obstructiva</b> (directa): coledocolitiasis, cáncer de cabeza de páncreas, colangiocarcinoma, estenosis"],
  sintomas: ["Coluria (orina color té/refresco de cola) → bilirrubina <b>directa</b>", "Acolia (heces blancas/masilla) → <b>obstrucción</b>", "Prurito (colestasis)", "Dolor en CSD + fiebre (colangitis: tríada de Charcot)", "Pérdida de peso sin dolor → neoplasia"],
  inspeccionGeneral: "Ictericia en escleras y frenillo; lesiones de rascado; estigmas de hepatopatía; palidez (hemólisis).",
  ippa: [
    { fase: "I", clave: "Ictericia, rascado, estigmas", detalle: "Tono verdínico en colestasis prolongada; tono amarillo pálido (“flavínico”) en hemólisis." },
    { fase: "A", clave: "Sin hallazgos específicos", detalle: "" },
    { fase: "Pe", clave: "Altura hepática", detalle: "Hepatomegalia en hepatitis, congestión o infiltración." },
    { fase: "P", clave: "Murphy, Courvoisier, esplenomegalia", detalle: "Hígado doloroso (hepatitis); vesícula palpable no dolorosa (Courvoisier → tumor); bazo grande (hemólisis, hipertensión portal)." },
  ],
  pista: "<b>Orina y heces</b> clasifican la ictericia antes del laboratorio: sin coluria = indirecta (prehepática); coluria + acolia = obstructiva.",
  secciones: [
    {
      tipo: "tabla",
      titulo: "Clasificación por coluria y acolia",
      cols: ["Tipo", "Bilirrubina", "Orina", "Heces", "Ejemplos"],
      filas: [
        ["Prehepática", "Indirecta ↑", "<b>Normal</b> (acolúrica)", "Normales u oscuras", "Hemólisis, Gilbert"],
        ["Hepatocelular", "Mixta", "<b>Coluria</b>", "Normales o hipocolia", "Hepatitis, cirrosis"],
        ["Posthepática", "Directa ↑", "<b>Coluria intensa</b>", "<b>Acolia</b>", "Coledocolitiasis, cáncer de páncreas"],
      ],
    },
  ],
  estudios: ["Bilirrubina total, directa e indirecta", "Transaminasas (patrón hepatocelular) vs fosfatasa alcalina y GGT (patrón colestásico)", "BH, reticulocitos, DHL, haptoglobina (hemólisis)", "USG de hígado y vía biliar: dilatación de vías"],
  quiz: [
    { tipo: "mc", p: "Ictericia con coluria y acolia sugiere:", ops: ["Hemólisis", "Obstrucción biliar", "Síndrome de Gilbert", "Normalidad"], r: 1, exp: "" },
    { tipo: "vf", p: "En la ictericia prehepática hay coluria intensa.", r: false, exp: "La bilirrubina indirecta no es hidrosoluble: no pasa a la orina." },
    { tipo: "mc", p: "Vesícula palpable, no dolorosa, con ictericia indolora:", ops: ["Murphy", "Courvoisier", "Cullen", "Castell"], r: 1, exp: "Cáncer de cabeza de páncreas." },
    { tipo: "mc", p: "Mejor sitio para detectar ictericia leve:", ops: ["Palmas", "Escleras y frenillo sublingual", "Uñas", "Cabello"], r: 1, exp: "" },
    { tipo: "mc", p: "Tríada de Charcot (colangitis):", ops: ["Fiebre, ictericia, dolor en CSD", "Hipotensión, PVY ↑, ruidos apagados", "Disnea, R3, edema", "Fiebre, disuria, Giordano"], r: 0, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "diarreico-disenterico",
  sistema: "abdomen",
  orden: 6,
  emoji: "💩",
  titulo: "Síndrome diarreico y disentérico",
  resumen: "Diarrea acuosa (intestino delgado) vs disentería con moco y sangre (colon). Valora deshidratación.",
  definicion: "<b>Diarrea:</b> ≥ 3 evacuaciones disminuidas de consistencia en 24 h (aguda &lt; 14 días, crónica &gt; 4 semanas). <b>Síndrome disentérico:</b> evacuaciones escasas y frecuentes con <b>moco, sangre y pus</b>, <b>pujo</b> y <b>tenesmo</b>, por inflamación del colon distal.",
  causas: ["Acuosa: virus (rotavirus, norovirus), <i>E. coli</i> enterotoxigénica, <i>V. cholerae</i>, fármacos", "Disentérica: <i>Shigella</i>, <i>E. coli</i> enteroinvasiva/enterohemorrágica, <i>Salmonella</i>, <i>Campylobacter</i>, <i>Entamoeba histolytica</i>", "Crónica: enfermedad inflamatoria intestinal, malabsorción, colon irritable, cáncer"],
  sintomas: ["Número y volumen de evacuaciones; presencia de moco, sangre, grasa", "Pujo (esfuerzo doloroso) y tenesmo (sensación de evacuación incompleta) → recto", "Fiebre, dolor cólico", "Sed, oliguria, mareo (deshidratación)"],
  inspeccionGeneral: "<b>Valora deshidratación:</b> mucosas secas, ojos hundidos, signo del pliegue, llenado capilar lento, taquicardia, hipotensión ortostática, oliguria, alteración de conciencia.",
  ippa: [
    { fase: "I", clave: "Signos de deshidratación", detalle: "Abdomen normal o discretamente distendido." },
    { fase: "A", clave: "Ruidos aumentados", detalle: "Hiperperistaltismo, borborigmos." },
    { fase: "Pe", clave: "Timpanismo", detalle: "" },
    { fase: "P", clave: "Dolor difuso leve sin rebote", detalle: "Dolor en marco cólico izquierdo en disentería. Rebote → complicación (megacolon tóxico, perforación)." },
  ],
  pista: "Diarrea acuosa abundante sin sangre = <b>delgado</b>. Pocas evacuaciones con sangre, moco, pujo y tenesmo = <b>colon (disentería)</b>.",
  diferenciales: {
    cols: ["", "Intestino delgado", "Colon (disentérica)"],
    filas: [
      ["Volumen", "Abundante", "Escaso"],
      ["Frecuencia", "Moderada", "Muy frecuente"],
      ["Sangre / moco", "No", "<b>Sí</b>"],
      ["Pujo y tenesmo", "No", "<b>Sí</b>"],
      ["Dolor", "Periumbilical", "Hipogastrio / FII"],
    ],
  },
  estudios: ["Electrolitos, función renal (deshidratación grave)", "Coproparasitoscópico, leucocitos en heces, coprocultivo (si disentería o fiebre)", "Sangre oculta, calprotectina, colonoscopia en crónica"],
  figs: [{ src: "abdomen/tabla-11-3a.jpg", pie: "Bates Tabla 11-3: diarrea" }],
  quiz: [
    { tipo: "mc", p: "Pujo, tenesmo y evacuaciones con moco y sangre definen:", ops: ["Síndrome diarreico acuoso", "Síndrome disentérico", "Malabsorción", "Oclusión"], r: 1, exp: "" },
    { tipo: "mc", p: "Diarrea abundante, acuosa, sin sangre, se origina principalmente en:", ops: ["Intestino delgado", "Recto", "Colon sigmoides", "Ano"], r: 0, exp: "" },
    { tipo: "vf", p: "El tenesmo es la sensación de evacuación incompleta.", r: true, exp: "" },
    { tipo: "mc", p: "Agente parasitario clásico de disentería:", ops: ["Giardia", "Entamoeba histolytica", "Cryptosporidium", "Enterobius"], r: 1, exp: "" },
  ],
});
