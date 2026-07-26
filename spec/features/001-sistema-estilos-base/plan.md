001 — Plan de implementación
Enfoque técnico

Un único assets/css/styles.css, escrito móvil primero, organizado en secciones comentadas y de arriba abajo: tokens → base → layout → componentes → utilidades → media queries.

Archivos afectados
assets/css/styles.css — se crea/rellena con el sistema completo.
Las 5 páginas HTML (index.html, servicios.html, sobre-nosotros.html, protesis-capilares.html, contacto.html) — enlazan la hoja y usan header/footer comunes.
Design tokens propuestos (ajustables)

Paleta pensada para transmitir confianza y cercanía en el sector salud/estética. Son una propuesta de partida; cámbialos si tienes identidad de marca.

--color-primary (acento de marca), --color-primary-dark (hover)
--color-text, --color-text-muted
--color-bg, --color-surface (tarjetas/secciones alternas)
--color-border
Tipografía: --font-base (una fuente de sistema o Google Font ligera), escala --fs-sm/base/lg/xl/2xl
Espaciado: escala --space-1 … --space-8
--radius, --shadow, --container-max (ancho máximo del contenido)
Estructura del CSS (orden)
Tokens — :root { ... }
Base/Reset — *, body, títulos, enlaces, imágenes (max-width:100%)
Layout — .container, .section, grid/flex helpers
Componentes — .site-header/.nav, .site-footer, .btn/.btn--primary/.btn--secondary, .card
Utilidades — espaciados/alineación mínimos si hacen falta
Responsive — media queries para tablet y escritorio
Consideraciones
La navegación móvil puede resolverse con un menú simple (botón hamburguesa + toggle por clase); el toggle en sí es JS, así que en esta feature basta con que el marcado y los estilos estén listos y el menú sea legible aunque quede desplegado.
Header y footer se copian igual en las 5 páginas (no hay includes al ser estático); dejar el marcado documentado para reutilizarlo.