# Paso a producción — estado y pendientes

Última actualización: 18/11/2026

> ✅ **Subido a GitHub el 18/11/2026** (dominio ya comprado, pendiente de activarse en DNS).
> Mientras el dominio no funcione, la web sigue accesible en `web-peluqueria-eta.vercel.app`.

## ✅ Hecho

| Cambio | Archivos |
|---|---|
| Fuentes autoalojadas (Outfit y Playfair Display, woff2 variables, 106 KB). Sin conexiones a Google Fonts | `assets/fonts/`, `@font-face` al inicio de `assets/css/styles.css`, `<link rel="preload">` en todas las páginas |
| Mapa de Contacto bajo petición: tarjeta con «Ver mapa aquí» + «Abrir en Google Maps». No carga Google hasta pulsar | `contacto.html`, `.map-consent` en CSS, `initMapConsent()` en `assets/js/main.js` |
| Páginas legales simplificadas con datos de la titular (web sin cookies, sin banner) | `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html` |
| Dominio `https://carmenieveshairstudio.es` en canonical, og:, twitter:, JSON-LD, sitemap y robots (43 referencias) | todos los `.html`, `sitemap.xml`, `robots.txt` |

Datos ya puestos en las páginas legales: titular, nombre comercial, domicilio, email, teléfono, dominio y actividad.

## ⏳ Falta información

- [ ] **NIF de la titular** → sustituir `<mark class="pendiente">[NIF pendiente]</mark>` en:
  - `aviso-legal.html`
  - `politica-privacidad.html`

  Comprobar después que no queda ninguno: buscar `pendiente` en los `.html` (debe dar 0).

## 📋 Pasos para publicar (en este orden)

1. [x] **Comprar `carmenieveshairstudio.es`** a nombre de la titular (DonDominio, Arsys, IONOS… o Vercel si la cuenta del proyecto vende `.es`).
2. [ ] **Poner el NIF** (ver arriba).
3. [ ] **Conectar el dominio en Vercel**: proyecto → *Settings → Domains → Add* (en la cuenta donde está el proyecto, que no es la del equipo de josihttp). Configurar en el registrador los DNS que indique Vercel.
   - Añadir también `www.carmenieveshairstudio.es` con redirección al dominio sin www.
   - Redirigir `web-peluqueria-eta.vercel.app` al dominio nuevo.
4. [x] **Commit + push** a los dos remotos (`origin` y `jositobarbo`, rama `main`). No incluir `spec/cambios.md` salvo que se quiera.
5. [ ] **Verificar en producción**: la web carga por https en el dominio, la dirección antigua de Vercel redirige, el mapa y la galería funcionan.
6. [ ] **Google Search Console**: dar de alta el dominio y enviar `https://carmenieveshairstudio.es/sitemap.xml`.
7. [ ] **Google Business Profile** (ficha de Maps): poner la URL de la web.

## Notas

- Las páginas legales siguen con `noindex` (es lo normal). La galería ya es indexable y está en el sitemap.
- Si en el futuro se añade Google Analytics, formularios o un sistema de citas, hay que actualizar la política de privacidad y la de cookies, e instalar un banner de consentimiento.
- Siguiente idea para la galería: las 7 fotos `WhatsApp Image 2026-11-11*` (en `../imagenes`) parecen resultados de moldeador → añadirlas como «resultado» en la sección Moldeador.
