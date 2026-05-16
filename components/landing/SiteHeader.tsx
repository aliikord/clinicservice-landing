import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#vsl", label: "Démo vidéo" },
  { href: "#features", label: "Fonctionnalités" },
  { href: "#julia", label: "Julia AI" },
  { href: "#process", label: "Démarrage" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-2xl saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <Image
            src="/logo.png"
            alt="ClinicService"
            width={32}
            height={32}
            className="drop-shadow-[0_0_14px_rgba(91,139,255,0.35)]"
          />
          <span className="text-[17px]">ClinicService</span>
        </Link>
        <nav className="hidden gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="brand-gradient rounded-full shadow-[0_8px_24px_rgba(0,23,108,0.5)] hover:shadow-[0_12px_32px_rgba(0,23,108,0.7)]">
          <Link href="#contact">
            Démo gratuite <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
