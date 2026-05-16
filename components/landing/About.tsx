export function About() {
  return (
    <section className="border-t border-border py-32 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between border-b border-border pb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>À propos de ClinicService</span>
          <span>Édition Mai 2026 · Algérie</span>
        </div>

        <h2 className="mb-16 text-[clamp(48px,7vw,96px)] font-bold leading-[0.95] tracking-[-0.035em] text-transparent [-webkit-text-stroke:1px_#2a2a32]">
          À propos
          <br />
          <span className="[-webkit-text-stroke:1px_var(--brand-bright)]">
            de ClinicService.
          </span>
        </h2>

        <p className="max-w-[1100px] text-[clamp(22px,2.5vw,36px)] font-normal leading-[1.3] tracking-[-0.02em]">
          Un système d&apos;exploitation moderne, conçu spécifiquement pour les{" "}
          <strong className="font-medium text-brand-bright">
            cliniques dentaires algériennes
          </strong>
          . L&apos;interface met l&apos;accent sur la{" "}
          <span className="ital-gradient">clarté</span>, la fluidité visuelle et une
          hiérarchie forte — pour rendre les opérations complexes{" "}
          <span className="ital-gradient">simples</span> au quotidien.
        </p>
      </div>
    </section>
  );
}
