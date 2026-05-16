import Image from "next/image";
import {
  LayoutGrid, Users, Calendar, CreditCard, Globe, Package,
} from "lucide-react";

const LINKS = [
  { icon: LayoutGrid, label: "Tableau de bord", active: true },
  { icon: Users, label: "Patients" },
  { icon: Calendar, label: "Agenda" },
  { icon: CreditCard, label: "Caisse" },
  { icon: Globe, label: "Imagerie" },
  { icon: Package, label: "Stock" },
];

const KPIS = [
  { lbl: "Patients", val: "42", delta: "▲ +12%" },
  { lbl: "Encaissé", val: "187k", delta: "▲ +8%", glow: true },
  { lbl: "Boxes", val: "22/24", delta: "2 en pause", muted: true },
  { lbl: "File", val: "7", delta: "~12 min", muted: true },
];

const ROWS = [
  { initials: "FB", color: "from-brand-mid to-brand", name: "Fatima Boukhalfa", sub: "Implant · Box 3 · Dr. Belkacem", badge: "Confirmé", time: "09:30" },
  { initials: "AT", color: "from-brand-bright to-brand-mid", name: "Amine Tahar", sub: "Blanchiment · Box 7", badge: "En cours", time: "10:00" },
  { initials: "SM", color: "from-brand-soft to-brand-bright text-background", name: "Sara Mansouri", sub: "ODF · Box 2 · Dr. Larbi", badge: "Confirmé", time: "10:30" },
];

export function DashboardMockup() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -bottom-[200px] z-0 h-[700px] w-[1200px] -translate-x-1/2 blur-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(91,139,255,0.18) 0%, rgba(0,23,108,0.20) 30%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <div className="mb-6 glass-pill inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
          <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
          02 — L&apos;interface
        </div>
        <h2 className="mb-4 text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Tout, depuis <span className="ital-blue">un seul tableau de bord.</span>
        </h2>
        <p className="mx-auto max-w-[540px] text-[17px] leading-[1.6] text-muted-foreground">
          Vous voyez tout en temps réel — patients, encaissements, files d&apos;attente, alertes. Vos équipes voient ce que vous décidez.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1280px] px-6" style={{ perspective: 2000 }}>
        <div
          className="glass-strong glass-shimmer glass-caustic relative overflow-hidden rounded-[28px] p-3.5"
          style={{
            transform: "rotateX(1.5deg)",
            transformOrigin: "center top",
          }}
        >
          <div className="absolute inset-x-1/4 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(91,139,255,0.5)] to-transparent" />
          <div className="overflow-hidden rounded-[18px] border border-border bg-background">
            {/* Bar */}
            <div className="flex items-center gap-2 border-b border-border bg-card px-4.5 py-3.5">
              <span className="size-[11px] rounded-full bg-[#2a2a32]" />
              <span className="size-[11px] rounded-full bg-[#2a2a32]" />
              <span className="size-[11px] rounded-full bg-[#2a2a32]" />
              <span className="flex-1 text-center font-mono text-[11px] text-muted-foreground">
                app.clinicservice.app/dashboard
              </span>
            </div>
            {/* Body */}
            <div className="grid min-h-[480px] grid-cols-1 md:grid-cols-[220px_1fr]">
              <aside className="hidden flex-col gap-1 border-r border-border bg-[#0c0c10] p-5 md:flex">
                <div className="mb-3.5 flex items-center gap-2.5 px-2 py-1.5">
                  <Image src="/logo.png" alt="" width={22} height={22} />
                  <span className="text-[13px] font-bold">ClinicService</span>
                </div>
                {LINKS.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-[12px] ${
                      active
                        ? "border border-[rgba(91,139,255,0.18)] bg-[rgba(91,139,255,0.10)] text-brand-bright"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-3.5 opacity-80" />
                    {label}
                  </div>
                ))}
              </aside>
              <main className="flex flex-col gap-3.5 p-5.5">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold">Tableau de bord — Aujourd&apos;hui</span>
                  <span className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 before:size-1.5 before:rounded-full before:bg-emerald-400 before:shadow-[0_0_8px_currentColor]">
                    Synchronisé · live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                  {KPIS.map((k) => (
                    <div key={k.lbl} className="rounded-lg border border-border bg-[#0c0c10] p-3.5">
                      <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">{k.lbl}</div>
                      <div className={`font-mono text-[26px] font-medium tabular-nums ${k.glow ? "text-brand-bright [text-shadow:0_0_16px_rgba(91,139,255,0.6)]" : ""}`}>
                        {k.val}
                      </div>
                      <div className={`mt-1 font-mono text-[10px] ${k.muted ? "text-muted-foreground" : "text-emerald-400"}`}>
                        {k.delta}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {ROWS.map((r) => (
                    <div key={r.initials} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-[#0c0c10] px-4 py-3 text-[12px]">
                      <div className="flex flex-1 items-center gap-2.5 min-w-0">
                        <span className={`inline-flex size-7.5 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-[10px] font-bold text-white`}>
                          {r.initials}
                        </span>
                        <div className="min-w-0">
                          <div>{r.name}</div>
                          <span className="mt-0.5 block font-mono text-[10px] text-muted-foreground truncate">{r.sub}</span>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-[rgba(91,139,255,0.22)] bg-[rgba(91,139,255,0.12)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-brand-bright">
                        {r.badge}
                      </span>
                      <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{r.time}</span>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
