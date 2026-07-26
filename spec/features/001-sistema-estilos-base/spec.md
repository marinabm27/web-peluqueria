001 — Sistema de estilos base
Qué hace esta feature

Establece el sistema de diseño compartido del sitio en assets/css/styles.css: las variables CSS (design tokens), los estilos base del documento y los componentes reutilizables (cabecera con navegación, pie de página, botones y contenedores de sección). Es la fundación sobre la que se construirán las 5 páginas, para que todas se vean consistentes.

No incluye el contenido concreto de cada página (eso va en sus features), solo la base visual.

Alcance

Dentro:

Design tokens con custom properties: colores, tipografía, espaciados, radios y sombras.
Reset/normalización mínima y estilos base de body, títulos y texto.
Componente header + navegación (responsive, con menú usable en móvil).
Componente footer.
Componentes de UI básicos: botones (primario/secundario) y contenedor/sección.
Layout responsive (móvil primero) con breakpoints definidos como variables o media queries.

Fuera:

Contenido y secciones específicas de cada página.
JavaScript (el scroll-reveal es la feature de JS base, aparte).
Criterios de aceptación
Existe assets/css/styles.css y todas las páginas (aunque sea con contenido de prueba) lo enlazan.
Los colores, tamaños de fuente y espaciados se definen una sola vez como custom properties en :root y se reutilizan; no hay valores "a mano" repetidos.
La cabecera muestra el logo/nombre y el menú a las 5 páginas, y es usable en móvil (no se rompe ni se solapa por debajo de 375px de ancho).
El pie de página muestra los datos del negocio (placeholder) y es consistente en todas las páginas.
Hay al menos dos estilos de botón (primario y secundario) reutilizables mediante clases.
El diseño es responsive: se ve correctamente en móvil (~375px), tablet (~768px) y escritorio (~1200px).
Se usa HTML semántico (header, nav, main, footer) y todas las imágenes decorativas llevan alt.
No se ha introducido ningún framework, preprocesador ni dependencia: sigue siendo CSS vanilla.