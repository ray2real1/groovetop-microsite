"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ProblemGoal() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-labelledby="problem-heading"
      className="py-section bg-groovetop-oat"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-10"
        >
          Problem + Goal
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem */}
          <motion.article
            initial={shouldReduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            aria-labelledby="problem-heading"
            className="rounded-2xl bg-groovetop-navy p-8 lg:p-10 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
                  <path d="M8 5v3M8 10.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 id="problem-heading" className="text-xs font-bold tracking-[0.15em] uppercase text-white/40">
                The Problem
              </h2>
            </div>
            <p className="text-lg font-semibold text-white leading-relaxed text-balance">
              Pet adoption browsing can feel fragmented and emotionally overloaded. Users need a calm, mobile-first way to browse, compare, save favorites, view details, and schedule a visit without friction.
            </p>
          </motion.article>

          {/* Goal */}
          <motion.article
            initial={shouldReduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            aria-labelledby="goal-heading"
            className="rounded-2xl bg-white border border-groovetop-navy/8 p-8 lg:p-10 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-groovetop-green/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="#2EAD8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 id="goal-heading" className="text-xs font-bold tracking-[0.15em] uppercase text-groovetop-navy/40">
                The Goal
              </h3>
            </div>
            <p className="text-lg font-semibold text-groovetop-navy leading-relaxed text-balance">
              Create a warm, simple dog adoption experience that helps users move from discovery to decision with confidence.
            </p>

            {/* Primary flows */}
            <div className="pt-4 space-y-2.5 border-t border-groovetop-navy/8">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/35 mb-3">
                Primary Flows
              </p>
              {[
                "Browse → Pet Profile → Schedule Visit → Confirmation",
                "Browse → Save Pet → Saved Pets",
                "Preferences → Adjust criteria → Return to Browse",
              ].map((flow) => (
                <div key={flow} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-groovetop-terracotta mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-groovetop-navy/60 font-medium">{flow}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
