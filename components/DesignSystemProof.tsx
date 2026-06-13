"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { EASE, STAGGER_STEP } from "@/lib/motion";

const TOKEN_ROWS = [
  {
    primitive: { name: "Global Navy",          hex: "#1B2A4A", token: "Blue 900"    },
    semantic:  { name: "color.background.hero"                                       },
    ui:        { name: "Hero Canvas",          type: "block",  color: "#1B2A4A"      },
  },
  {
    primitive: { name: "Global Terracotta",    hex: "#C96F53", token: "Clay 400"    },
    semantic:  { name: "color.cta.primary"                                           },
    ui:        { name: "Primary Button",       type: "button", color: "#C96F53"      },
  },
  {
    primitive: { name: "Global Oat",           hex: "#FAF7F1", token: "Cream 100"   },
    semantic:  { name: "color.surface.default"                                       },
    ui:        { name: "Page Background",      type: "surface", color: "#FAF7F1"    },
  },
  {
    primitive: { name: "Global White",         hex: "#FFFFFF", token: "White 000"   },
    semantic:  { name: "color.surface.card"                                          },
    ui:        { name: "Content Cards",        type: "card",    color: "#FFFFFF"    },
  },
  {
    primitive: { name: "Global Success Green", hex: "#2EAD8C", token: "Teal 400"   },
    semantic:  { name: "color.status.available"                                      },
    ui:        { name: "Availability Badge",   type: "badge",   color: "#2EAD8C"   },
  },
  {
    primitive: { name: "Global Interactive",   hex: "#618FED", token: "Blue 300"   },
    semantic:  { name: "color.link.secondary"                                        },
    ui:        { name: "Secondary Links",      type: "link",    color: "#618FED"   },
  },
];

