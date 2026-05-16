const STEPS = [
  {
    n: "01",
    tag: "★ J+0 · Audit",
    title: "Extraction de vos données existantes.",
    desc: "Notre équipe technique extrait vos données depuis Excel, vos cahiers, ou tout autre logiciel existant. Aucune perte, aucun effort de votre part. Nous validons avec vous le mapping avant import.",
  },
  {
    n: "02",
    tag: "J+1 · Setup",
    title: "Configuration de votre workflow sur mesure.",
    desc: "Configuration de vos départements, boxes, rôles, permissions selon votre organisation. Importation patients, staff, traitements, tarifs. La plateforme reflète votre clinique.",
  },
  {
    n: "03",
    tag: "J+2 · Formation",
    title: "2 demi-journées pour former vos équipes.",
    desc: "Réception, assistantes, médecins, caisse — chaque rôle reçoit la formation adaptée. Documentation et tutoriels vidéo en français.",
  },
  {
    n: "04",
    tag: "J+3 · Live",
    title: "Bascule complète. Vous êtes en route.",
    desc: "Démarrage en parallèle puis bascule complète. Support sur site J1, J7, J30. Suivi propriétaire chaque semaine pendant 3 mois.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(91,139,255,0.18)] bg-[rgba(91,139,255,0.06)] px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              04 — Démarrage
            </div>
          </div>
          <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            De zéro à opérationnel en <span className="ital-blue">72 heures.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`group grid grid-cols-1 items-start gap-6 border-t border-border py-14 transition-colors hover:bg-[rgba(91,139,255,0.025)] md:grid-cols-[200px_1fr_1fr] md:gap-16 ${
                i === STEPS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div
                className="text-[clamp(80px,9vw,140px)] font-bold leading-[0.85] tracking-[-0.05em] text-transparent transition-all duration-300 [-webkit-text-stroke:1px_#2a2a32] group-hover:[-webkit-text-stroke:1px_transparent]"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                <span className="group-hover:bg-gradient-to-b group-hover:from-brand-soft group-hover:to-brand-bright group-hover:bg-clip-text">
                  {s.n}
                </span>
              </div>
              <div>
                <span className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-[rgba(91,139,255,0.18)] bg-[rgba(91,139,255,0.06)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-bright">
                  {s.tag}
                </span>
                <h4 className="text-[clamp(26px,3.2vw,36px)] font-semibold leading-[1.1] tracking-[-0.02em]">
                  {s.title}
                </h4>
              </div>
              <p className="text-[15px] leading-[1.7] text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
