"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, STAGGER_STEP } from "@/lib/motion";

const TIMELINE_STEPS = [
  { phase: "Origin",      title: "Original WGU Prototype",        note: "iOS dog adoption mobile app designed as a WGU UX Design assignment.",       accent: "#618FED" },
  { phase: "Recognition", title: "WGU Excellence Award",          note: "Received in May 2026 for Prototyping and Iterating II, Task 2.",            accent: "#C96F53", highlight: true },
  { phase: "System",      title: "Groovetop DS v1",               note: "Post-award design system documentation begins.",                          accent: "#2EAD8C" },
  { phase: "Tokens",      title: "Semantic Tokens + Typography",  note: "68 tokens across 4 collections. 10 text styles defined and applied.",      accent: "#618FED" },
  { phase: "Components",  title: "Component Sets + Variants",     note: "5 component sets. 23 variants. 9 editable properties wired.",              accent: "#C96F53" },
  { phase: "Application", title: "Token-Connected Screens",       note: "452 color bindings and 63 text style applications across all 6 screens.",  accent: "#2EAD8C" },
  { phase: "Portfolio",   title: "Portfolio-Ready Case Study",    note: "Documented and presented as a recruiter-facing artifact.",                accent: "#1B2A4A" },
];

export default function PostAwardTimeline() {
  const shouldReduce = useReducedMotion();

  return (
    <section aria-labelledby="timeline-heading" className="py-section bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-14"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 id="timeline-heading" className="text-display-md font-extrabold tracking-tight text-groovetop-navy">
              From award recognition to documented system
            </h2>
            <p className="text-sm text-groovetop-navy/60 max-w-xs leading-relaxed">
              Self-directed refinement beyond the assignment scope: craft, systems thinking, and professional initiative.
            </p>
          </div>
        </motion.div>

        <ol className="relative max-w-3xl">
          {/* Spine */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-groovetop-navy/10" aria-hidden="true" />

          {TIMELINE_STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={shouldReduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * STAGGER_STEP, ease: EASE }}
              className="relative flex gap-6 pb-9 last:pb-0"
            >
              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-2 ${
                    step.highlight
                      ? "bg-groovetop-terracotta border-groovetop-terracotta shadow-lg shadow-groovetop-terracotta/20"
                      : "bg-white border-groovetop-navy/12"
                  }`}
                  aria-hidden="true"
                >
                  <span className={`text-xs font-extrabold tabular-nums ${step.highlight ? "text-white" : "text-groovetop-navy/40"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <p className="text-[9px] font-bold tracking-[0.15em] uppercase mb-1" style={{ color: step.accent }}>
                  {step.phase}
                </p>
                <p className={`text-base font-bold leading-snug ${step.highlight ? "text-groovetop-terracotta" : "text-groovetop-navy"}`}>
                  {step.title}
                </p>
                <p className="text-sm text-groovetop-navy/50 leading-relaxed mt-1 max-w-xl">{step.note}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
