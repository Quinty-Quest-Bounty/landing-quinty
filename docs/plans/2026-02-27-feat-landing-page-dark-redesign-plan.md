---
title: "feat: Total landing page redesign — dark premium aesthetic"
type: feat
status: completed
date: 2026-02-27
origin: docs/brainstorms/2026-02-27-landing-page-redesign-brainstorm.md
---

# Total Landing Page Redesign — Dark Premium Aesthetic

## Overview

Complete visual overhaul of the Quinty landing page from a simple light-themed single-component page to a **premium dark aesthetic** inspired by Monologue.app. Static page only — no login, no dynamic data. Three sections: Hero (with Three.js particles) → Feature Bento Grid (glassmorphism cards) → Final CTA. Giant "Quinty" watermark text. GSAP scroll animations. Playfair Display serif headlines.

## Problem Statement / Motivation

The current landing page is too simple for a Web3 product. It uses a light background, basic layout, and doesn't convey the premium trust-focused brand. The crypto/Web3 audience expects dark, polished aesthetics. A Monologue-style redesign will make Quinty look production-grade and increase conversion from landing page to app. (see brainstorm: docs/brainstorms/2026-02-27-landing-page-redesign-brainstorm.md)

## Proposed Solution

Rewrite `src/App.tsx` into a component-based architecture with three main sections, backed by a Three.js particle background, GSAP scroll animations, glassmorphism cards, and a new dark color system.

## Technical Considerations

### Architecture: Component Decomposition

Current `App.tsx` is a monolith (~260 lines). Decompose into:

```
src/
  main.tsx                          # Entry: register GSAP plugins here
  App.tsx                           # Root layout orchestrator
  components/
    Navbar.tsx                      # Sticky glass nav: logo + "Launch App" CTA
    HeroSection.tsx                 # Headline, subtitle, CTA, particle bg
    FeatureBento.tsx                # Asymmetric bento grid of 4 glass cards
    GlassCard.tsx                   # Reusable glassmorphism card
    FinalCTA.tsx                    # Closing statement + launch button + Base badge
    Footer.tsx                      # Minimal footer: links, copyright
    Watermark.tsx                   # Giant "Quinty" text overlay (reusable)
  three/
    ParticleField.tsx               # Points-based particle system
    Scene3D.tsx                     # Canvas wrapper with perf config
  hooks/
    usePrefersReducedMotion.ts      # Accessibility: detect reduced motion
    useDeviceCapability.ts          # Detect low-end device for particle count
  lib/
    utils.ts                        # cn() utility (keep existing)
  index.css                         # Tailwind directives + CSS custom properties + fonts
```

### Performance

- **Lazy-load Three.js** via `React.lazy` + `Suspense` — keep initial bundle small
- **Cap `dpr` at [1, 1.5]** — 2x pixel ratio is rarely worth the GPU cost
- **200 particles on desktop, 80 on mobile** — device capability detection
- **`prefers-reduced-motion` fallback** — static gradient instead of particles
- **Font loading via `<link>` with preconnect** — not CSS `@import` (fixes render-blocking)

### Accessibility

- Giant watermark: `aria-hidden="true"`, `pointer-events-none`, `select-none`
- Color contrast: off-white `#f0f0f0` on `#0a0a0a` = 17.4:1 ratio (exceeds WCAG AAA)
- Muted text `#a0a0a0` on `#0a0a0a` = 9.2:1 ratio (exceeds WCAG AAA)
- Respect `prefers-reduced-motion` for all animations

---

## Implementation Phases

### Phase 1: Foundation — Dependencies, Config, Color System

**Goal:** Set up the new tech stack and design tokens. Nothing visual yet.

**Tasks:**

- [x] **Install new dependencies** — `src/main.tsx`
  ```bash
  pnpm add three @react-three/fiber @react-three/drei gsap @gsap/react
  pnpm remove @paper-design/shaders-react
  ```

