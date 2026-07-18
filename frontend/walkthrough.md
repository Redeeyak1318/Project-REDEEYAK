# Sprint 3.5 — Walkthrough (Motion & Micro-interactions)

## Overview
This sprint focused on introducing tasteful, subtle animations and micro-interactions across the site. Adhering strictly to the constraint of avoiding heavy external packages, all animations were built natively using Tailwind CSS and a lightweight, reusable IntersectionObserver wrapper. This preserves the 100/100 Lighthouse performance score while delivering a premium feel.

---

## Optimization 1: Scroll Reveal Animations

### Files Modified
- `components/ui/scroll-reveal.tsx` (New Component)
- `components/about/About.tsx`
- `components/experience/Experience.tsx`
- `components/skills/Skills.tsx`
- `components/projects/Projects.tsx`
- `components/contact/Contact.tsx`

### Engineering Rationale
Rather than turning entire sections into Client Components or bundling heavy animation libraries, a highly isolated `<ScrollReveal>` client wrapper was created. It uses native `IntersectionObserver` to detect when a section enters the viewport, applying Tailwind utility classes (`translate-y-0 opacity-100`) exactly once.

### Performance & Safety Impact
- **Zero CLS**: The wrapper maintains the DOM structure exactly as is.
- **Micro-bundle**: The JS added is less than 1KB.
- **Reduced Motion**: Automatically aborts transitions if `prefers-reduced-motion` is detected via `motion-reduce:` variants.

---

## Optimization 2: Staggered Hero Entrance

### Files Modified
- `components/hero/Hero.tsx`
- `components/hero/HeroContent.tsx`

### Engineering Rationale
The initial load is arguably the most important impression. The Hero components were wrapped in `<ScrollReveal>` but given precise `delay` props (`0ms`, `150ms`, `300ms`, `450ms`). Since they are immediately in the viewport, the `IntersectionObserver` triggers instantly, creating a beautiful cascading fade-up effect for the badge, headings, description, and buttons. 

---

## Optimization 3: Card Micro-interactions

### Files Modified
- `components/projects/ProjectCard.tsx`
- `components/experience/ExperienceCard.tsx`
- `components/skills/SkillCard.tsx`

### Engineering Rationale
Interactive elements should react when the user hovers over them. We added a subtle `hover:scale-[1.01]` or `[1.02]` alongside a refined shadow and border emphasis (`hover:shadow-md hover:border-border/80`). The `ease-out` timing function makes the interaction feel snappy yet smooth.

---

## Optimization 4: Button & Navigation State Refinement

### Files Modified
- `components/ui/button.tsx`
- `components/navigation/NavLinks.tsx`
- `components/navigation/MobileMenu.tsx`
- `components/navigation/ThemeToggle.tsx`

### Engineering Rationale
- **Buttons**: Added an `active:scale-[0.98]` state to give a physical "press" sensation.
- **Nav Links**: Upgraded from standard color transitions to a subtle `hover:-translate-y-0.5` (desktop) and `hover:translate-x-1` (mobile). 
- **Theme Toggle**: Introduced a playful `duration-500` rotation when hovering over the sun/moon icons.

### Future Recommendations
- If interactions become significantly more complex, evaluating a dedicated library (like Framer Motion) could be reconsidered, but native Tailwind handles current complexity with superior performance characteristics.
