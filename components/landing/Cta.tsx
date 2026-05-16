import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -bottom-[300px] z-0 h-[800px] w-[1400px] -translate-x-1/2 blur-[50px]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(91,139,255,0.28) 0%, rgba(0,23,108,0.40) 25%, rgba(91,139,255,0.08) 50%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <div className="mb-8 glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
          <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
          07 — Démo gratuite
        </div>
        <h2 className="mb-6 text-[clamp(48px,6.5vw,96px)] font-bold leading-[0.95] tracking-[-0.04em]">
          Prêt à transformer
          <br />
          votre <span className="ital-gradient">clinique ?</span>
        </h2>
        <p className="mx-auto mb-9 max-w-[520px] text-[18px] leading-[1.6] text-muted-foreground">
          Réservez une démo de 30 minutes avec notre équipe. Installation gratuite chez vous pendant 30 jours. Vous décidez ensuite.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button
            asChild
            size="lg"
            className="brand-gradient h-13 gap-2 rounded-full px-7 text-[15px] shadow-[0_14px_48px_rgba(0,23,108,0.55)] hover:translate-y-[-2px] hover:shadow-[0_18px_56px_rgba(0,23,108,0.7)]"
          >
            <Link href="https://wa.me/213XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20une%20d%C3%A9mo%20ClinicService">
              WhatsApp démo
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass-pill h-13 gap-2 rounded-full border-transparent px-7 text-[15px] hover:bg-white/[0.10]"
          >
            <Link href="mailto:contact@clinicservice.app">contact@clinicservice.app</Link>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
          <span>+213 XX XX XX XX</span>
          <span className="text-border">·</span>
          <span>Alger, Algérie</span>
          <span className="text-border">·</span>
          <span>Réponse &lt; 2h</span>
        </div>
      </div>
    </section>
  );
}
