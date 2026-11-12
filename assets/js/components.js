/* Componentes visuales. Cada función recibe datos del contenido y devuelve HTML. */
window.C = (() => {
  // IPPA para la mayoría de los sistemas; el neurológico usa sus propias etapas.
  const FASES = {
    I: "Inspección", P: "Palpación", Pe: "Percusión", A: "Auscultación",
    M: "Estado mental", NC: "Pares craneales", Mo: "Motor", S: "Sensibilidad", R: "Reflejos",
    Ar: "Arcos de movilidad", Mn: "Maniobras especiales",
  };
  const IMG = "img/bates/";

  const fig = (f, cls = "") =>
    `<figure class="fig ${cls}" data-zoom="${IMG + f.src}" data-cap="${f.pie || ""}">
       <img src="${IMG + f.src}" alt="${f.pie || ""}" loading="lazy">
       ${f.pie ? `<figcaption>${f.pie}</figcaption>` : ""}
     </figure>`;

  const faseChip = f => (f && FASES[f] ? `<span class="ph ph-${f}">${FASES[f]}</span>` : "");

  const list = items => (items && items.length ? `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>` : "");

  function mapa(m) {
    const colors = ["var(--insp)", "var(--palp)", "var(--perc)", "var(--ausc)", "var(--accent)", "var(--ok)", "var(--warn)"];
    return `<div class="mindmap">
      <div class="mm-center">${m.centro}</div>
      <div class="mm-branches">
        ${m.ramas.map((r, i) => `<div class="mm-branch" style="--c:${r.color || colors[i % colors.length]}">
            <h4>${r.t}</h4><ul>${r.hijos.map(h => `<li>${h}</li>`).join("")}</ul></div>`).join("")}
      </div></div>`;
  }

  function tabla(t) {
    return `${t.intro ? `<p>${t.intro}</p>` : ""}
      <div class="table-wrap"><table class="t">
        <thead><tr>${t.cols.map(c => `<th>${c}</th>`).join("")}</tr></thead>
        <tbody>${t.filas.map(f => `<tr>${f.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      ${t.nota ? `<p class="src">${t.nota}</p>` : ""}`;
  }

  function paso(p, n) {
    const body = `<div>
        ${p.como}
        ${p.normal || p.anormal ? `<div class="na">
          <div class="normal"><h4>✓ Normal</h4>${list(p.normal)}</div>
          <div class="anormal"><h4>✗ Anormal → ¿qué sugiere?</h4>${list(p.anormal)}</div>
        </div>` : ""}
      </div>`;
    return `<article class="step ${p.fase ? "ph-" + p.fase : ""}">
      <div class="step-head"><div class="step-num">${n}</div><h3>${p.titulo}</h3>${faseChip(p.fase)}</div>
      <div class="step-body ${p.fig ? "" : "nofig"}">${body}${p.fig ? fig(p.fig) : ""}</div>
    </article>`;
  }

  function seccion(s) {
    const id = U.slug(s.titulo);
    let inner = "";
    switch (s.tipo) {
      case "texto":
        inner = `<div class="box">${s.html}</div>`;
        break;
      case "figuras":
        inner = `${s.intro ? `<p>${s.intro}</p>` : ""}<div class="figs">${s.items.map(f => fig(f)).join("")}</div>`;
        break;
      case "pasos": {
        const fases = [...new Set(s.pasos.map(p => p.fase).filter(Boolean))];
        inner = `${s.intro ? `<div class="box" style="margin-bottom:12px">${s.intro}</div>` : ""}
          ${fases.length ? `<div class="phase-legend">${fases.map(faseChip).join("")}</div>` : ""}
          <div class="steps">${s.pasos.map((p, i) => paso(p, i + 1)).join("")}</div>`;
        break;
      }
      case "tabla":
        inner = tabla(s);
        break;
      case "bates":
        inner = `<p class="muted small">Páginas originales del Bates (en inglés). Toca una para ampliarla.</p>
          <div class="figs tables">${s.items.map(f => fig({ src: f.src, pie: f.titulo })).join("")}</div>`;
        break;
      case "callout":
        inner = `<div class="callout ${s.estilo || ""}">${s.html}</div>`;
        break;
      case "registro":
        inner = `<div class="box">${s.ejemplos.map(e => `<p><b>${e.t}</b><br><i>“${e.texto}”</i></p>`).join("")}</div>`;
        break;
    }
    return `<section class="section" id="${id}"><h2>${s.titulo}</h2>${inner}</section>`;
  }

  function ippa(items) {
    return `<div class="ippa">${items.map(i => `<div class="ippa-card ph-${i.fase}">
        <h4>${FASES[i.fase]}</h4><div class="big">${i.clave}</div><p>${i.detalle || ""}</p></div>`).join("")}</div>`;
  }

  function toc(titulos) {
    return `<nav class="toc">${titulos.map(t => `<a href="javascript:void(0)" data-jump="${U.slug(t)}">${t}</a>`).join("")}</nav>`;
  }

  return { fig, mapa, tabla, seccion, ippa, toc, list, faseChip, FASES };
})();
