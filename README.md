# Byte-Space

A course marketplace front-end built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Start the dev server                                |
| `npm run build`     | Production build                                    |
| `npm run start`     | Serve the production build                          |
| `npm run lint`      | Run ESLint                                          |
| `npm run format`    | Format the repo with Prettier                       |
| `npm run check:links` | Verify every internal link resolves (needs the app running) |

Set `NEXT_PUBLIC_SITE_URL` in production so `sitemap.xml` and `robots.txt` point at the real domain.

## Project structure

```
src/
  app/           routes (route groups: (auth), (public)), metadata, sitemap, robots
  components/
    auth/        sign in / register screens
    common/      shared building blocks (cards, icons, cursor, reveal)
    layout/      header + footer
    pages/       per-page sections (home, courses, course, creator, not-found)
    ui/          small shared primitives (SectionTitle, GlowLayer)
  db/            all arrays of content (courses, footer links, glows, pages…)
  types/         one .d.ts per feature (course, auth, home, creator, layout…)
  hooks/         shared client hooks (useParallax)
  utils/         pure helpers (slug)
  proxy.ts       route protection middleware
scripts/         repo tooling (link checker)
```

Conventions:

- Content arrays live in `src/db`, never inside components.
- Types live in `src/types/<feature>.d.ts` — one file per feature, not per component.
- Images go through `next/image`; the blue background grid is the `design-grid` utility.
