import Link from "next/link";
import { Check, ArrowRight, ScanLine } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  unit: string;
  tagline: string;
  audience: string;
  featured?: boolean;
  limits: { label: string; value: string }[];
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Essentiel",
    price: "12 000",
    unit: "DA / mois",
    tagline: "Le socle complet pour démarrer.",
    audience: "Dentiste solo",
    limits: [
      { label: "Fauteuils", value: "1–2" },
      { label: "Utilisateurs", value: "3" },
      { label: "Patients", value: "1 000" },
      { label: "Stockage", value: "10 GB" },
    ],
    features: [
      "Lecteur DICOM intégré (Pano · CBCT · rétro)",
      "Dossier patient + schéma 32 dents (FDIS)",
      "Agenda multi-praticiens",
      "Caisse + reçus imprimables",
      "App mobile iPhone & Android",
      "Photos cliniques",
    ],
    cta: "Commencer",
  },
  {
    name: "Pro",
    price: "24 000",
    unit: "DA / mois",
    tagline: "L'automatisation qui rembourse l'abonnement.",
    audience: "Cabinet actif",
    featured: true,
    limits: [
      { label: "Fauteuils", value: "jusqu'à 5" },
      { label: "Utilisateurs", value: "10" },
      { label: "Patients", value: "5 000" },
      { label: "Stockage", value: "100 GB" },
    ],
    features: [
      "Tout Essentiel, plus :",
      "Rappels auto SMS / WhatsApp (anti no-show)",
      "Dashboard KPI temps réel",
      "Paiement complet (TPE · Edahabia · splits)",
      "Borne file d'attente automatisée",
      "Julia AI (quota mensuel)",
    ],
    cta: "Choisir Pro",
  },
  {
    name: "Full",
    price: "35 000",
    unit: "DA / mois",
    tagline: "La version complète, sans aucune limite.",
    audience: "Clinique complète",
    limits: [
      { label: "Fauteuils", value: "illimités" },
      { label: "Utilisateurs", value: "illimités" },
      { label: "Patients", value: "illimités" },
      { label: "Stockage", value: "illimité" },
    ],
    features: [
      "Tout Pro, plus :",
      "Julia AI illimitée",
      "Multi-device complet (Web · iOS · Mac · Windows · Android)",
      "Support 24/7 prioritaire",
      "Mises à jour à vie incluses",
    ],
    cta: "Passer en Full",
  },
  {
    name: "Groupe",
    price: "Sur-devis",
    unit: "multi-sites",
    tagline: "Pour les groupes dentaires.",
    audience: "Plusieurs cliniques",
    limits: [
      { label: "Cabinets", value: "multi-sites" },
      { label: "Utilisateurs", value: "illimités" },
      { label: "Patients", value: "illimités" },
      { label: "Stockage", value: "illimité" },
    ],
    features: [
      "Tout Full, plus :",
      "Multi-clinic command center (5 cabinets, 1 vue)",
      "Account manager dédié",
      "SLA & infrastructure dédiée",
      "Onboarding & migration sur mesure",
    ],
    cta: "Demander un devis",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-border py-32">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-0 size-[1100px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(91,139,255,0.20), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="glass-pill mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
            <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
            03 — Tarifs
          </div>
          <h2 className="cream-gradient mx-auto max-w-[860px] text-[clamp(36px,5vw,72px)] font-bold leading-[1.02] tracking-[-0.035em]">
            Un prix simple. <span className="ital-blue">Tout inclus.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.6] text-muted-foreground">
            Aucun frais caché. Aucun module à débloquer. Le lecteur DICOM est inclus dès le premier plan — ce qu&apos;aucun autre logiciel en Algérie ne propose.
          </p>

          {/* DICOM-in-all badge */}
          <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[rgba(77,214,255,0.35)] bg-[rgba(77,214,255,0.06)] px-4 py-2 text-[13px] text-cyan-200">
            <ScanLine className="size-4 text-cyan-300" />
            Lecteur DICOM intégré dans <strong className="font-semibold text-white">tous</strong> les plans
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid gap-5 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                plan.featured
                  ? "glass-blue glass-shimmer glass-caustic"
                  : "glass glass-hover"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-mid px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_4px_16px_rgba(0,23,108,0.5)]">
                  Le plus populaire
                </span>
              )}

              {/* Name + audience */}
              <div className="mb-5">
                <h3 className="text-[20px] font-semibold">{plan.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {plan.audience}
                </p>
              </div>

              {/* Price */}
              <div className="mb-1 flex items-baseline gap-1.5">
                <span className={`text-[40px] font-bold leading-none tracking-[-0.03em] ${plan.featured ? "text-white" : "cream-gradient"}`}>
                  {plan.price}
                </span>
              </div>
              <div className="mb-5 font-mono text-[12px] text-muted-foreground">{plan.unit}</div>

              <p className="mb-6 min-h-[40px] text-[13.5px] leading-[1.5] text-cream/70">
                {plan.tagline}
              </p>

              {/* CTA */}
              <Link
                href="#contact"
                className={`mb-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium transition-all ${
                  plan.featured
                    ? "wave-grad text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_32px_rgba(0,23,108,0.5)] hover:translate-y-[-2px]"
                    : "glass-pill border-transparent text-cream/90 hover:text-brand-bright"
                }`}
              >
                {plan.cta}
                <ArrowRight className="size-4" />
              </Link>

              {/* Limits */}
              <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl border border-border bg-white/[0.02] p-3">
                {plan.limits.map((l) => (
                  <div key={l.label}>
                    <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">{l.label}</div>
                    <div className="text-[13px] font-medium text-foreground">{l.value}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 text-[13px]">
                {plan.features.map((f, idx) => {
                  const isHeader = f.endsWith(":");
                  return (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 ${isHeader ? "font-medium text-cream/90" : "text-muted-foreground"}`}
                    >
                      {!isHeader && (
                        <Check className="mt-0.5 size-3.5 shrink-0 text-brand-bright" />
                      )}
                      <span className={isHeader ? "mt-1" : ""}>{f}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>

        {/* Founding member + ROI line */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <div className="glass-pill inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border-transparent px-5 py-2 text-[13px] text-cream/80">
            <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_10px_var(--brand-bright)] animate-pulse-glow" />
            Essai 30 jours gratuit — installé pour vous, données migrées, staff formé. Sans carte bancaire.
          </div>
          <p className="max-w-[560px] text-[14px] leading-[1.6] text-muted-foreground">
            <strong className="text-cream/90">Membre fondateur :</strong> les 20 premiers cabinets verrouillent <strong className="text-brand-bright">−30 %</strong> à vie. Un seul no-show récupéré (5 000–50 000 DA) rembourse l&apos;abonnement en une semaine.
          </p>
        </div>
      </div>
    </section>
  );
}
