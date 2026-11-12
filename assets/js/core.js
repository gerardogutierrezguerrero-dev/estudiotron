/* Núcleo: registro de contenido y utilidades compartidas.
   El contenido se carga como <script> (no fetch) para que funcione abriendo index.html
   directamente desde el disco (file://). */
window.ECOE = {
  sistemas: {},
  sindromes: {},
  casos: {},
  register(tipo, obj) {
    this[tipo][obj.id] = obj;
  },
  list(tipo) {
    return Object.values(this[tipo]).sort((a, b) => (a.orden || 99) - (b.orden || 99));
  },
};

window.U = {
  // Escapa texto plano. El contenido propio usa HTML a propósito (negritas, flechas);
  // solo escapamos lo que viene del usuario (búsqueda).
  esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  },
  // localStorage puede fallar (modo privado, archivo local con almacenamiento bloqueado).
  load(key, fallback) {
    try {
      const v = localStorage.getItem("estudiotron." + key);
      return v == null ? fallback : JSON.parse(v);
    } catch (e) {
      return fallback;
    }
  },
  save(key, value) {
    try {
      localStorage.setItem("estudiotron." + key, JSON.stringify(value));
    } catch (e) { /* sin persistencia */ }
  },
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
  slug(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  },
};
