---
name: Groovetop Dog App — Case Study Microsite
description: Award-recognized UX portfolio case study microsite presenting Groovetop DS v1 by Raymond Merrill II.
colors:
  navy: "#1B2A4A"
  terracotta: "#C96F53"
  oat: "#FAF7F1"
  white: "#FFFFFF"
  teal: "#2EAD8C"
  blue: "#618FED"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, DM Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Plus Jakarta Sans, DM Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Plus Jakarta Sans, DM Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, DM Sans, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans, DM Sans, Inter, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  pill: "9999px"
  card: "1rem"
  device: "2.25rem"
spacing:
  section: "120px"
  section-sm: "80px"
  content-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "#b5623b"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  card-brief:
    backgroundColor: "{colors.oat}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
    padding: "24px"
---

# Design System: Groovetop Dog App Case Study

## 1. Overview

**Creative North Star: "The Portfolio Artifact"**

This microsite IS a design deliverable — not a wrapper around one, but the deliverable itself. It applies the same rigor the case study describes: semantic tokens, consistent spacing rhythm, reusable section patterns, deliberate typographic hierarchy. A design lead reviewing this portfolio is simultaneously reading about the Groovetop design system and experiencing an implementation of it. The medium demonstrates the message.

The palette is anchored by deep navy (#1B2A4A) and terracotta (#C96F53), with teal (#2EAD8C) and periwinkle blue (#618FED) as deliberate secondary voices. The body background — a warm oat (#FAF7F1) — is a committed brand choice, not a default. Warmth here is carried by precise craft and restrained use of the terracotta accent, not by decorative softness or beige-as-atmosphere.

This system explicitly rejects the generic Notion-style portfolio (flat, text-heavy, template-shaped); Awwwards-bait theatrics (scroll choreography as the main event, custom cursors, experimental typography); SaaS landing-page templates (hero-metrics block, feature grid, pricing CTA); and Behance-style process dumps (wireframes on white, low production value). The goal is to read as something a design systems expert made to show that they take presentation as seriously as the work itself.

**Key Characteristics:**
- Single-family type system (Plus Jakarta Sans 400–800) with a tightly controlled clamp() scale
- Full-palette color strategy: each of the four accents has a named, locked role
- Section rhythm driven by background-color alternation (navy → white → oat), not decorative dividers
- Motion is functional: scroll entrances, staggered list reveals, hero staged screen exhibit — no choreography as spectacle
- Structural shadows only — on floating phone mockups; flat everywhere else
- WCAG 2.1 AA throughout; skip link, focus-visible ring, and reduced-motion support built in

## 2. Colors: The Groovetop DS Palette

Four accents with a clear hierarchy of roles. Each earns its use; none are decorative filler.

### Primary
- **Terracotta** (#C96F53): The one active voice. CTAs, section eyebrow labels, metadata anchors, and accent markers. On dark (navy) backgrounds it reads as warm authority; on light it reads as confident action. Its rarity on any given screen is what makes it feel intentional.

### Secondary
- **Teal** (#2EAD8C): Reserved for the accessibility section, positive/success states, and any content carrying a trust or health signal. Tied to meaning, not decoration.
- **Periwinkle Blue** (#618FED): Interaction and focus color. Focus rings, active nav states, the aurora ambient glow on the hero section. Communicates "interactive / focused," not brand presence.

### Tertiary
- **Navy** (#1B2A4A): The structural foundation. Hero section background, primary text on light surfaces, dark card interiors. The site is made of navy and oat.

### Neutral
- **Oat** (#FAF7F1): Committed warm body background and tinted card surfaces. A brand choice, not a safe default. Cards on white sections use oat as their surface; never the reverse (oat card on oat ground — insufficient contrast).
- **White** (#FFFFFF): High-contrast section backgrounds for rhythm alternation. Never use white and oat on the same surface; they are too close in value to read as different layers.

### Named Rules
**The One Voice Rule.** Terracotta appears on ≤15% of any screen's surface area. Its restraint is deliberate — when it appears, it signals action or identity. Never use terracotta for body text or section backgrounds; those roles belong to navy and oat.

**The Role Lock Rule.** Blue is an interaction color (focus ring, ambient glow, active state); teal is a meaning-carrying color (accessibility, trust, success). Neither may be used interchangeably with terracotta on CTAs or labels.

## 3. Typography: Plus Jakarta Sans

**Display Font:** Plus Jakarta Sans (weights 700–800)
**Body Font:** Plus Jakarta Sans (weights 400–600)

Single-family system with strict weight and scale discipline. The design sophistication comes from the clamp() scale control and negative letter-spacing at display sizes — not from a second typeface.

**Character:** Geometric humanist that reads as confident and modern without feeling cold. At 800 weight with tight tracking it feels editorial; at 400/500 it's warm and readable. The single-family range does the work that a serif/sans pairing would do in other systems.

### Hierarchy
- **Display** (800 weight, clamp(2.75rem, 6vw, 4.75rem), line-height 0.94, letter-spacing -0.035em): Hero H1 only. The tightest tracking and closest line-height in the system; feels like exhibit poster type.
- **Headline** (800 weight, clamp(2rem, 3.5vw, 3rem), line-height 1.1, letter-spacing -0.025em): Section H2 headings. First line of identity in each section.
- **Title** (800 weight, clamp(1.5rem, 2.5vw, 2rem), line-height 1.2, letter-spacing -0.02em): Sub-section H2/H3, card headings, pull quotes.
- **Body** (400–500 weight, 1rem / line-height 1.625, max 65ch): Running prose. Opacity-softened (navy at 65%) on white and oat grounds. Navy at 80% for emphasized body copy; navy at 40% for captions and metadata keys.
- **Label** (700 weight, 10px, letter-spacing 0.2em, uppercase): Section eyebrows, metadata row keys, mini-nav markers. The only uppercase usage in the system; kept at 10px to prevent competition with body copy.

### Named Rules
**The Opacity Ramp Rule.** Text hierarchy uses `--navy` at varying opacity levels (100% / 80% / 65% / 40%), never a separate gray or off-brand neutral. This maintains hue coherence across light and dark sections while creating a clear contrast hierarchy. Do not introduce gray, black, or an off-spec neutral for text.

**The Scale Ceiling Rule.** Display sizes are clamped at 4.75rem (76px). No heading exceeds this — above it the page shouts rather than presents. If hero copy needs more impact, increase font-weight, not font-size.

## 4. Elevation

Flat-by-default with structural depth reserved for physically elevated elements. Sections are separated by background-color alternation (navy → white → oat), not by border lines or shadows at rest. Cards use a `rgba(27,42,74,0.08)` border to define their boundary on a contrasting ground — no shadow.

Shadows appear only where an element is conceptually or physically "above" the page: staged phone mockups in the hero, floating panels. The shadow vocabulary communicates "this object floats" and is not used to add visual interest to flat surfaces.

### Shadow Vocabulary
- **Device float** (`0 34px 64px rgba(0,0,0,0.55)`): The center/front phone screen in the hero exhibit. Signals that this device is physically above the other screens and the page plane.
- **Ambient depth** (Tailwind `shadow-2xl` / `0 25px 50px -12px rgba(0,0,0,0.25)`): Secondary screen frames and any elevated floating panel — same character as Device float, lighter weight.

### Named Rules
**The Flat-By-Default Rule.** Every flat surface (cards, section containers, nav, buttons) has no shadow at rest. Shadows appear only on elements that physically float above the page plane. Applying a shadow to a flat card is a visual lie; it implies elevation where there is none.

## 5. Components

### Buttons
- **Shape:** Fully pill-shaped (border-radius: 9999px). The only button shape in the system — no square or slightly-rounded variants.
- **Primary:** Terracotta (#C96F53) background, white text, 14px bold, 14px 24px padding. Hover: #b5623b (background darkens ~10%). Transition: `background-color 200ms ease`.
- **Ghost / Outline:** `border: 1px solid rgba(255,255,255,0.25)`, white/80 text, transparent background. Hover: `background: rgba(255,255,255,0.10)`, `border-color: rgba(255,255,255,0.40)`. Used on dark (navy) backgrounds only — never on oat or white grounds.
- **Focus:** 2px solid white ring with 3px offset on dark grounds; 2px solid blue (#618FED) ring on light grounds.

### Cards / Containers
- **Corner Style:** Gently curved (border-radius: 1rem / 16px). Not pill, not sharp.
- **Background:** Oat (#FAF7F1) on white-ground sections; White (#FFFFFF) on oat-ground sections. Card and ground must be different values.
- **Shadow:** None. Boundary comes from `border: 1px solid rgba(27,42,74,0.08)`.
- **Internal Padding:** 24px default; header rows use 20px with a bottom border `rgba(27,42,74,0.08)` separating the label from the content rows.

### Navigation
- **Style:** Fixed top, navy background with `backdrop-filter: blur(12px)`, 72px height. Scroll-margin-top: 96px on anchor targets gives 24px clearance.
- **Typography:** 14px, 500 weight, text-white/75. Hover: text-white. 200–400ms ease transitions.
- **Active:** Terracotta dot or underline indicator.
- **Mobile:** Collapses to hamburger; full-width or side-drawer pattern.

### Section Eyebrows
- **Style:** 10px, 700 weight, letter-spacing 0.2em, uppercase, terracotta. Followed by a `flex-1` hairline in `rgba(27,42,74,0.10)` stretching to the right edge of the content column.
- **Usage:** One eyebrow per section introduction, never repeated decoratively within a section. The hairline divider is always present alongside the eyebrow.

### Screen Exhibit (Signature Component)
- **Description:** Staged three-phone mockup with perspective, rotation, and opacity depth. Center screen: fully lit, large device shadow, slight perspective tilt. Flanking screens: 60% opacity, ±10–14° rotation, z-10 (behind center's z-20).
- **Motion:** Each screen enters `opacity: 0 → 1, y: 28 → 0` at 600–800ms, staggered 50ms. Reduced-motion guard: `initial: false` renders at final state immediately. The entrance layer and the perspective transform are separated into outer/inner divs to prevent Framer Motion fighting the static perspective tilt.

## 6. Do's and Don'ts

### Do:
- **Do** use terracotta exclusively for CTAs, section eyebrows, accent markers, and metadata anchors. Nowhere else.
- **Do** separate sections with background-color alternation (navy → white → oat). No decorative horizontal rules, thick dividers, or shadows between sections.
- **Do** use the navy opacity ramp (100% / 80% / 65% / 40%) for all text hierarchy. Never introduce a separate gray or off-spec neutral for body text.
- **Do** clamp display headings at 4.75rem max. If impact is needed, increase font-weight to 800, not font-size.
- **Do** verify WCAG 2.1 AA contrast (≥4.5:1 body, ≥3:1 large) whenever a new text/background combination is introduced, especially navy/65 on oat.
- **Do** use `text-wrap: balance` on H1–H3 and test heading copy at all breakpoints before shipping.
- **Do** include a `useReducedMotion` guard on every Framer Motion entrance; render at final state when the user has opted out of motion.
- **Do** keep card and page ground on different background values — oat card on white, white card on oat; never oat on oat.

### Don't:
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any card, callout, or blockquote. Use a full border, background tint, or leading icon/number instead.
- **Don't** apply `background-clip: text` with any gradient. Emphasis is via font-weight and terracotta solid color — never gradient text.
- **Don't** apply box-shadows to flat cards, section containers, or buttons at rest. Shadows communicate elevation; use them only on elements that physically float above the page.
- **Don't** produce a generic Notion-style portfolio — flat, text-heavy, template-shaped, indistinguishable from a documentation page.
- **Don't** add Awwwards-bait effects: custom cursors, scroll-driven parallax as the main event, experimental display typography, or full-screen scroll transitions that gate content.
- **Don't** introduce SaaS landing-page patterns: hero metric dashboards, feature comparison tables, or pricing CTA sections.
- **Don't** add student/Behance-style wireframe screenshots on plain white backgrounds without production framing.
- **Don't** use teal or blue as brand accents interchangeable with terracotta. Teal = meaning (accessibility, trust, success); blue = interaction (focus, hover state). Neither is a CTA color.
- **Don't** scatter numbered eyebrows (01 / 02 / 03) across every section as default scaffolding. Numbers earn their place only when the section IS a real sequence and the order carries information the reader needs.
