"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { EASE, STAGGER_STEP } from "@/lib/motion";

type Row = {
  name: string;
  scale: string;
  hex: string;
  semantic: string;
  line: string;
  ui: "block" | "button" | "surface" | "card" | "badge" | "link";
  chip: string;
  uiLabel: string;
};

const ROWS: Row[] = [
  { name: "Global Navy",            scale: "Blue 900",  hex: "#1B2A4A", semantic: "color.background.hero",   line: "rgba(255,255,255,0.5)",  ui: "block",   chip: "Canvas",         uiLabel: "Hero canvas" },
  { name: "Global Terracotta",      scale: "Clay 400",  hex: "#C96F53", semantic: "color.cta.primary",      line: "#C96F53",                ui: "button",  chip: "Adopt now",      uiLabel: "Primary action button" },
  { name: "Global Oat",             scale: "Cream 100", hex: "#FAF7F1", semantic: "color.surface.default",  line: "rgba(250,247,241,0.65)", ui: "surface", chip: "Page surface",   uiLabel: "Page background" },
  { name: "Global White",           scale: "White 000", hex: "#FFFFFF", semantic: "color.surface.card",     line: "rgba(255,255,255,0.6)",  ui: "card",    chip: "Content card",   uiLabel: "Content cards" },
  { name: "Global Success Green",   scale: "Teal 400",  hex: "#2EAD8C", semantic: "color.status.available", line: "#2EAD8C",                ui: "badge",   chip: "Available",      uiLabel: "Availability badge" },
  { name: "Global Interactive Blue",scale: "Blue 300",  hex: "#618FED", semantic: "color.link.secondary",   line: "#618FED",                ui: "link",    chip: "View profile →", uiLabel: "Secondary links + focus" },
];

const CY = (i: number) => 150 + i * 88;

/* SVG UI endpoint chip (desktop schematic) */
function UIChipSVG({ row, cy }: { row: Row; cy: number }) {
  const x = 700;
  const w = 240;
  if (row.ui === "block") {
    return (
      <g>
        <rect x={x} y={cy - 22} width={w} height={44} rx={12} fill="#1B2A4A" stroke="rgba(255,255,255,0.25)" />
        <text x={820} y={cy + 5} fill="rgba(255,255,255,0.6)" fontSize="13" fontWeight="600" textAnchor="middle">{row.chip}</text>
      </g>
    );
  }
  if (row.ui === "button") {
    return (
      <g>
        <rect x={x} y={cy - 22} width={w} height={44} rx={12} fill="#C96F53" />
        <text x={820} y={cy + 5} fill="#FFFFFF" fontSize="13" fontWeight="700" textAnchor="middle">{row.chip}</text>
      </g>
    );
  }
  if (row.ui === "surface") {
    return (
      <g>
        <rect x={x} y={cy - 22} width={w} height={44} rx={12} fill="#FAF7F1" />
        <text x={820} y={cy + 5} fill="#1B2A4A" fontSize="13" fontWeight="600" textAnchor="middle">{row.chip}</text>
      </g>
    );
  }
  if (row.ui === "card") {
    return (
      <g>
        <rect x={x} y={cy - 22} width={w} height={44} rx={12} fill="#FFFFFF" />
        <text x={820} y={cy + 5} fill="#1B2A4A" fontSize="13" fontWeight="600" textAnchor="middle">{row.chip}</text>
      </g>
    );
  }
  if (row.ui === "badge") {
    return (
      <g>
        <rect x={740} y={cy - 18} width={160} height={36} rx={18} fill="#2EAD8C" />
        <text x={820} y={cy + 5} fill="#FFFFFF" fontSize="13" fontWeight="700" textAnchor="middle">{row.chip}</text>
      </g>
    );
  }
  return (
    <g>
      <rect x={x} y={cy - 22} width={w} height={44} rx={12} fill="rgba(97,143,237,0.16)" stroke="#618FED" />
      <text x={820} y={cy + 5} fill="#618FED" fontSize="13" fontWeight="600" textAnchor="middle">{row.chip}</text>
    </g>
  );
}

