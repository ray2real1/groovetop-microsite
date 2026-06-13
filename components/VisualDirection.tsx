"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, STAGGER_STEP } from "@/lib/motion";

const PALETTE = [
  { name: "Deep Navy",        hex: "#1B2A4A", token: "Global Navy",        role: "Trust, structure, text",          textColor: "text-white" },
  { name: "Terracotta",       hex: "#C96F53", token: "Global Terracotta",  role: "Warmth, CTAs, accents",           textColor: "text-white" },
  { name: "Oat Cream",        hex: "#FAF7F1", token: "Global Oat",         role: "Calm background surfaces",        textColor: "text-groovetop-navy", border: true },
  { name: "White",            hex: "#FFFFFF", token: "Global White",       role: "Clean cards",                     textColor: "text-groovetop-navy", border: true },
  { name: "Success Green",    hex: "#2EAD8C", token: "Global Success",     role: "Availability, positive states",   textColor: "text-white" },
  { name: "Interactive Blue", hex: "#618FED", token: "Global Interactive", role: "Secondary links, focus states",   textColor: "text-white" },
];

export default function VisualDirection() {
  const shouldReduce = useReducedMotion();

  return (
    <section aria-labelledby="visual-direction-heading" className="py-section bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-center gap-3 mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta">Visual Direction</p>
          <span className="flex-1 h-px bg-groovetop-navy/10" aria-hidden="true" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="space-y-6"
          >
            <h2 id="visual-direction-heading" className="text-display-md font-extrabold tracking-tight text-groovetop-navy leading-tight">
              Nordic Warm
            </h2>
            <p className="text-base text-groovetop-navy/60 leading-relaxed max-w-md">
              The color palette balances cold Nordic structure with warm domestic comfort — the emotional register of a trusted, calm, modern adoption experience.
            </p>
            <p className="text-sm text-groovetop-navy/60 leading-relaxed max-w-md">
              Each color plays a specific semantic role, applied consistently through Groovetop DS v1 tokens rather than as one-off style decisions.
            </p>
            <div className="p-5 rounded-2xl bg-groovetop-oat border border-groovetop-navy/8 space-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-navy/35">Art Direction Principle</p>
              <p className="text-sm text-groovetop-navy/65 leading-relaxed">
                Warm enough to feel personal. Structured enough to feel trustworthy. Never clinical, never chaotic.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            role="list"
            aria-label="Groovetop color palette"
          >
            {PALETTE.map((color, i) => (
              <motion.div
                key={color.name}
                role="listitem"
                initial={shouldReduce ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * STAGGER_STEP, ease: EASE }}
                whileHover={shouldReduce ? {} : { y: -3 }}
                className="rounded-2xl overflow-hidden border border-groovetop-navy/8 shadow-sm"
              >
                <div
                  className={`h-20 flex items-end p-3 ${color.border ? "border-b border-groovetop-navy/10" : ""}`}
                  style={{ background: color.hex }}
                  aria-hidden="true"
                >
                  <span className={`text-[9px] font-mono font-bold ${color.textColor} opacity-70`}>{color.hex}</span>
                </div>
                <div className="p-3 bg-white space-y-0.5">
                  <p className="text-xs font-bold text-groovetop-navy">{color.name}</p>
                  <p className="text-[10px] text-groovetop-navy/40 font-medium">{color.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
