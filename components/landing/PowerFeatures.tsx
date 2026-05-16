import { ScanLine, Sparkles, Tablet, Smartphone, Laptop, Monitor, Upload, Check, MessageCircle, Clock, Zap } from "lucide-react";

export function PowerFeatures() {
  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-20 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <div className="glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              02 — Power features
            </div>
          </div>
          <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Deux outils qui font <span className="ital-blue">la différence.</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* ============ X-RAY READER ============ */}
          <article className="glass-blue glass-shimmer beam-container relative flex flex-col overflow-hidden rounded-3xl p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="glass-pill inline-flex size-12 items-center justify-center rounded-xl border-transparent text-brand-bright">
                <ScanLine className="size-[22px]" />
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  N°01 · Lecteur Imagerie
                </div>
                <h3 className="mt-1 text-[26px] font-semibold leading-tight">
                  Lecteur DICOM <span className="ital-blue">intégré.</span>
                </h3>
              </div>
            </div>

            <p className="mb-7 text-[15px] leading-[1.6] text-muted-foreground">
              <strong className="text-foreground">Téléchargez le fichier, c&apos;est tout.</strong> Plus besoin d&apos;installer Romexis, OnDemand3D, ou un autre logiciel. Le patient peut voir sa radio sur son iPhone, vous sur votre Mac, votre assistant sur l&apos;iPad du fauteuil — en même temps.
            </p>

            {/* Upload → Devices flow */}
            <div className="mb-7 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="glass-pill inline-flex items-center gap-2.5 self-start rounded-2xl border-transparent px-5 py-3 sm:py-4">
                <Upload className="size-5 text-brand-bright" />
                <div>
                  <div className="text-[13px] font-semibold">Upload DICOM</div>
                  <div className="font-mono text-[10px] text-muted-foreground">Pano · CBCT · rétro</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-bright">→ Lu sur</span>
                <span className="glass-pill flex items-center gap-2 rounded-full border-transparent px-3 py-1.5 text-[12px]">
                  <Smartphone className="size-3.5" /> iPhone
                </span>
                <span className="glass-pill flex items-center gap-2 rounded-full border-transparent px-3 py-1.5 text-[12px]">
                  <Tablet className="size-3.5" /> iPad
                </span>
                <span className="glass-pill flex items-center gap-2 rounded-full border-transparent px-3 py-1.5 text-[12px]">
                  <Laptop className="size-3.5" /> Mac
                </span>
                <span className="glass-pill flex items-center gap-2 rounded-full border-transparent px-3 py-1.5 text-[12px]">
                  <Monitor className="size-3.5" /> PC
                </span>
              </div>
            </div>

            {/* Value bullets */}
            <ul className="flex flex-col gap-3 text-[13.5px]">
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Zéro installation</strong> — fonctionne dans n&apos;importe quel navigateur</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Zoom · mesures · annotations</strong> natifs, multi-séries</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Partage avec le patient</strong> sur iPad en consultation</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Stockage cloud inclus</strong> — historique radios illimité</span>
              </li>
            </ul>
          </article>

          {/* ============ JULIA AI CHAT ============ */}
          <article className="glass-blue glass-shimmer beam-container relative flex flex-col overflow-hidden rounded-3xl p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="glass-pill inline-flex size-12 items-center justify-center rounded-xl border-transparent text-brand-bright">
                <Sparkles className="size-[22px]" />
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  N°02 · Julia AI Chat
                </div>
                <h3 className="mt-1 text-[26px] font-semibold leading-tight">
                  Posez. <span className="ital-blue">Recevez instantanément.</span>
                </h3>
              </div>
            </div>

            <p className="mb-7 text-[15px] leading-[1.6] text-muted-foreground">
              <strong className="text-foreground">Plus jamais besoin de chercher manuellement.</strong> Julia connaît votre clinique, vos protocoles, vos patients. Demandez-lui n&apos;importe quoi — clinique, finance, administratif — et obtenez la réponse en quelques secondes. <strong className="text-foreground">Disponible 24/7.</strong>
            </p>

            {/* Mock chat */}
            <div className="mb-7 flex flex-col gap-2">
              <div className="glass-pill self-end max-w-[80%] rounded-2xl rounded-br-md border-transparent px-3.5 py-2 text-[12px]">
                Quel est le protocole pour une extraction de dent de sagesse incluse ?
              </div>
              <div className="self-start max-w-[88%] rounded-2xl rounded-bl-md bg-gradient-to-b from-brand-mid to-brand px-3.5 py-2.5 text-[12px] text-white shadow-[0_8px_24px_rgba(0,23,108,0.4)]">
                <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.15em] text-brand-soft">✦ Julia</span>
                Protocole standard : pano + CBCT pré-op, anesth. tronculaire, lambeau muco-périosté, ostéotomie, élévation, suture. Je peux pré-remplir le plan dans le dossier du patient ?
              </div>
            </div>

            {/* Value bullets */}
            <ul className="flex flex-col gap-3 text-[13.5px]">
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Zap className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Économise des heures</strong> de recherche manuelle chaque semaine</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Questions cliniques, financières, opérationnelles</strong> — sans limite</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Apprend votre clinique</strong> — mémoire 3 niveaux, vos protocoles retenus</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <span><strong className="text-foreground">Disponible 24/7</strong> — réponses en arabe, français, anglais</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