/* HTML UI endpoint preview (mobile stacked) */
function UIChipMobile({ row }: { row: Row }) {
  if (row.ui === "button")
    return <div className="w-full rounded-xl bg-groovetop-terracotta text-white text-xs font-bold text-center py-2.5">{row.chip}</div>;
  if (row.ui === "badge")
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-groovetop-green text-white text-xs font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true" />Available
      </span>
    );
  if (row.ui === "link")
    return <span className="text-sm font-semibold underline underline-offset-2" style={{ color: "#618FED" }}>{row.chip}</span>;
  if (row.ui === "block")
    return <div className="w-full rounded-xl py-2.5 text-center text-[11px] font-medium uppercase tracking-widest text-white/50" style={{ background: "#1B2A4A", border: "1px solid rgba(255,255,255,0.25)" }}>Hero canvas</div>;
  return (
    <div className="w-full rounded-xl py-2.5 text-center text-[11px] font-semibold uppercase tracking-widest border border-groovetop-navy/8" style={{ background: row.hex, color: "#1B2A4A" }}>
      {row.ui === "surface" ? "Page surface" : "Content card"}
    </div>
  );
}

function StationHeaders() {
  const cols = [
    { x: 181, title: "PRIMITIVE TOKEN", sub: "raw value" },
    { x: 500, title: "SEMANTIC TOKEN", sub: "role destination" },
    { x: 820, title: "UI APPLICATION", sub: "rendered surface" },
  ];
  return (
    <g textAnchor="middle" fontFamily="inherit">
      {cols.map((c) => (
        <g key={c.title}>
          <text x={c.x} y={78} fill="rgba(255,255,255,0.55)" fontSize="13" fontWeight="700" letterSpacing="1.6">{c.title}</text>
          <text x={c.x} y={94} fill="rgba(255,255,255,0.3)" fontSize="11">{c.sub}</text>
        </g>
      ))}
      <text x={350} y={84} fill="rgba(255,255,255,0.22)" fontSize="16" textAnchor="middle">→</text>
      <text x={650} y={84} fill="rgba(255,255,255,0.22)" fontSize="16" textAnchor="middle">→</text>
    </g>
  );
}

function Connector({
  d,
  color,
  isVisible,
  delay,
  shouldReduce,
}: {
  d: string;
  color: string;
  isVisible: boolean;
  delay: number;
  shouldReduce: boolean | null;
}) {
  return (
    <>
      <path d={d} stroke={color} strokeWidth={7} fill="none" opacity={0.16} />
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={2.5}
        fill="none"
        initial={shouldReduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{ duration: 0.7, delay, ease: EASE }}
      />
    </>
  );
}

