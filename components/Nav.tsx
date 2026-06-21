"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Overview",       href: "#overview"       },
  { label: "Screens",        href: "#screens"        },
  { label: "Design System",  href: "#design-system"  },
  { label: "Award",          href: "#award"          },
  { label: "PDF",            href: "/assets/groovetop/Raymond-Merrill-II-Groovetop-Dog-App-UX-Case-Study.pdf", external: true },
];

export default function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [active,   setActive]   = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduce            = useReducedMotion();
  const observerRef             = useRef<IntersectionObserver | null>(null);

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

  /* Close drawer on Esc */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    setMenuOpen(false);
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

  const onLight = isSticky || menuOpen;

  /* Hamburger line helper */
  const line = "block h-[1.5px] w-5 bg-current origin-center transition-all duration-200";

  return (
    <motion.header
      role="banner"
      aria-label="Case study navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        onLight
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
            onLight ? "text-groovetop-navy" : "text-white"
          }`}
        >
          Raymond Merrill II
        </span>

        {/* Desktop nav — hidden on mobile */}
        <nav aria-label="Section navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
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
                    aria-current={isCurrent ? "page" : undefined}
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

        {/* Mobile hamburger — hidden on desktop */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMenuOpen((o) => !o)}
          className={`
            md:hidden flex flex-col justify-center items-center gap-[5px]
            w-10 h-10 rounded-full -mr-1 transition-colors duration-200
            ${onLight ? "text-groovetop-navy hover:bg-black/5" : "text-white hover:bg-white/10"}
          `}
        >
          <span className={`${line} ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`${line} ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`${line} ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            role="navigation"
            aria-label="Mobile section navigation"
            initial={shouldReduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={shouldReduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={shouldReduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="md:hidden overflow-hidden border-t border-black/5"
          >
            <ul className="px-6 py-3 pb-5 flex flex-col gap-1">
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
                      aria-current={isCurrent ? "page" : undefined}
                      className={`
                        flex items-center justify-between w-full px-4 py-3.5
                        text-sm font-medium rounded-xl transition-colors duration-150
                        ${
                          isExternal
                            ? "bg-groovetop-terracotta text-white mt-2"
                            : isCurrent
                            ? "text-groovetop-navy bg-groovetop-oat font-semibold"
                            : "text-groovetop-navy/70 hover:text-groovetop-navy hover:bg-black/5"
                        }
                      `}
                    >
                      <span>{link.label}</span>
                      {isCurrent && !isExternal && (
                        <span className="w-1.5 h-1.5 rounded-full bg-groovetop-terracotta" aria-hidden="true" />
                      )}
                      {isExternal && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
