---
version: 1.0
name: All-Star-Cleaning-design
description: Editorial marketing design system for All Star Cleaning Ottawa. White canvas base, brand blue primary, Inter typography, and full-bleed signature cards in coral, forest, and dark navy that punctuate the homepage. Primary action is a brand-blue pill CTA; secondary is a white outlined button. Section rhythm is 96px universal.

colors:
  brand: "#1b61c9"
  brand-active: "#1a3866"
  ink: "#181d26"
  body: "#333840"
  muted: "#41454d"
  hairline: "#dddddd"
  border-strong: "#9297a0"
  canvas: "#ffffff"
  surface-soft: "#f8fafc"
  surface-strong: "#e0e2e6"
  surface-dark: "#181d26"
  surface-dark-elevated: "#1d1f25"
  signature-coral: "#aa2d00"
  signature-forest: "#0a2e0e"
  signature-cream: "#f5e9d4"
  signature-peach: "#fcab79"
  signature-mint: "#a8d8c4"
  signature-yellow: "#f4d35e"
  gold: "#c9a84c"
  on-brand: "#ffffff"
  on-dark: "#ffffff"
  link: "#1b61c9"
  link-active: "#1a3866"
  success: "#006400"
  success-border: "#39bf45"
  destructive: "#b91c1c"

typography:
  display-xl:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: clamp(2.5rem, 7vw, 5rem)
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: clamp(2rem, 5vw, 4rem)
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.015em
  display-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: clamp(1.5rem, 3vw, 2rem)
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  label-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0.01em

rounded:
  xs: 2px
  sm: 6px
  md: 10px
  lg: 12px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  button-primary-active:
    backgroundColor: "{colors.brand-active}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.brand}"
    border: "1px solid {colors.brand}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  button-secondary-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
  hero-band:
    backgroundColor: "video/image overlay"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  signature-coral-card:
    backgroundColor: "{colors.signature-coral}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  signature-forest-card:
    backgroundColor: "{colors.signature-forest}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  hero-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  cream-callout-card:
    backgroundColor: "{colors.signature-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.md}"
    padding: 24px
  service-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  cta-band-light:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 44px
  bottom-nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    height: 64px
  ai-chat-drawer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    width: 384px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    padding: 64px
---

## Overview

All Star Cleaning's marketing site is a conversion-focused editorial experience. The base atmosphere is **white canvas** (`{colors.canvas}`), Inter typography, and generous whitespace. Brand voltage comes from **full-bleed signature cards** in `{colors.signature-coral}`, `{colors.signature-forest}`, and `{colors.surface-dark}` that punctuate the homepage every two or three sections. The primary CTA is `{colors.brand}` (a confident brand blue), not a dark near-black — it signals trust and professionalism for a service business.

