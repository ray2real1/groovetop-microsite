"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function AwardOutcome() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="award"
      aria-labelledby="award-heading"
      tabIndex={-1}
      className="py-section bg-groovetop-oat"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-10"
        >
          WGU Excellence Award Outcome
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-start">

          {/* Left — award copy */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
            className="space-y-8"
          >
            <h2
              id="award-heading"
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-groovetop-navy leading-tight"
            >
              WGU Excellence Award<br />
              <span className="text-groovetop-terracotta">May 2026</span>
            </h2>

            <div className="space-y-4">
              <p className="text-base text-groovetop-navy/65 leading-relaxed max-w-xl">
                This WGU UX Design mobile app assignment received a WGU Excellence Award in May 2026 for exemplary work in Prototyping and Iterating II, Task 2. The certificate was signed by Kirk A. Welter, Vice President, Evaluation Operations.
              </p>
              <p className="text-sm text-groovetop-navy/60 leading-relaxed max-w-xl">
                The award recognized the quality of the original prototype. The subsequent design system work — Groovetop DS v1 — was a self-directed refinement, not part of the original assignment evaluation.
              </p>
            </div>

            {/* Award details */}
            <dl className="space-y-4">
              {[
                { label: "Award",       value: "WGU Excellence Award" },
                { label: "Course",      value: "Prototyping and Iterating II, Task 2" },
                { label: "Date",        value: "May 2026" },
                { label: "Signatory",   value: "Kirk A. Welter, Vice President, Evaluation Operations" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 pb-4 border-b border-groovetop-navy/6 last:border-0">
                  <dt className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/35 w-24 flex-shrink-0 pt-0.5">
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold text-groovetop-navy/70">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right — real WGU Excellence Award certificate */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <div className="rounded-2xl border border-groovetop-navy/10 bg-white overflow-hidden shadow-md">
              {/* Certificate image — landscape 2400×1854px */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "2400 / 1854" }}>
                <Image
                  src="/assets/groovetop/certificate/wgu-excellence-award.png"
                  alt="WGU Excellence Award certificate for Raymond Merrill II, Prototyping and Iterating II, Task 2, May 2026."
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) calc(100vw - 48px), 460px"
                />
              </div>

              {/* PDF proof link */}
              <div className="px-5 py-3.5 border-t border-groovetop-navy/8 flex items-center justify-between">
                <p className="text-[10px] font-medium text-groovetop-navy/50">
                  WGU Excellence Award · May 2026
                </p>
                <a
                  href="/assets/groovetop/certificate/wgu-excellence-award.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-groovetop-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-groovetop-blue"
                  aria-label="View WGU Excellence Award certificate PDF, opens in new tab"
                >
                  View certificate PDF
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 8L8 2M4 2h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
