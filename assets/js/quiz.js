/* Examen rápido: una pregunta a la vez, retroalimentación inmediata y mejor puntaje guardado.
   Tipos de pregunta:
     { tipo: "mc",  p, ops: [...], r: índiceCorrecto, exp }
     { tipo: "vf",  p, r: true|false, exp }
     { tipo: "rel", p, pares: [[izquierda, derecha], ...], exp }   (relacionar columnas) */
window.Q = (() => {
  function mount(el, id, preguntas, titulo = "Examen rápido") {
    let orden, i, aciertos, fallos;

    const best = () => U.load("quiz." + id, null);

    function start() {
      orden = U.shuffle(preguntas);
      i = 0; aciertos = 0; fallos = [];
      show();
    }

    function header() {
      const b = best();
      return `<div class="quiz-top"><h3 style="margin:0">📝 ${titulo}</h3>
        <span class="best">${b ? `Mejor: ${b.pct}%` : "Sin intentos"} · ${preguntas.length} preguntas</span></div>
        <div class="progress"><div style="width:${(i / orden.length) * 100}%"></div></div>`;
    }

    function show() {
      const q = orden[i];
      let body = "";
      if (q.tipo === "mc") {
        q._ops = U.shuffle(q.ops.map((t, k) => ({ t, ok: k === q.r })));
        body = `<div class="opts">${q._ops.map((o, k) => `<button class="opt" data-k="${k}">${o.t}</button>`).join("")}</div>`;
      } else if (q.tipo === "vf") {
        body = `<div class="opts"><button class="opt" data-vf="1">Verdadero</button><button class="opt" data-vf="0">Falso</button></div>`;
      } else if (q.tipo === "rel") {
        const der = U.shuffle(q.pares.map(p => p[1]));
        body = `<div class="match">${q.pares.map((p, k) => `<div class="match-row"><div>${p[0]}</div><div>
            <select data-k="${k}"><option value="">— elegir —</option>${der.map(d => `<option>${d}</option>`).join("")}</select></div></div>`).join("")}</div>
          <div class="btn-row"><button class="btn" data-check>Revisar</button></div>`;
      }
      el.innerHTML = `<div class="quiz">${header()}
        <div class="muted small">Pregunta ${i + 1} de ${orden.length}</div>
        <div class="q-text">${q.p}</div>${body}<div data-fb></div></div>`;
      wire(q);
    }

    function feedback(q, ok) {
      if (ok) aciertos++; else fallos.push(q);
      el.querySelector("[data-fb]").innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}">
          <b>${ok ? "✓ Correcto" : "✗ Incorrecto"}</b>${q.exp ? ` — ${q.exp}` : ""}</div>
        <div class="btn-row"><button class="btn" data-next>${i + 1 < orden.length ? "Siguiente →" : "Ver resultado"}</button></div>`;
      el.querySelector("[data-next]").onclick = () => { i++; i < orden.length ? show() : end(); };
    }

    function wire(q) {
      if (q.tipo === "mc") {
        el.querySelectorAll(".opt").forEach(b => b.onclick = () => {
          const k = +b.dataset.k;
          el.querySelectorAll(".opt").forEach((x, j) => {
            x.disabled = true;
            if (q._ops[j].ok) x.classList.add("correct");
          });
          if (!q._ops[k].ok) b.classList.add("wrong");
          feedback(q, q._ops[k].ok);
        });
      } else if (q.tipo === "vf") {
        el.querySelectorAll(".opt").forEach(b => b.onclick = () => {
          const v = b.dataset.vf === "1";
          el.querySelectorAll(".opt").forEach(x => {
            x.disabled = true;
            if ((x.dataset.vf === "1") === q.r) x.classList.add("correct");
          });
          if (v !== q.r) b.classList.add("wrong");
          feedback(q, v === q.r);
        });
      } else if (q.tipo === "rel") {
        el.querySelector("[data-check]").onclick = e => {
          let ok = true;
          el.querySelectorAll("select").forEach(s => {
            const good = s.value === q.pares[+s.dataset.k][1];
            s.parentElement.className = good ? "ok" : "bad";
            if (!good) {
              ok = false;
              s.insertAdjacentHTML("afterend", `<div class="small" style="margin-top:4px">→ ${q.pares[+s.dataset.k][1]}</div>`);
            }
            s.disabled = true;
          });
          e.target.remove();
          feedback(q, ok);
        };
      }
    }

    function end() {
      const pct = Math.round((aciertos / orden.length) * 100);
      const b = best();
      if (!b || pct > b.pct) U.save("quiz." + id, { pct, fecha: Date.now() });
      const msg = pct >= 90 ? "¡Dominado! 🏆" : pct >= 70 ? "Bien, repasa los fallos 👍" : "Vuelve a la guía y reintenta 📚";
      el.innerHTML = `<div class="quiz">${header()}
        <div style="text-align:center"><div class="score-big">${pct}%</div>
          <p>${aciertos} de ${orden.length} correctas · ${msg}</p></div>
        ${fallos.length ? `<h4>Repasa:</h4><ul>${fallos.map(q => `<li><b>${q.p}</b>${q.exp ? `<br><span class="muted small">${q.exp}</span>` : ""}</li>`).join("")}</ul>` : ""}
        <div class="btn-row" style="justify-content:center"><button class="btn" data-retry>↻ Reintentar</button></div></div>`;
      el.querySelector("[data-retry]").onclick = start;
    }

    start();
  }

  return { mount };
})();
