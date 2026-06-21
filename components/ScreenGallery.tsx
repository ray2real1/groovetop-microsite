"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Screen = {
  number: string;
  title: string;
  src: string;
  alt: string;
  group: "core" | "supporting";
  purpose: string;
  uxDecision: string;
  systemNote: string;
};

const SCREENS: Screen[] = [
  {
    number: "01",
    title: "Browse Pets",
    src: "/assets/groovetop/screens/browse-pets.png",
    alt: "Browse Pets screen showing Groovetop search, filters, pet cards, and bottom navigation.",
    group: "core",
    purpose: "Entry point for discovery. Users scan available dogs at a glance.",
    uxDecision: "Led with a scannable card list over a dense table so availability reads in a single pass, not a sequence of taps.",
    systemNote: "Pet Card, Badge, and Search Bar components render here; Bottom Nav holds Browse as the active state.",
  },
  {
    number: "02",
    title: "Pet Profile",
    src: "/assets/groovetop/screens/pet-profile.png",
    alt: "Pet Profile screen for Biscuit with availability, shelter details, adoption fee, and visit CTA.",
    group: "core",
    purpose: "Full detail view: name, breed, age, characteristics, and primary CTA.",
    uxDecision: "Prioritized pet details and shelter context above the visit CTA to reduce decision friction before asking for commitment.",
    systemNote: "Uses color.cta.primary, color.surface.card, and status-badge semantics to hold hierarchy and action clarity.",
  },
  {
    number: "03",
    title: "Schedule Visit",
    src: "/assets/groovetop/screens/schedule-visit.png",
    alt: "Schedule Visit screen showing calendar selection and available visit times.",
    group: "core",
    purpose: "Time-slot selection before committing to an adoption visit.",
    uxDecision: "Differentiated available from unavailable slots visually so the booking state is never ambiguous at a glance.",
    systemNote: "color.status.available and terracotta unavailable tones are pulled from semantic tokens, not one-off fills.",
  },
  {
    number: "04",
    title: "Confirmation",
    src: "/assets/groovetop/screens/confirmation.png",
    alt: "Visit Confirmation screen showing confirmed visit details for Biscuit.",
    group: "core",
    purpose: "Positive reinforcement: visit booked, next steps surfaced.",
    uxDecision: "Closed the loop with a single, unambiguous success state and explicit next steps so the flow never dead-ends.",
    systemNote: "color.brand.primary drives the confirmation marker; the Button component handles both next-step actions.",
  },
  {
    number: "05",
    title: "Preferences",
    src: "/assets/groovetop/screens/preferences.png",
    alt: "Preferences screen showing pet type, age range, living situation, and adoption notes.",
    group: "supporting",
    purpose: "User-controlled filtering: breed, size, energy level, and more.",
    uxDecision: "Chose chip-based selection over nested menus so criteria stay scannable, reversible, and low-commitment.",
    systemNote: "Interactive background tokens style chip selection; the grid follows the shared spacing scale.",
  },
  {
    number: "06",
    title: "Saved Pets",
    src: "/assets/groovetop/screens/saved-pets.png",
    alt: "Saved Pets screen showing Biscuit saved as a favorite pet.",
    group: "supporting",
    purpose: "Saved dog list, letting users return to bookmarked pets and continue their decision at any time.",
    uxDecision: "Kept Saved one tap away in the Bottom Nav so users can park a decision and return without losing context.",
    systemNote: "Pet Card 'Saved' variant is reused throughout; Bottom Nav holds Saved as the active state.",
  },
];

const ACTIVE = "#C96F53";
const TICK_IDLE = "rgba(27,42,74,0.34)";

/* ----------------------------------------------------------------------------
   Device frame — shared chrome for both the static and the animated views.
   Reserves a fixed 390/844 aspect box so images never cause layout shift.
---------------------------------------------------------------------------- */
function DeviceFrame({
  src,
  alt,
  priority = false,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`rounded-[2rem] border border-groovetop-navy/10 bg-white p-3 shadow-xl shadow-groovetop-navy/5 ${className}`}>
      <div className="relative w-full overflow-hidden rounded-[1.4rem] bg-groovetop-oat" style={{ aspectRatio: "390 / 844" }}>
        <Image src={src} alt={alt} fill className="object-contain object-top" sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}

