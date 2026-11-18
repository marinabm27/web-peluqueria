# Paso a producción — estado y pendientes

Última actualización: 18/11/2026

> ✅ **En producción desde el 18/11/2026** en https://www.carmenieveshairstudio.com
> (la versión sin www y http redirigen con 308). Solo falta el NIF.

## ✅ Hecho

| Cambio | Archivos |
|---|---|
| Fuentes autoalojadas (Outfit y Playfair Display, woff2 variables, 106 KB). Sin conexiones a Google Fonts | `assets/fonts/`, `@font-face` al inicio de `assets/css/styles.css`, `<link rel="preload">` en todas las páginas |
| Mapa de Contacto bajo petición: tarjeta con «Ver mapa aquí» + «Abrir en Google Maps». No carga Google hasta pulsar | `contacto.html`, `.map-consent` en CSS, `initMapConsent()` en `assets/js/main.js` |
| Páginas legales simplificadas con datos de la titular (web sin cookies, sin banner) | `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html` |
| Dominio `https://www.carmenieveshairstudio.com` en canonical, og:, twitter:, JSON-LD, sitemap y robots | todos los `.html`, `sitemap.xml`, `robots.txt` |

Datos ya puestos en las páginas legales: titular, nombre comercial, domicilio, email, teléfono, dominio y actividad.

## ⏳ Falta información

- [ ] **NIF de la titular** → sustituir `<mark class="pendiente">[NIF pendiente]</mark>` en:
  - `aviso-legal.html`
  - `politica-privacidad.html`

  Comprobar después que no queda ninguno: buscar `pendiente` en los `.html` (debe dar 0).

## 📋 Pasos para publicar (en este orden)

1. [x] **Comprar `carmenieveshairstudio.com`** a nombre de la titular (el `.es` no estaba disponible).
2. [ ] **Poner el NIF** (ver arriba).
3. [x] **Dominio conectado en Vercel** (comprado en Vercel, mismo equipo que el proyecto). Principal: `www.carmenieveshairstudio.com`; `carmenieveshairstudio.com` redirige a www.
   - Opcional: redirigir también `web-peluqueria-eta.vercel.app` al dominio (Settings → Domains → Edit). No es imprescindible: el canonical ya apunta al dominio.
4. [x] **Commit + push** a los dos remotos (`origin` y `jositobarbo`, rama `main`). No incluir `spec/cambios.md` salvo que se quiera.
5. [x] **Verificar en producción**: todas las páginas, vídeo, fotos, fuentes, sitemap y robots responden 200 por https; sin www y http redirigen a www (308).
6. [ ] **Google Search Console**
   - [x] Dominio verificado el 18/11/2026 con registro TXT en los DNS de Vercel. **No borrar ese registro TXT** o se pierde la verificación.
   - [x] Sitemap enviado el 18/11/2026: estado «Correcto», 6 páginas descubiertas.
   - [ ] Opcional: *Inspección de URLs* → `https://www.carmenieveshairstudio.com/` → *Solicitar indexación*.
7. [ ] **Google Business Profile** (ficha de Maps): poner la URL de la web.

## Notas

- Las páginas legales siguen con `noindex` (es lo normal). La galería ya es indexable y está en el sitemap.
- Si en el futuro se añade Google Analytics, formularios o un sistema de citas, hay que actualizar la política de privacidad y la de cookies, e instalar un banner de consentimiento.
- Siguiente idea para la galería: las 7 fotos `WhatsApp Image 2026-11-11*` (en `../imagenes`) parecen resultados de moldeador → añadirlas como «resultado» en la sección Moldeador.
