"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Tablet, Smartphone, Laptop, Layers, ScanLine } from "lucide-react";
import { asset } from "@/lib/site";

type Device = {
  id: string;
  Icon: React.ComponentType<{ className?: string }>;
  tab: string;
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  cta: string;
  image: string;
  alt: string;
};

const DEVICES: Device[] = [
  {
    id: "ipad",
    Icon: Tablet,
    tab: "iPad",
    eyebrow: "01 · Imagerie — sur tous vos appareils",
    title: (
      <>
        Vos radios. <span className="ital-blue">Sur iPad.</span>
      </>
    ),
    sub: "Panoramique, RVG, CBCT 3D — directement dans l'app. Aucun lecteur tiers à installer. Téléchargez le DICOM, ouvrez-le sur n'importe quel iPad du fauteuil.",
    cta: "Voir l'imagerie",
    image: "/devices/01_ipad-xray.jpg",
    alt: "iPad affichant une radio panoramique dentaire dans ClinicService",
  },
  {
    id: "iphone",
    Icon: Smartphone,
    tab: "iPhone",
    eyebrow: "02 · Mobile — pour vos patients",
    title: (
      <>
        Le dossier patient. <span className="ital-blue">Dans sa poche.</span>
      </>
    ),
    sub: "Le patient consulte ses radios, ordonnances, factures et plans de traitement depuis son iPhone. Notifications push pour les rappels de RDV.",
    cta: "Voir l'app patient",
    image: "/devices/02_iphone-app.jpg",
    alt: "iPhone affichant l'app patient ClinicService",
  },
  {
    id: "macbook",
    Icon: Laptop,
    tab: "MacBook",
    eyebrow: "03 · Desktop — pour votre équipe",
    title: (
      <>
        Pilotage clinique. <span className="ital-blue">Sur Mac & PC.</span>
      </>
    ),
    sub: "Tableau de bord complet, agenda multi-praticiens, caisse temps réel, plans de traitement. Fonctionne dans le navigateur ou en app native Windows / Mac / Linux.",
    cta: "Voir le dashboard",
    image: "/devices/03_macbook.jpg",
    alt: "MacBook affichant le tableau de bord ClinicService",
  },
  {
    id: "multi",
    Icon: Layers,
    tab: "Multi-appareils",
    eyebrow: "04 · Synchronisation temps réel",
    title: (
      <>
        Toute l'équipe. <span className="ital-blue">Synchronisée.</span>
      </>
    ),
    sub: "Réception sur PC, doctor sur iPad, patient sur iPhone, caissier sur tablette. Toutes les actions synchronisées en temps réel via Firebase.",
    cta: "Voir la sync",
    image: "/devices/04_multi-devices.jpg",
    alt: "Plusieurs appareils ClinicService synchronisés",
  },
  {
    id: "kiosk",
    Icon: ScanLine,
    tab: "Borne",
    eyebrow: "05 · Borne d'accueil — pointage staff",
    title: (
      <>
        Pointage QR. <span className="ital-blue">Plein écran.</span>
      </>
    ),
    sub: "Une tablette à l'entrée. Chaque membre du staff scanne son QR pour pointer arrivée et départ. Heures supplémentaires calculées automatiquement.",
    cta: "Voir la borne",
    image: "/devices/05_kiosk.jpg",
    alt: "Borne d'accueil ClinicService avec QR code",
  },
];

export function DeviceShowcase() {
  const [active, setActive] = useState(DEVICES[0]);

  return (
    <section className="relative overflow-hidden border-t border-border py-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[900px] w-[1400px] -translate-x-1/2 -translate-y-1/2 blur-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(91,139,255,0.20) 0%, rgba(0,23,108,0.30) 35%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Tabs */}
        <div className="mb-14 flex justify-center">
          <div className="glass-pill flex gap-1 rounded-full border-transparent p-1.5">
            {DEVICES.map((d) => {
              const isActive = active.id === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setActive(d)}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-[12px] font-medium transition-all md:px-4 md:text-[13px] ${
                    isActive
                      ? "wave-grad text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(0,23,108,0.5)]"
                      : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                  }`}
                  type="button"
                >
                  <d.Icon className="size-3.5" />
                  <span className="hidden sm:inline">{d.tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Text */}
          <div>
            <div
              key={active.id + "-text"}
              className="glass-pill mb-6 inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright"
              style={{ animation: "row-in 0.4s ease-out" }}
            >
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              {active.eyebrow}
            </div>

            <h2
              key={active.id + "-title"}
              className="text-[clamp(40px,5.5vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]"
              style={{ animation: "row-in 0.5s ease-out" }}
            >
              {active.title}
            </h2>

            <p
              key={active.id + "-sub"}
              className="mt-7 max-w-[540px] text-[17px] leading-[1.6] text-muted-foreground"
              style={{ animation: "row-in 0.6s ease-out" }}
            >
              {active.sub}
            </p>

            <div
              key={active.id + "-cta"}
              className="mt-10"
              style={{ animation: "row-in 0.7s ease-out" }}
            >
              <Link
                href="#contact"
                className="wave-grad inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_36px_rgba(0,23,108,0.5)] transition-all hover:translate-y-[-2px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_16px_44px_rgba(0,23,108,0.65)]"
              >
                {active.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Bottom badge */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[rgba(91,139,255,0.30)] bg-[rgba(91,139,255,0.04)] px-4 py-1.5 font-mono text-[11px] italic text-brand-bright">
              Rejoignez le leader dentaire d&apos;Algérie
            </div>
          </div>

          {/* Image with halo */}
          <div className="relative" key={active.id + "-img"} style={{ animation: "row-in 0.5s ease-out" }}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[-20%] z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(91,139,255,0.30) 0%, rgba(0,23,108,0.20) 35%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div className="glass-strong glass-shimmer relative z-10 overflow-hidden rounded-[28px] p-2">
              <img
                src={asset(active.image)}
                alt={active.alt}
                width={1440}
                height={1440}
                className="aspect-square w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
