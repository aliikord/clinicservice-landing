import { CountUp } from "./CountUp";

const STATS = [
  { label: "Patients gérés", to: 6.5, decimals: 1, unit: "k+", desc: "sur la plateforme, en croissance continue" },
  { label: "Boxes simultanées", to: 24, decimals: 0, unit: "", desc: "par site, sans plafond pour les groupes" },
  { label: "Équipes connectées", to: 80, decimals: 0, unit: "+", desc: "membres en temps réel sur la plateforme" },
  { label: "Langues", to: 3, decimals: 0, unit: "", desc: "Français · Arabe · Anglais — interface complète" },
];

export function StatsStrip() {
  return (
    <div className="relative grid grid-cols-2 border-y border-border md:grid-cols-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`group relative overflow-hidden px-8 py-14 transition-colors hover:bg-[rgba(91,139,255,0.025)] ${i < STATS.length - 1 ? "md:border-r md:border-border" : ""} ${i % 2 === 0 ? "border-r border-border md:border-r" : ""} ${i < STATS.length - 2 ? "border-b border-border md:border-b-0" : ""}`}
        >
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {s.label}
          </div>
          <div className="text-gradient text-[clamp(56px,7vw,96px)] font-bold leading-none tracking-[-0.045em] tabular-nums">
            <CountUp to={s.to} decimals={s.decimals} />
            {s.unit && <span className="text-brand-bright">{s.unit}</span>}
          </div>
          <div className="mt-3.5 text-[13px] leading-[1.5] text-muted-foreground">
            {s.desc}
          </div>
          {/* Bottom accent — animates on hover */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-bright to-transparent transition-all duration-500 group-hover:w-2/3" />
        </div>
      ))}
    </div>
  );
}
