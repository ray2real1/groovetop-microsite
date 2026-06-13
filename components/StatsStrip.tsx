"use client";

import { motion, useReducedMotion } from "framer-motion";

function StatItem({ number, label, suffix }: { number: string; label: string; suffix?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-1">
        <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight text-groovetop-navy leading-none">
          {number}
        </span>
        {suffix && (
          <span className="text-lg font-bold text-groovetop-navy/40">{suffix}</span>
        )}
      </div>
      <span className="text-xs font-semibold tracking-wide text-groovetop-navy/50 uppercase">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden lg:block w-px h-12 bg-groovetop-navy/10 self-center" aria-hidden="true" />
  );
}

export default function StatsStrip() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-groovetop-oat border-y border-groovetop-navy/8 py-16 lg:py-20"
    >
      <h2 id="stats-heading" className="sr-only">Design system metrics</h2>

      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Cluster A — System Foundation */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-6">
              System Foundation
            </p>
            <div className="flex flex-wrap items-start gap-x-10 gap-y-8">
              <StatItem number="68" label="Design Tokens" />
              <Divider />
              <StatItem number="10" label="Text Styles" />
              <Divider />
              <StatItem number="25" suffix="/28" label="Semantic Tokens Active" />
            </div>
          </motion.div>

          {/* Cluster B — Reuse + Application */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-6">
              Reuse &amp; Application
            </p>
            <div className="flex flex-wrap items-start gap-x-10 gap-y-8">
              <StatItem number="5"   label="Component Sets" />
              <Divider />
              <StatItem number="23"  label="Variants" />
              <Divider />
              <StatItem number="9"   label="Editable Properties" />
              <Divider />
              <StatItem number="452" label="Color Bindings" />
              <Divider />
              <StatItem number="63"  label="Style Apps" />
              <Divider />
              <StatItem number="6"   label="Connected Screens" />
            </div>
          </motion.div>
        </div>

        {/* Interpretive line */}
        <motion.blockquote
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-groovetop-navy/10 text-center"
        >
          <p className="text-xl lg:text-2xl font-semibold italic text-groovetop-navy/70 max-w-2xl mx-auto leading-snug text-balance">
            &ldquo;The value is not the count alone — it is the repeatable structure behind the UI.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
