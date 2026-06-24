# AGENTS.md — All Star Cleaning

## Project Overview

Marketing website for All Star Cleaning, an Ottawa exterior cleaning service. Converts visitors to phone calls. ~600+ static pages.

- **Framework**: Astro 6.3 + React 19
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
| `src/data/locations.ts` | 44 Ottawa locations with coordinates, area, postal codes, neighbours |
| `src/data/services.ts` | Service data loader and helpers |
| `src/types.ts` | TypeScript interfaces |
| `src/lib/utils.ts` | `cn()`, `formatPhone()`, `hreflangUrl()` |
| `src/seo/` | Schema.org generators (local-business, service, FAQ, breadcrumb, review, etc.) |
| `DESIGN.md` | Design system reference (colors, typography, elevation, motion, rules) |
| `PRODUCT.md` | Product/UX strategy (brand voice, user profiles, conversion goals) |

## Routes

```
/                                           → redirects to /en/
/[locale]/                                  → Homepage
/[locale]/about
/[locale]/reviews
/[locale]/services/
/[locale]/services/[serviceSlug]            → 5 services × 2 locales = 10 pages
/[locale]/area/
/[locale]/area/[locationSlug]/              → 44 locations × 2 locales = 88 pages
/[locale]/area/[locationSlug]/[serviceSlug] → 440 programmatic pages
/[locale]/privacy
/[locale]/terms
/keystatic/*                                → CMS admin UI
/api/keystatic/*                            → CMS API
```

## Components

**Astro** (`src/components/`):
- `BaseHead.astro` — meta, OG tags, hreflang, canonical
- `Header.astro` — sticky nav, mobile hamburger, phone link
- `Footer.astro` — 4-column layout with social icons
- `TopBar.astro` — optional announcement bar
- `StickyBottomCTA.astro` — fixed mobile call/quote CTA
- `JsonLd.astro` — injects JSON-LD structured data
- `FAQAccordion.astro` — accordion FAQ
- `ServiceBadge.astro` — service card with icon

**React** (`src/components/ui/`):
- `button.tsx` — CVA button with variants (default/destructive/outline/secondary/ghost/link) and sizes

## Content (Keystatic CMS)

JSON files in `src/content/`:
- `services/*.json` — window-cleaning, gutter-cleaning, pressure-washing, siding-cleaning, snow-removal
- `reviews/*.json` — 5 customer reviews
- `about.json`, `homepage.json`, `settings.json`

Edit via `/keystatic` admin UI (requires dev server) or directly in JSON files.

## Environment Variables

**`.env`** — Keystatic CMS credentials:
```
KEYSTATIC_GITHUB_CLIENT_ID
KEYSTATIC_GITHUB_CLIENT_SECRET
KEYSTATIC_SECRET
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
```

**`.env.local`** — Local overrides:
```
WEB3FORMS_ACCESS_KEY   # Contact form submissions
PUBLIC_SITE_URL        # Canonical URL (https://www.allstarcleaning.ca)
```

## Conventions

1. **Path alias**: `@/*` → `src/*` — use `@/components/...`, `@/lib/utils`, etc.
2. **i18n**: Always thread `locale` param through pages; use `hreflangUrl()` for alternate language links.
3. **Tailwind tokens**: Use CSS vars from `global.css @theme` (e.g. `--color-brand-blue`), never hardcode hex.
4. **Design rules**: See `DESIGN.md` — no pure black/white, no gradient text, no decorative side-stripes.
5. **Obfuscation**: Vite plugins rename `--tw-*` → `--c-*` and reroute `/_astro/` → `/static/` in production. Don't reference internal Tailwind vars directly.
6. **Static only**: No backend. Forms via Web3Forms. No DB queries anywhere.
7. **SEO schemas**: Use generators in `src/seo/` — never hand-write JSON-LD.
8. **Add location**: Append to `src/data/locations.ts` — programmatic pages auto-generate at build time.
9. **Add service**: Create JSON in `src/content/services/`, update `src/data/services.ts` loader array.
10. **Layouts**: Wrap pages in `BaseLayout.astro` (head + header + footer) or `PageLayout.astro` (adds breadcrumbs + hero).

