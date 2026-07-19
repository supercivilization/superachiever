---
name: Superachiever
version: "alpha"
description: superachiever.xyz design system — slate canvas, violet→purple operating pair + amber/teal puzzles, Geist, full shadcn registry (radix-vega)
# DESIGN.md format (google-labs-code/design.md spec: frontmatter = machine layer, body = human layer)
# Source of truth for token VALUES is app/globals.css (shadcn slate, OKLCH). If they drift, globals.css wins.
# Extracted 2026-07-10 from docs/foundation.md §0 (which remains the build-from doc for routes/content).
colors:
  base: slate (coolest of the fleet — individual discipline; chrome stays slate, color = wayfinding accents only)
  light:
    background: oklch(1 0 0)
    foreground: oklch(0.129 0.042 264.695)
    primary: oklch(0.208 0.042 265.755)
    secondary: oklch(0.968 0.007 247.896)
    muted: oklch(0.968 0.007 247.896)
    accent: oklch(0.968 0.007 247.896)
    destructive: oklch(0.577 0.245 27.325)
    border: oklch(0.929 0.013 255.508)
    ring: oklch(0.704 0.04 256.788)
  dark:
    background: oklch(0.129 0.042 264.695)
    foreground: oklch(0.984 0.003 247.858)
    primary: oklch(0.929 0.013 255.508)
    secondary: oklch(0.279 0.041 260.031)
    muted: oklch(0.279 0.041 260.031)
    destructive: oklch(0.704 0.191 22.216)
    border: oklch(1 0 0 / 10%)
  pillar-accents: # Tailwind palette only, never custom hex; accents = top rule / domain dot / eyebrow tint — chrome stays slate
    superpowers-supermind: violet-500 → purple-500 (the operating pair reads as ONE story)
    personal-puzzle: amber-500 → yellow-500 (Health amber-500 · Wealth amber-400/yellow-500 · Peace yellow-400)
    business-puzzle: teal-500 → cyan-500 (Front-stage cyan-500 · Back-stage teal-500 · Bottom-line teal-600)
  genius-loop: "the C→D→A→R engine's 4 nodes: Current=mauve · Desired=mist · Action=olive · Results=taupe (seams: mauve→mist · mist→olive · olive→taupe). DISTINCT from the violet→purple pillar chrome — session canon supersedes the old route-briefs' violet mapping."
typography:
  font-sans: Geist via npm `geist` package (full glyph set — NOT next/font/google), var --font-geist-sans
  font-mono: Geist Mono (geist/font/mono) — eyebrows/metrics/tabular figures, tabular-nums
  roles:
    hero: { class: "text-4xl sm:text-5xl font-semibold tracking-tight leading-tight", use: "one per page; eyebrow → gradient rule → H1 → sub" }
    eyebrow: { class: "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground" }
    body: { class: "text-muted-foreground leading-relaxed" }
    figures: { class: "font-mono tabular-nums", use: "every number" }
spacing:
  scale: Tailwind 4px base — no arbitrary values
  shell: "mx-auto max-w-5xl px-6; border-t border-border py-20 section breaks; same skeleton per page — that repetition IS the design system"
rounded:
  base: 0.625rem  # --radius; nested radii child ≤ parent
components:
  section-rule: { rule: "short top gradient rule per section in the pillar color — wayfinding, not decoration" }
  domain-dot: { class: "size-1.5 rounded-full bg-<pillar>-500", rule: "list-item accents" }
  loop-diagram: { rule: "the 4-node Genius loop renders in mauve/mist/olive/taupe — near-neutral shadcn tints that sit quietly on slate" }
motion:
  discipline: "explicit-property transitions only, never transition-all; prefers-reduced-motion honored; no urgency animations ever"
---

# superachiever.xyz — design system

## Overview
The SFO/member site — *create your success puzzle*, async, at your own pace: a **Supermind** that knows and **Superpowers** that act, working the **Personal** and **Business** puzzles. Peer-to-peer voice (Josh = fellow player, a step ahead); villain = the scatter/drift, never the reader. Slate canvas — the coolest temperature in the fleet — with color as wayfinding only.

## Colors
Base slate, both themes + `prefers-contrast: more` verified before any page is done. The operating pair (Superpowers + Supermind) shares violet→purple; the two puzzles it works on are amber (Personal) and teal (Business). The Genius loop's four nodes use mauve/mist/olive/taupe — a different treatment from the pillar chrome. Accents are thin rules, dots, and eyebrow tints; text/borders/buttons stay slate. Tailwind palette only.

## Typography
Geist sans + Geist Mono (eyebrows, metrics, tabular figures). Curly quotes, the ellipsis character, `tabular-nums` for figures. Never presume the reader's level — beginner and advanced read the same page.

## Layout
Shared shell: `mx-auto max-w-5xl px-6`, `border-t border-border py-20` breaks, hero = eyebrow → gradient rule → H1 → sub. Same skeleton, different domain color per page.

## Components (shadcn, full registry — rebuilt 2026-07-10)
`components/ui` carries the **complete shadcn registry (60 components, radix-vega, slate)** including the new-era forms primitives and chat set. Use a primitive whenever one exists; the loop/pillar patterns above otherwise.
**Design sync:** `ds-bundle/` is the compiled claude.ai Design bundle (pipeline: `~/github/_fleet/ds-sync/build.mjs`); resync after token/API changes.

## Inputs & interaction (WIG/HIG floor)
`:focus-visible` rings; ≥44px mobile hit targets; `prefers-reduced-motion`; never `transition: all`; semantic HTML before ARIA; APCA contrast; layered shadows, crisp semi-transparent borders, nested radii.

## Voice & content
Simple, clear, human, obvious. Lead with the felt outcome, then the mechanism with a checkable particular. One calm CTA per page — shipped-now primary: "Subscribe for first notice" → supercivilization.xyz/subscribe; quiet provenance link "Your office is built through Avolve" → avolve.io. No price, no hard sell, ever, on this site. Backstage vocabulary (Degen/Regen, XP, tetractys, C-suite colors) never appears.

## Do's and don'ts
- DO keep chrome slate and let pillar gradients do wayfinding; DO render the loop only in its 4-color treatment; DO verify both themes + contrast-more.
- DON'T map the loop to violet (superseded); DON'T wash backgrounds in gradient; DON'T add urgency/scarcity; DON'T use custom hex.

## Relationships
The member's own office within **Supercivilization** (the world), allied via **Superachievers** (sync MFO), built through **Avolve**, guided by **Joshua Seymour** — fellow Superachiever, tenant #1.
