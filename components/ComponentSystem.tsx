"use client";

import { motion, useReducedMotion } from "framer-motion";

const COMPONENTS = [
  {
    name: "Button",
    purpose: "Primary CTAs — Adopt, Schedule, Contact",
    props: [
      { axis: "Style",  values: ["Primary", "Secondary", "Ghost"] },
      { axis: "Size",   values: ["Large", "Medium", "Small"] },
    ],
    preview: (
      <div className="flex flex-wrap gap-2 items-center">
        <button className="px-4 py-2 rounded-full bg-[#C96F53] text-white text-xs font-bold">Adopt Now</button>
        <button className="px-4 py-2 rounded-full border border-[#1B2A4A] text-[#1B2A4A] text-xs font-bold">Schedule</button>
        <button className="px-4 py-2 rounded-full text-[#1B2A4A]/60 text-xs font-bold">Contact</button>
      </div>
    ),
  },
  {
    name: "Pet Card",
    purpose: "Dog listing cards in Browse + Saved views",
    props: [
      { axis: "Variant", values: ["Browse", "Saved"] },
    ],
    preview: (
      <div className="flex gap-3">
        {["Browse", "Saved"].map((v) => (
          <div key={v} className="flex-1 border border-[#1B2A4A]/10 rounded-xl p-3 bg-[#FAF7F1] space-y-2">
            <div className="w-full h-10 rounded-lg bg-[#1B2A4A]/8" />
            <div className="h-2 bg-[#1B2A4A]/20 rounded w-3/4" />
            <div className="h-1.5 bg-[#1B2A4A]/10 rounded w-1/2" />
            <span className="text-[9px] font-bold text-[#1B2A4A]/40 uppercase tracking-wide">{v}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Badge",
    purpose: "Availability, species, and status labeling",
    props: [
      { axis: "Type", values: ["Available", "Unavailable", "Species", "Status"] },
    ],
    preview: (
      <div className="flex flex-wrap gap-2">
        <span className="px-2.5 py-1 rounded-full bg-[#2EAD8C] text-white text-[10px] font-bold">Available</span>
        <span className="px-2.5 py-1 rounded-full bg-[#C96F53]/15 text-[#C96F53] text-[10px] font-bold">Unavailable</span>
        <span className="px-2.5 py-1 rounded-full bg-[#1B2A4A]/10 text-[#1B2A4A] text-[10px] font-bold">Dog</span>
        <span className="px-2.5 py-1 rounded-full bg-[#618FED]/15 text-[#618FED] text-[10px] font-bold">Adopted</span>
      </div>
    ),
  },
  {
    name: "Search Bar",
    purpose: "Pet search on the Browse screen",
    props: [
      { axis: "State", values: ["Default", "Active", "Filled"] },
    ],
    preview: (
      <div className="space-y-2">
        {[
          { label: "Default", placeholder: "Search dogs...", opacity: "opacity-40" },
          { label: "Active",  placeholder: "Search dogs...", ring: true },
          { label: "Filled",  placeholder: "Golden Retriever" },
        ].map(({ label, placeholder, opacity, ring }) => (
          <div
            key={label}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs ${
              ring ? "border-[#618FED] ring-2 ring-[#618FED]/20" : "border-[#1B2A4A]/12"
            } bg-white`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="5" cy="5" r="4" stroke="#1B2A4A" strokeOpacity="0.3" strokeWidth="1.3"/>
              <path d="M8.5 8.5 L11 11" stroke="#1B2A4A" strokeOpacity="0.3" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span className={`text-[#1B2A4A] ${opacity ?? ""}`}>{placeholder}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Bottom Nav",
    purpose: "Persistent navigation across all six screens",
    props: [
      { axis: "Active", values: ["Browse", "Saved", "Schedule", "Match", "Preferences"] },
    ],
    preview: (
      <div className="flex items-center justify-between px-3 py-2.5 rounded-2xl bg-[#1B2A4A] border border-white/5">
        {[
          { label: "Browse",      active: true },
          { label: "Saved",       active: false },
          { label: "Schedule",    active: false },
          { label: "Match",       active: false },
          { label: "Prefs",       active: false },
        ].map(({ label, active }) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-0.5 ${active ? "text-[#C96F53]" : "text-white/30"}`}
          >
            <div className={`w-4 h-4 rounded-md ${active ? "bg-[#C96F53]/20" : "bg-white/5"}`} />
            <span className="text-[8px] font-semibold">{label}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function ComponentSystem() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-labelledby="components-heading"
      className="py-section bg-white"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-4">
            Component System Structure
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="components-heading"
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight text-groovetop-navy"
            >
              5 component sets.<br />23 variants. 9 editable properties.
            </h2>
            <p className="text-sm text-groovetop-navy/65 max-w-xs leading-relaxed">
              Built as real Figma component sets. Source sets are preserved in the DS v1 file and available from the Assets panel for direct reuse.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPONENTS.map((comp, i) => (
            <motion.article
              key={comp.name}
              initial={shouldReduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: "easeOut" }}
              whileHover={shouldReduce ? {} : { y: -3 }}
              aria-labelledby={`comp-title-${i}`}
              className="rounded-2xl border border-groovetop-navy/8 bg-groovetop-oat overflow-hidden"
            >
              {/* Preview */}
              <div className="p-5 bg-white border-b border-groovetop-navy/8 min-h-[100px] flex items-center">
                {comp.preview}
              </div>

              {/* Info */}
              <div className="p-5 space-y-4">
                <div>
                  <h3
                    id={`comp-title-${i}`}
                    className="text-sm font-bold text-groovetop-navy mb-1"
                  >
                    {comp.name}
                  </h3>
                  <p className="text-xs text-groovetop-navy/50 leading-relaxed">{comp.purpose}</p>
                </div>

                <div className="space-y-2">
                  {comp.props.map((prop) => (
                    <div key={prop.axis}>
                      <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-groovetop-navy/30 mb-1.5">
                        {prop.axis}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {prop.values.map((v) => (
                          <span
                            key={v}
                            className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white border border-groovetop-navy/10 text-groovetop-navy/55"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
