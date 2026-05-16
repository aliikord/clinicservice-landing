const ROWS = [
  { feature: "Conçu pour l'Algérie (FR/AR)", excel: "—", foreign: "Rare", us: "✓" },
  { feature: "Caisse multi-postes temps réel", excel: "—", foreign: "Module séparé", us: "✓" },
  { feature: "Imagerie DICOM intégrée", excel: "—", foreign: "Module séparé", us: "✓" },
  { feature: "Assistante IA dédiée", excel: "—", foreign: "—", us: "✓" },
  { feature: "Workflow visuel sur mesure", excel: "—", foreign: "—", us: "✓" },
  { feature: "Support local en français", excel: "—", foreign: "Email anglais", us: "✓" },
] as const;

export function CompareTable() {
  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <div className="glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              05 — Versus
            </div>
          </div>
          <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Pourquoi pas une <span className="ital-blue">autre solution ?</span>
          </h2>
        </div>

        <div className="glass glass-shimmer overflow-hidden rounded-3xl">
          <table className="w-full border-collapse text-[15px]">
            <thead>
              <tr>
                <th className="border-b border-border p-6 text-left font-mono text-[12px] font-medium uppercase tracking-[0.15em] text-muted-foreground" />
                <th className="border-b border-border p-6 text-left font-mono text-[12px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Excel / Papier
                </th>
                <th className="border-b border-border p-6 text-left font-mono text-[12px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Logiciels étrangers
                </th>
                <th className="border-x border-t border-b border-[rgba(91,139,255,0.30)] bg-[rgba(91,139,255,0.10)] p-6 text-left font-mono text-[12px] font-medium uppercase tracking-[0.15em] text-brand-bright">
                  ClinicService
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.feature}>
                  <td className={`p-4.5 px-6 font-medium text-foreground ${i < ROWS.length - 1 ? "border-b border-border" : ""}`}>
                    {r.feature}
                  </td>
                  <td className={`p-4.5 px-6 text-muted-foreground ${i < ROWS.length - 1 ? "border-b border-border" : ""}`}>
                    {r.excel}
                  </td>
                  <td className={`p-4.5 px-6 text-muted-foreground ${i < ROWS.length - 1 ? "border-b border-border" : ""}`}>
                    {r.foreign}
                  </td>
                  <td className={`border-x border-[rgba(91,139,255,0.30)] bg-gradient-to-b from-[rgba(91,139,255,0.06)] to-[rgba(91,139,255,0.02)] p-4.5 px-6 text-foreground ${i === ROWS.length - 1 ? "border-b border-[rgba(91,139,255,0.30)]" : "border-b border-border"}`}>
                    <span className="font-bold text-brand-bright">{r.us}</span>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-4.5 px-6 font-medium text-foreground">Risque de perte / fraude</td>
                <td className="p-4.5 px-6 text-red-400">Élevé</td>
                <td className="p-4.5 px-6 text-amber-400">Modéré</td>
                <td className="border-x border-b border-[rgba(91,139,255,0.30)] bg-gradient-to-b from-[rgba(91,139,255,0.06)] to-[rgba(91,139,255,0.02)] p-4.5 px-6 text-brand-bright">
                  Audit complet
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
