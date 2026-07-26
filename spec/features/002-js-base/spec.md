002 — JavaScript base
Qué hace esta feature

Añade el comportamiento interactivo mínimo del sitio en assets/js/main.js (vanilla, sin frameworks). Dos cosas:

Scroll-reveal: revelar elementos con una animación suave cuando entran en el viewport, usando IntersectionObserver.
Menú de navegación móvil: convertir el botón hamburguesa de la 001 en un toggle real (abrir/cerrar) con ARIA correcto, sustituyendo el checkbox-hack.

Cierra la Fase 1 del roadmap: a partir de aquí la base (estilos + JS) está completa.

Alcance

Dentro:

assets/js/main.js, enlazado con defer en las 5 páginas.
Scroll-reveal con IntersectionObserver y degradación elegante.
Toggle del menú móvil con aria-expanded, cierre con Escape y al hacer clic en un enlace.
Respeto a prefers-reduced-motion.

Fuera:

Lógica propia de páginas concretas (p. ej. validación del formulario de contacto → su feature).
Estilos base (viven en styles.css; aquí solo se togglean clases y se añaden los estados de reveal).
Criterios de aceptación
Existe assets/js/main.js enlazado con defer en las 5 páginas.
Los elementos marcados con .reveal aparecen animados al entrar en el viewport (una sola vez).
Degradación elegante: si el navegador no soporta IntersectionObserver o el usuario tiene prefers-reduced-motion, el contenido se muestra igualmente (nada queda oculto ni animándose).
El botón hamburguesa abre y cierra el menú en móvil, y aria-expanded refleja el estado (true/false).
El menú se cierra al pulsar Escape y al hacer clic en un enlace de navegación.
El botón tiene texto accesible (aria-label) y el menú es navegable por teclado.
En escritorio (≥768px) el menú se muestra siempre y el botón hamburguesa se oculta.
Sin frameworks ni dependencias; JS vanilla y sin errores en consola.