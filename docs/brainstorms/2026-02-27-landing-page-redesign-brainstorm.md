# Landing Page Total Redesign — Brainstorm

**Date:** 2026-02-27
**Status:** Brainstorm
**Repo:** landing-quinty

---

## What We're Building

A complete visual redesign of the Quinty landing page — from the current simple light-themed page to a **premium dark aesthetic** inspired by [Monologue](https://monologue.app). Static page only. No login, no dynamic data. The page serves as the brand showcase and funnel to `app.quinty.io`.

### Core Identity

**Quinty** is a trustless quest-and-bounty platform on Base blockchain. Requesters lock rewards in smart contracts; solvers submit work and earn on-chain reputation. Key differentiators: smart escrow (100% locked), soulbound reputation NFTs, ERC-20 token support, multi-winner bounties.

### Sections (Minimal Showcase)

1. **Hero** — Punchy one-liner headline, subtitle, CTA, subtle Three.js particle background, giant "Quinty" watermark
2. **Feature Bento Grid** — 3-4 key features in glassmorphism cards (Monologue-style bento layout)
3. **Final CTA** — Bold closing statement + launch button + "Built on Base" badge

---

## Why This Approach

**Minimal showcase** was chosen over full Monologue-style because:
- Quinty is a hackathon project — ship fast, make impact
- One strong hero + one feature section + CTA is the proven conversion funnel
- Less content = more visual polish per section
- The app itself (app.quinty.io) handles the detailed story

**Full dark** was chosen because:
- Matches the Monologue inspiration perfectly
- Teal/green accents pop dramatically against near-black
- Web3/crypto audience expects dark premium aesthetics
- Differentiates from the simple light page competitors

---

## Key Design Decisions

### Visual System

| Element | Decision |
|---------|----------|
| **Background** | Near-black `#0a0a0a` to `#050505` |
| **Text** | Off-white `#f0f0f0` for body, pure white for headlines |
| **Accent** | Teal/green `#0EA885` (existing brand color) |
| **Cards** | Glassmorphism: `rgba(255,255,255,0.03)` bg, `rgba(255,255,255,0.08)` border, `backdrop-blur` |
| **Watermark** | Giant serif "Quinty" text, `rgba(255,255,255,0.03)`, behind hero/footer |
| **Border radius** | 12-16px for cards (soft, not sharp) |

### Typography

| Use | Font | Weight |
|-----|------|--------|
| **Headlines** | Playfair Display (serif, italic) | 700 |
| **Subheadings** | Inter | 500-600 |
| **Body** | Inter | 400 |
| **Accents/badges** | JetBrains Mono (monospace) | 400 |

Rationale: Monologue uses large serif/italic headlines for that premium editorial feel. Playfair Display Italic gives the same vibe. Inter is the existing body font.

### Hero Section

- **Headline candidates** (new punchy copy):
  - "Lock it or lose it."
  - "If you won't stake it, you don't mean it."
  - "Trust, but verify on-chain."
  - "Work gets done when money's locked."
- **Subtitle**: 1-2 sentences explaining the value prop
- **CTA**: "Launch App" button (links to app.quinty.io)
- **Background**: Three.js subtle particle field — floating green dots/lines that react to mouse
- **Watermark**: Giant "Quinty" in Playfair Display, massive font-size, near-invisible opacity

### Feature Bento Grid

3-4 cards in an asymmetric grid (Monologue-style):

1. **Smart Escrow** — "Funds locked before work begins. Released on delivery."
   - Icon: Shield/Lock
   - Card size: Large (spans 2 cols)

2. **Soulbound Reputation** — "Your work history, immutable on-chain."
   - Icon: Badge/Star
   - Card size: Medium

3. **Quests & Bounties** — "Post tasks. Find solvers. Pay on completion."
   - Icon: Target/Crosshair
   - Card size: Medium

4. **Built on Base** — "Fast, cheap, secure. L2 by Coinbase."
   - Icon: Base logo / Chain
   - Card size: Small accent

### Three.js Integration (Subtle)

- **Particle field**: Floating green-tinted particles in hero background
- **Mouse interaction**: Particles gently repel/attract on cursor movement
- **Performance**: Max ~200 particles, requestAnimationFrame, resize-aware
- **Fallback**: Static gradient for low-end devices / reduced motion preference
- **Library**: `@react-three/fiber` + `@react-three/drei` (React bindings for Three.js)

### GSAP Animations

- **Hero text reveal**: Characters slide up with stagger on load
- **Scroll-triggered section reveals**: Features fade + slide up as user scrolls
- **Watermark parallax**: Giant text moves at 0.3x scroll speed
- **CTA pulse**: Subtle glow animation on the primary button

### Color Palette (Full)

```
--bg-primary:    #0a0a0a    /* Main background */
--bg-secondary:  #111111    /* Card/section backgrounds */
--bg-card:       rgba(255,255,255,0.03)  /* Glass cards */
--border-subtle: rgba(255,255,255,0.08)  /* Card borders */
--border-hover:  rgba(14,168,133,0.3)    /* Hover state */
--text-primary:  #ffffff    /* Headlines */
--text-secondary:#a0a0a0    /* Body text */
--text-muted:    #666666    /* Subtle text */
--accent:        #0EA885    /* Primary teal */
--accent-glow:   rgba(14,168,133,0.15)  /* Glow effects */
--accent-bright: #10D4A0    /* Bright accent for highlights */
```

---

## Tech Stack Changes

### Keep
- Vite + React 19 + TypeScript
- Tailwind CSS 3.x
- Framer Motion (for simpler animations)
- Lucide React (icons)

### Add
- `@react-three/fiber` — React renderer for Three.js
- `@react-three/drei` — Useful Three.js helpers (Stars, Float, etc.)
- `three` — Three.js core
- `gsap` — GreenSock animation library
- `gsap/ScrollTrigger` — Scroll-triggered animations

### Remove
- `@paper-design/shaders-react` — Not needed, Three.js replaces this

### Fonts (Google Fonts)
- Add: Playfair Display (serif, for headlines)
- Keep: Inter (sans-serif, for body)

---

## MCP Tools Assessment

### Already Available (No Setup Needed)
- **shadcn MCP** — Already in `.mcp.json`. Useful if we want any shadcn components.
- **Context7 MCP** — For Three.js, GSAP, React Three Fiber documentation lookup.

### Recommended Additions
- **None strictly required.** This is a code-heavy build (Three.js, GSAP, Tailwind). All graphics are either:
  - Three.js-generated (particles, mesh)
  - SVG icons from Lucide
  - The existing Quinty logo PNGs
  - CSS-only effects (gradients, glassmorphism, watermark text)

### Optional (Nice-to-Have)
- **Gemini Image Generation** (via `compound-engineering:gemini-imagegen` skill) — Could generate a hero illustration or product mockup image if we want one. Not strictly needed for the Monologue-style minimal approach.
- **Playwright Browser MCP** — For visual regression testing. Not needed for initial build.

**Verdict: No MCP reboot needed. We can build this with existing tools.**

---

## Page Structure (Visual Wireframe)

```
┌─────────────────────────────────────────────────┐
│  [Q] Quinty                    [Launch App]     │  ← Sticky nav, glass bg
├─────────────────────────────────────────────────┤
│                                                 │
│  ░░░ Three.js particles ░░░░░░░░░░░░░░░░░░░░░  │
│                                                 │
│        Lock it or lose it.                      │  ← Playfair Display Italic
│                                                 │
│   Smart-contract escrow for the trustless era.  │  ← Inter, muted
│   Post bounties. Complete quests. Earn rep.     │
│                                                 │
│        [ Launch App → ]                         │  ← Teal button
│                                                 │
│                                                 │
│   ░░░░░░░░░░  Q u i n t y  ░░░░░░░░░░░░░░░░░  │  ← Giant watermark
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────┐  ┌──────────┐             │
│  │  Smart Escrow     │  │ Soulbound│             │  ← Bento grid
│  │  Funds locked     │  │ Rep NFTs │             │
│  │  before work.     │  │          │             │
│  │  ○ 100% escrowed  │  └──────────┘             │
│  │  ○ Auto-release   │  ┌──────────┐             │
│  └──────────────────┘  │ Quests & │             │
│                        │ Bounties │             │
│                        └──────────┘             │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│       Work gets done when money's locked.       │  ← Bold closing
│                                                 │
│              [ Launch App → ]                   │
│                                                 │
│         Built on Base  ·  Chain ID 84532        │
│                                                 │
│   ░░░░░░░░░░  Q u i n t y  ░░░░░░░░░░░░░░░░░  │  ← Watermark reprise
│                                                 │
│  ─────────────────────────────────────────────  │
│  © 2026 Quinty  ·  X  ·  GitHub  ·  Docs       │  ← Minimal footer
└─────────────────────────────────────────────────┘
```

---

## Open Questions

*None — all key decisions resolved through brainstorm dialogue.*

---

## Resolved Questions

1. **Standalone vs in-app?** → Standalone repo at `landing-quinty/`
2. **3D depth?** → Subtle accents (particles, mouse-reactive)
3. **Content sections?** → Minimal: Hero + Features + CTA
4. **Theme?** → Full dark (#0a0a0a)
5. **Headline direction?** → New punchy copy (I'll craft options)
6. **Watermark?** → Yes, giant "Quinty" serif text
7. **Activity panel?** → Removed
8. **MCP tools needed?** → None additional — existing tools sufficient
