# Design System

Neobrutalist token architecture. Single source of truth: `src/constants/designSystem.ts` and Tailwind theme in `tailwind.config.ts`.

## Colors (semantic)

- **surface** / **surface-dark** — Background (light/dark).
- **ink** / **ink-dark** — Primary text.
- **ink-secondary** — Secondary text.
- **surface-alt** — Alternate surfaces (nav, expanded areas).
- **brand** — Primary blue (#3e43f0). Use for CTAs, focus rings (light).
- **accent** — Accent (#ecd4b4). Focus rings in dark mode.
- **cta** — CTA yellow.
- **status-ok** — Success/online indicator.

Use Tailwind: `bg-surface`, `text-ink`, `dark:bg-surface-dark`, `border-brand`, etc. Avoid raw gray/blue utilities.

## Z-Index scale

| Token               | Value   | Use case                    |
|---------------------|---------|-----------------------------|
| base                | 0       | Default                     |
| dropdown            | 10      | Dropdowns                   |
| sticky              | 20      | Sticky headers              |
| fixed               | 30      | Fixed UI                    |
| modalBackdrop       | 40      | Modal backdrop              |
| modal               | 50      | Modal content               |
| bootSequence        | 10000   | Boot overlay                |
| fullScreenOverlay   | 10001   | Mode transition, cursor, etc.|

Use classes: `z-modal`, `z-bootSequence`, `z-fullScreenOverlay`.

## Spacing & typography

Spacing scale (4px base) and typography (font sizes, weights, line heights) live in `designSystem.ts`. Tailwind extends colors and zIndex; spacing/typography can be extended for tokens like `space-section` if needed.

## Motion

- **Animation variants**: `src/constants/animations.ts` — `ENTRANCE_VARIANTS`, `HOVER_PRESETS`, `DURATIONS`, `EASINGS`.
- **Reduced motion**: Respect `prefers-reduced-motion` (globals.css) and `useReducedMotion()` where applicable (e.g. ScrollProgress, SectionTitle).

## Accessibility

- **Focus**: `:focus-visible` uses brand (light) / accent (dark). No `outline: none` without a visible replacement.
- **Touch targets**: Minimum 44px (globals.css). Use `touchTarget` from design system for new components.
- **Skip link**: `.skip-link` in globals.css; visible on focus only.

## Neobrutalist rules

- Border radius: 0 (globals.css reset). Do not use `rounded-*` unless a documented exception exists.
- Shadows: Hard offset, no blur — `shadow-neo`, `shadow-neo-lg`, `shadow-neo-xl` (light); `dark:` variants for dark mode.
- Borders: 2px default; use `border-2`, `border-4` with `border-black dark:border-white` (or semantic tokens).
