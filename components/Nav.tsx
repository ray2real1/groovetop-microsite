"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Overview",       href: "#overview"       },
  { label: "Screens",        href: "#screens"        },
  { label: "Design System",  href: "#design-system"  },
  { label: "Award",          href: "#award"          },
  { label: "PDF",            href: "/assets/groovetop/Raymond-Merrill-II-Groovetop-Dog-App-UX-Case-Study.pdf", external: true },
];

export default function Nav() {
  const [isSticky, setIsSticky]   = useState(false);
  const [active,   setActive]     = useState("");
  const shouldReduce              = useReducedMotion();
  const observerRef               = useRef<IntersectionObserver | null>(null);

  /* Sticky trigger after hero */
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  /* Active section highlight */
  useEffect(() => {
    const sections = NAV_LINKS
      .filter((l) => !l.external)
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observerRef.current!.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      target.scrollIntoView({ behavior: shouldReduce ? "auto" : "smooth" });
      /* Move keyboard focus to the section heading */
      const heading = target.querySelector("h1,h2,h3,[tabindex]") as HTMLElement | null;
      (heading ?? (target as HTMLElement)).focus({ preventScroll: true });
    }
  }

  return (
    <motion.header
      role="banner"
      aria-label="Case study navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
      initial={shouldReduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <span
          className={`text-sm font-semibold tracking-tight transition-colors ${
            isSticky ? "text-groovetop-navy" : "text-white"
          }`}
        >
          Raymond Merrill II
        </span>

        <nav aria-label="Section navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => {
              const isCurrent = active === link.href;
              const isExternal = link.external;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={!isExternal ? (e) => handleAnchorClick(e, link.href) : undefined}
                    aria-current={isCurrent ? "true" : undefined}
                    className={`
                      relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200
                      ${
                        isExternal
                          ? isSticky
                            ? "bg-groovetop-terracotta text-white hover:bg-groovetop-terracotta/90"
                            : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                          : isCurrent
                          ? isSticky
                            ? "text-groovetop-navy bg-groovetop-oat"
                            : "text-white bg-white/20"
                          : isSticky
                          ? "text-groovetop-navy/70 hover:text-groovetop-navy hover:bg-black/5"
                          : "text-white/70 hover:text-white"
                      }
                    `}
                  >
                    {link.label}
                    {isCurrent && !isExternal && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-groovetop-terracotta"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
