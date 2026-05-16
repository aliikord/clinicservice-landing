"use client";
import { createElement } from "react";

// Declare custom element for TS
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "media-id"?: string;
          aspect?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function VslPlayer() {
  return (
    <section id="vsl" className="relative py-20 md:py-24">
      <div className="relative mx-auto max-w-[1080px] px-6">
        {/* Halo glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[140%] w-[130%] -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 scale-[0.7] rounded-full blur-[60px]"
            style={{
              background:
                "radial-gradient(circle, rgba(91,139,255,0.35) 0%, rgba(0,23,108,0.25) 30%, transparent 60%)",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 size-4/5 -translate-x-1/2 -translate-y-1/2 scale-50 rounded-full blur-[30px]"
            style={{
              background:
                "radial-gradient(circle, rgba(185,200,255,0.30) 0%, rgba(91,139,255,0.15) 40%, transparent 70%)",
            }}
          />
        </div>

        {/* Orbital rings */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(91,139,255,0.15)] md:size-[600px]" />
          <div className="absolute left-1/2 top-1/2 size-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(91,139,255,0.10)]" />
          <div className="absolute left-1/2 top-1/2 size-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(91,139,255,0.06)]" />
        </div>

        {/* Player — glass frame */}
        <div
          className="glass-strong glass-shimmer glass-caustic relative z-[5] overflow-hidden rounded-3xl p-2"
          style={{ aspectRatio: "16 / 9" }}
        >
          {createElement("wistia-player", {
            "media-id": "ko3v3y0pu8",
            aspect: "1.7777777777777777",
            style: {
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "24px",
            },
          })}
        </div>

        <p className="mt-8 text-center font-mono text-[12px] uppercase tracking-[0.15em] text-muted-foreground">
          <span className="text-brand-bright">▶</span> Cliquez pour lancer la démo officielle &nbsp;·&nbsp; Tournée à Zekri Dental, Alger
        </p>
      </div>
    </section>
  );
}
