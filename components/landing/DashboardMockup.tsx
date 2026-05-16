import {
  LayoutGrid, Users, Calendar, CreditCard, Globe, Package,
} from "lucide-react";
import { asset } from "@/lib/site";

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

const BARS = [38, 62, 88, 70, 55, 84, 48];

export function DashboardMockup() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -bottom-[200px] z-0 h-[700px] w-[1200px] -translate-x-1/2 blur-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(91,139,255,0.18) 0%, rgba(0,23,108,0.20) 30%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[680px] px-6 text-center">
        <div className="glass-pill mb-6 inline-flex items-center gap-2.5 rounded-full border-transparent px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
          <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
          02 — L&apos;interface
        </div>
        <h2 className="mb-4 text-[clamp(32px,4.5vw,60px)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Tout, depuis <span className="ital-blue">un seul tableau de bord.</span>
        </h2>
        <p className="mx-auto max-w-[500px] text-[15px] leading-[1.6] text-muted-foreground">
          Vous voyez tout en temps réel — patients, encaissements, files d&apos;attente, alertes.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-[1240px] px-6" style={{ perspective: 2000 }}>
        <div
          className="glass-strong glass-shimmer relative overflow-hidden rounded-[28px] p-3"
          style={{
            transform: "rotateX(1.5deg)",
            transformOrigin: "center top",
          }}
        >
          <div className="overflow-hidden rounded-[20px] border border-border bg-background">
            {/* Top bar */}
            <div className="flex items-center gap-2 border-b border-border bg-card/60 px-4 py-3 backdrop-blur">
              <span className="size-[10px] rounded-full bg-[#2a2a32]" />
              <span className="size-[10px] rounded-full bg-[#2a2a32]" />
              <span className="size-[10px] rounded-full bg-[#2a2a32]" />
              <span className="flex-1 text-center font-mono text-[11px] text-muted-foreground">
                app.clinicservice.app/dashboard
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-brand-bright">
                <span className="live-dot" />
                live
              </span>
            </div>
            {/* Body */}
            <div className="grid min-h-[460px] grid-cols-1 md:grid-cols-[210px_1fr]">
              <aside className="hidden flex-col gap-0.5 border-r border-border bg-card/40 p-4 md:flex">
                <div className="mb-3 flex items-center gap-2.5 px-2 py-1.5">
                  <img
                    src={asset("/logo.png")}
                    alt=""
                    width={22}
                    height={22}
                    className="size-[22px] drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] drop-shadow-[0_0_12px_rgba(91,139,255,0.5)]"
                  />
                  <span className="text-[13px] font-semibold">ClinicService</span>
                </div>
                {LINKS.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`group flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] transition-colors ${
                      active
                        ? "bg-[rgba(91,139,255,0.10)] text-brand-bright"
                        : "text-muted-foreground hover:bg-white/[0.03]"
                    }`}
                  >
                    <Icon className="size-3.5 opacity-80" />
                    {label}
                  </div>
                ))}
              </aside>

              <main className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold">Tableau de bord — Aujourd&apos;hui</span>
                  <span className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                    Synchronisé · il y a 2s
                    <span className="typing-dots"><span /><span /><span /></span>
                  </span>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                  {KPIS.map((k, i) => (
                    <div
                      key={k.lbl}
                      className="rounded-lg border border-border bg-card/40 p-3 opacity-0"
                      style={{
                        animation: "row-in 0.6s ease-out forwards",
                        animationDelay: `${i * 80}ms`,
                      }}
                    >
                      <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                        {k.lbl}
                      </div>
                      <div
                        className={`font-mono text-[24px] font-medium tabular-nums ${
                          k.glow ? "text-brand-bright" : ""
                        }`}
                        style={
                          k.glow
                            ? {
                                animation: "number-pulse 4s ease-in-out infinite",
                                textShadow: "0 0 16px rgba(91,139,255,0.6)",
                              }
                            : undefined
                        }
                      >
                        {k.val}
                      </div>
                      <div className={`mt-0.5 font-mono text-[10px] ${k.muted ? "text-muted-foreground" : "text-emerald-400"}`}>
                        {k.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity chart */}
                <div className="rounded-lg border border-border bg-card/40 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      Activité · 7 dern. jours
                    </span>
                    <span className="font-mono text-[10px] text-brand-bright">▲ +18%</span>
                  </div>
                  <div className="flex h-[48px] items-end gap-1.5">
                    {BARS.map((h, i) => (
                      <div
                        key={i}
                        className={`bar-grow flex-1 rounded-sm bg-gradient-to-b ${
                          h > 80
                            ? "from-brand-soft to-[rgba(185,200,255,0.3)] shadow-[0_0_10px_var(--brand-bright)]"
                            : "from-brand-bright to-[rgba(91,139,255,0.2)]"
                        }`}
                        style={{
                          height: `${h}%`,
                          animation: `bar-grow 1.2s cubic-bezier(0.4,0,0.2,1) forwards`,
                          animationDelay: `${i * 60 + 200}ms`,
                          transform: "scaleY(0)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Rows */}
                <div className="flex flex-col gap-2">
                  {ROWS.map((r, i) => (
                    <div
                      key={r.initials}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card/40 px-3.5 py-2.5 text-[12px] opacity-0"
                      style={{
                        animation: "row-in 0.6s ease-out forwards",
                        animationDelay: `${500 + i * 120}ms`,
                      }}
                    >
                      <div className="flex flex-1 items-center gap-2.5 min-w-0">
                        <span className={`inline-flex size-7 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-[10px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]`}>
                          {r.initials}
                        </span>
                        <div className="min-w-0">
                          <div>{r.name}</div>
                          <span className="mt-0.5 block font-mono text-[10px] text-muted-foreground truncate">{r.sub}</span>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-[rgba(91,139,255,0.22)] bg-[rgba(91,139,255,0.10)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-brand-bright">
                        {r.badge}
                      </span>
                      <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{r.time}</span>
                    </div>
                  ))}
                </div>

                {/* Floating notification */}
                <div
                  className="glass-blue mt-1 flex items-center gap-3 rounded-xl border-transparent px-3 py-2.5 opacity-0"
                  style={{
                    animation: "slide-in 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
                    animationDelay: "1200ms",
                  }}
                >
                  <span className="live-dot shrink-0" />
                  <span className="text-[11px] text-muted-foreground">
                    <strong className="text-brand-bright">Julia :</strong> 3 nouveaux RDV confirmés via WhatsApp
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">à l&apos;instant</span>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
