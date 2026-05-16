import { Users, CreditCard, Calendar, Globe, GitBranch, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

type BCardProps = {
  num: string;
  Icon: React.ComponentType<{ className?: string }>;
  title: React.ReactNode;
  desc: string;
  children?: React.ReactNode;
  span?: string;
  rowSpan?: string;
  feature?: boolean;
};

function BCard({ num, Icon, title, desc, children, span = "", rowSpan = "", feature = false }: BCardProps) {
  return (
    <Card
      className={`${feature ? "glass-blue" : "glass"} glass-shimmer glass-hover glass-caustic relative flex flex-col gap-0 overflow-hidden rounded-3xl p-8 ${span} ${rowSpan}`}
    >

      <div className="relative z-[2] mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {num}
      </div>
      <span className="glass-pill relative z-[2] mb-6 inline-flex size-11 items-center justify-center rounded-xl border-transparent text-brand-bright">
        <Icon className="size-5" />
      </span>
      <h3 className="relative z-[2] mb-3 text-[22px] font-semibold leading-tight">{title}</h3>
      <p className="relative z-[2] text-[14px] leading-[1.6] text-muted-foreground">{desc}</p>
      <div className="relative z-[2]">{children}</div>
    </Card>
  );
}

// Mock dental chart
function MockChart() {
  const cells: ("blue" | "bright" | "warn" | "bad" | "")[] = [
    "", "", "blue", "", "warn", "", "bright", "",
    "", "blue", "", "", "", "bright", "", "bad",
    "", "", "warn", "", "", "", "", "",
    "", "", "", "blue", "", "", "", "",
  ];
  const color = (c: string) => {
    if (c === "blue") return "bg-[rgba(91,139,255,0.30)] border-brand-bright shadow-[0_0_8px_rgba(91,139,255,0.4)]";
    if (c === "bright") return "bg-[rgba(185,200,255,0.20)] border-brand-soft";
    if (c === "warn") return "bg-[rgba(251,191,36,0.22)] border-amber-400";
    if (c === "bad") return "bg-[rgba(248,113,113,0.20)] border-red-400";
    return "bg-white/[0.04] border-white/[0.06]";
  };
  return (
    <div className="relative z-[1] mt-5 grid grid-cols-8 gap-1 rounded-xl border border-border bg-[#0c0c10] p-3.5">
      {cells.map((c, i) => (
        <div key={i} className={`aspect-square rounded border ${color(c)}`} />
      ))}
    </div>
  );
}

function MockReceipt() {
  return (
    <div className="relative z-[1] mt-4 rounded-xl border border-border bg-[#0c0c10] p-3.5 font-mono text-[11px]">
      <div className="flex justify-between py-1 text-muted-foreground"><span>Implant + couronne</span><span>76 500</span></div>
      <div className="flex justify-between py-1 text-muted-foreground"><span>Détartrage</span><span>3 500</span></div>
      <div className="flex justify-between py-1 text-muted-foreground"><span>Plombage ×2</span><span>8 000</span></div>
      <div className="flex justify-between py-1 text-muted-foreground"><span>Remise 15%</span><span className="text-brand-bright">−13 200</span></div>
      <div className="mt-2 flex justify-between border-t border-dashed border-[#2a2a32] pt-2 font-bold text-foreground"><span>Total file</span><span>74 800 DA</span></div>
    </div>
  );
}

function MockBars() {
  const bars = [40, 60, 92, 72, 55, 88, 68];
  return (
    <div className="relative z-[1] mt-5 flex h-[110px] items-end gap-1.5 rounded-xl border border-border bg-[#0c0c10] p-3.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm bg-gradient-to-b ${
            h > 85
              ? "from-brand-soft to-[rgba(185,200,255,0.3)] shadow-[0_0_12px_var(--brand-bright)]"
              : "from-brand-bright to-[rgba(91,139,255,0.2)]"
          }`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <div className="glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              01 — Fonctionnalités
            </div>
          </div>
          <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Une plateforme. <span className="ital-blue">Toute votre clinique</span>, en temps réel.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(240px,auto)]">
          <BCard
            num="N°01 · Patients"
            Icon={Users}
            title={<>Dossier patient. <span className="ital-blue">Schéma 32 dents.</span></>}
            desc="Fiche médicale complète, plan de traitement, photos illimitées, signatures électroniques, viewer 3D des modèles labo. Notation FDIS interactive avec suivi temps réel."
            span="lg:col-span-3"
            rowSpan="lg:row-span-2"
            feature
          >
            <MockChart />
            <div className="mt-3 flex flex-wrap gap-3.5 font-mono text-[10px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-sm bg-brand-bright" /> Plan</span>
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-sm bg-brand-soft" /> Traité</span>
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-sm bg-amber-400" /> Carie</span>
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-sm bg-red-400" /> Absent</span>
            </div>
          </BCard>

          <BCard
            num="N°02 · Caisse"
            Icon={CreditCard}
            title={<>Caisse multi-postes <span className="ital-blue">temps réel.</span></>}
            desc="Pensée comme un POS de restaurant. File d'attente intelligente, splits commission auto, paiement CIB / Edahabia / espèces."
            span="lg:col-span-3"
          >
            <MockReceipt />
          </BCard>

          <BCard
            num="N°03 · Agenda"
            Icon={Calendar}
            title={<>Agenda <span className="ital-blue">multi-praticiens.</span></>}
            desc="Drag & drop, créneaux 15 min, sync Google Calendar. Affectation automatique aux boxes."
            span="lg:col-span-3"
          >
            <MockBars />
          </BCard>

          <BCard
            num="N°04 · DICOM"
            Icon={Globe}
            title={<>Imagerie <span className="ital-blue">DICOM.</span></>}
            desc="Pano, CBCT, rétro-alvéolaire dans le navigateur. Aucun logiciel tiers requis."
            span="lg:col-span-2"
          />

          <BCard
            num="N°05 · Workflow"
            Icon={GitBranch}
            title={<>Workflow <span className="ital-blue">visuel.</span></>}
            desc="Modélisez votre parcours patient en glisser-déposer. Sans code."
            span="lg:col-span-2"
          />

          <BCard
            num="N°06 · Sécurité"
            Icon={Shield}
            title={<>Stock & <span className="ital-blue">coffre-fort.</span></>}
            desc="Audit complet, soldes temps réel, accès propriétaire uniquement."
            span="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
