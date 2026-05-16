const ITEMS = [
  { html: 'ZEKRI <span class="text-muted-foreground">Dental</span>' },
  { html: "CLINIQUE ATLAS" },
  { html: 'Smile<span class="text-muted-foreground">Care</span>' },
  { html: "DentaPlus⁺" },
  { html: "Cabinet Mansouri" },
  { html: 'ORTHO<span class="text-muted-foreground/70 font-light">DZ</span>' },
];

export function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-border bg-gradient-to-b from-transparent via-[rgba(91,139,255,0.02)] to-transparent py-9"
    >
      <div className="inline-flex animate-marquee items-center gap-20 whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="contents">
            <span
              className="text-[22px] font-medium tracking-[-0.01em] text-muted-foreground/70"
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
            <span className="text-lg text-border">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
