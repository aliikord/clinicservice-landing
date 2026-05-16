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
  chips?: string[];
};

const FEATURES: Feature[] = [
  {
    num: "01",
    eyebrow: "Imagerie DICOM",
    title: (
      <>
        Vos radios, <span className="ital-blue">lues partout.</span>
      </>
    ),
    desc:
      "Panoramique, RVG, CBCT 3D — directement dans ClinicService. Aucun lecteur tiers à installer. Téléchargez le DICOM, ouvrez-le sur n'importe quel appareil de votre clinique.",
    cta: "Voir l'imagerie",
    image: "/features/01-xray.jpg",
    alt: "Radio panoramique dentaire affichée sur tous les appareils",
    chips: ["Pano", "RVG", "CBCT 3D", "Stockage cloud illimité"],
  },
  {
    num: "02",
    eyebrow: "Multi-plateforme",
    title: (
      <>
        1 plateforme. <span className="ital-blue">6 appareils.</span>
      </>
    ),
    desc:
      "Web · iPhone · iPad · Mac · Windows · Android — tous synchronisés en temps réel. Le doctor sur iPad, la réception sur PC, le patient sur iPhone, le caissier sur Mac : tout le monde voit la même chose, instantanément.",
    cta: "Voir le produit",
    image: "/features/02-platforms.jpg",
    alt: "ClinicService synchronisé sur 6 appareils",
    chips: ["Web", "iPhone", "iPad", "Mac", "Windows", "Android"],
  },
  {
    num: "03",
    eyebrow: "Gain de temps",
    title: (
      <>
        2 heures rendues, <span className="ital-blue">chaque jour.</span>
      </>
    ),
    desc:
      "Sans changer votre logiciel actuel. ClinicService automatise les tâches répétitives : rappels patients, calculs commissions, réconciliation caisse, pointage staff. Vos équipes récupèrent du temps de soin.",
    cta: "Tester gratuitement",
    image: "/features/03-time.jpg",
    alt: "Sablier symbolisant le temps économisé",
    chips: ["Automation IA", "Rappels auto", "Réconciliation auto", "Pointage QR"],
  },
  {
    num: "04",
    eyebrow: "Équipe & call center",
    title: (
      <>
        8 agents. <span className="ital-blue">1 écran.</span>
      </>
    ),
    desc:
      "Pilotez votre call center en temps réel — appels entrants, RDV confirmés, scripts Darija, KPI par agent. Affectation automatique des leads, suivi des conversions, tableau de bord live pour le propriétaire.",
    cta: "Découvrir",
    image: "/features/04-agents.jpg",
    alt: "Vue d'une agente de call center dentaire",
    chips: ["Live calls", "KPI agents", "Scripts Darija", "Conversions"],
  },
  {
    num: "05",
    eyebrow: "Expérience patient",
    title: (
      <>
        Vos patients arrivent <span className="ital-blue">à l'heure.</span>
      </>
    ),
    desc:
      "Rappels SMS, WhatsApp et appel automatiques. Le patient confirme en un clic. Réduction prouvée des no-shows de 30 à 50 %. L'app patient lui permet de consulter ses radios, ordonnances et factures depuis son téléphone.",
    cta: "Tester",
    image: "/features/05-patient.jpg",
    alt: "Patiente recevant un rappel WhatsApp ClinicService",
    chips: ["SMS", "WhatsApp", "Appel auto", "App patient"],
  },
  {
    num: "06",
    eyebrow: "Caisse & paiement",
    title: (
      <>
        Encaissé en <span className="ital-blue">4 secondes.</span>
      </>
    ),
    desc:
      "TPE, Edahabia, espèces, chèque — tout intégré. Splits commission automatiques au moment du paiement. Reçu imprimé, données dans le coffre-fort financier, salaires recalculés instantanément.",
    cta: "Voir le paiement",
    image: "/features/06-payment.jpg",
    alt: "Terminal de paiement TPE Edahabia",
    chips: ["TPE / CIB", "Edahabia", "Espèces", "Chèque", "Splits auto"],
  },
];

export function FeatureShowcase() {
  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-24 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <div className="glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              02 — Six pouvoirs · une plateforme
            </div>
          </div>
          <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Six pouvoirs qui font tourner <span className="ital-blue">votre clinique.</span>
          </h2>
        </div>

        {/* Six alternating sections */}
        <div className="flex flex-col gap-28 lg:gap-36">
          {FEATURES.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={f.num}
                className={`grid items-center gap-12 lg:gap-20 ${
                  reverse ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
                }`}
              >
                {/* Text */}
                <div className={`flex flex-col ${reverse ? "lg:order-2" : ""}`}>
                  <div className="glass-pill mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-bright">
                    <span className="font-mono text-[10px] opacity-70">N°{f.num}</span>
                    <span className="h-3 w-px bg-brand-bright/40" />
                    {f.eyebrow}
                  </div>

                  <h3 className="text-[clamp(38px,5vw,72px)] font-bold leading-[0.98] tracking-[-0.035em]">
                    {f.title}
                  </h3>

                  <p className="mt-7 max-w-[540px] text-[16px] leading-[1.65] text-muted-foreground">
                    {f.desc}
                  </p>

                  {f.chips && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {f.chips.map((chip) => (
                        <span
                          key={chip}
                          className="glass-pill rounded-full border-transparent px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-9 flex items-center gap-5">
                    <Link
                      href="#contact"
                      className="wave-grad inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_36px_rgba(0,23,108,0.5)] transition-all hover:translate-y-[-2px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_16px_44px_rgba(0,23,108,0.65)]"
                    >
                      {f.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground italic">
                      Leader dentaire d&apos;Algérie
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
                  {/* Halo */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-[-15%] z-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(91,139,255,0.30) 0%, rgba(0,23,108,0.20) 35%, transparent 70%)",
                      filter: "blur(60px)",
                    }}
                  />
                  {/* Frame */}
                  <div className="glass-strong glass-shimmer relative z-10 overflow-hidden rounded-[28px] p-2 transition-transform hover:scale-[1.02]">
                    <img
                      src={asset(f.image)}
                      alt={f.alt}
                      width={1440}
                      height={1440}
                      loading="lazy"
                      className="aspect-square w-full rounded-3xl object-cover"
                    />
                  </div>
                  {/* Floating number tag */}
                  <span className="absolute -top-3 right-4 z-20 rounded-full bg-gradient-to-b from-brand-mid to-brand px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_8px_24px_rgba(0,23,108,0.55)]">
                    {f.num}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
