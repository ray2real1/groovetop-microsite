"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

function StatItem({ number, label, suffix }: { number: string; label: string; suffix?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline gap-1">
        <span className="text-[clamp(2.25rem,3.6vw,3.25rem)] font-extrabold tracking-tight text-groovetop-navy leading-none tabular-nums">
          {number}
        </span>
        {suffix && (
          <span className="text-base font-bold text-groovetop-navy/40 tabular-nums">{suffix}</span>
        )}
      </div>
      <span className="text-[11px] font-semibold tracking-[0.08em] text-groovetop-navy/50 uppercase">
        {label}
      </span>
    </div>
  );
}

/* Hairline matrix — vertical + horizontal strokes at 8% navy, desktop only.
   Anchors the numbers to a regular rhythm without boxing them in. */
function cellRules(index: number, cols: number): string {
  const isLeftEdge = index % cols === 0;
  const isTopRow = index < cols;
  return [
    !isLeftEdge ? "lg:border-l lg:border-groovetop-navy/[0.08]" : "",
    !isTopRow ? "lg:border-t lg:border-groovetop-navy/[0.08]" : "",
  ].join(" ");
}

const CLUSTER_A = [
  { number: "68", label: "Design Tokens" },
  { number: "10", label: "Text Styles" },
  { number: "25", suffix: "/28", label: "Semantic Tokens Active" },
];

const CLUSTER_B = [
  { number: "5",   label: "Component Sets" },
  { number: "23",  label: "Variants" },
  { number: "9",   label: "Editable Properties" },
  { number: "452", label: "Color Bindings" },
  { number: "63",  label: "Style Apps" },
  { number: "6",   label: "Connected Screens" },
];

export default function StatsStrip() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-groovetop-oat border-y border-groovetop-navy/8 py-16 lg:py-20"
    >
      <h2 id="stats-heading" className="sr-only">Design system metrics</h2>

      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)] gap-12 lg:gap-20">

          {/* Cluster A — System Foundation */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-6">
              System Foundation
            </p>
            <div className="grid grid-cols-3">
              {CLUSTER_A.map((stat, i) => (
                <div key={stat.label} className={`py-1 lg:px-5 lg:first:pl-0 ${cellRules(i, 3)}`}>
                  <StatItem {...stat} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cluster B — Reuse + Application */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-6">
              Reuse &amp; Application
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-0">
              {CLUSTER_B.map((stat, i) => (
                <div key={stat.label} className={`py-1 lg:px-5 lg:py-5 ${cellRules(i, 3)}`}>
                  <StatItem {...stat} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interpretive line */}
        <motion.blockquote
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mt-16 pt-10 border-t border-groovetop-navy/10 text-center"
        >
          <p className="text-xl lg:text-2xl font-semibold italic text-groovetop-navy/70 max-w-2xl mx-auto leading-snug text-balance">
            &ldquo;The value is not the count alone — it is the repeatable structure behind the UI.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
