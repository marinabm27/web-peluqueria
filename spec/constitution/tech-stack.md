Tech Stack y Convenciones — web-peluqueria
Stack
Lenguaje: HTML5, CSS3 y JavaScript vanilla (sin frameworks).
Estilos: un único assets/css/styles.css con CSS custom properties (variables). Sin preprocesador (nada de Sass/Less).
JavaScript: un único assets/js/main.js. Solo lo imprescindible (p. ej. scroll-reveal con IntersectionObserver). Sin librerías ni frameworks.
Imágenes: en assets/images/, formato WebP por defecto (el hero puede ser .jpg).
Build / paquetes / tests / linter: ninguno. No hay bundler, ni npm, ni framework de tests, ni linter.
Estructura del proyecto
index.html, servicios.html, sobre-nosotros.html, protesis-capilares.html, contacto.html — 5 páginas HTML independientes.
assets/css/styles.css — estilos compartidos por todas las páginas.
assets/js/main.js — JS compartido.
assets/images/ — imágenes (WebP preferido).
sitemap.xml, robots.txt — SEO técnico.
spec/constitution/ — misión, tech-stack y roadmap del proyecto.
SEO (parte del contrato, no opcional)
Idioma del contenido: español, optimizado para la keyword "prótesis capilar Torremolinos".
Cada página lleva: <title> y <meta description> únicos, etiquetas og: (Open Graph) y JSON-LD inline con Schema.org/HairSalon.
Mantener sitemap.xml y robots.txt actualizados al añadir o quitar páginas.
Convenciones
Nomenclatura de archivos: minúsculas y en español, con guiones (sobre-nosotros.html).
CSS: usar siempre las variables de styles.css para colores, espaciados y tipografía; no repetir valores "a mano".
Sin duplicar: estilos y JS son compartidos; no incrustar CSS/JS por página salvo el JSON-LD y meta tags propios de esa página.
Accesibilidad y rendimiento: alt en todas las imágenes, WebP, y HTML semántico (header, main, nav, footer).
Datos del negocio: dirección, teléfono (+34 699 349 252) y demás son placeholders; confirmar con datos reales antes de publicar.
Despliegue
Vercel como sitio estático (preset "Other").
Directorio raíz: /. Sin comando de build.
Ver README.md para los pasos exactos.
No hagas
No introducir frameworks, bundlers ni dependencias npm: rompería la premisa "vanilla, sin build".
No incrustar estilos ni scripts repetidos por página.
No subir datos reales de clientes ni credenciales al repositorio.
No publicar con los datos placeholder sin confirmarlos.