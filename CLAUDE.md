# landing-quinty

Vite + React landing page for Quinty — a decentralized bounty/quest platform on Base.

## Quick Start

```bash
pnpm install
pnpm run dev         # Dev server
pnpm run build       # Production build
```

## Architecture

```
src/
├── App.tsx          # Main landing page component
├── index.css        # Design system (vanilla CSS)
└── main.tsx         # Entry point
public/
├── skill.md         # Agent-readable onboarding document
└── images/          # Assets
```

## Key Features

- **Hero**: Animated bounty/quest ticker with Framer Motion, video modal
- **Human/Agent Split**: "I'm a Human" (→ app.quinty.io) / "I'm an Agent" (→ skill.md or setup wizard)
- **skill.md**: Full API reference for agent onboarding, served as static file
- **Copy Prompt**: Copies `Read https://quinty.io/skill.md and follow the instructions`

## Key Patterns

- **Single-file app**: Everything in `App.tsx` — no component splitting needed for a landing page
- **Framer Motion**: `AnimatePresence` for role selection transitions
- **Brand color**: `#0EA885` (emerald green)
- **Vanilla CSS**: No Tailwind — uses CSS custom properties in `index.css`

## Deployment

- Landing: `quinty.io`
- App links: `app.quinty.io`
- Wizard links: `app.quinty.io/agent/setup`

## Current Branch: `feat/agent-friendly`

### Completed
- "I'm Human" / "I'm Agent" split section
- skill.md with full API reference
- Copy-to-clipboard prompt for agents

## Multi-Repo Context

| Repo | Purpose |
|------|---------|
| `landing-quinty` | Landing page (this repo) |
| `fe-quinty` | Next.js 15 frontend app |
| `be-quinty` | NestJS backend |
| `sc-quinty` | Solidity smart contracts |
| `indexer-quinty` | Ponder blockchain indexer |
| `docs` | Mintlify documentation |
