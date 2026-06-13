"use client";

import { motion, useReducedMotion } from "framer-motion";

const TIMELINE_STEPS = [
  {
    phase:  "Origin",
    title:  "Original WGU Prototype",
    note:   "iOS dog adoption mobile app designed as a WGU UX Design assignment.",
    accent: "#618FED",
  },
  {
    phase:  "Recognition",
    title:  "WGU Excellence Award",
    note:   "Received in May 2026 for Prototyping and Iterating II, Task 2.",
    accent: "#C96F53",
    highlight: true,
  },
  {
    phase:  "System",
    title:  "Groovetop DS v1",
    note:   "Post-award design system documentation begins.",
    accent: "#2EAD8C",
  },
  {
    phase:  "Tokens",
    title:  "Semantic Tokens + Typography",
    note:   "68 tokens across 4 collections. 10 text styles defined and applied.",
    accent: "#618FED",
  },
  {
    phase:  "Components",
    title:  "Component Sets + Variants",
    note:   "5 component sets. 23 variants. 9 editable properties wired.",
    accent: "#C96F53",
  },
  {
    phase:  "Application",
    title:  "Token-Connected Screens",
    note:   "452 color bindings and 63 text style applications across all 6 screens.",
    accent: "#2EAD8C",
  },
  {
    phase:  "Portfolio",
    title:  "Portfolio-Ready Case Study",
    note:   "Documented and presented as a recruiter-facing artifact.",
    accent: "#1B2A4A",
  },
];

export default function PostAwardTimeline() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-labelledby="timeline-heading"
      className="py-section bg-white"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4">
            Post-Award Refinement
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="timeline-heading"
              className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-tight text-groovetop-navy"
            >
              From award recognition to documented system
            </h2>
            <p className="text-sm text-groovetop-navy/60 max-w-xs leading-relaxed">
              Self-directed refinement beyond the assignment scope. Craft, systems thinking, and professional initiative.
            </p>
          </div>
        </motion.div>

        {/* Timeline — desktop horizontal, mobile vertical */}
        <div className="relative">

          {/* Desktop horizontal connector line */}
          <div
            className="hidden lg:block absolute top-[28px] left-0 right-0 h-px bg-groovetop-navy/8"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-4">
            {TIMELINE_STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="relative flex lg:flex-col gap-4 lg:gap-3"
              >
                {/* Node */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 ${
                      step.highlight
                        ? "bg-groovetop-terracotta border-groovetop-terracotta shadow-lg shadow-groovetop-terracotta/20"
                        : "bg-white border-groovetop-navy/12"
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`text-[10px] font-bold text-center leading-tight px-1 ${
                        step.highlight ? "text-white" : "text-groovetop-navy/40"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1 flex-1 lg:pt-1">
                  <p
                    className="text-[9px] font-bold tracking-[0.15em] uppercase"
                    style={{ color: step.accent }}
                  >
                    {step.phase}
                  </p>
                  <p className={`text-xs font-bold leading-snug ${step.highlight ? "text-groovetop-terracotta" : "text-groovetop-navy"}`}>
                    {step.title}
                  </p>
                  <p className="text-[10px] text-groovetop-navy/45 leading-relaxed">{step.note}</p>
                </div>

                {/* Mobile connector */}
                {i < TIMELINE_STEPS.length - 1 && (
                  <div
                    className="lg:hidden absolute left-7 top-14 bottom-0 w-px bg-groovetop-navy/8"
                    aria-hidden="true"
                    style={{ top: "56px", height: "calc(100% - 56px + 24px)" }}
                  />
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
