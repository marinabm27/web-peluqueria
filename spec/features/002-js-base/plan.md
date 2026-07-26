002 — Plan de implementación
Enfoque técnico

Un único assets/js/main.js, vanilla, cargado con defer. Dos funciones independientes (initScrollReveal() y initMobileNav()) invocadas al cargar el DOM. Sin estado global ni dependencias.

Archivos afectados
assets/js/main.js — se crea/rellena.
assets/css/styles.css — se añaden los estados de reveal (.reveal inicial + .reveal.is-visible final) y, si hace falta, ajustes de la clase "menú abierto". Ojo: esto toca la feature 001; al ser spec-anchored, refleja el cambio en el spec/tasks de la 001 o anótalo aquí.
Las 5 páginas HTML — sustituir el checkbox-hack por un <button class="nav-toggle"> con aria-expanded y aria-controls, y añadir <script src="assets/js/main.js" defer></script>.
Decisiones
Scroll-reveal
IntersectionObserver con threshold ~0.1; al revelar un elemento, unobserve (se anima una vez).
Fallback: si !('IntersectionObserver' in window) o el usuario prefiere movimiento reducido, añadir is-visible a todos los .reveal directamente (contenido visible sin animación).
Menú móvil
Marcado: <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Abrir menú">.
initMobileNav(): alterna una clase en el nav y actualiza aria-expanded.
Listeners: clic en el botón, tecla Escape, y clic en cualquier enlace del menú (cierra).
Responsive: en ≥768px el botón se oculta y el menú se muestra siempre (esto es CSS, en styles.css).
Movimiento reducido
En CSS, @media (prefers-reduced-motion: reduce) desactiva las transiciones de .reveal.
En JS, ese caso entra por la rama de fallback (revelar sin animar).
Consideraciones
Duplicación: el botón/nav cambia en las 5 páginas (sin includes). Cámbialo en las 5.
Retirar el checkbox-hack de la 001 para no tener dos mecanismos compitiendo.