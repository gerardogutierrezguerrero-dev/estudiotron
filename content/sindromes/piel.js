/* Síndromes de piel y anexos. Fuentes: resumen colaborativo de Piel y anexos (displasia ectodérmica, micosis y
   onicomicosis, pediculosis, escabiosis, eccema, acné, melanoma) y Bates cap. 6 (cáncer no melanoma, púrpura,
   úlceras por presión). En piel casi todo es inspección y palpación. */

ECOE.register("sindromes", {
  id: "melanoma",
  sistema: "piel",
  orden: 1,
  emoji: "⚫",
  titulo: "Melanoma",
  resumen: "Lesión pigmentada con criterios ABCDE, sobre todo evolución; biopsia escisional y Breslow.",
  definicion: "Tumor maligno de los <b>melanocitos</b>; puede aparecer en piel, mucosas, úvea o meninges. Es el cáncer de piel más letal, y su pronóstico depende del <b>grosor (Breslow)</b>.",
  causas: ["<b>Radiación UV</b> (quemaduras solares, cámaras de bronceado)", "Hereditario en 10–15 % (CDKN2A)", "Muchos nevos (≥ 50) o nevos atípicos", "Piel clara, pelo rojo, antecedente personal o familiar", "La mitad aparece <b>de novo</b>, no sobre un lunar previo"],
  sintomas: ["Lunar nuevo o que <b>cambia</b> de tamaño, forma o color", "Prurito, sangrado o ulceración", "Muchas veces lo detecta el paciente o su pareja"],
  inspeccionGeneral: "Busca adenopatías regionales (metástasis ganglionares).",
  ippa: [
    { fase: "I", clave: "ABCDE", detalle: "Asimetría, bordes irregulares, varios colores (azul-negro, blanco, rojo), diámetro &gt; 6 mm, evolución. Nodular: <b>EFG</b> (elevado, firme, crece). Lesión distinta a los demás lunares (“patito feo”)." },
    { fase: "P", clave: "Lesión firme, elevada; ganglios regionales", detalle: "Palpa los ganglios de la región de drenaje." },
  ],
  pista: "La <b>E (evolución)</b> es el criterio más sensible. Ante sospecha: <b>biopsia escisional</b> completa (no por rasurado).",
  diferenciales: {
    cols: ["Tipo", "Dónde y en quién", "Rasgo"],
    filas: [
      ["Extensión superficial", "Tronco (♂), piernas (♀)", "El más frecuente; crecimiento radial, varios colores"],
      ["Nodular", "Tronco, cabeza y cuello", "Crecimiento vertical rápido; el más agresivo"],
      ["Léntigo maligno", "Cara de ancianos con daño solar", "Mácula de crecimiento lento"],
      ["Acral lentiginoso", "Palmas, plantas, subungueal", "No relacionado con el sol; diagnóstico tardío; signo de Hutchinson"],
    ],
  },
  estudios: ["Dermatoscopia", "<b>Biopsia escisional</b> con margen de 1–3 mm", "Índice de <b>Breslow</b> (mm de invasión) y ulceración", "Ganglio centinela según estadio", "TC/PET en enfermedad avanzada; mutación <b>BRAF</b>"],
  figs: [{ src: "piel/abcde-b.jpg", pie: "Bordes: melanoma vs nevo" }, { src: "piel/abcde-e.jpg", pie: "Evolución" }, { src: "piel/tabla-6-6a.jpg", pie: "Bates Tabla 6-6: melanoma y sus imitadores" }],
  quiz: [
    { tipo: "mc", p: "Factor pronóstico más importante del melanoma:", ops: ["Diámetro", "Índice de Breslow", "Color", "Edad"], r: 1, exp: "" },
    { tipo: "mc", p: "Biopsia indicada ante sospecha de melanoma:", ops: ["Por rasurado (shave)", "Escisional", "Por aspiración", "Ninguna, solo vigilar"], r: 1, exp: "" },
    { tipo: "mc", p: "Tipo más frecuente:", ops: ["Nodular", "Extensión superficial", "Acral lentiginoso", "Léntigo maligno"], r: 1, exp: "" },
    { tipo: "vf", p: "El melanoma acral lentiginoso se relaciona estrechamente con la exposición solar.", r: false, exp: "No; aparece en palmas, plantas y uñas." },
    { tipo: "mc", p: "Pigmento que se extiende de la banda ungueal al pliegue proximal:", ops: ["Signo de Hutchinson", "Signo de Nikolsky", "Signo de Auspitz", "Signo de Darier"], r: 0, exp: "Sugiere melanoma subungueal." },
  ],
});

