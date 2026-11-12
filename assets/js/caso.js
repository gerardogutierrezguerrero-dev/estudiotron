/* Caso clínico simulado. Sigue la plantilla de los casos de clase:
   ficha → interrogatorio → signos vitales → exploración guiada → síndromes → estudios → diagnóstico → cierre.
   La exploración se puntúa por maniobras relevantes realizadas; el orden IPPA se vigila por región. */
window.Caso = (() => {
  const ETAPAS = ["Paciente", "Interrogatorio", "Signos vitales", "Exploración", "Síndromes", "Estudios", "Diagnóstico", "Resultado"];
  const ORDEN_IPPA = ["I", "P", "Pe", "A"];

  function mount(el, caso) {
    const st = {
      etapa: 0,
      preguntado: new Set(),
      hecho: new Set(),          // "región|índice maniobra"
      log: [],
      region: caso.exploracion.regiones[0].id,
      sx: null, est: null, dx: null,
    };

    const go = n => { st.etapa = n; render(); window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" }); };

    function stages() {
      return `<div class="case-stages">${ETAPAS.map((e, k) =>
        `<span class="${k < st.etapa ? "done" : k === st.etapa ? "now" : ""}">${k + 1}. ${e}</span>`).join("")}</div>`;
    }

    function nav(next = true, label = "Continuar →") {
      return `<div class="btn-row">${st.etapa > 0 && st.etapa < 7 ? `<button class="btn ghost" data-prev>← Atrás</button>` : ""}
        ${next ? `<button class="btn" data-next>${label}</button>` : ""}</div>`;
    }

    /* ---------- etapas ---------- */
    function ePaciente() {
      const p = caso.paciente;
      return `<div class="box"><div class="patient"><div class="avatar">${p.avatar || "🧑"}</div><div>
          <h3>${p.nombre}</h3><dl class="kv">${p.ficha.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></div></div>
        <div class="callout" style="margin-top:14px"><b>Motivo de consulta</b>${p.motivo}</div>
        ${p.escenario ? `<p class="muted small">${p.escenario}</p>` : ""}</div>${nav()}`;
    }

    function eInterrogatorio() {
      return `<p>Elige qué interrogar. Las preguntas marcadas con ⭐ al revelarse eran las que más orientaban.</p>
        <div class="ask-list">${caso.interrogatorio.map((q, k) => {
          const open = st.preguntado.has(k);
          return `<div class="ask ${open ? "open" : ""}"><button data-ask="${k}"><span>${q.q}</span><span>${open ? (q.clave ? "⭐" : "✓") : "＋"}</span></button>
            ${open ? `<div class="ans">${q.a}</div>` : ""}</div>`;
        }).join("")}</div>${nav()}`;
    }

    function eSignos() {
      return `<div class="vitals">${caso.signos.map(s => `<div class="vital ${s.estado || ""}"><div class="v">${s.v}</div><div class="l">${s.l}</div></div>`).join("")}</div>
        ${caso.signosNota ? `<div class="callout warn"><b>¿Qué te dicen los signos?</b>${caso.signosNota}</div>` : ""}
        ${caso.inspeccionGeneral ? `<div class="box" style="margin-top:12px"><b>Inspección general (al entrar al cubículo):</b> ${caso.inspeccionGeneral}</div>` : ""}
        ${nav()}`;
    }

    function eExploracion() {
      const regs = caso.exploracion.regiones;
      const reg = regs.find(r => r.id === st.region);
      const cuenta = r => r.maniobras.filter((_, k) => st.hecho.has(r.id + "|" + k)).length;
      return `<p>Selecciona la región y realiza las maniobras <b>en orden</b>. Revela el hallazgo de cada una; no todas son útiles en este paciente.</p>
        <div class="exam-layout"><div class="regions">${regs.map(r =>
          `<button class="region-btn ${r.id === st.region ? "active" : ""}" data-reg="${r.id}">${r.nombre}<span class="cnt">${cuenta(r)}/${r.maniobras.length}</span></button>`).join("")}</div>
        <div><div class="maniobras">${reg.maniobras.map((m, k) => {
          const done = st.hecho.has(reg.id + "|" + k);
          return `<div class="man ${done ? "done" : ""} ${m.rel ? "" : "irrelevant"}">
            <button data-man="${k}" ${done ? "disabled" : ""}>${C.faseChip(m.fase)} <span>${m.n}</span></button>
            ${done ? `<div class="res">${m.r}${m.rel ? "" : ` <span class="chip">poco útil aquí</span>`}</div>` : ""}</div>`;
        }).join("")}</div>
        ${st.log.length ? `<div class="callout warn" style="margin-top:12px"><b>Observaciones del evaluador</b>${st.log.slice(-3).join("<br>")}</div>` : ""}
        </div></div>${nav(true, "Terminar exploración →")}`;
    }

    function checks(lista, sel, revisado, name, multi = true) {
      return `<div class="checks">${lista.map((o, k) => {
        let cls = "";
        if (revisado) cls = sel.has(k) ? (o.ok ? "correct" : "wrong") : (o.ok ? "missed" : "");
        return `<label class="check ${cls}"><input type="${multi ? "checkbox" : "radio"}" name="${name}" value="${k}" ${sel.has(k) ? "checked" : ""} ${revisado ? "disabled" : ""}>
          <span>${o.t}${revisado && (sel.has(k) || o.ok) && o.exp ? `<span class="exp">${o.exp}</span>` : ""}</span></label>`;
      }).join("")}</div>`;
    }

    function eSindromes() {
      const rev = !!st.sx;
      return `<p>Con lo que interrogaste y exploraste, ¿qué <b>síndromes</b> integras? (elige todos los que apliquen)</p>
        ${checks(caso.sindromes, st.sx || new Set(), rev, "sx")}
        ${rev ? `<div class="small muted" style="margin-top:8px">Verde = correcto · Rojo = no corresponde · Amarillo = te faltó</div>${nav()}`
              : `<div class="btn-row"><button class="btn ghost" data-prev>← Atrás</button><button class="btn" data-check="sx">Revisar</button></div>`}`;
    }

    function eEstudios() {
      const rev = !!st.est;
      return `<p>¿Qué <b>estudios iniciales</b> solicitarías?</p>
        ${checks(caso.estudios, st.est || new Set(), rev, "est")}
        ${rev ? `<h3 style="margin-top:18px">Resultados</h3>${caso.estudios.filter((o, k) => o.resultado && (o.ok || st.est.has(k)))
            .map(o => `<div class="box lab"><b>${o.t}</b><div>${o.resultado}</div></div>`).join("")}${nav()}`
              : `<div class="btn-row"><button class="btn ghost" data-prev>← Atrás</button><button class="btn" data-check="est">Pedir estudios</button></div>`}`;
    }

    function eDiagnostico() {
      const rev = st.dx != null;
      return `<p>¿Cuál es el <b>diagnóstico nosológico</b> más probable?</p>
        ${checks(caso.diagnostico, rev ? new Set([st.dx]) : new Set(), rev, "dx", false)}
        ${rev ? nav(true, "Ver resultado →") : `<div class="btn-row"><button class="btn ghost" data-prev>← Atrás</button><button class="btn" data-check="dx">Confirmar</button></div>`}`;
    }

    function puntaje() {
      const rel = [];
      caso.exploracion.regiones.forEach(r => r.maniobras.forEach((m, k) => m.rel && rel.push({ r, m, k })));
      const hechas = rel.filter(x => st.hecho.has(x.r.id + "|" + x.k));
      const pExp = rel.length ? hechas.length / rel.length : 1;
      const frac = (lista, sel) => {
        const buenas = lista.filter(o => o.ok).length;
        let pts = 0;
        lista.forEach((o, k) => { if (sel.has(k)) pts += o.ok ? 1 : -0.5; });
        return Math.max(0, pts / buenas);
      };
      const pSx = frac(caso.sindromes, st.sx || new Set());
      const pEst = frac(caso.estudios, st.est || new Set());
      const pDx = st.dx != null && caso.diagnostico[st.dx].ok ? 1 : 0;
      const total = Math.round((pExp * 0.4 + pSx * 0.25 + pEst * 0.1 + pDx * 0.25) * 100);
      const faltantes = rel.filter(x => !st.hecho.has(x.r.id + "|" + x.k));
      return { pExp, pSx, pEst, pDx, total, faltantes };
    }

    function eResultado() {
      const s = puntaje();
      const best = U.load("caso." + caso.id, null);
      if (!best || s.total > best.pct) U.save("caso." + caso.id, { pct: s.total, fecha: Date.now() });
      const bar = (l, v) => `<div style="margin:6px 0"><div class="small">${l} · ${Math.round(v * 100)}%</div><div class="progress"><div style="width:${v * 100}%"></div></div></div>`;
      const c = caso.cierre;
      return `<div class="box" style="text-align:center"><div class="score-big">${s.total}%</div><p>Puntaje global del caso</p></div>
        <div class="box" style="margin-top:12px">${bar("Exploración física (40%)", s.pExp)}${bar("Síndromes (25%)", s.pSx)}${bar("Estudios (10%)", s.pEst)}${bar("Diagnóstico (25%)", s.pDx)}</div>
        ${s.faltantes.length ? `<div class="callout warn"><b>Maniobras clave que no realizaste</b>${s.faltantes.map(x => `${x.r.nombre}: ${x.m.n}`).join("<br>")}</div>`
                              : `<div class="callout ok"><b>¡Exploración completa!</b>Realizaste todas las maniobras relevantes.</div>`}
        <h2>Cierre del caso</h2>
        <div class="box">${c.resumen}</div>
        ${c.hallazgos ? `<h3 style="margin-top:16px">Hallazgos que debías encontrar</h3>${C.tabla(c.hallazgos)}` : ""}
        ${c.perlas ? `<div class="callout ok"><b>Perlas ECOE</b>${C.list(c.perlas)}</div>` : ""}
        ${c.tratamiento ? `<h3>Manejo inicial</h3><div class="box">${c.tratamiento}</div>` : ""}
        <div class="btn-row"><button class="btn" data-restart>↻ Repetir caso</button><a class="btn ghost" href="#/ecoe/casos">Otros casos</a></div>`;
    }

    /* ---------- render + eventos ---------- */
    function render() {
      const vistas = [ePaciente, eInterrogatorio, eSignos, eExploracion, eSindromes, eEstudios, eDiagnostico, eResultado];
      el.innerHTML = stages() + `<h2 style="margin-top:4px">${ETAPAS[st.etapa]}</h2>` + vistas[st.etapa]();
      wire();
    }

    function wire() {
      const $ = s => el.querySelector(s);
      const next = $("[data-next]"); if (next) next.onclick = () => go(st.etapa + 1);
      const prev = $("[data-prev]"); if (prev) prev.onclick = () => go(st.etapa - 1);
      const rs = $("[data-restart]"); if (rs) rs.onclick = () => mount(el, caso);
      el.querySelectorAll("[data-ask]").forEach(b => b.onclick = () => { st.preguntado.add(+b.dataset.ask); render(); });
      el.querySelectorAll("[data-reg]").forEach(b => b.onclick = () => { st.region = b.dataset.reg; render(); });
      el.querySelectorAll("[data-man]").forEach(b => b.onclick = () => {
        const reg = caso.exploracion.regiones.find(r => r.id === st.region);
        const k = +b.dataset.man, m = reg.maniobras[k];
        const orden = reg.orden || ORDEN_IPPA;
        const pos = orden.indexOf(m.fase);
        // ¿Se saltó una fase anterior que aún no se hace en esta región?
        const saltada = reg.maniobras.some((o, j) => !st.hecho.has(reg.id + "|" + j) && o.rel && orden.indexOf(o.fase) > -1 && orden.indexOf(o.fase) < pos);
        if (pos > -1 && saltada) st.log.push(`En <b>${reg.nombre}</b> pasaste a ${C.FASES[m.fase].toLowerCase()} sin completar fases previas. Orden: ${orden.map(f => C.FASES[f]).join(" → ")}.`);
        st.hecho.add(reg.id + "|" + k);
        render();
      });
      el.querySelectorAll("[data-check]").forEach(b => b.onclick = () => {
        const name = b.dataset.check;
        const sel = new Set([...el.querySelectorAll(`input[name=${name}]:checked`)].map(i => +i.value));
        if (name === "dx") { if (!sel.size) return; st.dx = [...sel][0]; }
        else st[name] = sel;
        render();
      });
    }

    render();
  }

  return { mount };
})();
