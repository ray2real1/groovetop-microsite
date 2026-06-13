"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, STAGGER_STEP } from "@/lib/motion";

const SCREENS = [
  {
    number: "01",
    title: "Browse Pets",
    src:   "/assets/groovetop/screens/browse-pets.png",
    alt:   "Browse Pets screen showing Groovetop search, filters, pet cards, and bottom navigation.",
    purpose: "Entry point for discovery — users scan available dogs at a glance.",
    uxDecision: "Led with a scannable card list over a dense table so availability reads in a single pass, not a sequence of taps.",
    systemNote: "Pet Card, Badge, and Search Bar components render here; Bottom Nav holds Browse as the active state.",
  },
  {
    number: "02",
    title: "Pet Profile",
    src:   "/assets/groovetop/screens/pet-profile.png",
    alt:   "Pet Profile screen for Biscuit with availability, shelter details, adoption fee, and visit CTA.",
    purpose: "Full detail view — name, breed, age, characteristics, and primary CTA.",
    uxDecision: "Prioritized pet details and shelter context above the visit CTA to reduce decision friction before asking for commitment.",
    systemNote: "Uses color.cta.primary, color.surface.card, and status-badge semantics to hold hierarchy and action clarity.",
  },
  {
    number: "03",
    title: "Schedule Visit",
    src:   "/assets/groovetop/screens/schedule-visit.png",
    alt:   "Schedule Visit screen showing calendar selection and available visit times.",
    purpose: "Time-slot selection before committing to an adoption visit.",
    uxDecision: "Differentiated available from unavailable slots visually so the booking state is never ambiguous at a glance.",
    systemNote: "color.status.available and terracotta unavailable tones are pulled from semantic tokens, not one-off fills.",
  },
  {
    number: "04",
    title: "Confirmation",
    src:   "/assets/groovetop/screens/confirmation.png",
    alt:   "Visit Confirmation screen showing confirmed visit details for Biscuit.",
    purpose: "Positive reinforcement — visit booked, next steps surfaced.",
    uxDecision: "Closed the loop with a single, unambiguous success state and explicit next steps so the flow never dead-ends.",
    systemNote: "color.brand.primary drives the confirmation marker; the Button component handles both next-step actions.",
  },
  {
    number: "05",
    title: "Preferences",
    src:   "/assets/groovetop/screens/preferences.png",
    alt:   "Preferences screen showing pet type, age range, living situation, and adoption notes.",
    purpose: "User-controlled filtering — breed, size, energy level, and more.",
    uxDecision: "Chose chip-based selection over nested menus so criteria stay scannable, reversible, and low-commitment.",
    systemNote: "Interactive background tokens style chip selection; the grid follows the shared spacing scale.",
  },
  {
    number: "06",
    title: "Saved Pets",
    src:   "/assets/groovetop/screens/saved-pets.png",
    alt:   "Saved Pets screen showing Biscuit saved as a favorite pet.",
    purpose: "Saved dog list — lets users return to bookmarked pets and continue their decision at any time.",
    uxDecision: "Kept Saved one tap away in the Bottom Nav so users can park a decision and return without losing context.",
    systemNote: "Pet Card 'Saved' variant is reused throughout; Bottom Nav holds Saved as the active state.",
  },
];

function ScreenCard({ screen, index }: { screen: typeof SCREENS[0]; index: number }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * STAGGER_STEP, ease: EASE }}
      aria-labelledby={`screen-title-${index}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-groovetop-navy/8 hover:shadow-xl hover:shadow-groovetop-navy/5 hover:border-groovetop-navy/12 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Real screen image */}
      <div className="relative w-full bg-[#FAF7F1] overflow-hidden" style={{ aspectRatio: "390/620" }}>
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          className="object-contain object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Screen number chip */}
        <span
          className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.2em] uppercase bg-groovetop-navy text-white px-2.5 py-1 rounded-full z-10"
          aria-hidden="true"
        >
          {screen.number}
        </span>
      </div>

      {/* Card content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div>
          <h3
            id={`screen-title-${index}`}
            className="text-base font-bold text-groovetop-navy mb-1"
          >
            {screen.title}
          </h3>
          <p className="text-sm text-groovetop-navy/60 leading-relaxed">{screen.purpose}</p>
        </div>

        <div className="space-y-3 flex-1">
          <div>
            <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/35 mb-1">
              Key UX Decision
            </p>
            <p className="text-xs text-groovetop-navy/55 leading-relaxed">{screen.uxDecision}</p>
          </div>
          <div className="p-3 rounded-xl bg-groovetop-oat border border-groovetop-navy/6">
            <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-groovetop-terracotta mb-1">
              Design System Implementation
            </p>
            <p className="text-xs text-groovetop-navy/55 leading-relaxed">{screen.systemNote}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ScreenGallery() {
  return (
    <section
      id="screens"
      aria-labelledby="screens-heading"
      tabIndex={-1}
      className="py-section bg-groovetop-oat"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-3">
              Six Screens
            </p>
            <h2
              id="screens-heading"
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-groovetop-navy"
            >
              The adoption experience
            </h2>
          </div>
          <p className="text-sm text-groovetop-navy/45 max-w-xs leading-relaxed">
            390×844px screens. Each token-connected and component-referenced against Groovetop DS v1.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCREENS.map((screen, i) => (
            <ScreenCard key={screen.title} screen={screen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
