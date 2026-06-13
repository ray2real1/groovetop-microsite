"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const SKILLS = [
  "Mobile UX Design",
  "Visual Design Judgment",
  "Figma Systems Thinking",
  "Component System Structure",
  "Academic-to-Portfolio Refinement",
];

const PROVES = [
  "Mobile UX judgment",
  "Visual design discipline",
  "Figma systems thinking",
  "Token + component structure",
  "Refining academic work into a portfolio-grade artifact",
];

const NOT_PROVES = [
  "Live product adoption",
  "Production user metrics",
  "Client-validated market outcomes",
];

export default function FinalCTA() {
  const shouldReduce = useReducedMotion();

  return (
    <section aria-labelledby="final-cta-heading" className="py-section bg-groovetop-oat">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        {/* Feature-close statement card */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-groovetop-navy px-7 py-14 lg:px-16 lg:py-20 text-center"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(99,143,237,0.18), transparent 70%)" }}
          />
          <div className="relative max-w-2xl mx-auto space-y-7">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta">
              Recruiter Takeaway
            </p>
            <h2 id="final-cta-heading" className="text-display-lg font-extrabold tracking-tight text-white leading-tight text-balance">
              What this project demonstrates
            </h2>
            <p className="text-base lg:text-lg text-white/65 leading-relaxed text-balance">
              Mobile UX design, visual design judgment, Figma systems thinking, component system structure, and the ability to refine academic work into a portfolio-grade product artifact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="/assets/groovetop/Raymond-Merrill-II-Groovetop-Dog-App-UX-Case-Study.pdf"
                download
                aria-label="Download the full Groovetop case study PDF"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-groovetop-terracotta text-white text-sm font-bold hover:bg-[#b5623b] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white"
              >
                Download Full Case Study PDF
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v8M3 8l4 4 4-4M2 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:ray2real1@gmail.com"
                aria-label="Contact Raymond Merrill II by email"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white/85 text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Contact Raymond
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust block — claim-safe scope framing */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-groovetop-green/20 bg-groovetop-green/[0.06] p-6">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-green mb-4">What this proves</p>
            <ul className="space-y-2.5">
              {PROVES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-groovetop-navy/70 leading-snug">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#2EAD8C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-groovetop-navy/10 bg-white p-6">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/40 mb-4">What it does not prove</p>
            <ul className="space-y-2.5">
              {NOT_PROVES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-groovetop-navy/65 leading-snug">
                  <span className="mt-2 h-px w-3 flex-shrink-0 bg-groovetop-navy/40" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Skills chips */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="text-xs font-semibold px-4 py-2 rounded-full border border-groovetop-navy/12 text-groovetop-navy/60 bg-white"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
