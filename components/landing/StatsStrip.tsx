const STATS = [
  {
    label: "Patients gérés",
    value: "6,5",
    unit: "k+",
    desc: "sur la plateforme, en croissance continue",
  },
  {
    label: "Boxes simultanées",
    value: "24",
    unit: "",
    desc: "par site, sans plafond pour les groupes",
  },
  {
    label: "Équipes connectées",
    value: "80",
    unit: "+",
    desc: "membres en temps réel sur la plateforme",
  },
  {
    label: "Langues",
    value: "3",
    unit: "",
    desc: "Français · Arabe · Anglais — interface complète",
  },
];

export function StatsStrip() {
  return (
    <div className="grid grid-cols-2 border-y border-border md:grid-cols-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`relative px-8 py-14 ${i < STATS.length - 1 ? "md:border-r md:border-border" : ""} ${i % 2 === 0 ? "border-r border-border md:border-r" : ""} ${i < STATS.length - 2 ? "border-b border-border md:border-b-0" : ""}`}
        >
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {s.label}
          </div>
          <div className="text-gradient text-[clamp(56px,7vw,96px)] font-bold leading-none tracking-[-0.045em] tabular-nums">
            {s.value}
            {s.unit && <span className="text-brand-bright">{s.unit}</span>}
          </div>
          <div className="mt-3.5 text-[13px] leading-[1.5] text-muted-foreground">
            {s.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
