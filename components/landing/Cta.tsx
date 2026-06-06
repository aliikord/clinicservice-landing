import Link from "next/link";
import { LeadForm } from "./LeadForm";
import { CONTACT, whatsappLink, whatsappReady } from "@/lib/site";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
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
        <p className="mx-auto mb-2 max-w-[540px] text-[18px] leading-[1.6] text-muted-foreground">
          Laissez vos coordonnées — on vous rappelle sous 2h pour une démo de 30 minutes.
          Installation gratuite chez vous pendant 30 jours. Vous décidez ensuite.
        </p>

        <LeadForm />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
          {whatsappReady && (
            <>
              <Link
                href={whatsappLink("Bonjour, je souhaite une démo ClinicService")}
                className="text-brand-bright hover:underline"
              >
                WhatsApp
              </Link>
              <span className="text-border">·</span>
            </>
          )}
          <Link href={`mailto:${CONTACT.email}`} className="hover:text-foreground">
            {CONTACT.email}
          </Link>
          {!CONTACT.phoneDisplay.includes("X") && (
            <>
              <span className="text-border">·</span>
              <span>{CONTACT.phoneDisplay}</span>
            </>
          )}
          <span className="text-border">·</span>
          <span>{CONTACT.city}</span>
        </div>
      </div>
    </section>
  );
}
