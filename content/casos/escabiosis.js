/* Caso de práctica elaborado para Estudiotron (no proviene de las presentaciones de clase). */
ECOE.register("casos", {
  id: "escabiosis",
  sistema: "piel",
  orden: 13,
  titulo: "Comezón que no deja dormir",
  resumen: "Consulta: mujer de 24 años con 4 semanas de comezón intensa por las noches; su pareja y su sobrino tienen lo mismo.",
  dificultad: "Básico",
  fuente: "Caso de práctica (elaborado)",
  paciente: {
    avatar: "👩",
    nombre: "D.S.P., 24 años",
    ficha: [["Sexo", "Femenino"], ["Ocupación", "Empleada de guardería"], ["Escolaridad", "Preparatoria"], ["Estado civil", "Unión libre"]],
    motivo: "“Tengo una comezón horrible, sobre todo en la noche; ya no duermo.”",
    escenario: "Consulta externa de medicina familiar.",
  },
  interrogatorio: [
    { q: "Padecimiento actual", a: "<b>4 semanas</b> con <b>comezón intensa que empeora de noche</b> y con el calor de las cobijas.", clave: true },
    { q: "¿Dónde le pica?", a: "<b>Entre los dedos de las manos</b>, muñecas, cintura, axilas y <b>debajo de los senos</b>; nunca en la cara.", clave: true },
    { q: "¿Alguien más en casa o en el trabajo tiene lo mismo?", a: "Su <b>pareja</b> empezó con comezón hace una semana; un <b>sobrino</b> de 3 años que cuida también. En la guardería hubo “casos de sarna”.", clave: true },
    { q: "¿Qué se ha aplicado?", a: "Pomada con corticoide de la farmacia: mejoró poco el enrojecimiento, no la comezón.", clave: true },
    { q: "¿Asma, rinitis o eccema de niña?", a: "Niega (orienta contra dermatitis atópica)." },
    { q: "¿Mascotas, nuevos jabones o cremas?", a: "Un gato vacunado y desparasitado; sin cambios de productos." },
    { q: "¿Fiebre o pus en las lesiones?", a: "Algunas tienen “costritas amarillas” desde hace 3 días.", clave: true },
  ],
  signos: [
    { l: "TA", v: "112/70" },
    { l: "FC", v: "76 lpm" },
    { l: "FR", v: "16 rpm" },
    { l: "Temp", v: "36.8 °C" },
  ],
  signosNota: "Afebril.",
  inspeccionGeneral: "Se rasca durante la consulta; luce desvelada.",
  exploracion: {
    regiones: [
      {
        id: "manos",
        nombre: "Manos y muñecas",
        maniobras: [
          { n: "Espacios interdigitales", fase: "I", rel: true, r: "<b>Pápulas eritematosas</b> de 1–2 mm y <b>trayectos lineales grisáceos</b> de 3–8 mm: <b>surcos acarinos</b>." },
          { n: "Cara anterior de muñecas", fase: "I", rel: true, r: "Pápulas excoriadas y un surco." },
          { n: "Uñas", fase: "I", rel: false, r: "Cortas, con restos bajo el borde libre." },
          { n: "Palpación de las pápulas", fase: "P", rel: false, r: "Pequeñas, firmes, no dolorosas." },
        ],
      },
      {
        id: "tronco",
        nombre: "Tronco y pliegues",
        maniobras: [
          { n: "Axilas, areolas y pliegues submamarios", fase: "I", rel: true, r: "Pápulas eritematosas excoriadas en pliegues axilares anteriores, <b>areolas</b> y submamarios." },
          { n: "Cintura y periumbilical", fase: "I", rel: true, r: "Pápulas y <b>excoriaciones lineales</b> en la línea del pantalón y el ombligo." },
          { n: "Glúteos", fase: "I", rel: true, r: "Pápulas excoriadas; varias con <b>costras melicéricas</b> (impetiginización)." },
          { n: "Espalda", fase: "I", rel: false, r: "Sin lesiones." },
        ],
      },
      {
        id: "cabeza",
        nombre: "Cara y cuero cabelludo",
        maniobras: [
          { n: "Cara y cuello", fase: "I", rel: true, r: "<b>Respetados</b> (típico del adulto)." },
          { n: "Cuero cabelludo (liendres)", fase: "I", rel: false, r: "Sin liendres ni piojos." },
        ],
      },
      {
        id: "ganglios",
        nombre: "Ganglios",
        maniobras: [
          { n: "Ganglios inguinales y axilares", fase: "P", rel: true, r: "Inguinales pequeños, levemente dolorosos (reactivos)." },
        ],
      },
    ],
  },
  sindromes: [
    { t: "Síndrome pruriginoso con predominio nocturno", ok: true, exp: "Prurito intenso nocturno que no responde a corticoide." },
    { t: "Dermatosis papular con surcos en pliegues y espacios interdigitales (escabiosis)", ok: true, exp: "Topografía típica + convivientes afectados." },
    { t: "Impetiginización secundaria", ok: true, exp: "Costras melicéricas en glúteos." },
    { t: "Dermatitis atópica", ok: false, exp: "Sin antecedente de atopia, sin xerosis ni liquenificación en pliegues flexores; afecta a convivientes." },
    { t: "Pediculosis capitis", ok: false, exp: "No hay liendres; la pediculosis afecta el cuero cabelludo." },
    { t: "Urticaria", ok: false, exp: "Las ronchas son transitorias (&lt; 24 h) y no dejan surcos." },
  ],
  estudios: [
    { t: "Raspado con aceite mineral de un surco (examen microscópico)", ok: true, resultado: "Se observa un <b>ácaro <i>Sarcoptes scabiei</i></b>, huevos y heces (escíbalos)." },
    { t: "Dermatoscopia", ok: true, resultado: "Signo del <b>“ala delta”</b> al final de un surco (la cabeza del ácaro)." },
    { t: "IgE total", ok: false, exp: "No aporta al diagnóstico." },
    { t: "Biopsia de piel", ok: false, exp: "Solo en casos atípicos." },
    { t: "KOH", ok: false, exp: "No hay datos de micosis." },
  ],
  diagnostico: [
    { t: "Escabiosis clásica con impetiginización secundaria; brote intrafamiliar e institucional", ok: true, exp: "Prurito nocturno, surcos en sitios típicos, convivientes afectados y ácaro en el raspado." },
    { t: "Dermatitis atópica del adulto", ok: false, exp: "Sin atopia; contactos afectados." },
    { t: "Dermatitis por contacto", ok: false, exp: "Sin exposición nueva; la topografía no coincide." },
    { t: "Escabiosis costrosa", ok: false, exp: "No hay placas hiperqueratósicas y es inmunocompetente." },
  ],
  cierre: {
    resumen: "<p>Mujer con <b>prurito nocturno</b> intenso, lesiones en <b>espacios interdigitales, muñecas, axilas, areolas, cintura y glúteos</b>, con la cara respetada, y <b>convivientes con el mismo cuadro</b>. Los <b>surcos acarinos</b> son la lesión patognomónica. El corticoide tópico no ayuda porque no elimina al ácaro. Hay impétigo secundario por el rascado.</p>",
    hallazgos: {
      cols: ["Sitio", "Hallazgo", "Qué significa"],
      filas: [
        ["Espacios interdigitales", "Surcos lineales grisáceos", "Túneles del ácaro (patognomónico)"],
        ["Pliegues, areolas, cintura", "Pápulas excoriadas", "Topografía de escabiosis"],
        ["Glúteos", "Costras melicéricas", "Impetiginización (S. aureus / estreptococo)"],
        ["Cara", "Respetada", "Típico en adultos"],
      ],
    },
    perlas: ["Pregunta <b>siempre</b> si alguien más tiene comezón.", "Busca los surcos en <b>espacios interdigitales y muñecas</b>.", "Trata a <b>todos los contactos al mismo tiempo</b> aunque no tengan síntomas.", "El prurito puede durar 2–4 semanas después de un tratamiento exitoso."],
    tratamiento: "<ul><li><b>Permetrina 5 %</b> de cuello a pies (en niños también cara y cuero cabelludo), 8–14 h, y <b>repetir a los 7 días</b>; alternativa: <b>ivermectina oral</b> 200 µg/kg, 2 dosis separadas 7–14 días.</li><li>Tratar al mismo tiempo a la pareja y al sobrino (permetrina en el niño); avisar a la guardería.</li><li>Lavar ropa, toallas y sábanas de los últimos 3 días con agua caliente; lo no lavable, en bolsa cerrada 1 semana.</li><li>Impétigo: mupirocina tópica (o antibiótico oral si es extenso).</li><li>Antihistamínico y emolientes para el prurito.</li></ul>",
  },
});
