import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { asset } from "@/lib/site";

type Feature = {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  cta: string;
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    num: "01",
    eyebrow: "Imagerie DICOM",
    title: (
      <>
        Vos radios.
        <br />
        <span className="ital-blue">Sur iPad.</span>
      </>
    ),
    desc: "Panoramique, RVG, CBCT 3D — directement dans l'app. Aucun lecteur tiers.",
    cta: "Voir l'imagerie",
    image: "/features/01-xray.jpg",
    alt: "Radio panoramique dentaire dans ClinicService",
  },
  {
    num: "02",
    eyebrow: "Multi-plateforme",
    title: (
      <>
        Un seul produit.
        <br />
        <span className="ital-blue">Six appareils.</span>
      </>
    ),
    desc: "Web · iPhone · iPad · Mac · Windows · Android — synchronisés en temps réel.",
    cta: "Voir le produit",
    image: "/features/02-platforms.jpg",
    alt: "ClinicService sur 6 appareils synchronisés",
  },
  {
    num: "03",
    eyebrow: "Gain de temps",
    title: (
      <>
        Deux heures rendues.
        <br />
        <span className="ital-blue">Chaque jour.</span>
      </>
    ),
    desc: "Rappels, calculs commissions, réconciliation caisse, pointage — automatisés.",
    cta: "Tester gratuitement",
    image: "/features/03-time.jpg",
    alt: "Sablier symbolisant le temps économisé",
  },
  {
    num: "04",
    eyebrow: "Équipe & call center",
    title: (
      <>
        Huit agents.
        <br />
        <span className="ital-blue">Un seul écran.</span>
      </>
    ),
    desc: "Live calls, KPI par agent, scripts Darija, suivi des conversions en direct.",
    cta: "Découvrir",
    image: "/features/04-agents.jpg",
    alt: "Vue d'une agente de call center dentaire",
  },
  {
    num: "05",
    eyebrow: "Expérience patient",
    title: (
      <>
        Vos patients arrivent
        <br />
        <span className="ital-blue">à l'heure.</span>
      </>
    ),
    desc: "Rappels SMS, WhatsApp et appel automatiques. No-shows divisés par deux.",
    cta: "Tester",
    image: "/features/05-patient.jpg",
    alt: "Patiente recevant un rappel WhatsApp",
  },
  {
    num: "06",
    eyebrow: "Caisse & paiement",
    title: (
      <>
        Encaissé
        <br />
        <span className="ital-blue">en 4 secondes.</span>
      </>
    ),
    desc: "TPE, Edahabia, espèces, chèque — tout intégré. Splits commission auto.",
    cta: "Voir le paiement",
    image: "/features/06-payment.jpg",
    alt: "Terminal de paiement TPE Edahabia",
  },
];

export function FeatureShowcase() {
  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-32 text-center">
          <div className="glass-pill mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
            <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
            02 — Six pouvoirs · une plateforme
          </div>
          <h2 className="cream-gradient mx-auto max-w-[900px] text-[clamp(40px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]">
            Six pouvoirs qui font tourner <span className="ital-blue">votre clinique.</span>
          </h2>
        </div>

        {/* 6 alternating sections */}
        <div className="flex flex-col gap-40">
          {FEATURES.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={f.num}
                className={`grid items-center gap-12 lg:gap-24 ${
                  reverse ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
                }`}
              >
                {/* Text — cream editorial style */}
                <div className={`flex flex-col ${reverse ? "lg:order-2" : ""}`}>
                  <div className="mb-7 flex items-center gap-3">
                    <span className="font-mono text-[64px] font-light leading-none tracking-[-0.05em] text-cream/30 [-webkit-text-stroke:1px_var(--brand-bright)]">
                      {f.num}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.20em] text-brand-bright">
                      {f.eyebrow}
                    </span>
                  </div>

                  <h3 className="cream-gradient text-[clamp(48px,6.5vw,96px)] font-bold leading-[0.95] tracking-[-0.045em]">
                    {f.title}
                  </h3>

                  <p className="mt-8 max-w-[460px] text-[18px] leading-[1.5] text-cream/70">
                    {f.desc}
                  </p>

                  <div className="mt-10">
                    <Link
                      href="#contact"
                      className="cyan-pill inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all"
                    >
                      {f.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>

                  <div className="mt-10">
                    <span className="outline-tag">
                      Rejoignez le leader dentaire d&apos;Algérie
                    </span>
                  </div>
                </div>

                {/* Image — cyan-rim glow */}
                <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
                  <div className="cyan-rim relative overflow-hidden rounded-[28px]">
                    <img
                      src={asset(f.image)}
                      alt={f.alt}
                      width={1440}
                      height={1440}
                      loading="lazy"
                      className="block aspect-square w-full rounded-[28px] object-cover"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
