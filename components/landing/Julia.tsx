const TILES = [
  { l: "— Mémoire", title: "Elle apprend votre clinique", desc: "3 niveaux de mémoire : session, utilisateur, clinique entière. Préférences et profils patients retenus." },
  { l: "— Voix", title: "Parlez en darija", desc: "Reconnaissance vocale en arabe algérien, français, anglais. Dictée libre dans le dossier patient." },
  { l: "— Action", title: "Elle agit, pas répond", desc: "Crée un patient, navigue, lance des recherches — depuis une commande vocale ou textuelle." },
  { l: "— Configuration", title: "Personnalité sur mesure", desc: "5 personnalités, 5 cultures, sujets sensibles. Configurée par le propriétaire, à votre image." },
];

export function Julia() {
  return (
    <section id="julia" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Orb + headline */}
        <div className="mx-auto mb-16 max-w-[900px] text-center">
          <div className="relative mx-auto mb-12 flex size-[200px] items-center justify-center">
            <span className="pointer-events-none absolute size-[180%] rounded-full border border-[rgba(91,139,255,0.04)]" />
            <span className="pointer-events-none absolute size-[140%] rounded-full border border-[rgba(91,139,255,0.07)]" />
            <span className="pointer-events-none absolute size-full rounded-full border border-[rgba(91,139,255,0.10)]" />
            <div
              className="relative z-10 size-30 animate-orb rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, var(--brand-soft), var(--brand-bright) 40%, var(--brand) 100%)",
                boxShadow:
                  "0 0 80px rgba(91,139,255,0.55), 0 0 160px rgba(0,23,108,0.45), inset 0 -14px 28px rgba(0,0,0,0.35), inset 0 8px 16px rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="absolute inset-4 rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, white, transparent 50%)",
                }}
              />
            </div>
          </div>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[rgba(91,139,255,0.18)] bg-[rgba(91,139,255,0.06)] px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
            <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
            03 — Intelligence augmentée
          </div>
          <h2 className="mb-7 text-[clamp(48px,7vw,96px)] font-bold leading-[0.95] tracking-[-0.04em]">
            Rencontrez <span className="ital-gradient">Julia.</span>
          </h2>
          <p className="mx-auto max-w-[640px] text-[19px] leading-[1.6] text-muted-foreground">
            Pas un chatbot. Une <strong className="font-medium text-brand-bright">assistante IA dédiée</strong> qui apprend votre clinique, détecte les anomalies, et exécute les tâches répétitives. <strong className="font-medium text-brand-bright">Toutes les 5 minutes</strong>, elle scanne vos données — vous êtes alerté avant que ça devienne un problème.
          </p>
        </div>

        {/* Chat mockup */}
        <div className="mx-auto flex max-w-[720px] flex-col gap-3">
          <div className="self-end max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-b from-brand-mid to-brand px-4 py-3 text-[13px] leading-[1.55] text-white shadow-[0_8px_24px_rgba(0,23,108,0.45)]">
            Combien de RDV demain ne sont pas confirmés ?
          </div>
          <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md border border-[#2a2a32] bg-card px-4 py-3 text-[13px] leading-[1.55] text-muted-foreground backdrop-blur-2xl">
            <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.15em] text-brand-bright">
              ★ Julia · Anomalie détectée
            </span>
            Demain : <strong className="text-brand-soft">6 rendez-vous non confirmés</strong> sur 32. Risque de no-show élevé. Je peux envoyer un rappel WhatsApp à tous d&apos;un clic ?
          </div>
          <div className="self-end max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-b from-brand-mid to-brand px-4 py-3 text-[13px] leading-[1.55] text-white shadow-[0_8px_24px_rgba(0,23,108,0.45)]">
            Oui, envoie.
          </div>
          <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md border border-[#2a2a32] bg-card px-4 py-3 text-[13px] leading-[1.55] text-muted-foreground backdrop-blur-2xl">
            <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.15em] text-brand-bright">
              ★ Action exécutée · 10:42
            </span>
            6 messages WhatsApp envoyés. Je te préviens à 16h si certains n&apos;ont pas répondu.
          </div>
        </div>

        {/* Tiles */}
        <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-border bg-gradient-to-b from-card to-[#0c0c10] p-6 transition-all hover:-translate-y-0.5 hover:border-[rgba(91,139,255,0.25)]"
            >
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-bright">{t.l}</div>
              <h4 className="mb-2 text-[18px] font-semibold">{t.title}</h4>
              <p className="text-[13px] leading-[1.6] text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