## Impeccable (Design Anti-Slop)
Skill installed at `.agents/skills/impeccable/SKILL.md`.  
`DESIGN.md` + `PRODUCT.md` satisfy the `/teach` prerequisite — skip `/teach`, go straight to `/audit`, `/polish`, `/craft`.

## Accessibility Rules (Post-Audit)

### Forms
- Every `<input>` needs `<label for="id">`
- `autocomplete` on name/email/phone/address fields
- `inputmode="tel"` on phone, `inputmode="email"` on email
- `aria-required="true"` on required fields
- Error messages linked via `aria-describedby`

### Mobile Menu
- Hamburger: `<button aria-label="Open menu" aria-expanded="false" aria-controls="menu-id">`
- Panel: `<div id="menu-id" role="dialog" aria-modal="true" aria-label="Mobile navigation">`
- Focus trap, Escape-to-close, restore focus on dismiss

### Star Ratings
```html
<div role="img" aria-label="5 out of 5 stars">
  <span aria-hidden="true">★★★★★</span>
</div>
```

### CTA Consistency
All CTA text imports from `src/data/cta.ts`. No hardcoded strings.

### Color Convention
```css
--color-example: #hexvalue;        /* fallback */
--color-example: oklch(L C H);    /* modern */
```

## Service Page Patterns

### Template Structure (`[serviceSlug].astro`)
- Grid: `lg:grid-cols-3` — main content (2/3) + sticky sidebar (1/3)
- Sidebar: `sticky top-24 z-sticky overflow-y-auto overscroll-behavior-contain`
- Mobile CTA: `lg:hidden` — inline CTA only visible on mobile
- Snow removal: conditional response time text via `responseTimeText` const

### Content JSON Fields
```json
{
  "slug": "service-name",        // EN slug (used in URLs for both locales)
  "frSlug": "nom-français",      // UNUSED — orphaned, kept for CMS compat
  "name": "Service Name",
  "frName": "Nom du Service",
  "description": "...",
  "frDescription": "...",
  "features": ["..."],
  "frFeatures": ["..."],
  "metaTitle": "... | All Star Cleaning",
  "metaDescription": "...",
  "cta": "Get a Free Service Quote",    // Sidebar heading
  "frCta": "Obtenez un Devis Gratuit...",
  "faqs": [{ "question": "...", "answer": "..." }]
}
```

### SEO Schema
- Service JSON-LD: `src/seo/service-schema.ts` — includes `image` field
- Breadcrumb JSON-LD: `src/seo/breadcrumb-schema.ts`
- FAQ JSON-LD: `src/seo/faq-schema.ts`
- `og:image`: passed per-service via `ogImage` prop to PageLayout

### Bilingual Rules
- All user-facing text must have EN/FR ternary: `isFr ? frText : enText`
- French typesetting: non-breaking space before `:` (`\u00A0:`)
- Snow removal CTA: "4hr response during storms" (not "24hr")
- Review count: pull from `siteSettings.googleReviewCount` (not hardcoded)

### Touch Target Checklist
Every `<a>` and `<button>` must have `touch-target` class (min 44×44px):
- Header nav links, hamburger, phone icon
- Breadcrumb links
- Google review badge, Insured & Bonded badge
- Service CTA buttons (mobile + sidebar)
- Related service card links
- Footer service links, phone/email links, legal links
- FAQ accordion summary

### Transition Rules
- Never use `transition-all` (except `button.tsx` shared component)
- Use `transition-colors duration-200` for color changes
- Use `transition-transform` for scale/rotate
- `hover-lift` uses `::after` pseudo-element with opacity transition
- `will-change-transform`: only on actively animated elements, not static hovers

### Glassmorphism Ban
- No `backdrop-blur` on cards or content areas
- `backdrop-blur-md` on `StickyBottomCTA` is acceptable (persistent mobile bar)
- Use solid backgrounds with opacity: `bg-card/95` instead of blur
