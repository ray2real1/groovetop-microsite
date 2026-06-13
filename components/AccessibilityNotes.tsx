"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, STAGGER_STEP } from "@/lib/motion";

const CONSIDERATIONS = [
  { title: "Clear visual hierarchy", note: "Type scale and weight contrast create natural scanning order without relying on color alone.", status: "implemented" },
  { title: "Readable card structure", note: "Card-based layout groups related information and reduces the cognitive overhead of dense list views.", status: "implemented" },
  { title: "Large mobile tap targets", note: "Primary CTAs and nav items are sized for comfortable thumb reach on 390px mobile viewports.", status: "implemented" },
  { title: "Persistent bottom navigation", note: "Key destinations remain reachable at all times without scroll or back-navigation.", status: "implemented" },
  { title: "Status badges — color + label", note: "Availability states are never communicated by color alone. Text labels accompany every color indicator.", status: "implemented" },
  { title: "Restrained motion", note: "Transitions are subtle and purposeful. No autoplay, no scroll-jacking, no looping animations.", status: "implemented" },
  { title: "Color contrast review", note: "A full WCAG contrast audit has not been formally completed. This is an identified future priority.", status: "future" },
  { title: "Screen-reader annotation", note: "Component annotations for screen-reader behavior and ARIA roles are planned but not yet completed.", status: "future" },
];

const STATUS_STYLES = {
  implemented: { dot: "bg-groovetop-green", badge: "text-groovetop-green bg-groovetop-green/10 border-groovetop-green/20", label: "Implemented" },
  future:      { dot: "bg-groovetop-navy/25", badge: "text-groovetop-navy/40 bg-groovetop-navy/5 border-groovetop-navy/10", label: "Future Priority" },
};

export default function AccessibilityNotes() {
  const shouldReduce = useReducedMotion();

  return (
    <section aria-labelledby="a11y-heading" className="py-section bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta">Accessibility + Usability</p>
            <span className="flex-1 h-px bg-groovetop-navy/10" aria-hidden="true" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 id="a11y-heading" className="text-display-md font-extrabold tracking-tight text-groovetop-navy">
              Practical considerations, honestly stated
            </h2>
            <p className="text-sm text-groovetop-navy/65 max-w-xs leading-relaxed">
              No formal WCAG compliance claimed. No completed validation. This is a design-layer assessment.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONSIDERATIONS.map((item, i) => {
            const style = STATUS_STYLES[item.status as keyof typeof STATUS_STYLES];
            return (
              <motion.div
                key={item.title}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * STAGGER_STEP, ease: EASE }}
                className="rounded-2xl border border-groovetop-navy/8 bg-groovetop-oat p-6 lg:p-8 space-y-3.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${style.dot}`} aria-hidden="true" />
                  <span className={`text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full border ${style.badge}`}>
                    {style.label}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-groovetop-navy leading-snug">{item.title}</p>
                  <p className="text-[11px] text-groovetop-navy/50 leading-relaxed">{item.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