export default function DesignSystemProof() {
  const shouldReduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="design-system"
      ref={sectionRef}
      aria-labelledby="ds-heading"
      tabIndex={-1}
      className="py-section bg-groovetop-navy overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4">
            Design System Proof · The Proof Artifact
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 id="ds-heading" className="text-display-lg font-extrabold tracking-tight text-white">
              Semantic token flow
            </h2>
            <p className="text-sm text-white/55 max-w-md leading-relaxed lg:text-right">
              The climax of the system story — every color, every surface, one resolved path from primitive to UI.
            </p>
          </div>
        </motion.div>

        {/* Naming logic */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-10"
        >
          <p className="text-sm text-white/65 leading-relaxed max-w-3xl">
            Groovetop DS v1 applies strict variable-mapping logic: global primitives hold the raw visual values, while semantic tokens are named by <span className="font-semibold text-white">role destination</span> — <span className="font-mono text-[0.8em] text-white/85">color.background.hero</span>, <span className="font-mono text-[0.8em] text-white/85">color.cta.primary</span> — so the system reads as intent, not hex codes, and translates cleanly into handoff and front-end code.
          </p>
        </motion.div>

        {/* Desktop schematic */}
        <svg
          viewBox="0 0 1000 656"
          width="100%"
          className="hidden lg:block"
          role="img"
          aria-label="Six numbered token lanes flowing through three stations: primitive token, semantic token, and UI application. Global Navy resolves to color.background.hero and the hero canvas; Global Terracotta to color.cta.primary and the primary action button; Global Oat to color.surface.default and the page background; Global White to color.surface.card and content cards; Global Success Green to color.status.available and the availability badge; Global Interactive Blue to color.link.secondary and secondary links and focus states."
        >
          <rect x={50} y={102} width={262} height={520} rx={16} fill="rgba(255,255,255,0.03)" />
          <rect x={394} y={102} width={212} height={520} rx={16} fill="rgba(255,255,255,0.03)" />
          <rect x={694} y={102} width={252} height={520} rx={16} fill="rgba(255,255,255,0.03)" />

          <StationHeaders />

          {ROWS.map((row, i) => {
            const cy = CY(i);
            const c1 = `M306 ${cy} C 340 ${cy - 16}, 366 ${cy + 16}, 400 ${cy}`;
            const c2 = `M600 ${cy} C 634 ${cy - 16}, 660 ${cy + 16}, 700 ${cy}`;
            const lightSwatch = row.hex === "#FAF7F1" || row.hex === "#FFFFFF";
            return (
              <g key={row.semantic}>
                {/* row number */}
                <text x={28} y={cy + 5} fill="rgba(255,255,255,0.3)" fontSize="16" fontWeight="800">
                  {String(i + 1).padStart(2, "0")}
                </text>

                {/* primitive card */}
                <rect x={56} y={cy - 30} width={250} height={60} rx={12} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                <rect x={72} y={cy - 18} width={36} height={36} rx={9} fill={row.hex} stroke={lightSwatch ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"} />
                <text x={120} y={cy - 6} fill="#FFFFFF" fontSize="13" fontWeight="600">{row.name}</text>
                <text x={120} y={cy + 8} fill="rgba(255,255,255,0.42)" fontSize="10.5">{row.scale}</text>
                <text x={120} y={cy + 23} fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="monospace">{row.hex}</text>

                {/* connector 1 */}
                <Connector d={c1} color={row.line} isVisible={isVisible} delay={i * STAGGER_STEP + 0.1} shouldReduce={shouldReduce} />
                <circle cx={306} cy={cy} r={3.5} fill={row.line} />
                <circle cx={400} cy={cy} r={4} fill={row.line} />

                {/* semantic card */}
                <rect x={400} y={cy - 24} width={200} height={48} rx={12} fill="rgba(255,255,255,0.06)" stroke="rgba(201,111,83,0.45)" />
                <text x={500} y={cy + 4} fill="#FFFFFF" fontSize="12.5" fontFamily="monospace" textAnchor="middle">{row.semantic}</text>

                {/* connector 2 */}
                <Connector d={c2} color={row.line} isVisible={isVisible} delay={i * STAGGER_STEP + 0.25} shouldReduce={shouldReduce} />
                <circle cx={600} cy={cy} r={3.5} fill={row.line} />
                <circle cx={700} cy={cy} r={4} fill={row.line} />

                {/* UI application */}
                <UIChipSVG row={row} cy={cy} />
                <text x={820} y={cy + 40} fill="rgba(255,255,255,0.45)" fontSize="11.5" textAnchor="middle">{row.uiLabel}</text>
              </g>
            );
          })}
        </svg>

        {/* Mobile stacked */}
        <div className="lg:hidden space-y-5">
          {ROWS.map((row, i) => {
            const lightSwatch = row.hex === "#FAF7F1" || row.hex === "#FFFFFF";
            return (
              <motion.div
                key={row.semantic}
                initial={shouldReduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * STAGGER_STEP, ease: EASE }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold text-white/30 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0"
                    style={{ background: row.hex, border: lightSwatch ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.2)" }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white">{row.name}</p>
                    <p className="text-[10px] font-mono text-white/45">{row.hex} · {row.scale}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-1 text-white/40" aria-hidden="true">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M5 1v9M2 8l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-groovetop-terracotta/70">Semantic</span>
                </div>
                <div className="rounded-xl border border-groovetop-terracotta/30 bg-white/5 px-3 py-2">
                  <p className="text-xs font-mono font-bold text-white">{row.semantic}</p>
                </div>
                <div className="flex items-center gap-2 pl-1 text-white/40" aria-hidden="true">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M5 1v9M2 8l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-white/40">UI application</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1"><UIChipMobile row={row} /></div>
                  <span className="text-[10px] font-semibold text-white/50 flex-shrink-0">{row.uiLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Caption */}
        <p className="mt-10 text-center text-sm text-white/55">
          Primitive → semantic → UI — 452 color bindings, 63 style applications, 6 screens, one path.
        </p>

        {/* Supporting copy */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.04] text-center"
        >
          <p className="text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            Groovetop DS v1 expanded the award-recognized prototype into a documented reusable system. The refinement preserved the original visual direction while adding structure, consistency, and handoff clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
