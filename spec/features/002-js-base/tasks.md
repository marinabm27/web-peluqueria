002 — Tareas

Checklist de tareas pequeñas y verificables. Una a una; marcar al completar.

Setup
 Crear assets/js/main.js y enlazarlo con defer en las 5 páginas.
 Estructura base: initScrollReveal() e initMobileNav() invocadas al cargar el DOM.
Scroll-reveal
 Añadir en styles.css los estados .reveal (oculto/desplazado) y .reveal.is-visible (final).
 initScrollReveal() con IntersectionObserver (threshold 0.1, unobserve al revelar).
 Fallback: sin soporte o prefers-reduced-motion → mostrar todos los .reveal.
 Marcar con .reveal los bloques que deban animarse (sin abusar).
 @media (prefers-reduced-motion: reduce) en CSS desactiva las transiciones.
Menú móvil
 Sustituir el checkbox-hack por <button class="nav-toggle"> con aria-expanded, aria-controls y aria-label, en las 5 páginas.
 initMobileNav(): alterna la clase del menú y actualiza aria-expanded.
 Cerrar el menú con Escape y al hacer clic en un enlace.
 En ≥768px: ocultar el botón y mostrar el menú siempre (CSS).
Verificación (contra los criterios de aceptación)
 El reveal funciona; con prefers-reduced-motion nada queda oculto.
 aria-expanded refleja el estado y el menú es navegable por teclado.
 El botón se oculta en escritorio y el menú se ve siempre.
 Sin dependencias, JS vanilla y sin errores en consola.
 Header/footer + <script> consistentes en las 5 páginas.