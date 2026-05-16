# ClinicService — Landing Page

Marketing landing page for ClinicService, the operating system for dental clinics in Algeria.

Built with **Next.js 16 + TypeScript + Tailwind v4 + shadcn/ui (Radix + Nova preset)** — designed to lift directly into the ClinicService SaaS.

## Quick start

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

## Build

```bash
pnpm build           # static export to ./out
pnpm start           # only useful if you remove `output: 'export'`
```

## Deploy

The repo is set up to deploy to **GitHub Pages** via the workflow at `.github/workflows/deploy.yml`. Every push to `main` rebuilds and publishes.

Live preview: https://aliikord.github.io/clinicservice-landing/

### Integrating into your SaaS (no GitHub Pages prefix)

The landing assumes it's served at `/clinicservice-landing/` on GitHub Pages. For your real SaaS / Vercel / custom domain, **unset the base path** at build time:

```bash
NEXT_PUBLIC_BASE_PATH="" pnpm build
```

Or edit `next.config.ts` and remove the `basePath` / `assetPrefix` lines.

## Stack

| Layer | Tool |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui — Radix primitives, Nova preset (Lucide icons, Geist Mono) |
| Fonts | Inter (UI), Fraunces (italic accents), Geist Mono (numbers/labels) |
| Video | Wistia (`ko3v3y0pu8`) |

## Structure

```
app/
├── layout.tsx          # root layout, fonts, Wistia scripts
├── page.tsx            # composes all sections
└── globals.css         # brand tokens (#00176c · #5b8bff · #b9c8ff)

components/
├── ui/                 # shadcn primitives (Button, Card, Accordion, …)
└── landing/            # page sections
    ├── SiteHeader.tsx
    ├── Hero.tsx
    ├── VslPlayer.tsx       # Wistia video with halo + orbital rings
    ├── Marquee.tsx
    ├── About.tsx           # big stroke-text intro
    ├── StatsStrip.tsx
    ├── Features.tsx        # bento grid with mock UIs
    ├── DashboardMockup.tsx # fake app screenshot
    ├── Julia.tsx           # AI section with glowing orb + chat
    ├── Process.tsx         # 4 numbered steps
    ├── Testimonial.tsx     # serif quote
    ├── CompareTable.tsx
    ├── Faq.tsx             # shadcn Accordion
    ├── Cta.tsx
    └── SiteFooter.tsx

public/
└── logo.png
```

## Editing checklist (before going live)

Search & replace these placeholders:

- `+213 XX XX XX XX` → real phone
- `wa.me/213XXXXXXXXX` → real WhatsApp link
- `contact@clinicservice.app` → real email
- Trust strip clinic names in `Marquee.tsx`
- Wistia media-id `ko3v3y0pu8` in `VslPlayer.tsx` + `layout.tsx`

## Design tokens

```ts
brand:        #00176c   // deep navy (button bg)
brand-mid:    #2c54d4   // gradients
brand-bright: #5b8bff   // text accents on dark
brand-soft:   #b9c8ff   // highlights
```

All defined as CSS variables in `app/globals.css` so they map onto the shadcn theme system.

## License

Proprietary — ClinicService.
