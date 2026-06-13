"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const META = [
  { label: "Role",    value: "UX Designer · Visual Designer · Design System Creator" },
  { label: "Context", value: "WGU UX Design academic project" },
  { label: "Scope",   value: "Mobile prototype + post-award design system refinement" },
  { label: "Status",  value: "Portfolio case study / not a live client product" },
  { label: "Metrics", value: "No real-world adoption data claimed" },
];

export default function ProjectOverview() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      tabIndex={-1}
      className="py-section bg-white"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">

          {/* Left — narrative */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="space-y-6"
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta">
              Project Overview
            </p>
            <h2
              id="overview-heading"
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-groovetop-navy leading-tight"
            >
              From academic prototype<br />to documented design system
            </h2>
            <p className="text-base text-groovetop-navy/65 leading-relaxed max-w-xl">
              Groovetop began as a WGU UX Design mobile app assignment for a dog adoption experience. After receiving a WGU Excellence Award, the project was refined into Groovetop DS v1 — a documented system with semantic tokens, typography styles, reusable component sets, editable properties, and token-connected screens.
            </p>
            <p className="text-sm text-groovetop-navy/65 leading-relaxed max-w-xl">
              The design system was extracted directly from the existing prototype screens. No new visual language was introduced — only structure, repeatability, and handoff clarity.
            </p>
            <p className="text-base font-medium text-groovetop-navy/80 leading-relaxed max-w-xl border-l-2 border-groovetop-terracotta/40 pl-5">
              Worth a recruiter&rsquo;s attention because it shows the move from attractive screens to a documented, reusable system — without overstating the original academic scope.
            </p>
          </motion.div>

          {/* Right — metadata card */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          >
            <div className="rounded-2xl border border-groovetop-navy/8 bg-groovetop-oat overflow-hidden">
              <div className="px-6 py-5 border-b border-groovetop-navy/8">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-navy/40">
                  Project Brief
                </p>
              </div>
              <dl className="divide-y divide-groovetop-navy/6">
                {META.map(({ label, value }) => (
                  <div key={label} className="px-6 py-4 flex flex-col gap-1">
                    <dt className="text-[10px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/35">
                      {label}
                    </dt>
                    <dd className="text-sm font-medium text-groovetop-navy/75">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
