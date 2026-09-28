# ByteSpace

**Online course marketplace — front-end implementation.**
Next.js (App Router) · TypeScript · Tailwind CSS v4 · React 19

Built from a Figma design, then refactored into a feature-based structure with content, types and routes separated cleanly. Everything runs client-free on the server where possible: pages are server components, only interactive islands opt into `"use client"`.

---

## Table of contents

1. [Getting started](#getting-started)
2. [Routes](#routes)
3. [What I did](#what-i-did)
4. [Project structure](#project-structure)
5. [Conventions](#conventions)
6. [Scripts](#scripts)
7. [Performance & accessibility](#performance--accessibility)
8. [Environment](#environment)
9. [Known limitations & next steps](#known-limitations--next-steps)

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

There is **no backend**: all content (courses, footer links, categories, page copy) lives in `src/db/*.ts`, so the app runs offline with no API keys.

---

## Routes

| Route | Screen | Notes |
| --- | --- | --- |
| `/` | Home | Hero with search, client logos, skill categories, learning paths, growth stats, join-as-creator CTA, testimonial carousel |
| `/courses` | Course catalogue | Search box, filter pills, category tabs, responsive card grid, pagination — state is client-side, markup is server-rendered |
| `/categories` | Category index | Every category as a link |
| `/categories/[slug]` | Category listing | `generateStaticParams` for all categories; unknown slugs show an empty state with a link back to all courses |
| `/course-details` | Course detail | Blue hero + preview player, sticky enrol card, tab navigation, description / sneak peek / key points, curriculum |
| `/creator` | Creator profile | Creator banner with stats, filter bar and course grid |
| `/login` | Sign in | Split auth shell: showcase on the left, form on the right |
| `/register` | Sign up | Same shell, multi-field form |
| `/about` | About | Shared info-page template |
| `/contact` | Contact | ″ |
| `/help` | Help / FAQ | ″ |
| `/become-a-creator` | Creator signup | ″ |
| `/affiliate` | Affiliate program | ″ |
| `/privacy-policy` | Privacy policy | ″ |
| `/terms-of-service` | Terms of service | ″ |
| `/cookies-settings` | Cookie preferences | ″ |
| `*` (anything else) | **404** | Custom hero: giant gradient `404` with scroll parallax, grid backdrop, "Back to Home" |

Also served:

- `/sitemap.xml` — every route above (`src/app/sitemap.ts`)
- `/robots.txt` — allows crawling, disallows `/login` and `/register` (`src/app/robots.ts`)
- Route groups keep the shells apart: `(public)` wraps pages in the site header/footer, `(auth)` uses its own shell
- `src/proxy.ts` (Next 16 middleware) gates protected paths on an `authToken` cookie; the public allow-list lives in `PUBLIC_ROUTES`

The info pages are driven by one dynamic route — `(public)/[info]/page.tsx` renders content from `src/db/pages.ts`, uses `generateStaticParams` + `generateMetadata`, and calls `notFound()` for unknown slugs so real 404s still work.

---

## What I did

### 1. Built the screens from the design
- Home, catalogue, course detail, creator profile, auth screens and a pixel-checked **404 page** (verified against the Figma frame at 1440px — layout boxes matched within ~1px: hero 1440×957, `404` line box at y160/h480, heading at y521/w935, button 162×45 at y786)
- Shared `Header` / `Footer`, a `design-grid` utility for the recurring 120px blueprint grid, and `next/image` everywhere

### 2. Restructured content, types and routes
- **Every array of content moved to `src/db/`** (courses, footer links, nav, filters, glows, form fields, info-page copy…) — components no longer hold data
- **Types regrouped by feature** in `src/types/*.d.ts` (`course`, `auth`, `home`, `creator`, `layout`, `common`, `info`) instead of one type file per component
- Renamed `product` / `products` → **`course` / `courses`** end to end: folders, routes, component names, links and the middleware matcher

### 3. Fixed real bugs
- **17 dead links** (every footer link plus the join-as-creator CTA) → added the missing routes; `npm run check:links` now hits all internal links over HTTP and fails the build if any regress
- `/course-details` had **no inbound links** — course cards now link to it
- Root metadata still read "Create Next App" → title template + per-page metadata + sitemap/robots
- Missing bottom spacing on the course-details page (content sat flush on the footer)
- Heading hierarchy jumped H1 → H3 on `/courses` and `/creator`
- Body background was scheme-dependent; the footer flipped to black in OS dark mode — the app is now light-only (`prefers-color-scheme` overrides and all `dark:` utilities removed)

### 4. Performance
- Dropped two never-used, always-preloaded fonts (Geist Mono, Satoshi Italic)
- Removed unused dependencies (`axios`, `redux`, `react-redux`, `@reduxjs/toolkit`) and the dead Redux store they supported
- `CustomCursor` no longer runs a permanent `requestAnimationFrame` loop — it idles once the pointer settles
- Consolidated three copy-pasted parallax effects into `hooks/useParallax` (rAF-throttled, honours `prefers-reduced-motion`, supports px and `%` speeds)
- `next.config.ts`: AVIF/WebP output, `poweredByHeader: false`

### 5. Removed dead weight
- Unused folders (`src/redux`, `src/actions`, `src/utils`), dead db module, 9 unused exports
- ~740 KB of unreferenced assets (`temp/product-*.png` twins, scaffolding SVGs) plus every scratch screenshot/dump from the repo root
- `.gitignore` updated so those artifacts stay out

### 6. Tooling & docs
- Prettier config + `npm run format`
- `npm run check:links` link checker (`scripts/check-links.mjs`)
- This README, plus the repo committed to git for the first time (it had only the Create-Next-App scaffold)

---

## Project structure

```
src/
  app/
    page.tsx                 home
    not-found.tsx            404 shell
    sitemap.ts  robots.ts
    (public)/                pages with site header + footer
      courses/  categories/  course-details/  creator/
      [info]/                about, contact, help, legal… (one dynamic route)
    (auth)/                  login / register (own shell)
    layout.tsx  globals.css  fonts/
  components/
    layout/                  header, footer
    common/                  cards, icons, cursor, scroll reveal, svg helper
    auth/                    auth shell, showcase, form fields
    pages/<page>/            per-page sections (home, courses, course, creator, not-found)
    ui/                      SectionTitle, GlowLayer
  db/                        all content arrays (feature-named files)
  types/                     one .d.ts per feature
  hooks/useParallax.ts       shared scroll parallax
  utils/                     pure helpers (slug)
  proxy.ts                   middleware (auth gating)
scripts/check-links.mjs
```

---

## Conventions

- **Content lives in `src/db`**, never inline in a component — screens stay presentational
- **One type file per feature**, not per component (`@/types/course`, `@/types/auth`, …)
- Blue sections share the `design-grid` utility instead of repeating gradients
- Decorative motion goes through `hooks/useParallax`, which bails out under `prefers-reduced-motion`
- Images always use `next/image` with `sizes` on `fill`; `priority` on LCP images
- Route data (categories, info pages) is derived from `src/db` so links, sitemap and `generateStaticParams` can never drift apart

---

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | dev server |
| `npm run build` / `npm run start` | production build / serve |
| `npm run lint` | ESLint (Next + TypeScript rules) |
| `npm run format` | Prettier write |
| `npm run check:links` | verifies every internal link returns < 400 (app must be running) |

---

## Performance & accessibility

- Fonts: only what is used is loaded (Poppins weights + Satoshi variable), all self-hosted by `next/font`
- Third-party-free: no analytics, no web fonts over the network, no client state libraries
- Server components by default — only interactive parts (header, forms, tabs, carousel, parallax sections, cursor/reveal) declare `"use client"`: 17 of 53 component files
- Every image has `alt` (decorative ones `alt=""`), every icon button has an accessible name
- Heading order verified per page: H1 → H2 → H3 (sr-only H2s where a grid sits directly under the H1)
- Reduced-motion respected for parallax and reveals

---

## Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Absolute origin used by `sitemap.xml` and `robots.txt` in production |

---

## Known limitations & next steps

- **Auth is UI-only** — the forms don't call an API; `proxy.ts` is ready for a real `authToken` cookie
- Course/category/info data is sample content in `src/db`; no CMS or database
- Category pages accept any slug and show an empty state rather than 404ing, so unprovisioned categories stay clickable
- Legal/about copy is short placeholder text, not legal advice
- No automated test suite yet — `check:links` covers routing; unit tests and visual regression would be the next addition
