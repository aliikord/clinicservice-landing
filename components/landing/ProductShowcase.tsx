import { asset } from "@/lib/site";
import { Aurora } from "./Aurora";

type Ad = {
  num: string;
  file: string;
  eyebrow: string;
  headline: string;
  sub: string;
  alt: string;
};

const ADS: Ad[] = [
  { num: "01", file: "11_live-call__1x1_1080.jpg",     eyebrow: "Call tracking",             headline: "Aucun appel patient ne tombe",            sub: "100 % des conversations liées au dossier patient — automatiquement.",                                       alt: "Aucun appel patient ne tombe" },
  { num: "02", file: "10_multi-clinic__1x1_1080.jpg",  eyebrow: "Multi-clinic command center", headline: "5 cabinets. 1 vue.",                    sub: "Pilotez votre groupe dentaire depuis une seule plateforme.",                                                  alt: "5 cabinets, 1 vue" },
  { num: "03", file: "09_patient-file__1x1_1080.jpg",  eyebrow: "Dossier 360°",              headline: "Le dossier patient à 360°",               sub: "Photos, radios, RDV, paiements, historique — un seul endroit.",                                              alt: "Dossier patient 360°" },
  { num: "04", file: "08_call-center__1x1_1080.jpg",   eyebrow: "Call center temps réel",    headline: "8 agents. 1 écran.",                      sub: "Live calls, KPI par agent, scripts Darija, suivi des conversions en direct.",                                alt: "8 agents, 1 écran" },
  { num: "05", file: "07_dashboard__1x1_1080.jpg",     eyebrow: "KPI dashboard live",        headline: "Vos chiffres, en temps réel",             sub: "RDV, no-show, CA, taux conversion — actualisés à la seconde.",                                              alt: "Dashboard KPI temps réel" },
  { num: "06", file: "06_tpe__1x1_1080.jpg",           eyebrow: "Caisse & paiement",         headline: "Encaissé en 4 secondes",                  sub: "TPE, Edahabia, espèces — tout intégré au dossier patient.",                                                  alt: "TPE, Edahabia, espèces" },
  { num: "07", file: "05_kiosk__1x1_1080.jpg",         eyebrow: "File d'attente automatisée", headline: "File d'attente automatisée",            sub: "Borne tactile + notification patient automatique.",                                                          alt: "Borne d'attente automatisée" },
  { num: "08", file: "04_multi-devices__1x1_1080.jpg", eyebrow: "Multi-plateforme",          headline: "1 plateforme. 6 appareils.",              sub: "Web, iPhone, iPad, Mac, Windows, Android — synchronisés.",                                                   alt: "6 appareils synchronisés" },
  { num: "09", file: "03_macbook__1x1_1080.jpg",       eyebrow: "Mac & PC desktop",          headline: "Votre cabinet, sur Mac",                  sub: "Tout votre cabinet sur un seul écran. Sync temps réel.",                                                     alt: "Cabinet sur Mac" },
  { num: "10", file: "02_iphone-app__1x1_1080.jpg",    eyebrow: "App mobile",                headline: "Votre cabinet, dans votre poche",         sub: "App iPhone et Android. Hors-ligne et en ligne.",                                                             alt: "App mobile iPhone & Android" },
  { num: "11", file: "01_ipad-xray__1x1_1080.jpg",     eyebrow: "Imagerie DICOM",            headline: "Vos radios. Sur iPad.",                   sub: "Panoramique, RVG, CBCT 3D — directement dans l'app.",                                                        alt: "Imagerie DICOM sur iPad" },
];

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32">
      {/* === Aurora mesh background — same as Hero === */}
      <Aurora />

      {/* Extra layered glow trails behind ad column */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[8%] size-[1100px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(77,214,255,0.22), transparent 70%)" }}
        />
        <div
          className="absolute left-1/2 bottom-[5%] size-[900px] -translate-x-1/2 rounded-full opacity-35 blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(91,139,255,0.20), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* === Section header === */}
        <div className="mb-24 text-center">
          <div className="glass-pill mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
            <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
            02 — Onze pouvoirs · une plateforme
          </div>
          <h2 className="cream-gradient mx-auto max-w-[920px] text-[clamp(40px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]">
            Onze pouvoirs qui font tourner <span className="ital-blue">votre clinique.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.6] text-muted-foreground">
            Du premier appel patient jusqu&apos;à l&apos;encaissement — chaque étape de votre quotidien clinique, dans une seule plateforme.
          </p>

          {/* Mini-marquee of the 11 themes */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {ADS.map((ad) => (
              <span key={ad.num} className="glass-pill rounded-full border-transparent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/60">
                {ad.eyebrow}
              </span>
            ))}
          </div>
        </div>

        {/* === Ad cards (no timeline) === */}
        <div className="relative">
          <div className="flex flex-col gap-24">
            {ADS.map((ad, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={ad.num}
                  className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
                >

                  {/* Text side */}
                  <div className={`relative flex flex-col ${reverse ? "lg:order-2 lg:pl-14" : "lg:pr-14"}`}>
                    {/* Big number + brand-bright accent line */}
                    <div className="relative z-[2] mb-7 flex items-baseline gap-4">
                      <span className="font-mono text-[56px] font-light leading-none tracking-[-0.04em] text-brand-bright lg:text-[72px]">
                        {ad.num}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-brand-bright/60 via-brand-bright/20 to-transparent" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40">
                        / 11
                      </span>
                    </div>

                    {/* Eyebrow */}
                    <div className="relative z-[2] mb-4 inline-flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_10px_var(--brand-bright)] animate-pulse-glow" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-bright">
                        {ad.eyebrow}
                      </span>
                    </div>

                    {/* Headline + ghost number behind */}
                    <div className="relative">
                      {/* Big ghost number — sits faaaar behind */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -top-[80px] -z-[1] select-none font-mono text-[200px] font-light leading-none tracking-[-0.05em] text-transparent lg:-top-[100px] lg:text-[280px]"
                        style={{
                          WebkitTextStroke: "1px rgba(91,139,255,0.06)",
                          [reverse ? "right" : "left"]: "-30px",
                        } as React.CSSProperties}
                      >
                        {ad.num}
                      </span>

                      <h3 className="cream-gradient relative z-[2] max-w-[540px] text-[clamp(40px,5.5vw,76px)] font-bold leading-[0.95] tracking-[-0.04em]">
                        {ad.headline}
                      </h3>
                    </div>

                    <p className="relative z-[2] mt-6 max-w-[460px] text-[17px] leading-[1.55] text-cream/70 lg:text-[18px]">
                      {ad.sub}
                    </p>

                    {/* Outline tag only — no CTA button */}
                    <div className="relative z-[2] mt-8">
                      <span className="outline-tag">
                        Leader dentaire d&apos;Algérie
                      </span>
                    </div>
                  </div>

                  {/* Ad image side — NO frame, just cyan-rim + ambient halo */}
                  <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
                    {/* Ambient halo */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-[-20%] z-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(77,214,255,0.35) 0%, rgba(91,139,255,0.12) 35%, transparent 70%)",
                        filter: "blur(50px)",
                      }}
                    />

                    {/* Direct ad image — clean, glassy, atmospheric */}
                    <div className="group relative z-[1] overflow-hidden rounded-[28px] shadow-[0_40px_120px_rgba(0,23,108,0.55)] transition-all duration-700 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_50px_140px_rgba(91,139,255,0.45)]">
                      <img
                        src={`${asset(`/ads/${ad.file}`)}?v=9`}
                        alt={ad.alt}
                        width={1080}
                        height={1080}
                        loading="lazy"
                        className="block aspect-square w-full transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      {/* Unified atmospheric cyan glow — top-right, screen-blended */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 60% 50% at 78% 35%, rgba(77,214,255,0.20), transparent 60%)",
                          mixBlendMode: "screen",
                        }}
                      />
                      {/* Top cyan rim highlight */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, rgba(77,214,255,0.55), transparent)",
                        }}
                      />
                      {/* Inner edge vignette — fades ad into page bg #050507 */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                          boxShadow:
                            "inset 0 0 60px 8px #050507, inset 0 0 0 1px rgba(5,5,7,0.6)",
                        }}
                      />
                      {/* Shimmer sweep on hover */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                        }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* === Bottom closing line (no CTA) === */}
        <div className="mt-24 flex flex-col items-center gap-4 text-center">
          <div className="glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-bright">
            <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
            11 fonctionnalités · 1 plateforme · 0 module à débloquer
          </div>
          <h3 className="cream-gradient mx-auto max-w-[640px] text-[clamp(24px,3.5vw,44px)] font-bold leading-[1.05] tracking-[-0.03em]">
            Tout votre cabinet, <span className="ital-blue">en un seul produit.</span>
          </h3>
          <span className="outline-tag mt-2">Rejoignez le leader dentaire d&apos;Algérie</span>
        </div>
      </div>
    </section>
  );
}
