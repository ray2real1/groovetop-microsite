"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, STAGGER_STEP } from "@/lib/motion";

type Stat = {
  number: string;
  suffix?: string;
  label: string;
  context: string;
  accent: string;
  feature?: boolean;
};

const FOUNDATION: Stat[] = [
  { number: "68", label: "Design Tokens", context: "across 4 collections", accent: "#618FED" },
  { number: "10", label: "Text Styles", context: "defined type ramp", accent: "#618FED" },
  { number: "25", suffix: "/28", label: "Semantic Tokens Active", context: "3 not yet surfaced", accent: "#618FED" },
];

const REUSE: Stat[] = [
  { number: "5",   label: "Component Sets", context: "real Figma sets", accent: "#C96F53" },
  { number: "23",  label: "Variants", context: "across 5 sets", accent: "#C96F53" },
  { number: "9",   label: "Editable Properties", context: "wired across sets", accent: "#C96F53" },
  { number: "452", label: "Color Token Bindings", context: "applied across all 6 screens", accent: "#C96F53", feature: true },
  { number: "63",  label: "Text Style Applications", context: "10 styles applied", accent: "#C96F53" },
  { number: "6",   label: "Token-Connected Screens", context: "390×844px", accent: "#2EAD8C" },
];

function Tile({ stat, index }: { stat: Stat; index: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * STAGGER_STEP, ease: EASE }}
      className={`rounded-2xl p-5 lg:p-6 ${
        stat.feature
          ? "bg-groovetop-terracotta/12 border-2 border-groovetop-terracotta"
          : "bg-white/[0.05] border border-white/10"
      }`}
    >
      <div className="flex items-baseline gap-1">
        <span
          className={`font-extrabold leading-none tracking-tight tabular-nums ${
            stat.feature
              ? "text-[clamp(2.75rem,5vw,3.75rem)] text-groovetop-terracotta"
              : "text-[clamp(2rem,3.6vw,3rem)] text-white"
          }`}
        >
          {stat.number}
        </span>
        {stat.suffix && (
          <span className="text-lg font-bold text-white/40 tabular-nums">{stat.suffix}</span>
        )}
      </div>
      <p className="mt-3 text-sm font-semibold text-white">{stat.label}</p>
      <p className="mt-1 text-xs text-white/50 leading-relaxed">{stat.context}</p>
      {!stat.feature && (
        <div className="mt-4 h-[3px] w-full rounded-full" style={{ background: stat.accent }} aria-hidden="true" />
      )}
    </motion.div>
  );
}

function GroupLabel({ children, n, total }: { children: React.ReactNode; n: string; total: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta">{children}</span>
      <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
      <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/35 tabular-nums">{n} / {total}</span>
    </div>
  );
}

export default function StatsStrip() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-groovetop-navy py-section-sm lg:py-section overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4">
            Design System · Proof Wall
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 id="stats-heading" className="text-display-md font-extrabold tracking-tight text-white">
              The system, by the numbers
            </h2>
            <p className="text-sm text-white/55 max-w-xs leading-relaxed lg:text-right">
              Not a number strip — an evidence wall. Every tile is a repeatable structure, not just a count.
            </p>
          </div>
        </motion.div>

        <div className="mb-12">
          <GroupLabel n="3" total="3">System Foundation</GroupLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FOUNDATION.map((stat, i) => (
              <Tile key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        <div>
          <GroupLabel n="6" total="6">Reuse &amp; Application</GroupLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REUSE.map((stat, i) => (
              <Tile key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        <motion.blockquote
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-14 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-xl lg:text-2xl font-semibold italic text-white/75 max-w-2xl mx-auto leading-snug text-balance">
            &ldquo;The value is not the count alone — it is the repeatable structure behind the UI.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