ECOE.register("sindromes", {
  id: "cancer-piel-no-melanoma",
  sistema: "piel",
  orden: 2,
  emoji: "☀️",
  titulo: "Carcinoma basocelular y espinocelular",
  resumen: "Basocelular: pápula perlada con telangiectasias. Espinocelular: placa queratósica que sangra, sobre queratosis actínica.",
  definicion: "Cánceres de queratinocitos, los <b>más frecuentes</b> de todos los cánceres. Se relacionan con la exposición solar acumulada. La <b>queratosis actínica</b> es la lesión premaligna del espinocelular.",
  causas: ["Radiación UV acumulada (trabajadores al aire libre)", "Piel clara, edad avanzada", "Inmunosupresión (trasplantados → espinocelular)", "Arsénico, radiación, cicatrices crónicas (úlcera de Marjolin)"],
  sintomas: ["Lesión que no cicatriza o que sangra con facilidad", "Crecimiento lento (basocelular) o más rápido (espinocelular)"],
  inspeccionGeneral: "Busca signos de <b>daño solar</b>: léntigos, arrugas profundas, piel atrófica.",
  ippa: [
    { fase: "I", clave: "Basocelular: pápula perlada, telangiectasias, borde enrollado", detalle: "Puede tener úlcera central (“úlcera roedora”). Cara, nariz, párpados." },
    { fase: "I", clave: "Espinocelular: placa o nódulo queratósico, escamoso", detalle: "Labio inferior, orejas, dorso de manos; sobre queratosis actínicas." },
    { fase: "P", clave: "Queratosis actínica: áspera “como lija”", detalle: "Se palpa mejor de lo que se ve. Palpa ganglios en el espinocelular." },
  ],
  pista: "Lo <b>perlado con vasitos</b> es basocelular; lo <b>áspero y escamoso</b> que sangra, espinocelular. El basocelular casi nunca da metástasis.",
  estudios: ["Biopsia (por rasurado o sacabocado)", "Dermatoscopia"],
  figs: [{ src: "piel/tabla-6-4.jpg", pie: "Bates Tabla 6-4: queratosis actínica y espinocelular" }, { src: "piel/tabla-6-5a.jpg", pie: "Bates Tabla 6-5: basocelular" }, { src: "piel/tabla-6-9.jpg", pie: "Bates Tabla 6-9: daño solar" }],
  quiz: [
    { tipo: "mc", p: "Cáncer de piel más frecuente:", ops: ["Melanoma", "Basocelular", "Espinocelular", "Merkel"], r: 1, exp: "" },
    { tipo: "mc", p: "Lesión premaligna del espinocelular:", ops: ["Queratosis seborreica", "Queratosis actínica", "Nevo displásico", "Léntigo solar"], r: 1, exp: "" },
    { tipo: "vf", p: "El carcinoma basocelular da metástasis con frecuencia.", r: false, exp: "Es localmente invasivo." },
  ],
});

