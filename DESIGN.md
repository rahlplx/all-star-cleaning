# Design System — All Star Cleaning Ottawa

## Color Strategy: Committed
One saturated color (teal) carries 30-60% of the hero and CTA surfaces. Navy serves as the authoritative anchor. Gold accents appear only for emphasis moments. This is a brand surface where color IS voice.

## Palette

### Primary: Teal
- `--color-teal`: `#0d9488` / `oklch(56% 0.1 175)` — Primary brand color, CTAs, links, active states
- `--color-teal-light`: `#14b8a6` / `oklch(65% 0.12 175)` — Hover states, accents, secondary emphasis
- `--color-teal-dark`: `#0a5e57` / `oklch(40% 0.08 175)` — CTA backgrounds, deep emphasis

### Anchor: Navy
- `--color-navy`: `#0f1b2d` / `oklch(18% 0.02 260)` — Hero backgrounds, headings, authoritative elements
- `--color-navy-light`: `#1a2d47` / `oklch(25% 0.03 260)` — Gradient endpoints, lighter navy surfaces
- `--color-navy-dark`: `#0a1118` / `oklch(13% 0.01 260)` — Hover states on navy surfaces

### Accent: Gold
- `--color-gold`: `#f59e0b` / `oklch(75% 0.15 85)` — Rare emphasis, ratings, highlights
- `--color-gold-light`: `#fbbf24` / `oklch(80% 0.14 85)` — Hover gold
- `--color-gold-dark`: `#d97706` / `oklch(65% 0.16 85)` — Deep gold emphasis

### Neutrals (navy-tinted)
- `--color-off-white`: `#f8f9fa` / `oklch(98% 0.003 260)` — Page background (tinted toward navy, not pure white)
- `--color-off-white-dark`: `#e9ecef` — Subtle dividers, secondary backgrounds
- `--color-muted`: `#64748b` — Secondary text (slate with subtle navy tint)
- `--color-border`: `#e2e8f0` — Hairline borders
- `--color-card`: `#ffffff` — Card surfaces (slightly warmer than pure white)

## Typography

### Fonts
- **Headings**: DM Serif Display — editorial authority, local trust, distinctive without being ornate
- **Body**: Outfit — clean geometric sans, excellent readability at body sizes, pairs well with serif headings

### Scale
Fluid `clamp()` for headings, fixed `rem` for body. Ratio 1.25 between steps.

| Role | Token | Value |
|------|-------|-------|
| Display | `--text-display` | `clamp(2.5rem, 5vw, 4.5rem)` |
| Headline | `--text-headline` | `clamp(1.75rem, 4vw, 3rem)` |
| Subheading | `--text-subheading` | `clamp(1.125rem, 2.5vw, 1.5rem)` |
| Body | `--text-base` | `1rem` (16px) |
| Small | `--text-sm` | `0.875rem` |
| Caption | `--text-xs` | `0.75rem` |

### Line Heights
- Headings: 1.1-1.2
- Body: 1.6 (the readability sweet spot)
- Light text on dark: +0.05-0.1

## Elevation
Flat by default. Shadows only on state change (hover, sticky).

| Level | Token | Purpose |
|-------|-------|---------|
| Rest | none | Cards and surfaces at rest are flat |
| Subtle | `--shadow-sm` | Resting cards |
| Hover | `--shadow-md` | Hover lift on cards |
| Elevated | `--shadow-lg` | Sticky CTAs, dropdowns |
| Prominent | `--shadow-xl` | Hero elements, modals |

## Motion
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quart)
- **Fast**: 150ms — color, opacity transitions
- **Base**: 250ms — transforms, non-color changes
- **Slow**: 350ms — orchestrated entrances
- Never animate layout properties (width, height, padding, margin)
- Always respect `prefers-reduced-motion`

## Spacing Scale
8 / 16 / 24 / 32 / 48 / 64 / 80 / 120px — magazine-scale breathing room. Generous separations between sections (48-80px), tight groupings for related elements (8-16px).

## Components

### CTA Buttons
- Primary: `rounded-full bg-teal-dark text-white shadow-lg hover:bg-navy`
- Secondary: `rounded-full border-2 border-white/30 text-white hover:border-white/60`
- Touch targets: minimum 44x44px (48px on coarse pointers)

### Cards
- Rounded corners (`rounded-xl`), hairline border, flat at rest
- Hover: subtle lift (`-translate-y-0.5`) + shadow increase
- No side-stripe borders (impeccable ban)
- No nested cards

### Breadcrumbs
- Hairline bottom border, compact padding
- Chevron separators, last item bold with `aria-current`

## Rules
1. Never use pure `#000` or pure `#fff` for large areas
2. Never use gradient text (`background-clip: text` + gradient)
3. Never use side-stripe borders (border-left/right > 1px as accent)
4. Never nest cards inside cards
5. Cap body line length at 65ch
6. Tint all neutrals toward brand hue (navy)
7. Gray text on colored backgrounds: use a shade of the background color instead
8. Every interactive element needs hover, focus, active, and disabled states
