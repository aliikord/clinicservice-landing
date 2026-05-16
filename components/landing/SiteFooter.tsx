import Link from "next/link";
import Image from "next/image";

const SECTIONS = [
  {
    title: "Produit",
    links: [
      { href: "#vsl", label: "Démo vidéo" },
      { href: "#features", label: "Fonctionnalités" },
      { href: "#julia", label: "Julia AI" },
      { href: "#contact", label: "Démo" },
    ],
  },
  {
    title: "Société",
    links: [
      { href: "#", label: "À propos" },
      { href: "#", label: "Clients" },
      { href: "#", label: "Blog" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "#", label: "CGU" },
      { href: "#", label: "Confidentialité" },
      { href: "#", label: "DPA" },
      { href: "#", label: "Sécurité" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border py-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
              <span className="relative flex size-10 items-center justify-center">
                <span aria-hidden className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(91,139,255,0.4),transparent_70%)] blur-md" />
                <Image
                  src="/logo.png"
                  alt="ClinicService"
                  width={40}
                  height={40}
                  className="relative drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] drop-shadow-[0_0_20px_rgba(91,139,255,0.6)]"
                />
              </span>
              <span className="text-[17px]">ClinicService</span>
            </Link>
            <p className="mt-4 max-w-[320px] text-[14px] leading-[1.55] text-muted-foreground">
              Le système d&apos;exploitation des cliniques dentaires. Conçu en Algérie. Augmenté par IA.
            </p>
          </div>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h5 className="mb-4.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.title}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-muted-foreground transition-colors hover:text-brand-bright">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="my-14 select-none text-center font-serif italic font-light text-[clamp(96px,22vw,320px)] leading-[0.85] tracking-[-0.05em] text-transparent"
          style={{
            background: "linear-gradient(180deg, rgba(91,139,255,0.30), rgba(0,23,108,0.10))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          ClinicService
        </div>

        <div className="flex flex-wrap justify-between gap-6 border-t border-border pt-7 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
          <div>© 2026 ClinicService · Tous droits réservés · Édition Mai 2026</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Facebook</Link>
            <Link href="#" className="hover:text-foreground">Instagram</Link>
            <Link href="#" className="hover:text-foreground">LinkedIn</Link>
            <Link href="#" className="hover:text-foreground">YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
