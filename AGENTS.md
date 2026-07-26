# AGENTS.md — web-peluqueria

Static vanilla HTML/CSS/JS site for "Centro de Prótesis Capilar Torremolinos".

## Architecture

- 5 standalone HTML pages: `index.html`, `servicios.html`, `sobre-nosotros.html`, `protesis-capilares.html`, `contacto.html`
- Shared CSS: `assets/css/styles.css` (CSS custom properties, no preprocessor)
- Shared JS: `assets/js/main.js` (IntersectionObserver scroll-reveal, no framework)
- Images in `assets/images/` — README says to use WebP; there's one `.jpg` (hero.jpg) and four `.webp` files
- SEO: `sitemap.xml`, `robots.txt`, inline JSON-LD (`Schema.org/HairSalon`), og: meta tags
- `spec/constitution/` — has placeholder `.md` files (tech-stack, mission, roadmap) that are empty

## Commands

This project has **no build system, no package manager, no test framework, no linter**. Open any `.html` file directly in a browser to preview.

## Deployment (Vercel)

- Deploy as **Static Site** / **Other** framework preset
- Root directory is `/`
- No build command needed (just HTML/CSS/JS)
- See `README.md` for the exact Vercel steps

## Content language

- All content is in **Spanish**, optimized for SEO keyword "prótesis capilar Torremolinos"
- Business placeholder data (address, phone +34 699 349 252) — update with real values before going live

## Repo

- GitHub: `https://github.com/marinabm27/web-peluqueria.git`, branch `main`
