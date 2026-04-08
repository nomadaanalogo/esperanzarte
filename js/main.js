/* ═══════════════════════════════════════════════════════
   ESPERANZARTE MANUALIDADES — main.js
═══════════════════════════════════════════════════════ */

/* Nav: agrega sombra al hacer scroll */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