- [x] **Update `index.html`** — font loading via `<link>` tags with preconnect
  - Add Playfair Display (700, italic), Inter (400-700), JetBrains Mono (400)
  - Remove the CSS `@import` from `index.css`

- [x] **Update `tailwind.config.js`** — new color system + fonts
  ```javascript
  colors: {
    bg: { primary: '#0a0a0a', secondary: '#111111' },
    accent: { DEFAULT: '#0EA885', bright: '#10D4A0', glow: 'rgba(14,168,133,0.15)' },
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Playfair Display', 'Georgia', 'serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  borderRadius: { glass: '16px' },
  ```

- [x] **Rewrite `index.css`** — dark body, CSS custom properties, selection colors
  ```css
  @layer base {
    body { @apply bg-bg-primary text-gray-100 font-sans antialiased overflow-x-hidden; }
    ::selection { @apply bg-accent/30 text-white; }
  }
  ```

- [x] **Register GSAP plugins in `main.tsx`**
  ```tsx
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { useGSAP } from '@gsap/react'
  gsap.registerPlugin(ScrollTrigger, useGSAP)
  ```

- [x] **Remove `agentation` import** from App.tsx (not in package.json, causes build errors)

**Acceptance:** `pnpm build` passes. Page shows dark background, correct fonts loaded.

---

### Phase 2: Core Components — Navbar, Footer, Watermark, GlassCard

**Goal:** Build the reusable building blocks.

**Tasks:**

- [x] **`src/components/Navbar.tsx`** — Sticky glassmorphism nav
  - Logo (quinty-green.png) + "Quinty" text on left
  - "Launch App" teal button on right → `https://app.quinty.io`
  - Glass bg: `bg-white/[0.05] backdrop-blur-lg border-b border-white/[0.08]`
  - Fixed position, z-50

- [x] **`src/components/Footer.tsx`** — Minimal footer
  - `© 2026 Quinty` + social links (X, GitHub) + Docs link
  - Muted text, border-top `border-white/[0.08]`

- [x] **`src/components/Watermark.tsx`** — Giant reusable text overlay
  - Props: `text: string`, `className?: string`
  - Playfair Display, `text-[clamp(8rem,20vw,20rem)]`, `text-white/[0.03]`
  - `aria-hidden="true"`, `pointer-events-none`, `select-none`
  - Gradient mask for soft edge fade
  - Overflow hidden on parent

- [x] **`src/components/GlassCard.tsx`** — Reusable card
  - `bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl`
  - `transform-gpu` for hardware acceleration
  - Hover: `border-accent/30` transition
  - `supports-[backdrop-filter]` fallback: solid `bg-bg-secondary`

**Acceptance:** Components render correctly in isolation. Glass effect visible on dark bg.

---

### Phase 3: Three.js Particle Background

**Goal:** Subtle floating green particles in the hero section.

**Tasks:**

- [x] **`src/hooks/usePrefersReducedMotion.ts`** — detect `prefers-reduced-motion`
  - Returns `boolean`, defaults to `true` (reduced) for safety
  - Listens for change events

- [x] **`src/hooks/useDeviceCapability.ts`** — detect low-end devices
  - Returns `'high' | 'low'` based on `navigator.hardwareConcurrency`, screen width, UA

- [x] **`src/three/ParticleField.tsx`** — Points-based particle system
  - `useMemo` for Float32Array positions (never recalculate)
  - `useFrame` for rotation animation (not React state)
  - `pointsMaterial`: `color="#0EA885"`, `opacity: 0.4`, `AdditiveBlending`, `depthWrite: false`
  - Props: `count` (default 200), `speed` (default 0.02)

- [x] **`src/three/Scene3D.tsx`** — Canvas wrapper
  - `React.lazy` loadable
  - Canvas config: `alpha: true`, `antialias: false`, `stencil: false`, `depth: false`
  - `dpr={[1, 1.5]}`, `powerPreference: 'high-performance'`
  - Absolute positioned, behind content
  - Passes `count` based on device capability (200 desktop, 80 mobile)

