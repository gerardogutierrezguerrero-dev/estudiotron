/* Router por hash y vistas. */
(() => {
  const app = document.getElementById("app");

  /* ---------- Tema ---------- */
  const root = document.documentElement;
  const tema = U.load("tema", null);
  if (tema) root.dataset.theme = tema;
  document.getElementById("themeBtn").onclick = () => {
    const oscuro = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = oscuro ? "light" : "dark";
    U.save("tema", root.dataset.theme);
  };

  /* ---------- Lightbox y saltos internos ---------- */
  const lb = document.getElementById("lightbox");
  document.addEventListener("click", e => {
    const z = e.target.closest("[data-zoom]");
    if (z) {
      lb.querySelector("img").src = z.dataset.zoom;
      lb.querySelector(".lightbox-cap").textContent = z.dataset.cap || "";
      lb.hidden = false;
      return;
    }
    if (e.target.closest(".lightbox")) lb.hidden = true;
    const j = e.target.closest("[data-jump]");
    if (j) document.getElementById(j.dataset.jump)?.scrollIntoView({ behavior: "smooth" });
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

  /* ---------- Utilidades de vista ---------- */
  const crumbs = items => `<div class="crumbs">${items.map(([t, h]) => (h ? `<a href="${h}">${t}</a>` : t)).join(" › ")}</div>`;
  const bestChip = key => {
    const b = U.load(key, null);
    return b ? `<span class="chip ${b.pct >= 80 ? "ok" : ""}">Mejor: ${b.pct}%</span>` : "";
  };

  const cardSistema = s => `<a class="card" href="#/ecoe/sistema/${s.id}">
      <div class="emoji">${s.emoji}</div><h3>${s.titulo}</h3><p class="muted small">${s.resumen}</p>
      <span class="chip accent">${s.capitulo}</span>${bestChip("quiz.sis-" + s.id)}</a>`;
  const cardSindrome = s => `<a class="card" href="#/ecoe/sindrome/${s.id}">
      <div class="emoji">${s.emoji || "🔎"}</div><h3>${s.titulo}</h3><p class="muted small">${s.resumen}</p>
      <span class="chip">${ECOE.sistemas[s.sistema]?.titulo || ""}</span>${bestChip("quiz.sx-" + s.id)}</a>`;
  const cardCaso = c => `<a class="card" href="#/ecoe/caso/${c.id}">
      <div class="emoji">${c.paciente.avatar}</div><h3>${c.titulo}</h3><p class="muted small">${c.resumen}</p>
      <span class="chip">${ECOE.sistemas[c.sistema]?.titulo || ""}</span><span class="chip">${c.dificultad}</span>${bestChip("caso." + c.id)}</a>`;

  /* ---------- Vistas ---------- */
  function home() {
    const secs = [
      ["📚", "Materias", "Contenido por materia.", "#/materias", false],
      ["🗓️", "Semestre", "Organización por semestre.", "#/semestre", false],
      ["🩺", "ECOE", "Exploración física orientada al diagnóstico: por sistema, por síndrome y casos simulados.", "#/ecoe", true],
      ["🌎", "STEPS", "Preparación USMLE.", "#/steps", false],
    ];
    app.innerHTML = `<div class="hero"><h1>Estudiotron</h1><p class="muted">Tu plataforma de estudio. Empieza por ECOE.</p></div>
      <div class="grid">${secs.map(([e, t, d, h, on]) => `<a class="card ${on ? "" : "disabled"}" href="${h}">
        <div class="emoji">${e}</div><h3>${t}</h3><p class="muted small">${d}</p>${on ? `<span class="chip accent">Disponible</span>` : `<span class="chip">Próximamente</span>`}</a>`).join("")}</div>`;
  }

  function pronto(nombre) {
    app.innerHTML = `<div class="empty"><div class="emoji">🚧</div><h1>${nombre}</h1><p class="muted">Esta sección está en construcción.</p>
      <a class="btn" href="#/ecoe">Ir a ECOE</a></div>`;
  }

  /* ---------- Progreso ---------- */
  const DOMINADO = 80;
  // Cada examen o caso es un "pendiente" con su clave de localStorage.
  function pendientes() {
    return ECOE.list("sistemas").map(sis => {
      const items = [{ tipo: "Examen del sistema", titulo: sis.titulo, emoji: "📝", href: `#/ecoe/sistema/${sis.id}#examen-rapido`, key: "quiz.sis-" + sis.id }]
        .concat(ECOE.list("sindromes").filter(s => s.sistema === sis.id)
          .map(s => ({ tipo: "Síndrome", titulo: s.titulo, emoji: s.emoji || "🔎", href: `#/ecoe/sindrome/${s.id}`, key: "quiz.sx-" + s.id })))
        .concat(ECOE.list("casos").filter(c => c.sistema === sis.id)
          .map(c => ({ tipo: "Caso simulado", titulo: c.titulo, emoji: c.paciente.avatar, href: `#/ecoe/caso/${c.id}`, key: "caso." + c.id })));
      items.forEach(it => { it.best = U.load(it.key, null); });
      return { sis, items };
    });
  }
  const estado = it => (!it.best ? "nuevo" : it.best.pct >= DOMINADO ? "ok" : "repasar");
  const pctChip = it => {
    const e = estado(it);
    if (e === "nuevo") return `<span class="chip">Sin intentar</span>`;
    return `<span class="chip ${e === "ok" ? "ok" : "warn"}">${it.best.pct}%</span>`;
  };
  const fecha = ms => new Date(ms).toLocaleDateString("es-MX", { day: "numeric", month: "short" });
  const fila = it => `<a class="prog-row" href="${it.href}"><span class="prog-ico">${it.emoji}</span>
      <span class="prog-txt"><b>${it.titulo}</b><span class="muted small">${it.tipo}${it.best ? " · " + fecha(it.best.fecha) : ""}</span></span>${pctChip(it)}</a>`;
  const barra = (v, cls = "") => `<div class="progress ${cls}"><div style="width:${v}%"></div></div>`;

  function progreso() {
    const grupos = pendientes();
    const todos = grupos.flatMap(g => g.items);
    const hechos = todos.filter(it => it.best), ok = todos.filter(it => estado(it) === "ok");
    const repasar = todos.filter(it => estado(it) === "repasar").sort((a, b) => a.best.pct - b.best.pct);
    // Sugerencia: el primer pendiente sin intentar de cada sistema, en orden del temario.
    const siguientes = grupos.map(g => g.items.find(it => !it.best)).filter(Boolean).slice(0, 6);
    const ultimo = hechos.slice().sort((a, b) => b.best.fecha - a.best.fecha)[0];
    const pct = n => (todos.length ? Math.round((n / todos.length) * 100) : 0);
    const porTipo = tipo => {
      const t = todos.filter(it => it.tipo === tipo);
      return { n: t.length, hechos: t.filter(it => it.best).length, ok: t.filter(it => estado(it) === "ok").length };
    };
    const tile = (emoji, titulo, d) => `<div class="box stat"><div class="stat-top"><span>${emoji} ${titulo}</span><b>${d.hechos}/${d.n}</b></div>
        ${barra(d.n ? (d.hechos / d.n) * 100 : 0)}<div class="muted small">${d.ok} dominados</div></div>`;

    return `
      <div class="box prog-hero">
        <div class="prog-big"><b>${pct(ok.length)}%</b><span class="muted small">dominado</span></div>
        <div class="prog-hero-txt">
          <p><b>${ok.length}</b> de ${todos.length} exámenes y casos con ${DOMINADO}% o más · <b>${hechos.length}</b> intentados.</p>
          <div class="progress stack"><div class="ok" style="width:${pct(ok.length)}%"></div><div class="warn" style="width:${pct(repasar.length)}%"></div></div>
          <p class="muted small"><span class="dot ok"></span>Dominado <span class="dot warn"></span>Por repasar <span class="dot"></span>Sin intentar
          ${ultimo ? ` · Última actividad: ${fecha(ultimo.best.fecha)}, ${ultimo.titulo}` : ""}</p>
        </div>
      </div>
      <div class="grid stats">${tile("📝", "Exámenes de sistema", porTipo("Examen del sistema"))}${tile("🔎", "Síndromes", porTipo("Síndrome"))}${tile("🧑‍⚕️", "Casos simulados", porTipo("Caso simulado"))}</div>
      <div class="cols2">
        <section class="section"><h2>🔁 Repasa primero</h2>
          ${repasar.length ? `<div class="prog-list">${repasar.slice(0, 8).map(fila).join("")}</div>`
            : `<p class="muted">${hechos.length ? "Todo lo que has intentado está dominado. 🏆" : "Aquí aparecerá lo que saques con menos de " + DOMINADO + "%."}</p>`}
        </section>
        <section class="section"><h2>➡️ Te falta empezar</h2>
          ${siguientes.length ? `<div class="prog-list">${siguientes.map(fila).join("")}</div>` : `<p class="muted">Ya intentaste todo. 🎉</p>`}
        </section>
      </div>
      <section class="section"><h2>Por sistema</h2>
        ${grupos.map(({ sis, items }) => {
          const h = items.filter(it => it.best).length, d = items.filter(it => estado(it) === "ok").length;
          return `<details class="box prog-sis"><summary><span class="prog-ico">${sis.emoji}</span>
            <span class="prog-txt"><b>${sis.titulo}</b><span class="muted small">${h}/${items.length} intentados · ${d} dominados</span>${barra((d / items.length) * 100, "thin")}</span></summary>
            <div class="prog-list">${items.map(fila).join("")}</div></details>`;
        }).join("")}
      </section>
      <div class="btn-row"><button class="btn ghost" id="resetProg" ${hechos.length ? "" : "disabled"}>Borrar mi progreso</button></div>
      <p class="muted small">Tu progreso se guarda solo en este navegador. Se cuenta tu mejor intento de cada examen y caso; “dominado” es ${DOMINADO}% o más.</p>`;
  }

  function resetProgreso() {
    if (!confirm("¿Borrar todos tus puntajes de exámenes y casos? No se puede deshacer.")) return;
    try {
      Object.keys(localStorage).filter(k => /^estudiotron\.(quiz|caso)\./.test(k)).forEach(k => localStorage.removeItem(k));
    } catch (e) { /* sin persistencia */ }
    route();
  }

  function ecoe(tab = "sistemas") {
    const tabs = [["sistemas", "🫀 Por sistema"], ["sindromes", "🔎 Por síndrome"], ["casos", "🧑‍⚕️ Casos simulados"], ["progreso", "📊 Mi progreso"]];
    let lista;
    if (tab === "sistemas") lista = ECOE.list("sistemas").map(cardSistema).join("");
    if (tab === "sindromes") {
      // Agrupados por sistema
      lista = ECOE.list("sistemas").map(sis => {
        const sx = ECOE.list("sindromes").filter(s => s.sistema === sis.id);
        return sx.length ? `<h2>${sis.emoji} ${sis.titulo}</h2><div class="grid">${sx.map(cardSindrome).join("")}</div>` : "";
      }).join("");
    }
    if (tab === "casos") lista = ECOE.list("casos").map(cardCaso).join("");
    if (tab === "progreso") lista = progreso();
    app.innerHTML = `${crumbs([["Inicio", "#/"], ["ECOE"]])}
      <div class="hero"><h1>🩺 ECOE · Exploración física</h1>
        <p class="muted">Guía paso a paso basada en <i>Bates. Guía de exploración física</i> (12ª ed.) y los resúmenes de clase.
        Cada tema termina con un examen rápido; los casos simulados te guían por la consulta completa.</p></div>
      <input class="search" id="q" placeholder="Buscar sistema, síndrome, signo o maniobra…">
      <div id="res"></div>
      <div id="body"><div class="tabs">${tabs.map(([k, t]) => `<a class="${k === tab ? "active" : ""}" href="#/ecoe/${k}">${t}</a>`).join("")}</div>
      ${tab === "sindromes" || tab === "progreso" ? lista : `<div class="grid">${lista}</div>`}</div>`;
    const rb = document.getElementById("resetProg");
    if (rb) rb.onclick = resetProgreso;
    const q = document.getElementById("q");
    q.oninput = () => buscar(q.value);
  }

  function buscar(txt) {
    const res = document.getElementById("res"), body = document.getElementById("body");
    const t = U.slug(txt);
    if (t.length < 2) { res.innerHTML = ""; body.hidden = false; return; }
    const hay = o => U.slug(JSON.stringify(o)).includes(t);
    const s = ECOE.list("sistemas").filter(hay), x = ECOE.list("sindromes").filter(hay), c = ECOE.list("casos").filter(hay);
    body.hidden = true;
    res.innerHTML = s.length + x.length + c.length
      ? `<div class="grid">${s.map(cardSistema).join("")}${x.map(cardSindrome).join("")}${c.map(cardCaso).join("")}</div>`
      : `<p class="muted">Sin resultados para “${U.esc(txt)}”.</p>`;
  }

  function sistema(id) {
    const s = ECOE.sistemas[id];
    if (!s) return pronto("No encontrado");
    // Propios del sistema + los que el sistema declara como relacionados (viven en otro sistema).
    const sx = ECOE.list("sindromes").filter(x => x.sistema === id)
      .concat((s.relacionados || []).map(r => ECOE.sindromes[r]).filter(Boolean));
    const titulos = ["Mapa mental", ...s.secciones.map(x => x.titulo), "Síndromes", "Examen rápido"];
    app.innerHTML = `${crumbs([["Inicio", "#/"], ["ECOE", "#/ecoe"], ["Sistemas", "#/ecoe/sistemas"], [s.titulo]])}
      <div class="page-head"><div class="emoji">${s.emoji}</div><div><h1>${s.titulo}</h1>
        <span class="chip accent">${s.capitulo}</span></div></div>
      <p>${s.intro}</p>${C.toc(titulos)}
      <section class="section" id="mapa-mental"><h2>Mapa mental</h2>${C.mapa(s.mapa)}</section>
      ${s.secciones.map(C.seccion).join("")}
      <section class="section" id="sindromes"><h2>Síndromes de este sistema</h2><div class="grid">${sx.map(cardSindrome).join("")}</div></section>
      <section class="section" id="examen-rapido"><h2>Examen rápido</h2><div id="quiz"></div></section>
      <p class="foot-src">Fuente principal: Bickley LS. <i>Bates’ Guide to Physical Examination and History Taking</i>, 12ª ed., ${s.capitulo}. Figuras y tablas reproducidas para estudio personal.</p>`;
    Q.mount(document.getElementById("quiz"), "sis-" + id, s.quiz, "Examen rápido · " + s.titulo);
  }

  function sindrome(id) {
    const s = ECOE.sindromes[id];
    if (!s) return pronto("No encontrado");
    const sis = ECOE.sistemas[s.sistema];
    const hermanos = ECOE.list("sindromes").filter(x => x.sistema === s.sistema && x.id !== id);
    app.innerHTML = `${crumbs([["Inicio", "#/"], ["ECOE", "#/ecoe"], ["Síndromes", "#/ecoe/sindromes"], [s.titulo]])}
      <div class="page-head"><div class="emoji">${s.emoji || "🔎"}</div><div><h1>${s.titulo}</h1>
        <a class="chip accent" href="#/ecoe/sistema/${sis.id}">${sis.emoji} ${sis.titulo}</a></div></div>
      <div class="callout"><b>Definición</b>${s.definicion}</div>
      <div class="cols2">
        <div class="box"><h3>🧬 Causas principales</h3>${C.list(s.causas)}</div>
        <div class="box"><h3>🗣️ Síntomas (interrogatorio)</h3>${C.list(s.sintomas)}</div>
      </div>
      <section class="section" id="exploracion"><h2>Exploración física (IPPA)</h2>
        ${s.inspeccionGeneral ? `<p><b>Inspección general / signos vitales:</b> ${s.inspeccionGeneral}</p>` : ""}
        ${C.ippa(s.ippa)}
        ${s.pista ? `<div class="callout ok"><b>🎯 Pista ECOE</b>${s.pista}</div>` : ""}
      </section>
      ${(s.secciones || []).map(C.seccion).join("")}
      ${s.diferenciales ? `<section class="section" id="dif"><h2>Diagnóstico diferencial</h2>${C.tabla(s.diferenciales)}</section>` : ""}
      ${s.estudios ? `<section class="section"><h2>Estudios iniciales</h2><div class="box">${C.list(s.estudios)}</div></section>` : ""}
      ${s.figs ? `<section class="section"><h2>Imágenes de apoyo</h2><div class="figs">${s.figs.map(f => C.fig(f)).join("")}</div></section>` : ""}
      ${s.mapa ? `<section class="section"><h2>Mapa mental</h2>${C.mapa(s.mapa)}</section>` : ""}
      <section class="section"><h2>Examen rápido</h2><div id="quiz"></div></section>
      ${hermanos.length ? `<section class="section"><h2>Otros síndromes de ${sis.titulo}</h2><div class="grid">${hermanos.map(cardSindrome).join("")}</div></section>` : ""}
      <p class="foot-src">Fuentes: Bates 12ª ed. (${sis.capitulo}) y resúmenes colaborativos de clase (Dr. Yépiz).</p>`;
    Q.mount(document.getElementById("quiz"), "sx-" + id, s.quiz, "Examen rápido · " + s.titulo);
  }

  function caso(id) {
    const c = ECOE.casos[id];
    if (!c) return pronto("No encontrado");
    app.innerHTML = `${crumbs([["Inicio", "#/"], ["ECOE", "#/ecoe"], ["Casos", "#/ecoe/casos"], [c.titulo]])}
      <div class="page-head"><div class="emoji">🧑‍⚕️</div><div><h1>${c.titulo}</h1><span class="chip">${c.dificultad}</span>
      <span class="chip">${c.fuente}</span></div></div><div id="caso"></div>`;
    Caso.mount(document.getElementById("caso"), c);
  }

  /* ---------- Router ---------- */
  function route() {
    // "#/ecoe/sistema/torax#examen-rapido": la parte tras el segundo # es un ancla de la página.
    const [ruta, ancla] = (location.hash.replace(/^#\/?/, "") || "").split("#");
    const [sec, a, b] = ruta.split("/").filter(Boolean);
    document.querySelectorAll("#topnav a").forEach(x => x.classList.toggle("active", x.dataset.sec === sec));
    window.scrollTo(0, 0);
    render(sec, a, b);
    if (ancla) document.getElementById(ancla)?.scrollIntoView();
  }
  function render(sec, a, b) {
    if (!sec) return home();
    if (sec === "ecoe") {
      if (!a || ["sistemas", "sindromes", "casos", "progreso"].includes(a)) return ecoe(a || "sistemas");
      if (a === "sistema") return sistema(b);
      if (a === "sindrome") return sindrome(b);
      if (a === "caso") return caso(b);
    }
    const nombres = { materias: "Materias", semestre: "Semestre", steps: "STEPS" };
    pronto(nombres[sec] || "No encontrado");
  }
  addEventListener("hashchange", route);
  route();
})();
