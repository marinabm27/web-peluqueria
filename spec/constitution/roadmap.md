Roadmap — web-peluqueria

Orden recomendado de las features. Cada una debería tener su carpeta en spec/features/ (con spec.md, plan.md y tasks.md) antes de implementarla.

Fase 1 — Base compartida
Sistema de estilos (assets/css/styles.css): variables (colores, tipografía, espaciados), estilos de header, footer, botones y layout responsive.
Navegación y estructura común: cabecera con menú, pie de página y esqueleto HTML semántico reutilizado en las 5 páginas.
JS base (assets/js/main.js): scroll-reveal con IntersectionObserver.
Fase 2 — Páginas de contenido (por prioridad de negocio)
Home (index.html): propuesta de valor, hero y llamadas a la acción hacia servicios/contacto.
Prótesis capilares (protesis-capilares.html): página clave para la keyword; explica el servicio estrella en detalle.
Servicios (servicios.html): resto de servicios del centro.
Sobre nosotros (sobre-nosotros.html): confianza, experiencia y equipo.
Contacto (contacto.html): teléfono, formulario/mensaje, ubicación y horario.
Fase 3 — SEO técnico
Meta y datos estructurados: <title>/<meta description> únicos, og: y JSON-LD Schema.org/HairSalon en cada página.
sitemap.xml y robots.txt actualizados con las 5 páginas.
Fase 4 — Pre-lanzamiento
Sustituir placeholders por datos reales del negocio (dirección, teléfono, horarios).
Revisión final: rendimiento, imágenes en WebP, alt en todas, prueba en móvil.
Despliegue en Vercel como sitio estático.
Notas
Prioridad: la página de prótesis capilares va antes que "servicios" y "sobre nosotros" porque es la que sostiene el posicionamiento principal.
El orden puede ajustarse, pero mantener la Fase 1 siempre primero: sin la base compartida, cada página se implementaría de forma inconsistente.