ECOE.register("sindromes", {
  id: "acne",
  sistema: "piel",
  orden: 3,
  emoji: "🧑",
  titulo: "Acné vulgar",
  resumen: "Comedones, pápulas, pústulas y nódulos en cara, pecho y espalda de adolescentes; clasifica la gravedad y vigila cicatrices.",
  definicion: "Enfermedad inflamatoria crónica de la <b>unidad pilosebácea</b> por cuatro mecanismos: <b>seborrea</b> (andrógenos), <b>hiperqueratinización folicular</b> (comedón), proliferación de <i>Cutibacterium acnes</i> e <b>inflamación</b>.",
  causas: ["Andrógenos (pubertad, SOP)", "Genética", "Cosméticos comedogénicos, fricción (acné mecánico), estrés, dieta de alto índice glucémico", "Fármacos: corticoides, litio, anticonvulsivos, vitamina B12"],
  sintomas: ["Lesiones en cara, cuello, pecho y espalda alta", "Dolor en lesiones profundas", "Afectación psicosocial"],
  inspeccionGeneral: "En una mujer con acné busca <b>hirsutismo y alteraciones menstruales</b> (SOP).",
  ippa: [
    { fase: "I", clave: "Comedones abiertos (negros) y cerrados (blancos)", detalle: "Lesiones no inflamatorias: el dato que lo distingue de la rosácea." },
    { fase: "I", clave: "Pápulas, pústulas, nódulos y quistes", detalle: "Secuelas: cicatrices atróficas (“en picahielo”), hipertróficas o queloides, hiperpigmentación postinflamatoria." },
    { fase: "P", clave: "Nódulos dolorosos, profundos", detalle: "Marcan acné grave con alto riesgo de cicatriz." },
  ],
  pista: "Si no hay <b>comedones</b>, piensa en <b>rosácea</b>, foliculitis o acné por fármacos. Clasifica: leve (comedones), moderado (pápulas/pústulas), grave (nódulos/quistes).",
  diferenciales: {
    cols: ["Gravedad", "Lesiones", "Tratamiento"],
    filas: [
      ["Leve", "Comedones, pocas pápulas", "Retinoide tópico ± peróxido de benzoilo"],
      ["Moderado", "Múltiples pápulas y pústulas", "Tópicos + antibiótico oral (doxiciclina) o terapia hormonal"],
      ["Grave", "Nódulos, quistes, cicatrices", "<b>Isotretinoína</b> oral (teratógena)"],
    ],
  },
  estudios: ["Diagnóstico clínico", "Perfil androgénico si hay datos de hiperandrogenismo"],
  figs: [{ src: "piel/tabla-6-7.jpg", pie: "Bates Tabla 6-7: acné, lesiones primarias y secundarias" }],
  quiz: [
    { tipo: "mc", p: "Lesión que distingue el acné de la rosácea:", ops: ["Pústula", "Comedón", "Pápula", "Eritema"], r: 1, exp: "" },
    { tipo: "mc", p: "Tratamiento del acné noduloquístico grave:", ops: ["Peróxido de benzoilo", "Isotretinoína oral", "Clindamicina tópica", "Corticoide tópico"], r: 1, exp: "Requiere anticoncepción por teratogenicidad." },
    { tipo: "vf", p: "El comedón abierto es negro por la oxidación de su contenido, no por suciedad.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "dermatitis-atopica",
  sistema: "piel",
  orden: 4,
  emoji: "🩹",
  titulo: "Dermatitis atópica (eccema)",
  resumen: "Prurito intenso, piel seca y eccema en pliegues de un paciente atópico; curso crónico con brotes.",
  definicion: "Enfermedad inflamatoria crónica y recurrente con <b>defecto de la barrera cutánea</b> (filagrina), respuesta <b>Th2</b> (IL-4, IL-13, IL-31) y colonización por <i>S. aureus</i>. Inicia casi siempre en la infancia y se asocia a asma y rinitis.",
  causas: ["Atopia familiar, mutación de la filagrina", "Desencadenantes: jabones, lana, sudor, clima seco o frío, estrés, alérgenos", "Infección por <i>S. aureus</i>"],
  sintomas: ["<b>Prurito</b>, peor de noche (ciclo picazón-rascado)", "Piel seca", "Brotes y remisiones", "Antecedente de asma o rinitis"],
  inspeccionGeneral: "Busca excoriaciones y alteración del sueño.",
  ippa: [
    { fase: "I", clave: "Distribución según la edad", detalle: "Lactante: mejillas y extensoras (respeta el pañal). Niño: <b>pliegues antecubital y poplíteo</b>, cuello. Adulto: pliegues, manos, cara." },
    { fase: "I", clave: "Fase aguda → crónica", detalle: "Aguda: eritema, pápulo-vesículas, exudado. Subaguda: escama. Crónica: <b>liquenificación</b>. Signos: xerosis, pliegue de Dennie-Morgan, pitiriasis alba, queratosis pilaris, palmas hiperlineales." },
    { fase: "P", clave: "Piel áspera, seca; dermografismo blanco", detalle: "Costras melicéricas → impetiginización; vesículas umbilicadas → eccema herpético (urgencia)." },
  ],
  pista: "Prurito + <b>pliegues</b> + <b>atopia</b> + curso crónico = criterios mayores de Hanifin y Rajka. El tratamiento base es el <b>emoliente diario</b>.",
  estudios: ["Diagnóstico clínico (Hanifin y Rajka: 3 mayores + 3 menores)", "Gravedad: SCORAD / EASI", "IgE total o pruebas de alergia solo si se sospecha alergia asociada"],
  quiz: [
    { tipo: "mc", p: "Proteína de barrera alterada en la dermatitis atópica:", ops: ["Colágeno VII", "Filagrina", "Queratina 5", "Desmogleína"], r: 1, exp: "" },
    { tipo: "mc", p: "Localización típica en niños escolares:", ops: ["Área del pañal", "Pliegues antecubital y poplíteo", "Palmas", "Cuero cabelludo"], r: 1, exp: "" },
    { tipo: "mc", p: "Lesión del eccema crónico:", ops: ["Vesícula", "Liquenificación", "Roncha", "Pústula"], r: 1, exp: "" },
    { tipo: "vf", p: "El eccema herpético se trata con aciclovir.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "micosis",
  sistema: "piel",
  orden: 5,
  emoji: "🍄",
  titulo: "Micosis superficiales y onicomicosis",
  resumen: "Tiñas con borde activo y escama, candidosis de pliegues y uñas engrosadas amarillas; confirma con KOH.",
  definicion: "Infecciones por hongos de la piel, pelo y uñas. Las superficiales las causan <b>dermatofitos</b> (<i>Trichophyton rubrum</i>), levaduras (<i>Candida</i>, <i>Malassezia</i>) y mohos. La onicomicosis afecta sobre todo las uñas de los pies.",
  causas: ["Humedad, calor, calzado cerrado, albercas y regaderas públicas", "<b>Diabetes</b>, inmunosupresión, antibióticos o corticoides prolongados", "Edad avanzada, trauma ungueal, tiña del pie previa"],
  sintomas: ["Prurito", "Descamación entre los dedos o en placas", "Uñas que cambian de color, se engruesan y se despegan"],
  inspeccionGeneral: "",
  ippa: [
    { fase: "I", clave: "Tiña corporal: placa anular con borde activo escamoso y centro claro", detalle: "Tiña del pie: maceración y escama interdigital. Tiña de la cabeza: placa con pelos rotos. Pitiriasis versicolor: máculas hipo/hiperpigmentadas con escama fina en tronco." },
    { fase: "I", clave: "Onicomicosis: uña engrosada, amarilla, con detritus", detalle: "Onicólisis distal; la forma <b>subungueal proximal</b> es marcador de inmunosupresión (VIH)." },
    { fase: "P", clave: "Uña quebradiza, se desmorona", detalle: "Candidosis de pliegues: eritema húmedo con <b>lesiones satélite</b>." },
  ],
  pista: "Confirma con <b>KOH</b> antes de tratar la uña: la <b>psoriasis</b> ungueal se parece (pero tiene hoyuelos y mancha de aceite).",
  estudios: ["<b>Examen directo con KOH</b> (hifas)", "Cultivo micológico", "Luz de Wood (algunas tiñas de la cabeza, pitiriasis versicolor)", "PAS de fragmento ungueal"],
  quiz: [
    { tipo: "mc", p: "Agente más frecuente de onicomicosis:", ops: ["Candida albicans", "Trichophyton rubrum", "Aspergillus", "Malassezia"], r: 1, exp: "" },
    { tipo: "mc", p: "Estudio inicial para confirmar una micosis superficial:", ops: ["Biopsia", "KOH", "Gram", "Serología"], r: 1, exp: "" },
    { tipo: "mc", p: "Placa anular con borde escamoso activo y centro claro:", ops: ["Psoriasis", "Tiña corporal", "Eccema numular", "Urticaria"], r: 1, exp: "" },
    { tipo: "vf", p: "La onicomicosis que afecta la matriz requiere tratamiento oral.", r: true, exp: "Terbinafina o itraconazol." },
  ],
});

ECOE.register("sindromes", {
  id: "escabiosis",
  sistema: "piel",
  orden: 6,
  emoji: "🪲",
  titulo: "Escabiosis",
  resumen: "Prurito nocturno intenso, en varios convivientes; pápulas y surcos en espacios interdigitales, muñecas, axilas, cintura y genitales.",
  definicion: "Ectoparasitosis por <i>Sarcoptes scabiei</i> var. <i>hominis</i>: la hembra excava <b>túneles</b> en el estrato córneo. Las lesiones y el prurito son una reacción de <b>hipersensibilidad</b> al ácaro, sus huevos y heces.",
  causas: ["Contacto directo y prolongado piel con piel", "Hacinamiento, instituciones (asilos, cárceles)", "Inmunosupresión → <b>sarna costrosa (noruega)</b>, muy contagiosa"],
  sintomas: ["<b>Prurito nocturno</b> intenso", "Varios miembros de la familia con lo mismo", "Inicio 3–6 semanas después del contagio (1–4 días si hubo infestación previa)"],
  inspeccionGeneral: "Excoriaciones y costras por rascado.",
  ippa: [
    { fase: "I", clave: "Surcos acarinos y pápulas", detalle: "<b>Espacios interdigitales</b>, muñecas, codos, axilas, ombligo, cintura, glúteos, <b>genitales</b> (nódulos en pene y escroto), areolas. En adultos respeta cabeza y cuello; en lactantes afecta palmas, plantas y cara." },
    { fase: "I", clave: "Lesiones secundarias", detalle: "Excoriaciones, costras, impetiginización. Costrosa: placas hiperqueratósicas con poco prurito." },
    { fase: "P", clave: "Nódulos escabióticos", detalle: "Persisten tras el tratamiento por hipersensibilidad." },
  ],
  pista: "<b>Prurito nocturno + convivientes con lo mismo + espacios interdigitales y genitales</b>. Trata a <b>todos los contactos al mismo tiempo</b>.",
  diferenciales: {
    cols: ["", "Escabiosis", "Pediculosis"],
    filas: [
      ["Agente", "Ácaro (<i>Sarcoptes</i>)", "Piojo (<i>Pediculus</i>, <i>Phthirus</i>)"],
      ["Lugar", "Pliegues, manos, genitales", "Cuero cabelludo (occipital, retroauricular), vello púbico"],
      ["Hallazgo", "Surcos, pápulas", "Liendres adheridas al pelo, piojos vivos"],
      ["Tratamiento", "Permetrina 5 % o ivermectina oral", "Permetrina 1 %, peine fino"],
    ],
  },
  estudios: ["Diagnóstico clínico", "Raspado con aceite mineral (ácaros, huevos, heces)", "Dermatoscopia (signo del “ala delta”)"],
  quiz: [
    { tipo: "mc", p: "Síntoma más característico de la escabiosis:", ops: ["Dolor", "Prurito nocturno", "Fiebre", "Ardor al orinar"], r: 1, exp: "" },
    { tipo: "mc", p: "Tratamiento de primera elección:", ops: ["Permetrina 5 %", "Corticoide tópico", "Ketoconazol", "Aciclovir"], r: 0, exp: "Repetir a los 7 días y tratar a los contactos." },
    { tipo: "vf", p: "En adultos la escabiosis suele afectar la cara y el cuero cabelludo.", r: false, exp: "Los respeta (salvo lactantes, ancianos, inmunosuprimidos)." },
    { tipo: "mc", p: "Forma muy contagiosa en inmunosuprimidos:", ops: ["Nodular", "Costrosa (noruega)", "Infantil", "Bulosa"], r: 1, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "pediculosis",
  sistema: "piel",
  orden: 7,
  emoji: "🪮",
  titulo: "Pediculosis",
  resumen: "Prurito del cuero cabelludo en escolares, liendres adheridas cerca de la raíz en región occipital y retroauricular.",
  definicion: "Infestación por piojos hematófagos: <i>Pediculus humanus capitis</i> (cabeza, la más frecuente), <i>P. h. corporis</i> (vive en la ropa) y <i>Phthirus pubis</i> (ladilla, vello púbico).",
  causas: ["Contacto cabeza con cabeza (escolares)", "Ropa contaminada (corporis: personas en situación de calle)", "Contacto sexual (pubis)", "<b>No</b> indica mala higiene"],
  sintomas: ["Prurito del cuero cabelludo, peor de noche", "Excoriaciones", "Alteración del sueño"],
  inspeccionGeneral: "",
  ippa: [
    { fase: "I", clave: "Liendres y piojos vivos", detalle: "Revisa las regiones <b>occipital y retroauricular</b> con peine fino. Las liendres a &gt; 1 cm de la raíz suelen estar vacías." },
    { fase: "P", clave: "Liendres firmemente adheridas", detalle: "No se desprenden al soplar (a diferencia de la caspa). Adenopatías occipitales e impétigo secundario." },
  ],
  pista: "La caspa se cae; la liendre <b>se queda pegada</b>. El piojo del cuerpo transmite tifus; en la ladilla busca otras ITS.",
  estudios: ["Diagnóstico clínico (piojo vivo)"],
  quiz: [
    { tipo: "mc", p: "Regiones donde buscar liendres:", ops: ["Frontal y parietal", "Occipital y retroauricular", "Vértex", "Cejas"], r: 1, exp: "" },
    { tipo: "vf", p: "La pediculosis capitis indica mala higiene.", r: false, exp: "" },
    { tipo: "mc", p: "Pediculosis que puede transmitir tifus epidémico:", ops: ["Capitis", "Corporis", "Pubis", "Ninguna"], r: 1, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "purpura",
  sistema: "piel",
  orden: 8,
  emoji: "🟣",
  titulo: "Púrpura y lesiones vasculares",
  resumen: "Lesiones rojo-violáceas que no palidecen: petequias, púrpura, equimosis. Palpable = vasculitis; con fiebre = urgencia.",
  definicion: "Extravasación de sangre en la piel. A diferencia del eritema y de los angiomas, <b>no desaparece a la presión</b> (diascopia). Petequia &lt; 3 mm, púrpura 3 mm–1 cm, equimosis &gt; 1 cm.",
  causas: ["<b>Plaquetas</b>: trombocitopenia (PTI, leucemia, dengue), disfunción plaquetaria", "<b>Vasculitis</b> (púrpura palpable): IgA (Henoch-Schönlein), por fármacos, LES", "Infección: <b>meningococcemia</b>, endocarditis, rickettsias", "Coagulopatía, anticoagulantes", "Fragilidad vascular: púrpura senil, corticoides, escorbuto"],
  sintomas: ["Manchas rojas o moradas", "Sangrado de encías, epistaxis, menstruaciones abundantes (plaquetas)", "Fiebre, dolor abdominal, artralgias (vasculitis)"],
  inspeccionGeneral: "Con fiebre, taquicardia o alteración del estado de alerta: <b>urgencia</b> (meningococo).",
  ippa: [
    { fase: "I", clave: "Petequias, púrpura, equimosis", detalle: "Distribución en zonas de declive (piernas) en vasculitis. Arañas vasculares (hígado) y angiomas en cereza sí palidecen." },
    { fase: "P", clave: "¿Palpable o plana?", detalle: "<b>Palpable</b> = inflamación de la pared del vaso (<b>vasculitis</b>). <b>Plana</b> = plaquetas o coagulación." },
  ],
  pista: "Presiona con un portaobjetos: si <b>no palidece</b>, es sangre fuera del vaso. Luego tócala: palpable = vasculitis.",
  estudios: ["BH con plaquetas y frotis", "TP, TTPa", "EGO y creatinina (vasculitis IgA, LES)", "Hemocultivos si hay fiebre"],
  figs: [{ src: "piel/tabla-6-8.jpg", pie: "Bates Tabla 6-8: lesiones vasculares y purpúricas" }],
  quiz: [
    { tipo: "mc", p: "Lesión que palidece a la presión:", ops: ["Petequia", "Araña vascular", "Equimosis", "Púrpura"], r: 1, exp: "" },
    { tipo: "mc", p: "Púrpura palpable en piernas de un niño con dolor abdominal y artralgias:", ops: ["PTI", "Vasculitis por IgA (Henoch-Schönlein)", "Escorbuto", "Leucemia"], r: 1, exp: "" },
    { tipo: "vf", p: "Petequias con fiebre en un paciente con mal estado general deben tratarse como urgencia.", r: true, exp: "Meningococcemia." },
  ],
});

ECOE.register("sindromes", {
  id: "ulcera-presion",
  sistema: "piel",
  orden: 9,
  emoji: "🛏️",
  titulo: "Úlcera por presión",
  resumen: "Lesión sobre prominencia ósea en paciente inmóvil; estadios 1–4 según profundidad.",
  definicion: "Daño de piel y tejidos por <b>presión sostenida</b> y <b>cizallamiento</b> que ocluyen la circulación sobre una prominencia ósea.",
  causas: ["Inmovilidad (encamados, lesión medular, sedación)", "Desnutrición, anemia", "Humedad (incontinencia), fricción", "Alteración de la sensibilidad (diabetes, EVC)"],
  sintomas: ["Dolor o ardor en la zona (si hay sensibilidad)", "Secreción, mal olor si se infecta"],
  inspeccionGeneral: "Valora el estado nutricional.",
  ippa: [
    { fase: "I", clave: "Sacro, trocánteres, talones, isquion, occipucio", detalle: "Estadio 1: eritema que no palidece, piel íntegra. 2: pérdida parcial, ampolla. 3: grasa subcutánea visible. 4: hueso, tendón o músculo expuesto. No estadificable: escara o esfacelo." },
    { fase: "P", clave: "Temperatura, induración, socavamiento", detalle: "Calor, celulitis o crepitación → infección; hueso palpable → osteomielitis." },
  ],
  pista: "Gira al paciente en cada exploración: <b>sacro y talones</b>. Lo más importante es la prevención: cambios de posición cada 2 horas.",
  estudios: ["Escalas de riesgo (Braden, Norton)", "Albúmina, BH", "Cultivo por biopsia si hay infección; RM o biopsia ósea si se sospecha osteomielitis"],
  figs: [{ src: "piel/tabla-6-13.jpg", pie: "Bates Tabla 6-13: úlceras por presión" }],
  quiz: [
    { tipo: "mc", p: "Estadio de úlcera con hueso expuesto:", ops: ["1", "2", "3", "4"], r: 3, exp: "" },
    { tipo: "mc", p: "Hallazgo de estadio 1:", ops: ["Ampolla", "Eritema que no palidece con piel íntegra", "Grasa visible", "Escara negra"], r: 1, exp: "" },
    { tipo: "vf", p: "Los cambios de posición frecuentes son la base de la prevención.", r: true, exp: "" },
  ],
});

ECOE.register("sindromes", {
  id: "displasia-ectodermica",
  sistema: "piel",
  orden: 10,
  emoji: "🧬",
  titulo: "Displasia ectodérmica",
  resumen: "Niño con pelo escaso, pocos dientes cónicos, uñas distróficas y que no suda (fiebres por calor).",
  definicion: "Grupo de enfermedades <b>genéticas</b> que alteran estructuras derivadas del <b>ectodermo</b>: piel, cabello, uñas, dientes y glándulas sudoríparas. La más conocida es la <b>hipohidrótica</b> (ligada al X, gen <i>EDA</i>).",
  causas: ["Variantes en genes <i>EDA</i>, <i>EDAR</i>, <i>EDARADD</i>, <i>WNT10A</i>, <i>TP63</i>", "Herencia ligada al X, autosómica o mutación nueva"],
  sintomas: ["<b>Hipohidrosis</b>: no suda, intolerancia al calor, <b>fiebres sin infección</b>", "Pelo escaso, fino y claro", "Dientes ausentes o cónicos, erupción tardía", "Piel seca, ojos y nariz secos"],
  inspeccionGeneral: "Hipertermia con el ejercicio o el calor.",
  ippa: [
    { fase: "I", clave: "Hipotricosis, hipodoncia, uñas distróficas", detalle: "Facies: frente prominente, puente nasal deprimido, labios gruesos, piel periorbitaria fina y oscura." },
    { fase: "P", clave: "Piel seca, fina, sin sudor", detalle: "" },
  ],
  pista: "Lactante con <b>fiebres repetidas sin causa</b> que no suda + pocos dientes cónicos: piensa en displasia ectodérmica hipohidrótica.",
  estudios: ["Diagnóstico clínico", "Prueba de sudor / conteo de poros", "Ortopantomografía", "Estudio genético"],
  quiz: [
    { tipo: "mc", p: "Riesgo principal de la forma hipohidrótica:", ops: ["Infecciones urinarias", "Hipertermia", "Hipoglucemia", "Sangrado"], r: 1, exp: "" },
    { tipo: "vf", p: "La displasia ectodérmica afecta piel, pelo, uñas, dientes y glándulas sudoríparas.", r: true, exp: "" },
  ],
});