function NoteRow({ label, accent, children }: { label: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <p className={`text-[9px] font-bold tracking-[0.15em] uppercase mb-1 ${accent ? "text-groovetop-terracotta" : "text-groovetop-navy/40"}`}>
        {label}
      </p>
      <p className="text-sm text-groovetop-navy/70 leading-relaxed">{children}</p>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   STATIC SHOWCASE — the foundation. Also the premium reduced-motion view and
   the tablet/mobile view. A composed, grouped contact sheet: Core adoption
   flow first (the four-step path), Supporting screens second. The numbered
   order is the scan path; grouping gives hierarchy.
---------------------------------------------------------------------------- */
function StaticShowcase() {
  const core = SCREENS.filter((s) => s.group === "core");
  const supporting = SCREENS.filter((s) => s.group === "supporting");

  const Card = ({ screen }: { screen: Screen }) => (
    <article
      aria-label={`${screen.title}, screen ${screen.number} of 06`}
      className="group rounded-3xl border border-groovetop-navy/8 bg-white/60 p-5 lg:p-6 motion-safe:transition-colors motion-safe:duration-300 hover:border-groovetop-navy/15"
    >
      <DeviceFrame
        src={screen.src}
        alt={screen.alt}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 300px"
        className="mx-auto max-w-[240px] motion-safe:transition-transform motion-safe:duration-300 group-hover:-translate-y-1"
      />
      <div className="mt-6">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-extrabold tabular-nums text-groovetop-terracotta">{screen.number}</span>
          <h3 className="text-xl font-extrabold tracking-tight text-groovetop-navy">{screen.title}</h3>
        </div>
        <p className="mt-2 text-sm text-groovetop-navy/70 leading-relaxed">{screen.purpose}</p>
        <div className="mt-5 space-y-3.5 border-t border-groovetop-navy/8 pt-4">
          <NoteRow label="Key UX decision">{screen.uxDecision}</NoteRow>
          <NoteRow label="Design system" accent>{screen.systemNote}</NoteRow>
        </div>
      </div>
    </article>
  );

  const GroupLabel = ({ children, count }: { children: React.ReactNode; count: string }) => (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-1 w-8 rounded-full bg-groovetop-terracotta" aria-hidden="true" />
      <h3 className="text-sm font-bold tracking-tight text-groovetop-navy">{children}</h3>
      <span className="flex-1 h-px bg-groovetop-navy/10" aria-hidden="true" />
      <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-groovetop-navy/35 tabular-nums">{count}</span>
    </div>
  );

  return (
    <div className="mt-4">
      <div className="mb-14">
        <GroupLabel count="Steps 01 to 04">Core adoption flow</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {core.map((screen) => (
            <Card key={screen.title} screen={screen} />
          ))}
        </div>
      </div>

      <div>
        <GroupLabel count="Screens 05 to 06">Supporting screens</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-[640px]">
          {supporting.map((screen) => (
            <Card key={screen.title} screen={screen} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   PINNED WALKTHROUGH — desktop + motion only. One device stays anchored while
   GSAP ScrollTrigger pins the stage and scrubs the active screen, caption, and
   step rail. Opacity + transform only; restrained holds, short transitions.
---------------------------------------------------------------------------- */
function PinnedWalkthrough() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const screenRefs = useRef<HTMLDivElement[]>([]);
  const capRefs = useRef<HTMLDivElement[]>([]);
  const tickNumRefs = useRef<HTMLSpanElement[]>([]);
  const tickBarRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const screens = screenRefs.current;
      const caps = capRefs.current;
      const nums = tickNumRefs.current;
      const bars = tickBarRefs.current;
      const n = SCREENS.length;
      if (!screens.length) return;

      // Initial state: screen 0 active, everything else parked.
      gsap.set(screens, { autoAlpha: 0, yPercent: 3 });
      gsap.set(caps, { autoAlpha: 0, y: 16 });
      gsap.set(nums, { color: TICK_IDLE });
      gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(screens[0], { autoAlpha: 1, yPercent: 0 });
      gsap.set(caps[0], { autoAlpha: 1, y: 0 });
      gsap.set(nums[0], { color: ACTIVE });
      gsap.set(bars[0], { scaleX: 1 });

      const HOLD = 1.1;
      const TRANS = 0.5;

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: () => "+=" + n * Math.round(window.innerHeight * 0.85),
          pin: stageRef.current,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to({}, { duration: HOLD }); // dwell on screen 0

      for (let i = 0; i < n - 1; i++) {
        const label = `t${i}`;
        tl.add(label)
          .to(screens[i], { autoAlpha: 0, yPercent: -3, duration: TRANS }, label)
          .to(caps[i], { autoAlpha: 0, y: -12, duration: TRANS }, label)
          .to(nums[i], { color: TICK_IDLE, duration: TRANS }, label)
          .to(bars[i], { scaleX: 0, duration: TRANS }, label)
          .to(screens[i + 1], { autoAlpha: 1, yPercent: 0, duration: TRANS }, label)
          .to(caps[i + 1], { autoAlpha: 1, y: 0, duration: TRANS }, label)
          .to(nums[i + 1], { color: ACTIVE, duration: TRANS }, label)
          .to(bars[i + 1], { scaleX: 1, duration: TRANS }, label)
          .to({}, { duration: HOLD }); // dwell on the newly active screen
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const setRef =
    <T extends HTMLElement>(store: React.MutableRefObject<T[]>, i: number) =>
    (el: T | null) => {
      if (el) store.current[i] = el;
    };

  return (
    <div ref={rootRef} className="mt-4">
      {/* Screen-reader access to all six screens, independent of scroll position and
          GSAP visibility state. The visual stage below is scroll-driven and marked
          aria-hidden because this list fully covers the same content. */}
      <ol className="sr-only">
        {SCREENS.map((screen) => (
          <li key={screen.title}>
            <p>
              Screen {screen.number} of 06: {screen.title}
            </p>
            <p>{screen.purpose}</p>
            <p>Key UX decision: {screen.uxDecision}</p>
            <p>Design system: {screen.systemNote}</p>
          </li>
        ))}
      </ol>

      <div ref={stageRef} aria-hidden="true" className="min-h-[100dvh] flex items-center">
        <div className="w-full grid grid-cols-[1fr_1.05fr] gap-12 xl:gap-20 items-center">
          {/* Anchored device */}
          <div className="relative mx-auto w-full max-w-[300px]">
            {/* Backlight */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(201,111,83,0.10) 0%, transparent 70%)" }}
            />
            <div className="relative" style={{ aspectRatio: "390 / 844" }}>
              {SCREENS.map((screen, i) => (
                <div key={screen.title} ref={setRef(screenRefs, i)} className="absolute inset-0">
                  <DeviceFrame
                    src={screen.src}
                    alt={screen.alt}
                    sizes="300px"
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Caption column */}
          <div className="relative">
            {/* Step rail */}
            <div className="flex items-center gap-2.5 mb-8" aria-hidden="true">
              {SCREENS.map((screen, i) => (
                <div key={screen.number} className="flex flex-col items-start gap-2">
                  <span
                    ref={setRef(tickNumRefs, i)}
                    className="text-xs font-extrabold tabular-nums"
                    style={{ color: TICK_IDLE }}
                  >
                    {screen.number}
                  </span>
                  <span className="relative block h-[3px] w-10 rounded-full bg-groovetop-navy/10 overflow-hidden">
                    <span
                      ref={setRef(tickBarRefs, i)}
                      className="absolute inset-0 rounded-full bg-groovetop-terracotta"
                      style={{ transform: "scaleX(0)" }}
                    />
                  </span>
                </div>
              ))}
            </div>

            {/* Stacked captions — only the active one is visible */}
            <div className="relative min-h-[340px]">
              {SCREENS.map((screen, i) => (
                <div key={screen.title} ref={setRef(capRefs, i)} className="absolute inset-0">
                  <h3 className="text-display-md font-extrabold tracking-tight text-groovetop-navy">{screen.title}</h3>
                  <p className="mt-3 text-base text-groovetop-navy/75 leading-relaxed max-w-md">{screen.purpose}</p>
                  <div className="mt-6 space-y-4 max-w-md">
                    <div className="rounded-xl bg-white border border-groovetop-navy/8 p-4">
                      <NoteRow label="Key UX decision">{screen.uxDecision}</NoteRow>
                    </div>
                    <div className="rounded-xl bg-white border border-groovetop-navy/8 p-4">
                      <NoteRow label="Design system" accent>{screen.systemNote}</NoteRow>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   ScreenGallery — header is stable for nav/wayfinding; the body progressively
   enhances from the static showcase to the pinned walkthrough only when the
   viewport is desktop-class AND the user has not requested reduced motion.
---------------------------------------------------------------------------- */
export default function ScreenGallery() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
    const apply = () => setEnhanced(window.matchMedia(QUERY).matches);
    apply();
    const mq = window.matchMedia(QUERY);
    mq.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <section id="screens" aria-labelledby="screens-heading" tabIndex={-1} className="py-section bg-groovetop-oat">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-groovetop-terracotta mb-3">Six Screens</p>
            <h2 id="screens-heading" className="text-display-lg font-extrabold tracking-tight text-groovetop-navy">
              The adoption experience, screen by screen
            </h2>
          </div>
          <p className="text-sm text-groovetop-navy/45 max-w-xs leading-relaxed">
            390×844px screens. Each token-connected and component-referenced against Groovetop DS v1.
          </p>
        </div>

        {enhanced ? <PinnedWalkthrough /> : <StaticShowcase />}
      </div>
    </section>
  );
}
