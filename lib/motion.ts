/**
 * Groovetop DS v1 — motion system
 *
 * Single source of truth for entrance timing so stagger and easing stay
 * consistent across every section instead of drifting per-component.
 *
 * - EASE        : premium, non-bouncy decelerating curve.
 * - STAGGER_STEP: 45ms increment for sequential card / element reveals.
 */
import type { Transition } from "framer-motion";

/** cubic-bezier(0.16, 1, 0.3, 1) — clean settle, no overshoot. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** 45ms — the base unit for progressive stagger. */
export const STAGGER_STEP = 0.045;

/** Delay for the nth item in a staggered group (optionally offset by a base). */
export const stagger = (index: number, base = 0): number =>
  base + index * STAGGER_STEP;

/**
 * Standard section-entry transition. Pass an index for staggered children
 * and an optional base delay; pass a custom duration when needed.
 */
export const entrance = (
  index = 0,
  { base = 0, duration = 0.6 }: { base?: number; duration?: number } = {}
): Transition => ({
  duration,
  delay: stagger(index, base),
  ease: EASE,
});