- [x] **Reduced motion fallback** — static gradient `bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary` when motion is reduced or device is low-end

**Acceptance:** Particles float and glow green on dark background. Smooth 60fps on desktop. Static fallback on mobile/reduced motion.

---

### Phase 4: Hero Section with GSAP

**Goal:** The main hero with headline, subtitle, CTA, and particle background.

**Tasks:**

- [x] **`src/components/HeroSection.tsx`** — Full viewport hero
  - Three.js Scene3D as absolute background (lazy loaded)
  - Watermark "Quinty" behind content
  - Headline: Playfair Display Italic, `text-[clamp(3rem,8vw+1rem,8rem)]`
    - Copy: **"Lock it or lose it."** (primary candidate)
    - Accent word "lose" in teal
  - Subtitle: Inter, `text-gray-400`, max-w-xl
    - "Smart-contract escrow for the trustless era. Post bounties. Complete quests. Build reputation."
  - CTA: "Launch App →" teal button with glow shadow
    - `bg-accent hover:bg-accent-bright shadow-lg shadow-accent/20`
    - Links to `https://app.quinty.io`
  - Badge: "Built on Base" pill with monospace font

- [x] **GSAP hero entrance animation** — `useGSAP` with `scope`
  - Headline: characters slide up with 0.03s stagger, `power3.out`
  - Subtitle: fade up 0.5s after headline
  - CTA button: fade up + scale from 0.95, 0.3s after subtitle
  - Badge: fade in last
  - Total entrance sequence: ~1.5 seconds

**Acceptance:** Hero fills viewport. Text animates on load. Particles visible behind. CTA links to app.quinty.io.

---

### Phase 5: Feature Bento Grid

**Goal:** Asymmetric grid of 4 glassmorphism feature cards.

**Tasks:**

- [x] **`src/components/FeatureBento.tsx`** — Bento grid section
  - CSS Grid: `grid-cols-1 md:grid-cols-3`, asymmetric sizing
  - Card 1 (Smart Escrow): `md:col-span-2 md:row-span-2` — large
  - Card 2 (Soulbound Rep): `md:col-span-1` — medium
  - Card 3 (Quests & Bounties): `md:col-span-1` — medium
  - Card 4 (Built on Base): `md:col-span-1` — small accent
  - Each card: GlassCard + Lucide icon + title + description
  - Icons: `Shield` (escrow), `Award` (reputation), `Target` (quests), `Layers` (base)

- [x] **GSAP scroll reveal** — `useGSAP` + ScrollTrigger
  - `ScrollTrigger.batch('.feature-card', ...)` for stagger reveal
  - Cards fade up + slide from y:60 as they enter viewport
  - `toggleActions: 'play none none reverse'` for scroll-back animation

- [x] **Watermark "Quinty"** positioned behind the bento grid
  - GSAP parallax: `xPercent: -15`, `scrub: 1` tied to scroll

**Acceptance:** 4 cards in asymmetric grid. Glass effect. Scroll-triggered stagger reveal. Responsive to single-column on mobile.

---

### Phase 6: Final CTA + Footer Assembly

**Goal:** Closing section with bold statement and full page assembly.

**Tasks:**

- [x] **`src/components/FinalCTA.tsx`** — Closing section
  - Bold headline: "Work gets done when money's locked." (Playfair Display)
  - "Launch App →" button (same style as hero CTA)
  - "Built on Base · Chain ID 84532" in monospace, muted
  - Watermark reprise behind this section

- [x] **Rewrite `src/App.tsx`** — Page orchestrator
  ```tsx
  export default function App() {
    return (
      <div className="min-h-screen bg-bg-primary text-gray-100 font-sans">
        <Navbar />
        <HeroSection />
        <FeatureBento />
        <FinalCTA />
        <Footer />
      </div>
    )
  }
  ```

