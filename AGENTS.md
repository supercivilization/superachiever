<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# superachiever.xyz

**The SFO/member site of the pentad — create your success puzzle: async single player + multiplayer · Participate → member benefits.** Slate base + violet-purple accent; pillar colors: Supermind violet-purple · Personal amber-yellow · Business teal-cyan; Genius-loop colors mauve/mist/olive/taupe (Current/Desired/Actions/Results). **KB: fleet spine → `~/github/_fleet/CANON.md` + `GAMEPLAY.md` (backstage) · build-from doc → `docs/foundation.md` (2026-07-07 — supersedes the archived route-briefs, incl. its WRONG loop-color mapping).** Sitemap: / · /about · /superpowers · /personal · /business · /supermind. `design.md` extracted 2026-07-10 (spec format — slate tokens, pillar accents, Genius-loop 4-color law); foundation.md stays the build-from doc. Everything v0 until Josh approves.

## Stack
Next.js 16 + React 19.2 + TS + Tailwind v4 (CSS-first `@theme`, `tw-animate-css`) + shadcn/ui v4 (radix-vega, slate, `@/` alias, FULL registry — 60 components in `components/ui`, rebuilt 2026-07-10) + Geist via npm `geist` package (`geist/font/sans|mono` — NOT next/font/google; vars stay `--font-geist-*`) + Vercel. Design system → `design.md`; claude.ai sync bundle → `ds-bundle/` (pipeline: `~/github/_fleet/ds-sync/`). The three supers share one "super" design system via a shadcn registry (set up when the 2nd site needs it).

## Build on this machine (M5/16GB — see global CLAUDE.md)
Real build: `~/bin/safe-build $HOME/github/supercivilization/superachiever .` (RAM-gated, heap-capped, cleans after). Fast feedback: `pnpm exec tsc --noEmit`. Shared preview: push a preview branch → Vercel cloud build. Never `--prod` casually.

## Gotchas
- Fonts: `@theme inline` must reference `--font-geist-sans`/`--font-geist-mono` (fixed — don't regress).
- Schema.org JSON-LD on every public page.
