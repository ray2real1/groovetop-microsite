"use client";

import { motion, useReducedMotion } from "framer-motion";

const PROOF_CARDS = [
  {
    number: "452",
    label:  "Color Token Bindings",
    note:   "Applied across all 6 original screens",
    color:  "text-groovetop-terracotta",
  },
  {
    number: "63",
    label:  "Text Style Applications",
    note:   "10 text styles, 63 applied instances",
    color:  "text-groovetop-blue",
  },
  {
    number: "25/28",
    label:  "Semantic Tokens Referenced",
    note:   "3 defined but not yet surfaced in current screens",
    color:  "text-groovetop-green",
  },
  {
    number: "6",
    label:  "Token-Connected Screens",
    note:   "390×844px · visual identity preserved throughout",
    color:  "text-white/70",
  },
];

export default function SystemApplication() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-labelledby="system-application-heading"
      className="py-section bg-groovetop-navy"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4">
            System Application
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="system-application-heading"
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-white"
            >
              Applied back to every screen
            </h2>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed lg:text-right">
              Token consistency and visual preservation were prioritized. Component replacement was not forced where it would compromise layout fidelity.
            </p>
          </div>
        </motion.div>

        {/* Proof cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PROOF_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={shouldReduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-6 space-y-2"
            >
              <p className={`text-[clamp(2rem,4vw,2.5rem)] font-extrabold leading-none tracking-tight ${card.color}`}>
                {card.number}
              </p>
              <p className="text-sm font-semibold text-white">{card.label}</p>
              <p className="text-xs text-white/60 leading-relaxed">{card.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Body copy */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/8 bg-white/5 p-8 max-w-3xl"
        >
          <p className="text-base text-white/65 leading-relaxed">
            After building Groovetop DS v1, the system was applied back to the original six screens. Component replacement was not forced where it would damage layout fidelity; token consistency and visual preservation were prioritized.
          </p>
          <p className="text-sm text-white/55 leading-relaxed mt-4">
            Groovetop DS v1 was created after the Excellence Award to systematize the existing visual direction — not replace it. Extracted directly from the prototype screens and structured into reusable tokens, styles, and components without introducing new visual language.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
