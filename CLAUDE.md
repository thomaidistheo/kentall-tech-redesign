# CLAUDE.md

Marketing website redesign for KentallTech Ltd. (GPS/fleet-tracking products). Next.js App Router site, deployed at https://redesign.kentall-tech.com (canonical domain: https://www.kentall-tech.com).

## Stack
- **Next.js 15 (App Router)** + **React 19**, fully static output (every route prerendered)
- **Styling:** SCSS compiled by Next at build time. JSX imports `.scss` directly (e.g. `import './footer.scss'`). The `sass` package is a dev dependency.
- **SVG icons:** `import Icon from './icon.svg?react'` gives a React component via `@svgr/webpack` (rule in `next.config.mjs`). Plain `import x from './x.svg'` gives Next static image data (use `next/image` or `x.src`).
- **Images:** `next/image` for almost everything (automatic WebP/AVIF, lazy loading). Exceptions: CSS `backgroundImage` and `<img slot=...>` inside `<ImgComparisonSlider>` use `staticImport.src`.
- **Fonts:** Roboto via `next/font/google` in `app/layout.jsx`
- **Media:** `@img-comparison-slider/react` on the boat PDP; car/moto PDPs use a hand-rolled drag carousel

## Commands
```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build → .next/
npm run start    # serve the production build
```

## Structure
- `app/` — routes. Each `page.jsx` is a thin server component exporting `metadata` (unique title, description, canonical) and rendering a view from `src/views/`. Also: `layout.jsx` (global chrome, default OG metadata, Organization JSON-LD, Mailchimp via `next/script`), `not-found.jsx` (404), `sitemap.js`, `robots.js`.
- `src/views/` — page-level components (former `src/Pages/`; renamed because a `src/pages/` dir would collide with Next's Pages Router on a case-insensitive FS)
- `src/components/` — reusable UI (Header, Footer, Cards, Features, Services, PDP Components, Widgets, Seo/ProductJsonLd, etc.)
- `src/assets/` — images, SVGs, icons (incl. `Product Pages/` art)
- Global styles: `src/_colors.scss`, `_typography.scss`, `_buttons.scss`, `_mixins.scss`, `_imports.scss`, `App.scss` (loaded once in `app/layout.jsx`)

## Routes
`/` Homepage · `/contact` · `/about` · `/platform-links` · `/guides` · `/guides/[slug]` (SSG from `src/views/Guides/guidesData.js`) · `/product-boat` · `/product-moto` · `/product-car` · 404 via `app/not-found.jsx`

## SEO conventions
- `metadataBase` is `https://www.kentall-tech.com`; every page sets `alternates.canonical`
- One `<h1>` per page (`PageTitle`, the hero on `/`, or the PDP `Banner` title prop); section titles are `<h2>`/`<h3>`
- JSON-LD: Organization in the layout, Product on PDPs via `src/components/Seo/ProductJsonLd.jsx`
- `app/sitemap.js` must list any new route; guide slugs are picked up automatically

## Conventions
- Components are folders: `ComponentName/ComponentName.jsx` + matching `.scss` (imported directly from the JSX)
- Files containing JSX use the `.jsx` extension
- Components needing hooks/browser APIs declare `'use client'`; keep `app/*/page.jsx` files server components so `metadata` works
- SCSS uses shared variables from `_colors.scss` (e.g. `$primary-red`, `$col-gray-200`); content width capped via `.landing-page` (max 1288px)
- Static assets live in `public/` (favicons, manifest) and are served from `/`
- Deployed on Netlify (`netlify.toml`); the Next runtime handles routing, no `_redirects` needed
