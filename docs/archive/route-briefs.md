# Superachiever — Content + Design Blueprint

**Site:** superachiever.xyz · the member **single-family office (SFO)** · *"Create your success puzzle."*
**Who:** one member of Supercivilization, running their own office **async, at their own pace** — single-player first, participating in the multiplayer where they choose.
**Base:** SLATE neutrals · **Signature accent:** violet→purple (the SFO's identity color, used sparingly — hero rule, active CTA moments, wordmark).
**Membrane:** movement site — worldview + color system + gameplay framing are allowed here, but plain-human and never presumptuous. This site does **not** sell the AVFO or quote price; when it's time to actually build the office, it hands off to **Avolve** (the money site). It does not carry Avolve's provenance-claim surfaces; it carries the member's felt experience.
**Audience spread:** beginner → advanced. Lead with the felt reality and the outcome; explain the loop/office in plain terms every time; never assume the reader already speaks the vocabulary.
**Date:** 2026-07-07.

---

## Color system (this site)

Four SFO components, two color stories:

| Component | Role | Domain family | Triad (its three shades) |
|---|---|---|---|
| **Superpowers** | the harness — the loop made runnable | **violet-purple** (violet end) | Starting `violet-500` → Focusing `purple-500` → Finishing `purple-600` |
| **Supermind** | the mind that runs the harness | **violet-purple** (purple end) | one accent: `purple-500` |
| **Personal Success Puzzle** | the family side | **amber-yellow** | Health `amber-600` · Wealth `amber-400`/`yellow-500` · Peace `yellow-400` |
| **Business Success Puzzle** | the office side | **teal-cyan** | Front-stage `cyan-500` · Back-stage `teal-500` · Bottom-line `teal-600` |

Superpowers + Supermind share **violet-purple** so the *operating pair* (how it runs + who decides) reads as one color story, distinct from the two puzzles it works on (amber, teal). Accents appear as: a short top gradient rule per section, a domain dot on list items, and the section eyebrow tint. Keep chrome (text, borders, buttons) slate — color is a wayfinding signal, not decoration.

Reference (already in `app/page.tsx`): dots use `violet-500` (Superpowers), `amber-500` (Personal), `teal-500` (Business), `purple-500` (Supermind). Keep consistent.

---

## / — Home  · **EXISTS (refine)**

**(a) Purpose** — In one screen, make a stranger understand: you can run your own single-family office, async, and here are its four moving parts.

**(b) Core message** — A single-family office normally costs the ultra-wealthy a staff and millions. As a Superachiever you get an async, AI-run version of one: a **Supermind** and its **Superpowers** working your **Personal** and **Business** success puzzles — the family side and the office side. Wherever you are on the path, you start from there. Founding membership opens 2026; until then it's built where you can watch.

**(c) Section-by-section**

1. **Hero SFO** — Eyebrow "Superachiever · One member". H1 *"Create your success puzzle."* Sub: you run your own single-family office async, at your own pace; your office carries the load beneath you so more of what you create is kept, compounded, protected. Primary CTA → `supercivilization.xyz/subscribe` ("Subscribe for first notice"); quiet link → `avolve.io` ("Your office is built through Avolve"). *(Keep current copy — it's right.)*
2. **Superpowers** — "The harness — the loop made runnable." One line + *Starting · Focusing · Finishing*; link → `/superpowers`.
3. **Personal** — "The family side of a family office. Health · Wealth · Peace." Link → `/personal`.
4. **Business** — "The office side of a family office. Front-stage · Back-stage · Bottom-line." Link → `/business`.
5. **Supermind** — "The mind that runs the harness — two moments are always yours." Link → `/supermind`.
6. **CTA SFO** — "Founding membership opens with the founding offices, 2026." Until then, the publication is the front row → `supercivilization.xyz`.

**(d) Design/layout/color** — Centered `max-w-5xl`, generous vertical rhythm, `border-t` between sections (as now). Refactor the current single 4-item list into **four labelled component sections**, each with its own domain top-rule + dot + a "→ read more" link to its sub-page: Superpowers/ Supermind = violet-purple rule; Personal = amber-yellow; Business = teal-cyan. Keep the loop 3-up grid as the visual for the Superpowers section (violet→purple across the three cells). Hero rule stays `from-violet-500 to-purple-500`. Buttons stay slate `bg-primary`.

**(e) Membrane check** — Passes. No price, no hard sell; Avolve is a quiet provenance handoff, not a pitch. Gameplay framing ("success puzzle") is present but plain. Refine only: make sure each of the 4 now links out (depth-first — the sub-pages must exist to link to).

**(f) EXISTS (refine).**

---

## /about — About  · **NEW**

**(a) Purpose** — Explain what a Superachiever *is* and why a one-person single-family office makes sense, then locate the four components so the rest of the site reads clearly.

**(b) Core message** — Most people run their life and work as an unmanaged pile of open loops. A Superachiever runs them as an **office**: a mind that holds where you are and where you're going, a harness that turns that into scheduled action, and two puzzles — personal and business — it keeps solving. It's async and self-paced because your office works while you don't. You're never behind; you start from wherever you actually are.

**(c) Section-by-section**

- **Opening** — What a Superachiever is (a person running a single-family office of one), why now (agents + tools make a staffed office runnable solo), and the promise: async, own pace, start from here. Key line: *"Your office carries the load beneath you, so more of what you create is kept, compounded, and protected."*
- **The four** *(same four, in order)* —
  - **Superpowers** — the harness; the loop (Current → Desired → Actions → Results) made runnable. *(violet)*
  - **Personal Success Puzzle** — the family side; Health, Wealth, Peace. *(amber)*
  - **Business Success Puzzle** — the office side; Front-stage, Back-stage, Bottom-line. *(teal)*
  - **Supermind** — the mind that runs the harness; sets the Desired, authorizes the Actions. *(purple)*
- **Closing** — Founding membership opens with the founding offices, 2026. Until then everything is built where you can watch — the publication (`supercivilization.xyz`) is the front row; the office itself is built through **Avolve** (`avolve.io`).

**(d) Design/layout/color** — Same shell. Opening = prose block, no accent (slate) so the concept lands before color enters. The four = a stacked list or 2×2, each carrying its domain dot + one-line definition, colors as in the table. Closing = quiet, slate, two outbound links. Schema.org `AboutPage` JSON-LD.

**(e) Membrane check** — Passes. Frames the worldview plainly; no Degen/Regen or manifesto vocabulary; Avolve named only as where the office is built, not as an offer.

**(f) NEW.**

---

## /superpowers — Superpowers  · **NEW**

**(a) Purpose** — Show the harness: how the loop becomes a runnable engine you can hand work to.

**(b) Core message** — Superpowers are not motivation — they're **the loop made runnable**. Current → Desired → Actions → Results, wired so your agents, tools, and systems carry it. What separates an achiever from a superachiever is finishing the loop, over and over, with less of it on your hands each time. Everything delegable, delegated well; the two decisions that matter stay yours.

**(c) Section-by-section**

- **Hero** — Eyebrow "Superpowers". H1 *"Everything delegable, delegated well."* Sub: the harness — the loop made runnable across your agents, tools, and systems. *(violet→purple rule)*
- **The loop (3-up)** — the engine, one cell per stage:
  - **Starting** — Current → Desired. *"Name what you don't want. Define what you do want, in relation to it."* `violet-500`
  - **Focusing** — Desired → Actions. *"The next logical steps from here to there — chosen, scheduled, begun."* `purple-500`
  - **Finishing** — Actions → Results. *"The score. What tells you it's working, and what to start next."* `purple-600`
- **What runs it** — agents (do the work), tools (extend the reach), systems (make it repeat). Plain examples, no product names; the point is *delegation done well*, not tool-worship.
- **The two moments that stay yours** — set the Desired, authorize the Actions — bridge line → `/supermind`.
- **CTA** — "The office that runs this is built through Avolve." → `avolve.io`; secondary → `/supermind`.

**(d) Design/layout/color** — Violet-purple throughout. Hero top-rule `from-violet-500 to-purple-500`. The loop as the same bordered 3-cell grid as home, but color-anchored: a thin top border on each cell tinting violet → purple → purple-600 left-to-right, mono step numbers (as current). "What runs it" = simple 3-item list with violet dots. Keep motion minimal (respect reduced-motion already in globals).

**(e) Membrane check** — Passes. Gameplay/loop framing is core here and allowed on movement sites; kept plain and non-preachy. No AVFO sales; Avolve is the build handoff.

**(f) NEW.**

---

## /personal — Personal Success Puzzle  · **NEW**

**(a) Purpose** — Define the family side of the office: the three areas of a personal life the office keeps solving.

**(b) Core message** — The "family" in family office. Three areas, always in play: **Health** (energy to spend), **Wealth** (means to spend it), **Peace** (people and quiet worth spending it on). Not a self-improvement checklist — a standing puzzle your office works async, so progress compounds while your attention is elsewhere.

**(c) Section-by-section**

- **Hero** — Eyebrow "Personal Success Puzzle". H1 *"The family side of a family office."* Sub: Health, Wealth, Peace — the three you're actually living for. *(amber-yellow rule)*
- **Health & energy** — the body and mind that everything else runs on. `amber-600`
- **Wealth & career** — what you build and what it earns you; means, not scorekeeping. `amber-400`/`yellow-500`
- **Peace & people** — relationships, quiet, the life the rest is in service of. `yellow-400`
- **How the office carries it** — async: the loop applied to personal areas so they don't fall to whoever shouts loudest that week.
- **CTA** — pair with the office side → `/business`; build it → `avolve.io`.

**(d) Design/layout/color** — Amber-yellow. Hero rule `from-amber-500 to-yellow-400`. Three areas as a 3-up or stacked list, each with its shade dot (Health warmest → Peace lightest). Warmth stays restrained on slate — small accents, not amber fields. Schema.org `WebPage`.

**(e) Membrane check** — Passes. Human, non-guru; no wellness-influencer or hustle tone; no presumption about the reader's starting health/wealth. No price, no AVFO pitch.

**(f) NEW.**

---

## /business — Business Success Puzzle  · **NEW**

**(a) Purpose** — Define the office side: the three faces of the value you create and run.

**(b) Core message** — The "office" in family office. Three faces of any venture you run: **Front-stage** (the users/customers who see the value), **Back-stage** (the admin/ops that make it real), **Bottom-line** (the profit that keeps it alive and compounds). The office runs all three async so more of what you create is kept, compounded, and protected.

**(c) Section-by-section**

- **Hero** — Eyebrow "Business Success Puzzle". H1 *"The office side of a family office."* Sub: Front-stage, Back-stage, Bottom-line — the three faces of what you build. *(teal-cyan rule)*
- **Front-stage — users** — the value people see and choose. `cyan-500`
- **Back-stage — admin** — the operations, systems, and records that make it real and legal. `teal-500`
- **Bottom-line — profit** — what's kept after everything; the fuel for the next loop. `teal-600`
- **How the office carries it** — async: the loop applied to each face, so nothing is running purely on your personal bandwidth.
- **CTA** — pair with the family side → `/personal`; build it → `avolve.io`.

**(d) Design/layout/color** — Teal-cyan. Hero rule `from-cyan-500 to-teal-600`. Three faces as 3-up/stacked with shade dots (cyan → teal → teal-600). Cool, precise, slightly more "operational" feel than /personal, but same restraint. Schema.org `WebPage`.

**(e) Membrane check** — Passes. Business framing is plain and outcome-led, not startup-bro; no revenue promises, no price; Avolve is the build handoff.

**(f) NEW.**

---

## /supermind — Supermind Superpowers  · **NEW**

**(a) Purpose** — Name the mind that runs the harness and make the human's role unmistakable: you stay in the two decisions that matter.

**(b) Core message** — A Supermind is **your mind plus your agents'**, together holding *Current* (where you are) and *Desired* (where you're going). The harness (Superpowers) turns that into action. Almost all of the loop can be delegated — but **two moments are always yours: set the Desired, authorize the Actions.** That's the whole point of an office of one: leverage without losing the wheel.

**(c) Section-by-section**

- **Hero** — Eyebrow "Supermind". H1 *"The mind that runs the harness."* Sub: yours plus your agents', holding Current and Desired. *(purple rule)*
- **Holds Current and Desired** — the office's shared memory of where you are and where you're going; kept up to date so every action is oriented.
- **Two moments are always yours** — (1) **set the Desired** — only you can say what you actually want; (2) **authorize the Actions** — nothing consequential runs without your yes. Everything between can be delegated.
- **Leverage without losing the wheel** — sovereignty note: the office multiplies your reach; the direction and the go/no-go stay human. This is what keeps an async office *yours*.
- **CTA** — see the harness it runs → `/superpowers`; build the office → `avolve.io`.

**(d) Design/layout/color** — Violet-purple, purple end. Hero rule `from-violet-500 to-purple-500` (closes the pair with /superpowers). The "two moments" as a clean two-item emphasis block (larger type, purple dots) — this is the page's spine, so give it the most weight. Otherwise slate and quiet. Schema.org `WebPage`.

**(e) Membrane check** — Passes. The human-in-the-loop / sovereignty framing is worldview-appropriate for a movement site and kept plain (no AI-doom or techno-utopian posturing). No AVFO sell; sovereignty framed as the member's control, not a data-layer product claim (that argument lives on Avolve).

**(f) NEW.**

---

## Build notes (shared)

- **Depth-first:** home already links nowhere; wiring the four sub-page links is part of the home *refine* and must land with the four NEW pages.
- **Nav:** header is currently wordmark + theme toggle only. Optional: add the four routes to the footer or a slim in-page nav — but honor route-freeze/sufficiency; don't build a mega-nav for six pages.
- **Consistency:** reuse the home shell (`max-w-5xl`, `px-6`, `border-t` sections, hero eyebrow + gradient rule + H1 + sub). Every sub-page = Hero → domain triad → "how it runs async" → CTA. Same skeleton, different domain color — that repetition is the design system.
- **Every public page:** Schema.org JSON-LD (per AGENTS.md).
- **Verify** color/contrast in both themes and at `prefers-contrast: more` before calling any page done.
