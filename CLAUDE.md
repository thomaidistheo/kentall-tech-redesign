# CLAUDE.md

Marketing website redesign for KentallTech Ltd. (GPS/fleet-tracking products). Single-page React app, deployed at https://redesign.kentall-tech.com.

## Stack
- **React 18** built with **Vite** (`vite.config.js`, `@vitejs/plugin-react`)
- **Routing:** `react-router-dom` v6 (`BrowserRouter`, routes defined in `src/App.jsx`)
- **Styling:** SCSS compiled by Vite at build time — JSX imports `.scss` directly (e.g. `import './footer.scss'`). The `sass` package is a dev dependency; no external/editor compiler needed.
- **SVG icons:** SVG-as-component via `vite-plugin-svgr` — `import Icon from './icon.svg?react'`. Plain `import x from './x.svg'` still gives a URL string.
- **Forms:** `react-hook-form` + Google reCAPTCHA v3
- **Carousels/media:** `swiper`, `react-slick`, `react-responsive-carousel`, `@img-comparison-slider/react`

## Commands
```bash
npm run dev      # dev server (localhost:5173)
npm run build    # production build → build/ (outDir set in vite.config.js)
npm run preview  # serve the production build locally
```

## Structure (`src/`)
- `main.jsx` — entry, mounts `<App>` via React 18 `createRoot` (referenced by root `index.html`)
- `App.jsx` — router + global layout (Preheader, Header, CopyrightBar wrap every route)
- `Pages/` — route-level pages: `Homepage`, `Contact`, `About`, `PlatformLinks`, `ErrorPage`, and `ProductPages/` (PDPCar, PDPBoat, PDPMoto)
- `components/` — reusable UI (Header, Footer, Cards, Features, Services, PDP Components, Widgets, Content blocks, etc.)
- `assets/` — images, SVGs, icons (incl. `Product Pages/` art)
- Global styles: `_colors.scss`, `_typography.scss`, `_buttons.scss`, `_mixins.scss`, `_imports.scss`, `App.scss`

## Routes
`/` Homepage · `/contact` · `/about` · `/platform-links` · `/product-boat` · `/product-moto` · `/product-car` · `*` ErrorPage

## Conventions
- Components are folders: `ComponentName/ComponentName.jsx` + matching `.scss` (imported directly from the JSX; Vite compiles it)
- Files containing JSX must use the `.jsx` extension (Vite/esbuild won't parse JSX in `.js`)
- SCSS uses shared variables from `_colors.scss` (e.g. `$primary-red`, `$col-gray-200`); content width capped via `.landing-page` (max 1288px)
- `ScrollToTop` in `App.jsx` resets scroll on every route change
- Static assets live in `public/` (favicons, manifest, `robots.txt`, Netlify `_redirects`) and are served from `/`