- [x] **GSAP CTA scroll reveal** — fade up on scroll entry

- [x] **Verify full page flow** — smooth scroll through all sections, no jarring transitions

**Acceptance:** Complete page renders Hero → Features → CTA → Footer. All animations work. CTA buttons link correctly.

---

### Phase 7: Polish + Performance Audit

**Goal:** Final quality pass.

**Tasks:**

- [x] **Responsive testing** — verify at 375px, 768px, 1024px, 1440px widths
- [x] **Mobile particle fallback** — confirm static gradient on mobile/low-end
- [x] **`prefers-reduced-motion`** — confirm all animations disabled, static fallback
- [x] **Font loading** — no FOIT/FOUT, `font-display: swap` working
- [x] **Lighthouse audit** — target: Performance 90+, Accessibility 100
- [x] **Build check** — `pnpm build` clean, no TypeScript errors
- [x] **Remove dead code** — old submissions data, Outfit font references, `agentation` import
- [x] **Clean dependencies** — verify no unused packages in `package.json`

**Acceptance:** Clean build. 90+ Lighthouse. Responsive. Accessible. No dead code.

---

## Acceptance Criteria

- [x] Page loads with dark background (`#0a0a0a`)
- [x] Three.js particles render in hero section (green, floating, mouse-reactive)
- [x] Hero headline "Lock it or lose it." in Playfair Display Italic with GSAP entrance animation
- [x] 4 glassmorphism feature cards in asymmetric bento grid
- [x] Giant "Quinty" watermark text visible (barely) behind hero and CTA sections
- [x] GSAP ScrollTrigger reveals features on scroll
- [x] "Launch App" buttons link to `https://app.quinty.io`
- [x] Mobile responsive (single column, reduced particles or static fallback)
- [x] `prefers-reduced-motion` respected (static gradient, no animations)
- [x] `pnpm build` passes with zero errors
- [x] No login, no auth, no dynamic data — pure static

## Success Metrics

- Visual polish matches premium Web3 product standards
- Page load < 3s on 3G (lazy-loaded Three.js)
- Lighthouse Performance 90+, Accessibility 100

## Dependencies & Risks

| Risk | Mitigation |
|------|-----------|
| Three.js bundle size (~150KB gzipped) | Lazy-load with `React.lazy`, only render when hero visible |
| GSAP + R3F animation conflicts | GSAP handles DOM (text, scroll). R3F handles WebGL (particles). No overlap. |
| `backdrop-blur` browser support | `supports-[backdrop-filter]` fallback to solid dark bg |
| Playfair Display FOUT | `font-display: swap` + preconnect to Google Fonts |

## Sources & References

### Origin

- **Brainstorm document:** [docs/brainstorms/2026-02-27-landing-page-redesign-brainstorm.md](docs/brainstorms/2026-02-27-landing-page-redesign-brainstorm.md) — Key decisions: full dark theme, minimal showcase (Hero + Features + CTA), subtle Three.js particles, giant serif watermark, no activity panel.

### External References

- [React Three Fiber — Scaling Performance](https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance)
- [GSAP Official React Guide](https://gsap.com/resources/React)
- [GSAP ScrollTrigger Common Mistakes](https://gsap.com/resources/st-mistakes)
- [Dark Glassmorphism Implementation Guide](https://playground.halfaccessible.com/blog/glassmorphism-design-trend-implementation-guide)
- [Josh W. Comeau — Accessible Animations](https://www.joshwcomeau.com/react/prefers-reduced-motion/)

### Internal References

- Current App.tsx: `src/App.tsx` (to be replaced)
- Tailwind config: `tailwind.config.js` (to be updated)
- CSS: `src/index.css` (to be rewritten)
- Logo assets: `public/images/quinty-green.png`, `public/images/quinty-logo.png`