**Key Characteristics:**
- Primary CTA: `{colors.brand}` (#1b61c9) background, white text, `{rounded.lg}` corner (12px).
- Secondary CTA: white background with `{colors.brand}` border and text. The pair forms the site's signature button row.
- Hero: video background on desktop, static poster on mobile. Dark overlay for legibility. No gradient hero backgrounds.
- Signature cards: `{colors.signature-coral}`, `{colors.signature-forest}`, `{colors.surface-dark}` appear as full-bleed sections every 2–3 content bands.
- Section rhythm: `{spacing.section}` (96px) top + bottom padding on every major band — universal.
- Mobile: 3-button fixed bottom nav (Call · Quote · AI Chat). Each section designed for per-viewport poster impact.
- Border radius hierarchy: `{rounded.lg}` (12px) primary CTAs and signature cards → `{rounded.md}` (10px) content cards → `{rounded.sm}` (6px) inputs.

## Colors

### Brand
- **Brand** (`{colors.brand}` — #1b61c9): The primary action color. Used for primary CTA backgrounds, active nav states, links, and focus rings. NOT the dark ink color — ink is `{colors.ink}`.
- **Brand Active** (`{colors.brand-active}` — #1a3866): Press/active state on brand buttons.

### Canvas & Surfaces
- **Canvas** (`{colors.canvas}` — #ffffff): Default page surface. Every editorial body section starts on white.
- **Surface Soft** (`{colors.surface-soft}` — #f8fafc): Tabbed cards, secondary sections.
- **Surface Strong** (`{colors.surface-strong}` — #e0e2e6): Light-gray CTA band near footer.
- **Surface Dark** (`{colors.surface-dark}` — #181d26): Dark navy mid-page CTA cards.
- **Hairline** (`{colors.hairline}` — #dddddd): 1px borders on inputs, card dividers, secondary button outlines.

### Text
- **Ink** (`{colors.ink}` — #181d26): Headings and strongest UI text. Different role from `{colors.brand}`.
- **Body** (`{colors.body}` — #333840): Running body text.
- **Muted** (`{colors.muted}` — #41454d): Secondary labels, captions, footer links.
- **On Brand / On Dark** (`{colors.on-brand}` / `{colors.on-dark}` — #ffffff): Text on brand or dark surfaces.

### Signature Card Surfaces
Full-bleed, full-card use only — never as small accents.
- **Coral** (`{colors.signature-coral}` — #aa2d00): Large signature card. White type, white secondary button.
- **Forest** (`{colors.signature-forest}` — #0a2e0e): Second signature card. Service area callout.
- **Cream** (`{colors.signature-cream}` — #f5e9d4): Testimonial / trust band. Dark type, gold ratings.
- **Peach / Mint** (`{colors.signature-peach}` / `{colors.signature-mint}`): Service card accents, demo-grid-style surfaces.

### Semantic
- **Gold** (`{colors.gold}` — #c9a84c): Star ratings only.
- **Success** (`{colors.success}` — #006400): Form success states.
- **Destructive** (`{colors.destructive}` — #b91c1c): Form errors.

## Typography

### Font Family
**Inter** (variable font, 100–900 weights) — loaded from Google Fonts. Covers all roles. Display headings use weight 600; body uses 400; buttons and sub-titles use 500. No second font family.

Font fallback chain: `Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | clamp(2.5rem, 7vw, 5rem) | 600 | 1.1 | Homepage hero h1, full-viewport mobile poster |
| `{typography.display-lg}` | clamp(2rem, 5vw, 4rem) | 600 | 1.15 | Signature card h2 |
| `{typography.display-md}` | clamp(1.5rem, 3vw, 2rem) | 600 | 1.2 | Section headlines |
| `{typography.title-lg}` | 1.5rem | 500 | 1.35 | Section sub-titles |
| `{typography.title-sm}` | 1.125rem | 600 | 1.4 | Service card titles |
| `{typography.button}` | 1rem | 500 | 1.4 | CTA button labels |
| `{typography.body-md}` | 0.875rem | 400 | 1.6 | Body copy, nav, footer |
| `{typography.caption}` | 0.875rem | 500 | 1.35 | Captions, meta, badges |

### Principles
- Display headings: weight 600, letter-spacing negative (`-0.02em` at xl) — emphasis from size, not excessive weight.
- Body text: 0.875rem / 400 / 1.6 line-height. 65ch max measure.
- Never use `font-weight: 700` in editorial body — only for UI labels and trust badges.
- Fluid headings use `clamp()` — never fixed `rem` above body size.

## Layout

### Spacing System
- Base unit: 4px.
- Tokens: 4px · 8px · 12px · 16px · 24px · 32px · 48px · 96px.
- **Universal section padding**: `{spacing.section}` (96px) top + bottom on every major band.
- Card internal padding: 48px inside signature cards; 32px for content cards; 24px for callout cards; 16px for service cards.
- Gap between elements: 24px in grids; 16px inside dense groups.

### Grid & Container
- Max content width: 1280px centered.
- Horizontal breathing room: 24px on mobile, 48px on desktop.
- Service grid: 2-up at md, 3-up at lg (first card spans 2 columns as featured).
- Signature cards: full-width within the max container.

### Mobile — Per-Viewport Poster Design
On mobile, key sections target `min-height: 100dvh` or a substantial viewport fraction:
- Hero: full `100dvh`, bold h1 at `clamp(2rem, 8vw, 3rem)` weight 700, gradient from bottom.
- Coral card: minimum `60vh`, centered text.
- Dark navy card: minimum `50vh`.
- Forest card: minimum `50vh`.
Each section reads as a distinct, bold "poster" when scrolled to on a phone screen.

### Whitespace Philosophy
White canvas sections use 96px vertical padding. No decorative elements fill whitespace — headlines, sub-heads, and CTAs sit in clean air. No hero gradients, no background meshes, no atmospheric textures on white sections.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, footer |
| Hairline | 1px `{colors.hairline}` border | Inputs, card dividers, secondary buttons |
| Soft | `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.08)` | Sticky header, dropdowns |
| Card hover | translateY(-2px) + soft shadow | Service cards on hover |
| Signature cards | No shadow — depth from color contrast | Coral / forest / dark cards |

Color-block first, shadow second. Depth comes from the contrast between white canvas and signature surfaces.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Never used in standard UI |
| `{rounded.sm}` | 6px | Text inputs |
| `{rounded.md}` | 10px | Service cards, content cards |
| `{rounded.lg}` | 12px | Primary CTA buttons, signature cards |
| `{rounded.pill}` | 9999px | Secondary round buttons, badges |
| `{rounded.full}` | 9999px | Circular icon buttons, avatars |

## Components

> No hover states documented. Components below describe Default and Active/Pressed states only.

**`top-nav`** — White canvas, 64px tall, sticky. Logo left, nav links center-right, primary CTA (brand blue, `{rounded.lg}`) far right. Nav stays white even over dark hero — it scrolls with the page until the user scrolls past the hero, then re-appears as sticky. Mobile: hamburger collapses all links.

### Buttons

**`button-primary`** — Brand blue background (#1b61c9), white text, `{rounded.lg}` (12px), 16px × 24px padding. The site's primary conversion action. One per viewport.
- Active: darkens to `{colors.brand-active}` (#1a3866).

**`button-secondary`** — White background, `{colors.brand}` border (1px) and text, `{rounded.lg}`. Used alongside `{component.button-primary}` for the "softer" choice (e.g., "Call Now" next to "Get a Quote").

**`button-secondary-on-dark`** — White background, `{colors.ink}` text, `{rounded.lg}`. Used on signature coral / forest / dark cards. Never a translucent style on dark surfaces.

**`button-icon-circular`** — 40px × 40px, `{colors.canvas}` background, hairline border, `{colors.ink}` icon. Carousel controls, share, back affordances.

### Cards & Containers

**`hero-band`** — Full-viewport section. Video background on desktop (autoplay, muted, loop), static poster image on mobile. Dark overlay (`bg-ink/60`) for text legibility. Headline in `{typography.display-xl}`, white color. Sub-text in white/80. CTA row: `{component.button-primary}` (white bg, brand text) + `{component.button-secondary-on-dark}`.

**`signature-coral-card`** — Full-bleed coral (`{colors.signature-coral}`) card, white type, `{rounded.lg}`, 48px internal padding. Carries an h2 in `{typography.display-md}`, supporting copy, and `{component.button-secondary-on-dark}` (white button). First brand voltage moment after the hero.

**`signature-forest-card`** — Deep forest (`{colors.signature-forest}`) card. Service area callout — lists key Ottawa neighbourhoods. Same structure as coral card.

**`hero-card-dark`** — Dark navy (`{colors.surface-dark}`) mid-page CTA card. h2 + body copy + `{component.button-primary}` (brand blue on dark — stands out distinctly from white secondary).

**`cream-callout-card`** — Cream surface (`{colors.signature-cream}`), dark `{colors.ink}` type, `{rounded.md}`, 24px padding. Used for the testimonial / trust band. Gold stars (`{colors.gold}`).

**`service-card`** — White canvas or image-overlay card, `{rounded.md}`, 16px padding. Full-bleed image with gradient overlay and service name anchored to bottom-left.

**`cta-band-light`** — Light gray (`{colors.surface-strong}`) band near footer. h2 in `{typography.display-md}`, `{component.button-primary}` (brand blue). Final conversion push before footer.

### Mobile Bottom Nav Bar

**`bottom-nav-bar`** — Fixed 64px bar at bottom of viewport. Mobile only (`md:hidden`). 3 equal-width buttons divided by hairline separators:
1. **Call Now** — phone icon + label, `{colors.canvas}` bg, `{colors.brand}` text.
2. **Free Quote** — calendar icon + label, `{colors.brand}` bg, white text. Slightly emphasized as primary action.
3. **AI Chat** — sparkle icon + label, `{colors.canvas}` bg, `{colors.ink}` text. Opens right-side AI chat drawer.

### AI Chat Drawer

**`ai-chat-drawer`** — Right-side slide-in panel, 384px wide (full-width on mobile). Opens on AI Chat button tap. Renders structured card responses from Cloudflare Workers AI:
- Text bubble: plain message card
- Service card: service name + description + "Learn More" link
- Location list: horizontal scroll of area chips
- Contact card: phone + email + CTA
Focus trap, Escape-to-close, body scroll lock when open.

### Inputs & Forms

**`text-input`** — White background, `{colors.ink}` text, `{rounded.sm}` (6px), 12px × 16px padding, 44px height. 1px hairline border.
Focus: border recolors to `{colors.brand}`, 2px outer ring.

## Do's and Don'ts

### Do
- Keep `{component.button-primary}` brand blue. Never make it near-black or the hero background color — it must stand out as a distinct action.
- Reserve `{component.button-primary}` for one per viewport. Scarcity is the rule.
- Trust whitespace as the hero atmosphere on white-canvas sections. No gradient, no mesh, no decoration.
- Use `{component.signature-coral-card}`, `{component.signature-forest-card}`, and `{component.hero-card-dark}` to break editorial monotony every 2–3 sections.
- Use `{spacing.section}` (96px) on every major band.
- On mobile, make each section feel like a poster — large type, strong color, single bold message.
- Pull phone number and review counts from `siteSettings.json` — never hardcode.
- Thread `locale` through all pages; use `isFr ? frText : enText` for CMS fields, `t.key` for translation strings.

### Don't
- Don't use gradient text (`background-clip: text`).
- Don't add a gradient or mesh to white-canvas hero sections. Only the video/image hero has a background treatment.
- Don't nest cards inside cards.
- Don't use `transition-all` (use `transition-colors` or `transition-transform` explicitly).
- Don't use `backdrop-blur` on content cards (only permitted on `StickyBottomCTA` bar).
- Don't repeat the same surface color in two consecutive bands. Rhythm: white → coral → white → dark → cream → white → forest → light-gray.
- Don't hardcode CTA copy — use `t.cta.freeQuote`, `t.cta.callNow` from `translations.ts`.
- Don't use pure `#000` or pure `#fff` for large areas — use `{colors.ink}` and `{colors.canvas}`.

## Responsive Behavior

| Breakpoint | Key Changes |
|---|---|
| Mobile (< 768px) | Single-column; hero fills 100dvh; bottom nav bar visible; signature cards full-bleed with min 50dvh; service grid 1-up |
| Tablet (768–1024px) | 2-up service grid; bottom nav hidden; signature cards slightly shorter |
| Desktop (1024px+) | 3-up service grid (featured 2-col); video hero; signature cards at comfortable reading height |

### Touch Targets
- All `<a>` and `<button>`: `min-height: 44px; min-width: 44px` via `touch-target` class.
- Bottom nav bar buttons: 64px height (generously above minimum).
- AI chat input: 44px height.

## Known Gaps
- Hero video (`/videos/hero.mp4`) and poster (`/images/hero-poster.jpg`) are content dependencies — user must supply. Fallback: existing `cms.heroImage` used as poster.
- AI chat response quality depends on Cloudflare Workers AI model selection (`@cf/meta/llama-3-8b-instruct`). System prompt tuning may be needed after initial testing.
- Animation timings are not tokenized — use `transition-base` (250ms) for transforms, `transition-fast` (150ms) for colors.
