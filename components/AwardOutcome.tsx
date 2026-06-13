"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const DETAILS = [
  { label: "Award",     value: "WGU Excellence Award" },
  { label: "Course",    value: "Prototyping and Iterating II, Task 2" },
  { label: "Date",      value: "May 2026" },
  { label: "Signatory", value: "Kirk A. Welter, Vice President, Evaluation Operations" },
];

export default function AwardOutcome() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="award" aria-labelledby="award-heading" tabIndex={-1} className="py-section bg-groovetop-oat">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-center gap-3 mb-10"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta">
            WGU Excellence Award Outcome
          </p>
          <span className="flex-1 h-px bg-groovetop-navy/10" aria-hidden="true" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start">
          {/* Award copy */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
            className="space-y-8"
          >
            <h2 id="award-heading" className="text-display-lg font-extrabold tracking-tight text-groovetop-navy leading-tight">
              WGU Excellence Award<br />
              <span className="text-groovetop-terracotta">May 2026</span>
            </h2>

            <div className="space-y-4">
              <p className="text-base text-groovetop-navy/65 leading-relaxed max-w-xl">
                This WGU UX Design mobile app assignment received a WGU Excellence Award in May 2026 for exemplary work in Prototyping and Iterating II, Task 2. The certificate was signed by Kirk A. Welter, Vice President, Evaluation Operations.
              </p>
              <p className="text-sm text-groovetop-navy/60 leading-relaxed max-w-xl border-l-2 border-groovetop-terracotta/40 pl-5">
                The award recognized the quality of the original prototype. The subsequent design system work — Groovetop DS v1 — was a self-directed refinement, not part of the original assignment evaluation.
              </p>
            </div>

            <dl className="space-y-4">
              {DETAILS.map(({ label, value }) => (
                <div key={label} className="flex gap-4 pb-4 border-b border-groovetop-navy/6 last:border-0">
                  <dt className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/35 w-24 flex-shrink-0 pt-0.5">
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold text-groovetop-navy/70">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Certificate — real artifact, uncropped */}
          <motion.figure
            initial={shouldReduce ? false : { opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="m-0"
          >
            <div className="rounded-2xl border border-groovetop-navy/10 bg-white overflow-hidden shadow-md">
              <div className="px-5 py-3 border-b border-groovetop-navy/8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-groovetop-terracotta" aria-hidden="true" />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/45">Verified certificate</span>
              </div>
              <div className="relative w-full overflow-hidden bg-white" style={{ aspectRatio: "2400 / 1854" }}>
                <Image
                  src="/assets/groovetop/certificate/wgu-excellence-award.png"
                  alt="WGU Excellence Award certificate for Raymond Merrill II, Prototyping and Iterating II, Task 2, May 2026."
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) calc(100vw - 48px), 480px"
                />
              </div>
              <figcaption className="px-5 py-3.5 border-t border-groovetop-navy/8 flex items-center justify-between">
                <span className="text-[10px] font-medium text-groovetop-navy/50">WGU Excellence Award · May 2026</span>
                <a
                  href="/assets/groovetop/certificate/wgu-excellence-award.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-groovetop-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-groovetop-blue"
                  aria-label="View WGU Excellence Award certificate PDF, opens in new tab"
                >
                  View certificate PDF
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 8L8 2M4 2h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
