import {
  Users,
  Calendar,
  CreditCard,
  Shield,
  Sparkles,
  MessageSquare,
} from "lucide-react";

type Category = {
  num: string;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  items: string[];
};

const CATEGORIES: Category[] = [
  {
    num: "01",
    Icon: Users,
    title: "Patients & clinique",
    desc: "Tout le dossier patient, du premier RDV à la pose.",
    items: [
      "Dossier patient complet (8 onglets)",
      "Schéma dentaire 32 dents (FDIS)",
      "Plans de traitement avec checklist",
      "Photos cliniques illimitées",
      "Imagerie DICOM (Pano · CBCT · rétro)",
      "Viewer 3D (STL · OBJ · GLTF · PLY)",
      "Signatures électroniques",
      "Annotations sur radio",
      "Templates patient (Notion-style)",
    ],
  },
  {
    num: "02",
    Icon: Calendar,
    title: "Agenda & boxes",
    desc: "Le quotidien de votre clinique, en temps réel.",
    items: [
      "Calendrier multi-praticiens",
      "Drag & drop, créneaux 15 min",
      "20+ fuseaux horaires",
      "Sync Google Calendar",
      "Workflow boxes en temps réel",
      "Affectation automatique aux boxes",
      "Transfert entre boxes",
      "File d'attente live (SOS)",
      "Gestion des absences",
    ],
  },
  {
    num: "03",
    Icon: CreditCard,
    title: "Caisse & finance",
    desc: "POS inspiré du restaurant, audit complet.",
    items: [
      "Caisse multi-postes synchronisée",
      "File d'attente intelligente",
      "Splits commission automatiques",
      "Coffre-fort financier sécurisé",
      "Réconciliation automatique",
      "Reçus imprimables (Xprinter inclus)",
      "Paiement CIB · Edahabia · espèces · CCP",
      "Tableau de bord 5 onglets",
      "Validation des splits par propriétaire",
    ],
  },
  {
    num: "04",
    Icon: MessageSquare,
    title: "Équipe & communication",
    desc: "Coordination staff sans friction.",
    items: [
      "Permissions V3 par page · département · box",
      "Org chart hiérarchique (ReactFlow)",
      "Pointage QR + kiosk plein-écran",
      "Heures supplémentaires automatiques",
      "Messagerie directe + groupes",
      "Fil social équipe (posts · réactions · Go Live)",
      "Alertes urgentes (vibration · son · sticker)",
      "Notifications natives Web",
      "Stock + bons de commande + alertes péremption",
    ],
  },
  {
    num: "05",
    Icon: Sparkles,
    title: "Julia AI & automatisation",
    desc: "L'assistante IA qui apprend votre clinique.",
    items: [
      "Julia · assistante IA dédiée",
      "3 niveaux de mémoire (session · user · clinic)",
      "Reconnaissance vocale FR · AR · EN",
      "Anomaly scanner (toutes les 5 minutes)",
      "ReAct traces visibles",
      "Actions exécutées (créer · naviguer · filtrer)",
      "5 personnalités · 5 cultures configurables",
      "Détection d'inactivité (prompts proactifs)",
      "Filtre patients en langage naturel",
    ],
  },
  {
    num: "06",
    Icon: Shield,
    title: "Sécurité & infrastructure",
    desc: "Conçu pour durer. Audit complet.",
    items: [
      "Isolement multi-tenant (Clerk userId)",
      "Soft-delete récupérable 30 jours",
      "Sauvegardes Postgres automatiques (Neon)",
      "URLs signées GCS pour pièces jointes",
      "Audit complet (clinic + patient activity log)",
      "HTTPS partout · TLS 1.3",
      "App desktop (Windows · Mac · Linux)",
      "Mises à jour à vie automatiques",
      "Cache 3 couches (Zustand · React Query · Redis)",
    ],
  },
];

export function AllFeatures() {
  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <div className="glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              02 — Plateforme complète
            </div>
          </div>
          <div>
            <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
              50+ fonctionnalités <span className="ital-blue">natives.</span>
              <br />Aucun module à débloquer.
            </h2>
            <p className="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-muted-foreground">
              ClinicService couvre l&apos;intégralité de votre flux clinique. Pas de surcoût caché. Pas d&apos;intégration tierce nécessaire. Tout est inclus dès le premier jour.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.num}
              className="glass glass-hover beam-container relative flex flex-col gap-0 rounded-2xl p-7"
            >
              {/* Top accent line */}
              <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(185,200,255,0.30)] to-transparent" />

              <div className="mb-5 flex items-center gap-3">
                <span className="glass-pill inline-flex size-10 items-center justify-center rounded-xl border-transparent text-brand-bright">
                  <cat.Icon className="size-[18px]" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  N°{cat.num}
                </span>
              </div>

              <h3 className="text-[20px] font-semibold leading-tight">{cat.title}</h3>
              <p className="mt-1.5 mb-5 text-[13px] leading-[1.55] text-muted-foreground">
                {cat.desc}
              </p>

              <ul className="flex flex-col gap-2.5 text-[13px]">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-muted-foreground"
                  >
                    <span className="mt-[7px] inline-block size-1 shrink-0 rounded-full bg-brand-bright shadow-[0_0_6px_var(--brand-bright)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          <span>76+ tables DB</span>
          <span className="text-border">·</span>
          <span>57 pages app</span>
          <span className="text-border">·</span>
          <span>131+ composants</span>
          <span className="text-border">·</span>
          <span>3 langues (FR · AR · EN)</span>
        </div>
      </div>
    </section>
  );
}
