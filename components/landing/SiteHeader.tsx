import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/site";

const NAV_LINKS = [
  { href: "#vsl", label: "Démo vidéo" },
  { href: "#features", label: "Fonctionnalités" },
  { href: "#julia", label: "Julia AI" },
  { href: "#process", label: "Démarrage" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="glass-pill mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-2">
        <Link href="/" className="group flex items-center gap-2.5 px-2 font-bold tracking-tight">
          <span className="relative flex size-9 items-center justify-center">
            <span aria-hidden className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(91,139,255,0.4),transparent_70%)] blur-md" />
            <img
              src={asset("/logo.png")}
              alt="ClinicService"
              width={36}
              height={36}
              className="relative size-9 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] drop-shadow-[0_0_20px_rgba(91,139,255,0.6)]"
            />
          </span>
          <span className="text-[16px]">ClinicService</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-all hover:bg-white/[0.06] hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          className="wave-grad rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_8px_24px_rgba(0,23,108,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_32px_rgba(0,23,108,0.7)]"
        >
          <Link href="#contact">
            Démo gratuite <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