function UIPreview({ type, color, name }: { type: string; color: string; name: string }) {
  const dark = color === "#1B2A4A" || color === "#C96F53" || color === "#2EAD8C" || color === "#618FED";

  if (type === "block") {
    return (
      <div
        className="w-full h-10 rounded-lg flex items-center justify-center"
        style={{ background: color }}
        aria-label={`${name} — dark navy background block`}
      >
        <span className="text-[9px] text-white/50 font-medium uppercase tracking-widest">Canvas</span>
      </div>
    );
  }
  if (type === "button") {
    return (
      <div
        className="w-full h-10 rounded-xl flex items-center justify-center text-[11px] font-bold text-white"
        style={{ background: color }}
        aria-label={`${name} — primary CTA button`}
      >
        Adopt Now
      </div>
    );
  }
  if (type === "surface") {
    return (
      <div
        className="w-full h-10 rounded-lg border border-black/8 flex items-center justify-center"
        style={{ background: color }}
        aria-label={`${name} — page background surface`}
      >
        <span className="text-[9px] text-black/30 font-medium uppercase tracking-widest">Page Surface</span>
      </div>
    );
  }
  if (type === "card") {
    return (
      <div
        className="w-full h-10 rounded-xl border border-black/10 shadow-sm flex items-center gap-2 px-3"
        style={{ background: color }}
        aria-label={`${name} — content card`}
      >
        <div className="w-5 h-5 rounded-lg bg-black/5 flex-shrink-0" />
        <div className="flex-1 space-y-1">
          <div className="h-1.5 bg-black/8 rounded w-3/4" />
          <div className="h-1.5 bg-black/5 rounded w-1/2" />
        </div>
      </div>
    );
  }
  if (type === "badge") {
    return (
      <div className="flex items-center gap-2" aria-label={`${name} — availability badge`}>
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-white"
          style={{ background: color }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true" />
          Available
        </span>
        <span className="text-[10px] text-groovetop-navy/35 font-medium">+ label</span>
      </div>
    );
  }
  if (type === "link") {
    return (
      <div className="flex items-center gap-2" aria-label={`${name} — secondary link and focus indicator`}>
        <span
          className="text-sm font-semibold underline underline-offset-2"
          style={{ color }}
        >
          View Profile →
        </span>
        <span
          className="text-[10px] px-1.5 py-0.5 rounded border font-medium"
          style={{ borderColor: color, color }}
        >
          Focus
        </span>
      </div>
    );
  }
  return null;
}

function TokenRow({
  row,
  index,
  isVisible,
}: {
  row: typeof TOKEN_ROWS[0];
  index: number;
  isVisible: boolean;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * STAGGER_STEP, ease: EASE }}
      className="relative"
    >
      {/* Desktop: horizontal card row with SVG connector.
          items-stretch + justify-center keeps every card equal height so the
          connectors land on the exact vertical center of each row. */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-0 min-h-[96px]">

        {/* Card 1 — Primitive Token */}
        <div className="flex flex-col justify-center gap-2 rounded-xl border border-groovetop-navy/8 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0 border border-black/10 shadow-inner"
              style={{ background: row.primitive.hex }}
              aria-hidden="true"
            />
            <div>
              <p className="text-xs font-bold text-groovetop-navy leading-tight">{row.primitive.name}</p>
              <p className="text-[10px] text-groovetop-navy/40 font-medium">{row.primitive.token}</p>
            </div>
          </div>
          <p className="text-[9px] font-mono text-groovetop-navy/30 bg-groovetop-oat px-2 py-1 rounded-lg w-fit">
            {row.primitive.hex}
          </p>
        </div>

        {/* Connector Arrow 1 */}
        <div className="flex items-center justify-center w-10" aria-hidden="true">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" overflow="visible">
            <motion.path
              d="M2 10 H34"
              stroke="#1B2A4A"
              strokeOpacity="0.15"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              initial={shouldReduce ? { pathLength: 1 } : { pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.6, delay: index * STAGGER_STEP + 0.3, ease: EASE }}
            />
            <motion.path
              d="M30 6 L38 10 L30 14"
              stroke="#1B2A4A"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.2, delay: index * STAGGER_STEP + 0.7, ease: EASE }}
            />
          </svg>
        </div>

        {/* Card 2 — Semantic Token */}
        <div className="flex flex-col justify-center rounded-xl border border-groovetop-terracotta/20 bg-white p-4 shadow-sm">
          <div className="space-y-1">
            <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-groovetop-terracotta/60 mb-2">
              Semantic Token
            </p>
            <p className="text-xs font-mono font-bold text-groovetop-navy leading-tight">{row.semantic.name}</p>
          </div>
        </div>

        {/* Connector Arrow 2 */}
        <div className="flex items-center justify-center w-10" aria-hidden="true">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" overflow="visible">
            <motion.path
              d="M2 10 H34"
              stroke="#C96F53"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              initial={shouldReduce ? { pathLength: 1 } : { pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 0.6, delay: index * STAGGER_STEP + 0.5, ease: EASE }}
            />
            <motion.path
              d="M30 6 L38 10 L30 14"
              stroke="#C96F53"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.2, delay: index * STAGGER_STEP + 0.85, ease: EASE }}
            />
          </svg>
        </div>

        {/* Card 3 — UI Application */}
        <div className="flex flex-col justify-center gap-3 rounded-xl border border-groovetop-navy/8 bg-white p-4 shadow-sm">
          <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/35">
            UI Application
          </p>
          <UIPreview type={row.ui.type} color={row.ui.color} name={row.ui.name} />
          <p className="text-[10px] font-semibold text-groovetop-navy/60">{row.ui.name}</p>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="lg:hidden flex flex-col gap-3">
        <div className="flex items-center gap-3 p-4 rounded-xl border border-groovetop-navy/8 bg-white shadow-sm">
          <div
            className="w-8 h-8 rounded-lg flex-shrink-0 border border-black/10"
            style={{ background: row.primitive.hex }}
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-groovetop-navy">{row.primitive.name}</p>
            <p className="text-[10px] font-mono text-groovetop-navy/40">{row.primitive.hex}</p>
          </div>
        </div>
        <div className="flex items-center justify-start pl-6">
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none" aria-hidden="true">
            <path d="M6 2 V18 M2 14 L6 22 L10 14" stroke="#1B2A4A" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="p-3 rounded-xl border border-groovetop-terracotta/20 bg-white shadow-sm">
          <p className="text-[9px] font-mono font-bold text-groovetop-navy">{row.semantic.name}</p>
        </div>
        <div className="flex items-center justify-start pl-6">
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none" aria-hidden="true">
            <path d="M6 2 V18 M2 14 L6 22 L10 14" stroke="#C96F53" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="p-4 rounded-xl border border-groovetop-navy/8 bg-white shadow-sm space-y-2">
          <UIPreview type={row.ui.type} color={row.ui.color} name={row.ui.name} />
          <p className="text-xs font-semibold text-groovetop-navy/60">{row.ui.name}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DesignSystemProof() {
  const shouldReduce = useReducedMotion();
  const sectionRef   = useRef<HTMLElement>(null);
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
      className="py-section bg-groovetop-oat"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4">
            Design System Proof
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="ds-heading"
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-groovetop-navy"
            >
              Semantic Token Flow
            </h2>
            <p className="text-sm text-groovetop-navy/45 max-w-md leading-relaxed lg:text-right">
              Primitive → Semantic → UI Application. Every surface is one resolved token.
            </p>
          </div>
        </motion.div>

        {/* Naming logic — mapping rationale */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-10 border-l-2 border-groovetop-terracotta/40 pl-5"
        >
          <p className="text-sm text-groovetop-navy/65 leading-relaxed max-w-3xl">
            Groovetop DS v1 applies strict variable-mapping logic: global primitives hold the raw visual values, while semantic tokens are named by <span className="font-semibold text-groovetop-navy">role destination</span> — <span className="font-mono text-[0.8em] text-groovetop-navy/80">color.background.hero</span>, <span className="font-mono text-[0.8em] text-groovetop-navy/80">color.cta.primary</span> — so the system reads as intent, not hex codes, and translates cleanly into handoff and front-end code.
          </p>
        </motion.div>

        {/* Column headers — desktop only */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 mb-4 px-px" aria-hidden="true">
          {["Primitive Token", "", "Semantic Token", "", "UI Application"].map((label, i) => (
            <div key={i} className={`${i % 2 !== 0 ? "w-10" : ""}`}>
              {label && (
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-groovetop-navy/30 px-4">
                  {label}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Token rows */}
        <div className="space-y-4">
          {TOKEN_ROWS.map((row, i) => (
            <TokenRow key={row.semantic.name} row={row} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Supporting copy */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-14 p-8 rounded-2xl bg-groovetop-navy text-center"
        >
          <p className="text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            Groovetop DS v1 expanded the award-recognized prototype into a documented reusable system. The refinement preserved the original visual direction while adding structure, consistency, and handoff clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
