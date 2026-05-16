import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonial() {
  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative mx-auto max-w-[1100px] pl-[clamp(60px,9vw,140px)]">
          <span
            aria-hidden
            className="absolute -top-10 left-0 font-serif text-[clamp(180px,18vw,320px)] italic font-light leading-none tracking-[-0.05em] text-transparent [text-shadow:0_0_100px_rgba(91,139,255,0.4)]"
            style={{
              background: "linear-gradient(180deg, var(--brand-soft), var(--brand-mid))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            &ldquo;
          </span>

          <div className="mb-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-brand-bright">
            Témoignage client · Mai 2026
            <span className="h-px max-w-[200px] flex-1 bg-gradient-to-r from-[rgba(91,139,255,0.3)] to-transparent" />
          </div>

          <p className="mb-10 text-[clamp(26px,3.5vw,44px)] font-medium leading-[1.25] tracking-[-0.02em]">
            Avant ClinicService, nos 24 boxes étaient pilotées sur 12 cahiers et 4 fichiers Excel. Aujourd&apos;hui, je vois en temps réel chaque encaissement, chaque file d&apos;attente, chaque retard. Ma productivité a augmenté de{" "}
            <span className="ital-gradient">40 %</span> en 4 mois.
          </p>

          <div className="flex items-center gap-4">
            <Avatar className="size-14 ring-1 ring-[rgba(91,139,255,0.20)] shadow-[0_8px_24px_rgba(0,23,108,0.5)]">
              <AvatarFallback className="brand-gradient bg-none font-bold text-[17px] text-white">
                DZ
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-[16px] font-semibold">Dr. Zekri</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                Fondateur · Zekri Dental Clinic, Alger
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
