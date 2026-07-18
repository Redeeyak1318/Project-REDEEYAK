# Sprint 3.5 — Motion & Micro-interactions

## Goal
Create a polished, premium user experience by introducing subtle animations and micro-interactions across Project REDEEYAK without compromising performance, architecture, or accessibility.

---

> [!WARNING]
> ## Open Questions / Clarification Needed
> You listed **Framer Motion** in the Tech Stack, but it is currently **not** installed in `package.json`. Additionally, the Engineering Rules state: **"Do NOT: Install packages."**
> 
> **Question:** Should I install `framer-motion` to implement these animations, or should I strictly follow the "Do NOT install packages" rule and implement all animations and reveals natively using Tailwind CSS transitions/animations and native `IntersectionObserver`? (Tailwind is fully capable of satisfying all requirements with zero JS bundle overhead).
> 
> *Please clarify your preference when approving this plan.*

---

## Proposed Implementation Plan

If Tailwind is chosen to respect the strict package rule, or Framer Motion is approved, the architecture will remain identical:

### 1. Hero Section
- **Location**: `components/hero/`
- **Action**: Add staggered entrance animations to the Heading, Description, and CTA buttons.
- **Method**: Use a staggered fade-up animation sequence (`translate-y` + `opacity`) upon initial mount.

### 2. Section Reveal Animations
- **Location**: `components/about/`, `components/experience/`, `components/skills/`, `components/projects/`, `components/contact/`
- **Action**: Add scroll-triggered reveals that animate only once (`once: true`).
- **Method**: Create a reusable `<ScrollReveal>` wrapper component (Server Component compatible via small Client boundary) utilizing `IntersectionObserver` (or `framer-motion` `whileInView` if approved).

### 3. Card Interactions
- **Location**: `ProjectCard.tsx`, `SkillCard.tsx`, `ExperienceCard.tsx`
- **Action**: Enhance hover states with subtle scaling and elevation.
- **Method**: Apply Tailwind utility classes: `hover:scale-[1.02] hover:shadow-md transition-all duration-300`. This is highly performant and doesn't require JS.

### 4. Button Micro-interactions
- **Location**: `components/ui/button.tsx`
- **Action**: Refine hover, active press, and focus-visible states.
- **Method**: Add `active:scale-95 transition-transform duration-200` to the button variants. Focus states (`focus-visible:ring-3`) are already robustly implemented by the Base UI/shadcn base.

### 5. Navigation
- **Location**: `components/navigation/`
- **Action**: Enhance active link transitions and theme toggle rotation.
- **Method**: Apply `hover:text-primary transition-colors duration-200` to `NavLinks`. Add a subtle rotate effect to the `ThemeToggle` sun/moon icons on switch.

### 6. Reduced Motion Support
- **Action**: Ensure all animations respect `prefers-reduced-motion`.
- **Method**: Use Tailwind's `motion-safe:` modifier for all transforms and long transitions to automatically disable them for users with reduced motion settings.

### 7. Performance & SEO
- **Action**: Maintain strict segregation of Server Components.
- **Method**: Using Tailwind CSS for hover/active states and CSS animations keeps bundle sizes tiny. If `IntersectionObserver` is used for scroll reveals, it will be isolated to a lightweight wrapper component to prevent turning entire sections into Client Components.

## Verification Plan
1. **Visual Testing**: Verify Hero staggers correctly on load. Verify sections fade up smoothly on scroll, only once.
2. **Accessibility**: Test with `prefers-reduced-motion` enabled at the OS level to ensure animations are suppressed.
3. **Performance**: Verify `npm run build` succeeds and Lighthouse scores remain at ~100/100/100/100.
