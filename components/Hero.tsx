"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const META = [
  { label: "Role",    value: "UX, Visual, DS creator" },
  { label: "Context", value: "WGU UX Design project" },
  { label: "Award",   value: "Excellence Award · May 2026" },
  { label: "Course",  value: "Prototyping & Iterating II, T2" },
];

/* One staged screen in the hero exhibit. The outer motion layer handles the
   entrance (opacity + y); the inner frame holds the static depth transform so
   framer-motion and the perspective tilt never fight over `transform`. */
function StagedScreen({
  src,
  alt,
  positionClass,
  frameClass,
  delay,
  priority = false,
}: {
  src: string;
  alt: string;
  positionClass: string;
  frameClass: string;
  delay: number;
  priority?: boolean;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute ${positionClass}`}
      initial={shouldReduce ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      <div className={`relative overflow-hidden border border-white/15 bg-groovetop-navy shadow-2xl ${frameClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 180px, 230px"
          priority={priority}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[100dvh] bg-groovetop-navy flex items-center overflow-hidden"
    >
      {/* Cinematic ambient: off-center blue aurora + floor vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 52% 52% at 76% 32%, rgba(99,143,237,0.20) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }}
      />
      {/* Editorial frame */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute inset-4 lg:inset-6 border border-white/10 rounded-2xl pointer-events-none"
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-10 w-full pt-28 pb-24 lg:py-28">
        <div className="relative">
          {/* TITLE STAGE */}
          <div className="relative z-10 lg:max-w-[58%]">
            <motion.p
              {...fadeUp(0.12)}
              className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4"
            >
              WGU Excellence Award Case Study
            </motion.p>
            <motion.h1
              id="hero-title"
              {...fadeUp(0.2)}
              className="text-display-2xl font-extrabold text-white text-balance"
            >
              Groovetop<br />Dog&nbsp;App
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-7 text-base lg:text-lg text-white/60 leading-relaxed max-w-md font-medium"
            >
              An award-recognized WGU UX prototype refined into Groovetop DS v1, a documented design system and scalable mobile app concept study.
            </motion.p>

            {/* Metadata credit strip */}
            <motion.dl
              {...fadeUp(0.42)}
              className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 max-w-md border-t border-white/15 pt-5"
            >
              {META.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-[9px] font-semibold tracking-[0.14em] uppercase text-white/40">{label}</dt>
                  <dd className="text-[11px] font-medium text-white/80 mt-0.5">{value}</dd>
                </div>
              ))}
            </motion.dl>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="/assets/groovetop/Raymond-Merrill-II-Groovetop-Dog-App-UX-Case-Study.pdf"
                download
                aria-label="Download the Groovetop case study PDF"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-groovetop-terracotta text-white text-sm font-bold hover:bg-[#b5623b] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white"
              >
                Download Case Study PDF
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v8M3 8l4 4 4-4M2 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#design-system"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("design-system");
                  if (el) el.scrollIntoView({ behavior: shouldReduce ? "auto" : "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/25 text-white/80 text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Jump to Design System
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 2l5 5-5 5M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* SCREEN EXHIBIT — real Groovetop screens, dimensionally staged */}
          <div
            aria-label="Three Groovetop app screens: Browse Pets, Pet Profile, and Saved Pets"
            className="relative mt-14 lg:mt-0 mx-auto lg:mx-0 w-full max-w-[340px] h-[400px] lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:w-[440px] lg:h-[580px] lg:max-w-none"
          >
            {/* Backlight + grounding shadow */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(99,143,237,0.16) 0%, transparent 70%)" }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[280px] h-10 rounded-[50%] blur-2xl"
                style={{ background: "rgba(0,0,0,0.45)" }}
              />
            </div>

            {/* Behind-left: Browse Pets */}
            <StagedScreen
              src="/assets/groovetop/screens/browse-pets.png"
              alt="Browse Pets screen showing Groovetop search, filters, pet cards, and bottom navigation."
              positionClass="left-0 top-[8%] w-[140px] lg:w-[165px] z-10"
              frameClass="w-full aspect-[9/19] rounded-[1.75rem] opacity-60 [transform:rotate(-11deg)]"
              delay={0.55}
            />

            {/* Behind-right: Saved Pets */}
            <StagedScreen
              src="/assets/groovetop/screens/saved-pets.png"
              alt="Saved Pets screen showing Biscuit saved as a favorite pet."
              positionClass="right-0 bottom-[6%] w-[140px] lg:w-[165px] z-10"
              frameClass="w-full aspect-[9/19] rounded-[1.75rem] opacity-60 [transform:rotate(10deg)]"
              delay={0.6}
            />

            {/* Center/front: Pet Profile — the hero device */}
            <StagedScreen
              src="/assets/groovetop/screens/pet-profile.png"
              alt="Pet Profile screen for Biscuit with availability, shelter details, adoption fee, and visit CTA."
              positionClass="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] lg:w-[220px] z-20"
              frameClass="w-full aspect-[9/19] rounded-[2.25rem] border-white/25 shadow-[0_34px_64px_rgba(0,0,0,0.55)] lg:[transform:perspective(1200px)_rotateY(-14deg)_rotate(-2deg)]"
              delay={0.4}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
