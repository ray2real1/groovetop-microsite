"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, STAGGER_STEP } from "@/lib/motion";

const LEDGER = [
  { number: "452",   label: "Color token bindings", note: "applied across all 6 original screens", color: "text-groovetop-terracotta" },
  { number: "63",    label: "Text style applications", note: "10 text styles, 63 applied instances", color: "text-groovetop-blue" },
  { number: "25/28", label: "Semantic tokens referenced", note: "3 defined but not yet surfaced", color: "text-groovetop-green" },
  { number: "6",     label: "Token-connected screens", note: "390×844px · visual identity preserved", color: "text-white" },
];

export default function SystemApplication() {
  const shouldReduce = useReducedMotion();

  return (
    <section aria-labelledby="system-application-heading" className="py-section bg-groovetop-navy overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4">
            System Application
          </p>
          <h2 id="system-application-heading" className="text-display-lg font-extrabold tracking-tight text-white max-w-2xl">
            The system, applied back to the product
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Narrative */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="space-y-5"
          >
            <p className="text-lg text-white/75 leading-relaxed">
              After building Groovetop DS v1, the system was applied back to the original six screens — not bolted on for show. Token consistency and visual preservation were prioritized; component replacement was never forced where it would compromise layout fidelity.
            </p>
            <p className="text-sm text-white/55 leading-relaxed">
              Groovetop DS v1 was created after the Excellence Award to systematize the existing visual direction — not replace it. It was extracted directly from the prototype screens and structured into reusable tokens, styles, and components without introducing new visual language.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-terracotta">Result</span>
              <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/70">Every screen now resolves to the system.</span>
            </div>
          </motion.div>

          {/* Ledger */}
          <motion.dl
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] divide-y divide-white/10 overflow-hidden"
          >
            {LEDGER.map((row, i) => (
              <motion.div
                key={row.label}
                initial={shouldReduce ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * STAGGER_STEP, ease: EASE }}
                className="flex items-baseline gap-5 px-6 py-5"
              >
                <dd className={`text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-none tracking-tight tabular-nums w-28 flex-shrink-0 ${row.color}`}>
                  {row.number}
                </dd>
                <div>
                  <dt className="text-sm font-semibold text-white">{row.label}</dt>
                  <p className="text-xs text-white/55 leading-relaxed mt-0.5">{row.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
