"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const CHIPS = [
  "WGU UX Project",
  "Excellence Award · May 2026",
  "Groovetop DS v1",
  "Mobile UX",
  "Design Systems",
];

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen bg-groovetop-navy flex flex-col justify-center overflow-x-hidden"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(99,143,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-content mx-auto px-6 lg:px-10 w-full py-32 lg:py-0 lg:pt-20 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] gap-16 lg:gap-20 items-center w-full">

          {/* LEFT — copy */}
          <div className="space-y-8 lg:space-y-10">
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-xs font-bold tracking-[0.2em] uppercase text-groovetop-terracotta"
            >
              WGU Excellence Award Case Study
            </motion.p>

            {/* Title */}
            <motion.h1
              id="hero-title"
              {...fadeUp(0.2)}
              className="text-[clamp(3rem,5.5vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white text-balance"
            >
              Groovetop<br />Dog App
            </motion.h1>

            {/* Positioning line */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-base lg:text-lg text-white/60 leading-relaxed max-w-md font-medium"
            >
              An award-recognized WGU UX prototype refined into Groovetop DS v1 — a documented design system and scalable mobile app concept study.
            </motion.p>

            {/* Support copy */}
            <motion.p
              {...fadeUp(0.38)}
              className="text-sm text-white/45 leading-relaxed max-w-sm"
            >
              A mobile dog adoption experience transformed from an academic prototype into a structured design system with reusable components, semantic tokens, editable properties, and token-connected screens.
            </motion.p>

            {/* Chips */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border border-white/15 text-white/60 bg-white/5 backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.52)} className="flex flex-wrap gap-3">
              <a
                href="/assets/groovetop/Raymond-Merrill-II-Groovetop-Dog-App-UX-Case-Study.pdf"
                download
                aria-label="Download the Groovetop case study PDF"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-groovetop-terracotta text-white text-sm font-bold hover:bg-[#b5623b] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white"
              >
                Download Case Study PDF
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v8M3 8l4 4 4-4M2 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#design-system"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("design-system");
                  if (el) { el.scrollIntoView({ behavior: "smooth" }); }
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/25 text-white/80 text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Jump to Design System
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 2l5 5-5 5M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — real screen cluster */}
          <div
            aria-label="Three Groovetop app screens: Browse Pets, Pet Profile, and Saved Pets"
            className="relative flex items-center justify-center h-[520px] lg:h-[620px]"
          >
            {/* Behind-left: Browse Pets */}
            <motion.div
              className="absolute left-0 top-8 lg:top-12 z-0"
              initial={shouldReduce ? false : { opacity: 0, y: 30, rotate: -6 }}
              animate={{ opacity: 0.7, y: 0, rotate: -6 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-[180px] h-[320px] lg:w-[200px] lg:h-[360px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/assets/groovetop/screens/browse-pets.png"
                  alt="Browse Pets screen showing Groovetop search, filters, pet cards, and bottom navigation."
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                />
              </div>
            </motion.div>

            {/* Center/front: Pet Profile */}
            <motion.div
              className="relative z-20"
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-[220px] h-[400px] lg:w-[250px] lg:h-[460px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/assets/groovetop/screens/pet-profile.png"
                  alt="Pet Profile screen for Biscuit with availability, shelter details, adoption fee, and visit CTA."
                  fill
                  className="object-cover object-top"
                  sizes="250px"
                  priority
                />
              </div>
            </motion.div>

            {/* Behind-right: Saved Pets */}
            <motion.div
              className="absolute right-0 top-8 lg:top-12 z-0"
              initial={shouldReduce ? false : { opacity: 0, y: 30, rotate: 6 }}
              animate={{ opacity: 0.7, y: 0, rotate: 6 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-[180px] h-[320px] lg:w-[200px] lg:h-[360px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/assets/groovetop/screens/saved-pets.png"
                  alt="Saved Pets screen showing Biscuit saved as a favorite pet."
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={shouldReduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          animate={shouldReduce ? {} : { scaleY: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
