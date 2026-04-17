# Hale Textile Studio — Claude Code Guide

## Project
Hawaii's luxury home fabric library and showroom. Next.js marketing site for Hale Textile Studio (Honolulu). Static content for now; GHL integration planned.

## Stack
- **Next.js 16** — App Router only. No Pages Router.
- **TypeScript** — strict mode. Prefer `interface` over `type`.
- **Tailwind CSS v4** — primary styling approach (see conventions below).
- **Framer Motion** — animations only. Add `"use client"` when using it.
- **shadcn/ui** — use for any new interactive UI primitives.
- **next/image** — always use for images. Never `<img>`.
- **next/link** — always use for internal navigation. Never `<a>`.

## Styling Conventions
Tailwind classes are the default. Inline `style={}` is acceptable only for values Tailwind cannot express: `clamp()` font sizes, custom gradients, precise `letter-spacing` values not on the Tailwind scale.

**Never hardcode hex values.** Use the brand tokens defined in `globals.css`:

| Token | Tailwind class | Value |
|---|---|---|
| Coral | `text-coral` / `bg-coral` | `#D4614A` |
| Navy | `text-navy` / `bg-navy` | `#2B5278` |
| Ocean | `text-ocean` / `bg-ocean` | `#0A2A3A` |
| Seafoam | `text-seafoam` / `bg-seafoam` | `#5AADA8` |
| Gold | `text-gold` / `bg-gold` | `#C8A96E` |
| Shell | `text-shell` / `bg-shell` | `#F8F4EC` |
| Sand | `text-sand` / `bg-sand` | `#EDE0CC` |
| Mid | `text-mid` / `bg-mid` | `#5A5248` |
| Warm Black | `text-warm-blk` / `bg-warm-blk` | `#14100C` |

Typography tokens: `font-serif` → Cormorant Garamond, `font-sans` → Josefin Sans.

## Component Conventions
- **Server components by default.** Only add `"use client"` when the component uses state, hooks, event handlers, or Framer Motion.
- **Responsive styles must be Tailwind classes**, not inline styles. Inline styles cannot be overridden by responsive variants (`max-md:`, `lg:`, etc.).
- Keep layout (grid, flex, padding, spacing) in Tailwind. Keep decorative visual styles (gradients, shadows, brand colors) in inline style only if not expressible via tokens.

## Routing & Pages
All routes live in `/app`. Each page directory contains a single `page.tsx`. Shared UI lives in `/components`.

## Planned Integrations
- **GoHighLevel (GHL)** — future integration for contact form submissions, contact data, and calendar/booking. API routes will live in `/app/api/`. Use the `ghl-integration` Claude skill when building these.

## Deployment
Vercel. Push to `main` on GitHub to deploy. No env variables required currently.

## Development
```bash
npm run dev    # localhost:3000
npm run build  # production build check before pushing
npm run lint   # ESLint
```

No test suite. Validate changes visually in the browser during dev.

## TODO
- [ ] Client handover documentation (git workflow, commit/push instructions for non-technical user)
- [ ] GHL integration: contact form → GHL, calendar embed, contact sync
