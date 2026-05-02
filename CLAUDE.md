# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start dev server at http://localhost:3000
yarn build      # Production build (also runs next-sitemap via postbuild)
yarn start      # Start production server
yarn lint       # Run ESLint
```

No test suite is configured.

## Architecture

This is a personal portfolio site built with **Next.js 13** (App Router, experimental `appDir`), **TypeScript**, and **Tailwind CSS**.

### Routing

- `app/` — App Router pages. `layout.tsx` wraps everything with `ThemeProvider`, `Navbar`, and `Footer`.
- `pages/api/` — Legacy API routes (only `hello.ts` exists).
- `public/api/` — Static JSON files served as a mock API (`feature-flag.json`, `product.json`, `image.json`).
- `public/.well-known/` — AASA and assetlinks files for mobile deep linking.

### Page Structure

`app/page.tsx` (home) composes four page-level sections in order:
1. `HeroSection` — intro with headshot, smooth-scroll CTA
2. `AboutSection` — bio text + skills tags (hardcoded arrays)
3. `ProjectsSection` — project cards (hardcoded array)
4. `BooksSection` — book cards (hardcoded array)

All section data (projects, books, skills) is **hardcoded inline** in the component files — there is no CMS or external data source.

### Key Patterns

- `"use client"` is required on any component using hooks, `react-scroll`, or `next-themes`. `app/layout.tsx` is a client component for this reason.
- Navigation uses `react-scroll` for smooth in-page scrolling between sections (not Next.js routing). Section IDs must match the `page` values in `Navbar.tsx`'s `NAV_ITEMS`.
- `SlideUp` (`components/SlideUp.tsx`) is a scroll-triggered animation wrapper using `IntersectionObserver`.
- Dark mode is handled by `next-themes` with `attribute="class"` — Tailwind's `dark:` variants are used throughout.
- External images (Amazon, GitHub raw, etc.) are whitelisted in `next.config.js` `images.domains`.
- Sitemap is auto-generated post-build via `next-sitemap` with config in `next-sitemap.config.js`.
