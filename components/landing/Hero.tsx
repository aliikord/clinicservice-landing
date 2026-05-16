import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 text-center md:pt-32">
      {/* Top halo glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-300px] z-0 h-[1000px] w-[1600px] -translate-x-1/2 blur-[50px]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(91,139,255,0.25) 0%, rgba(0,23,108,0.35) 22%, rgba(91,139,255,0.08) 45%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <Badge
          variant="outline"
          className="mb-9 gap-2 rounded-full border-[rgba(91,139,255,0.18)] bg-[rgba(91,139,255,0.06)] px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright"
        >
          <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
          En direct · 6 cliniques pilotes en Algérie
        </Badge>

        <h1 className="text-balance text-[clamp(56px,9vw,144px)] font-bold leading-[0.95] tracking-[-0.04em]">
          Le système d&apos;
          <span className="text-blue-gradient font-serif italic">exploitation</span>
          <br />
          des cliniques{" "}
          <span className="inline-block rounded-[22px] bg-gradient-to-b from-brand-mid to-brand px-4 pb-2.5 text-white shadow-[0_16px_48px_rgba(0,23,108,0.6),0_0_0_1px_rgba(91,139,255,0.22)]">
            dentaires.
          </span>
        </h1>

        <p className="mx-auto mt-9 max-w-[700px] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-muted-foreground">
          ClinicService digitalise votre flux patient — dossier clinique, agenda
          multi-praticiens, caisse temps réel, imagerie DICOM intégrée. Conçu en Algérie.
          Augmenté par Julia, votre IA dédiée.
        </p>

        <div className="mt-11 flex flex-wrap justify-center gap-3.5">
          <Button
            asChild
            size="lg"
            className="brand-gradient h-13 gap-2 rounded-full px-7 text-[15px] shadow-[0_14px_48px_rgba(0,23,108,0.55)] hover:translate-y-[-2px] hover:shadow-[0_18px_56px_rgba(0,23,108,0.7)]"
          >
            <Link href="#contact">
              Demander une démo
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-13 gap-2 rounded-full border-white/10 bg-white/[0.04] px-7 text-[15px] backdrop-blur-2xl hover:border-[rgba(91,139,255,0.30)] hover:bg-white/[0.08]"
          >
            <Link href="#vsl">
              <Play className="size-3.5 fill-current" />
              Regarder la démo
            </Link>
          </Button>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-6 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Essai gratuit 30 jours
          </span>
          <span className="text-border">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Installation en 24h
          </span>
          <span className="text-border">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Formation incluse
          </span>
        </div>
      </div>
    </section>
  );
}
