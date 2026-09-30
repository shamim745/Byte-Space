# ByteSpace

**Online course marketplace — front-end implementation, with a cart and demo checkout.**
Next.js (App Router) · TypeScript · Tailwind CSS v4 · React 19

Built from a Figma design, then refactored into a feature-based structure with content, types and routes separated cleanly. Everything runs client-free on the server where possible: pages are server components, only interactive islands opt into `"use client"`.

---

## Table of contents

1. [Getting started](#getting-started)
2. [Routes](#routes)
3. [Cart, enrollment & checkout](#cart-enrollment--checkout)
4. [What I did](#what-i-did)
5. [Project structure](#project-structure)
6. [Conventions](#conventions)
7. [Scripts](#scripts)
8. [Performance & accessibility](#performance--accessibility)
9. [Environment](#environment)
10. [Known limitations & next steps](#known-limitations--next-steps)

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
| `/courses` | Course catalogue | Search box, filter dropdowns (featured / level / category / sort), category tabs, responsive card grid, pagination — state is client-side, markup is server-rendered; `?q=` seeds the search from the server |
| `/categories` | Category index | Every category as a link |
| `/categories/[slug]` | Category listing | `generateStaticParams` for all categories; unknown slugs render the 404 page |
| `/course-details` | Course detail | Blue hero + preview player (opens a video modal), sticky enrol card that adds the course to the cart, tab navigation, description / sneak peek / key points, curriculum, lessons & reviews tabs |
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
- The cart and checkout are **overlays, not routes** — the drawer, order-success modal and video preview mount once in the root layout, so there is no `/cart` or `/checkout` URL to crawl

The info pages are driven by one dynamic route — `(public)/[info]/page.tsx` renders content from `src/db/pages.ts`, uses `generateStaticParams` + `generateMetadata`, and calls `notFound()` for unknown slugs so real 404s still work.

---

## Cart, enrollment & checkout

A client-side cart with a demo checkout. No backend, no payment provider — the whole flow runs in the browser.

### State — `src/context/cart.tsx`

- `CartProvider` wraps the app in `src/app/layout.tsx`; components read it with `useCart()`
- Items persist in `localStorage` under `bytespace-cart` behind a `useSyncExternalStore` store, so the server snapshot is always empty and hydration never mismatches; if storage is blocked the cart falls back to memory
- Exposes `items`, `count`, `subtotal`, `isOpen`, `orderPlaced`, `lastOrderTotal` plus `addItem`, `removeItem`, `open`, `close`, `placeOrder`, `dismissOrder`
- `addItem` is idempotent — a course already in the cart is never added twice, and `subtotal` is derived, never stored
- Types live in `src/types/cart.d.ts`

### Enrolling / adding a course

| Entry point | Behaviour |
| --- | --- |
| Enrol card (`/course-details`) | **Enroll Now** parses the amount out of the `"price"` copy in `src/db/course-details.ts` (`{ amount: "$25", period: "/lifetime" }`), adds the course and opens the cart; once added the CTA flips to **In Cart — View Cart** |
| Course cards (home, `/courses`, category & creator grids) | Hover/focus shopping-bag button adds that course and opens the cart — `aria-label` and `aria-pressed` reflect the in-cart state |
| Header bag icon | Live count badge, `aria-label="Cart, N items"`, opens the drawer from anywhere |

### The drawer — `src/components/layout/CartDrawer.tsx`

- Right-hand `role="dialog"` / `aria-modal` panel (max 420px) listing each course with thumbnail, author, price and a labelled remove button
- Sticky footer shows the subtotal and the **Checkout** button; the empty state offers a **Browse courses** link back to `/courses`
- Dismissed by the scrim, the close button or Escape, with body scroll locked while open (`hooks/useOverlayDismiss`)

### Checkout — demo only

- **Checkout** calls `placeOrder()`: it totals the cart, clears it, closes the drawer and opens `OrderSuccessModal`
- The modal confirms **Order Successful!** with the order total, states plainly that *no payment was taken*, and **Continue Shopping** dismisses it
- Nothing leaves the browser: no order record, no payment step, no `/checkout` route

---

## What I did

### 1. Built the screens from the design
- Home, catalogue, course detail, creator profile, auth screens and a pixel-checked **404 page** (verified against the Figma frame at 1440px — layout boxes matched within ~1px: hero 1440×957, `404` line box at y160/h480, heading at y521/w935, button 162×45 at y786)
- Shared `Header` / `Footer`, a `design-grid` utility for the recurring 120px blueprint grid, and `next/image` everywhere

### 2. Restructured content, types and routes
- **Every array of content moved to `src/db/`** (courses, footer links, nav, filters, glows, form fields, info-page copy…) — components no longer hold data
- **Types regrouped by feature** in `src/types/*.d.ts` (`course`, `auth`, `cart`, `home`, `creator`, `layout`, `common`, `info`) instead of one type file per component
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

### 7. Rebuilt the home hero against the Figma frame
- Traced 1:1 from Figma `Hero_Frame` (node `1:1695`, a 1440×1024 frame). At 1440px every box matches: ring `145,582 · 1149×1149 · 320px` stroke, the six 3-D ornaments at their exact image-rect coordinates, photo `431,512 · 578×541`, the three floating cards (`404,639` / `842,651` / `328,837`), the 935px H1 box and the top-aligned search button
- Fixed everything that didn't match: the blueprint grid was tilted 2° (the frame's lines are exactly axis-aligned), three ornaments had inverted fills (lime ↔ white), the centre scribble was rotated 3° instead of 180°, the header logo sat 6.5px low, "Home" used the wrong line-height, the cards carried a shadow the frame doesn't have, and the search button was vertically centred instead of top-aligned
- Four ornament assets generated locally in the colours the frame actually uses (`hero-cylinder-lime`, `hero-torus-white`, `hero-spiral-white`, `hero-cone-white`) — Figma's images API was rate-limited, so they were re-rendered through the `HARD_LIGHT` blend the frame itself uses
- **Responsive system**: every coordinate is a design pixel multiplied by `--u` (`.hero-art`), so the artwork sits on a centred 1440px stage from 1920px down to 1024px and scales below that. Ornaments that bleed past the frame stay pinned to the viewport edge, so they stay cropped exactly as Figma crops them; the grid origin is pinned to the same stage. Below 1024px the ornaments anchor to the bottom, framing the photo instead of sitting behind the headline
- Audited by measuring the live DOM at 13 widths (1920 → 360): shapes, ring, photo, cards, headline and search all land on their design coordinates; `tsc` + `eslint` clean

### 8. Depth motion — scroll and pointer parallax
- `hooks/useParallax` gained an opt-in `mouse` flag: the pointer is normalised to −1..1 inside the section and eased at `0.085`/frame, so every layer trails smoothly and settles back to rest when the pointer leaves. The four pre-existing callers are untouched
- Layers declare `data-parallax` (px of lag across the section's scroll progress) and `data-mouse` (px of drift at full deflection) — deeper layers lag more and move less
- Applied to the home hero (11 layers: ring, 6 ornaments, photo, 3 cards), the auth shell (grid + 5 showcase decorations) and `JoinAsCreator`. On the hero the wrapper carries the transform while the artwork keeps its own rotation, so the two never collide
- Gated behind `(pointer: fine)` and `prefers-reduced-motion`

### 9. Cart, filters, validation and shared overlays
- **Cart + demo checkout** (see [Cart, enrollment & checkout](#cart-enrollment--checkout)): a `localStorage`-backed cart context, global drawer and order-success modal, add-to-cart from the enrol card (`Enroll Now` → `In Cart — View Cart`) and from a keyboard-reachable button on every course card, plus a header count badge
- **Course filtering** rebuilt on a headless `Dropdown` (`components/common/Dropdown.tsx`): featured / level / category / sort (relevance, top rated, most students, price ↑↓) — state in `hooks/useCourseFilters`, the actual filtering + sorting in the pure `utils/filter-courses.ts`, and any change resets pagination to page 1
- **Auth validation**: both forms run through `hooks/useAuthForm` + `utils/validate` (email format, 8-character password, name) — inline errors, cleared as you type, with a pending state while the simulated request runs
- **`hooks/useOverlayDismiss`** centralises Escape-to-close + body-scroll-lock for the cart drawer, order modal and course video preview (`youtube-nocookie` embed)

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
    layout/                  header, footer, cart drawer, order-success modal
    common/                  cards, icons, cursor, dropdown, scroll reveal, svg helper
    auth/                    auth shell, showcase, form fields
    pages/<page>/            per-page sections (home, courses, course, creator, not-found)
    ui/                      SectionTitle, GlowLayer
  context/cart.tsx           cart state (localStorage + useSyncExternalStore)
  db/                        all content arrays (feature-named files)
  types/                     one .d.ts per feature
  hooks/                     useParallax, useCourseFilters, useAuthForm, useOverlayDismiss
  utils/                     pure helpers (filter-courses, validate, slug)
  proxy.ts                   middleware (auth gating)
scripts/check-links.mjs
```

---

## Conventions

- **Content lives in `src/db`**, never inline in a component — screens stay presentational
- **One type file per feature**, not per component (`@/types/course`, `@/types/auth`, `@/types/cart`, …)
- **Cart state lives in `src/context/cart.tsx`** — components call `useCart()`; nothing about the cart is stored in `db` or lifted into page components
- **Every overlay goes through `hooks/useOverlayDismiss`** (Escape to close, body scroll lock): cart drawer, order-success modal, video preview
- **Filtering is pure** — `hooks/useCourseFilters` owns the values, `utils/filter-courses.ts` derives the list; no component filters or sorts inline
- Blue sections share the `design-grid` utility instead of repeating gradients
- Decorative motion goes through `hooks/useParallax`, which bails out under `prefers-reduced-motion`; layers opt in with `data-parallax` (scroll lag) and optional `data-mouse` (pointer drift), and only decorative elements get them — never a form or a heading
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
- Server components by default — only interactive parts (header, forms, tabs, carousel, filter dropdowns, cart drawer, modals, parallax sections, cursor/reveal) declare `"use client"`: 29 of 46 component files
- Cart drawer, order-success modal and video preview are `role="dialog"` + `aria-modal` with Escape-to-close, a focusable close control and body scroll lock; the cart button and add-to-cart buttons carry state-exposing labels (`aria-pressed`, `aria-label="Cart, N items"`)
- Every image has `alt` (decorative ones `alt=""`), every icon button has an accessible name
- Heading order verified per page: H1 → H2 → H3 (sr-only H2s where a grid sits directly under the H1)
- Reduced-motion respected for parallax and reveals
- Cart reads/writes `localStorage` inside try/catch and hydrates from an empty server snapshot, so SSR and the first client render always match

---

## Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Absolute origin used by `sitemap.xml` and `robots.txt` in production |

---

## Known limitations & next steps

- **Auth is UI-only** — the forms don't call an API; `proxy.ts` is ready for a real `authToken` cookie
- **Checkout is a demo** — `placeOrder()` clears the local cart and shows the success modal; there is no payment provider, no order record and no server-side cart, and the cart only survives in that browser's `localStorage`
- Course/category/info data is sample content in `src/db`; no CMS or database
- Category pages 404 on unknown slugs instead of showing an empty state
- Legal/about copy is short placeholder text, not legal advice
- No automated test suite yet — `check:links` covers routing; unit tests and visual regression would be the next addition
- The home hero photo is a locally prepared cut-out at `public/assets/images/brand/student-laptop.png`. Figma's images API was rate-limited throughout the build, so node `1:1796` could not be pulled — dropping an export over that file swaps the photo with no code change
