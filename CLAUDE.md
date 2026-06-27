# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for All Star Cleaning, an Ottawa exterior cleaning service. Converts visitors to phone calls. ~600+ static pages.

- **Framework**: Astro 7 + React 19
- **Deployment**: Cloudflare Pages
- **CMS**: Keystatic (headless, cloud-backed JSON)
- **Styling**: Tailwind CSS v4 + custom design tokens
- **i18n**: English + French, manual routing via `[locale]` param
- **Pages**: ~600+ (440 programmatic = 44 locations × 5 services × 2 locales)
- **Services**: Window cleaning, gutter cleaning, pressure washing, siding cleaning, snow removal

## Commands

```bash
npm run dev        # Dev server → http://localhost:4321
npm run build      # Production build → ./dist/
npm run preview    # Preview production build locally
npm run typecheck  # Type check via astro check
```

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config, Cloudflare adapter, i18n, obfuscation Vite plugins |
| `keystatic.config.ts` | CMS schema — collections: reviews, services; singletons: settings, about, homepage |
| `src/styles/global.css` | Tailwind `@theme` tokens (colors, typography, spacing, motion) |
| `src/middleware.ts` | i18n routing middleware |
| `src/i18n/translations.ts` | All UI strings (EN/FR) — `useTranslations(locale)` returns typed `Translation` |
| `src/data/locations.ts` | 44 Ottawa locations with coordinates, area, postal codes, neighbours |
| `src/data/services.ts` | Service data loader and helpers |
| `src/types.ts` | TypeScript interfaces (`Service`, `Location`, `Review`, `SiteSettings`, etc.) |
| `src/lib/utils.ts` | `cn()`, `formatPhone()`, `hreflangUrl()` |
| `src/seo/` | Schema.org generators (local-business, service, FAQ, breadcrumb, review, etc.) |
| `DESIGN.md` | Design system reference (colors, typography, elevation, motion, rules) |
| `PRODUCT.md` | Product/UX strategy (brand voice, user profiles, conversion goals) |

## Routes

```
/                                               → redirects to /en/
/[locale]/                                      → Homepage
/[locale]/about
/[locale]/contact                               → Web3Forms contact form
/[locale]/reviews
/[locale]/sitemap
/[locale]/services/
/[locale]/services/[serviceSlug]                → 5 services × 2 locales = 10 pages
/[locale]/area/
/[locale]/area/[locationSlug]/                  → 44 locations × 2 locales = 88 pages
/[locale]/area/[locationSlug]/[serviceSlug]     → 440 programmatic pages
/[locale]/privacy
/[locale]/terms
/keystatic/*                                    → CMS admin UI
/api/keystatic/*                                → CMS API
```

## Architecture

### Page Generation

The 440 programmatic pages (`[locationSlug]/[serviceSlug].astro`) are generated at build time from `locations.ts` × `services.ts`. All service slugs are English-only — `frSlug` in service JSON is orphaned and unused, kept only for CMS compatibility.

### i18n Pattern

All user-facing text comes from `src/i18n/translations.ts`. Pages receive `locale` from `Astro.params`, then call `useTranslations(locale)` to get `t`. Bilingual ternaries follow the pattern `isFr ? t.someKey : t.someKey` (or more typically just `t.someKey` since both locales have the key). French typesetting requires a non-breaking space before colons: ` :`.

### Layouts

- `BaseLayout.astro` — head + header + footer; use for all new pages
- `PageLayout.astro` — extends BaseLayout with breadcrumbs + hero section

### Content (Keystatic CMS)

JSON files in `src/content/`:
- `services/*.json` — window-cleaning, gutter-cleaning, pressure-washing, siding-cleaning, snow-removal
- `reviews/*.json` — 5 customer reviews
- `about.json`, `homepage.json`, `settings.json`

Phone numbers and review counts must come from `siteSettings` (loaded from `settings.json`) — never hardcoded.

### Service Page Template

`[serviceSlug].astro` uses a 3-column grid:
- Main content (2/3): hero, features, FAQs
- Sticky sidebar (1/3): quote CTA form, `sticky top-24 z-sticky overflow-y-auto`
- Mobile: sidebar is hidden, replaced by `lg:hidden` inline CTA
- Snow removal special case: uses 4hr response time text, not 24hr

### SEO Schemas

Use generators in `src/seo/` — never hand-write JSON-LD:

| Schema | Pages |
|--------|-------|
| HomeAndConstructionBusiness | All |
| Service | 5 service pages |
| FAQPage | Service + location+service pages |
| BreadcrumbList | All |
| HowTo | Homepage |
| Person | About page |
| Review + AggregateRating | Reviews page |

## Conventions

1. **Path alias**: `@/*` → `src/*`
2. **Tailwind tokens**: Use CSS vars from `global.css @theme` (e.g. `--color-brand-blue`), never hardcode hex.
3. **Design rules**: See `DESIGN.md` — no pure black/white, no gradient text, no decorative side-stripes, no nested cards, 65ch max body line length.
4. **Obfuscation**: Vite plugins rename `--tw-*` → `--c-*` and reroute `/_astro/` → `/static/` in production. Don't reference internal Tailwind vars directly.
5. **Static only**: No backend. Forms via Web3Forms. No DB queries anywhere.
6. **Add location**: Append to `src/data/locations.ts` — programmatic pages auto-generate at build time.
7. **Add service**: Create JSON in `src/content/services/`, update `src/data/services.ts` loader array.
8. **oklch fallback**: Every CSS variable using oklch MUST have a hex fallback first: `--color-x: #hex; --color-x: oklch(...);`
9. **CTA strings**: All CTA text lives in `src/i18n/translations.ts` under the `cta` namespace (`t.cta.freeQuote`, etc.). Never hardcode CTA copy.
10. **Dark surfaces**: Use `text-text-on-dark` — never raw `text-white`.

## Accessibility Rules

### Forms
- Every `<input>` needs `<label for="id">`
- `autocomplete` on name/email/phone/address fields
- `inputmode="tel"` on phone, `inputmode="email"` on email
- `aria-required="true"` on required fields

### Mobile Menu
```html
<button aria-label="Open menu" aria-expanded="false" aria-controls="menu-id">
<div id="menu-id" role="dialog" aria-modal="true" aria-label="Mobile navigation">
```
Focus trap + Escape-to-close + restore focus on dismiss.

### Star Ratings
```html
<div role="img" aria-label="5 out of 5 stars">
  <span aria-hidden="true">★★★★★</span>
</div>
```

### Touch Targets
All `<a>` and `<button>` elements must have the `touch-target` class (min 44×44px).

### Fluid Headings
All heading utilities must use `clamp()` via CSS tokens — never fixed `rem` above body size.

## Transition Rules

- Never use `transition-all` (except `button.tsx` shared component)
- `transition-colors duration-200` for color changes
- `transition-transform` for scale/rotate
- `will-change-transform` only on actively animating elements, not static hovers
- No `backdrop-blur` on cards or content areas (`backdrop-blur-md` on `StickyBottomCTA` is the only exception)

## Impeccable (Design Anti-Slop)

Skill installed at `.agents/skills/impeccable/SKILL.md`.  
`DESIGN.md` + `PRODUCT.md` satisfy the `/teach` prerequisite — skip `/teach`, go straight to `/audit`, `/polish`, `/craft`.
