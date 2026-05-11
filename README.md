# ClinicService — Landing Page

Marketing landing page for ClinicService, the operating system for dental clinics in Algeria.

## Preview

Open `index.html` directly in a browser — no build step required.

```bash
open index.html
# or
python3 -m http.server 8000  # then visit http://localhost:8000
```

## Stack

- Pure HTML + CSS — no framework, no build
- Google Fonts: Inter, Geist Mono
- Single file: `index.html`

## Design

- Dark agency aesthetic — pure black background, lime green accent (`#c5ff3d`)
- Numbered sections (01-08) with monospace eyebrows
- Sections: Hero → Marquee → Services → Julia AI → Process → Testimonial → Stats → Comparison → FAQ → CTA → Footer

## Editing

Search and replace these placeholders before going live:

- `+213 XX XX XX XX` — phone number
- `wa.me/213XXXXXXXXX` — WhatsApp number
- `contact@clinicservice.app` — contact email
- Trust strip clinic names (`Zekri Dental`, `Clinique Atlas`, etc.)

## Integration into the SaaS

This file is intended to be lifted into the ClinicService web app as the public marketing page. Most of the styles are scoped via CSS variables under `:root` — easy to map onto your design system.

## License

Proprietary — ClinicService.
