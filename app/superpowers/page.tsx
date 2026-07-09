import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Superpowers",
  description:
    "The three powers of a Superachiever — starting, focusing, finishing — one complete loop from Current to Desired to Actions to Results.",
}

const powers = [
  {
    step: "1",
    name: "Starting",
    move: "Current → Desired",
    rule: "bg-violet-500",
    body: "Starting a plan for a conflict: name what you don’t want precisely enough to define what you do want against it. Desire is contrast, not fantasy — imagining the wish fulfilled, by itself, predicts worse outcomes; holding the desired future and the present obstacle together is what turns a wish into commitment.",
  },
  {
    step: "2",
    name: "Focusing",
    move: "Desired → Actions",
    rule: "bg-gradient-to-r from-violet-500 to-purple-500",
    body: "Focusing the plan: a desire converts into behavior by being pre-decided, not by willpower. “If X, then I’ll do Y” roughly doubles to triples follow-through — a medium-large effect across 94 studies. Choose the few next actions, bind each to a trigger, and price them honestly.",
  },
  {
    step: "3",
    name: "Finishing",
    move: "Actions → Results",
    rule: "bg-purple-500",
    body: "Finishing the plan: only about 47% of intentions ever become action, and every unclosed loop taxes your attention until it’s done. Run to a measured result — visible progress pulls a loop closed, and finishing is how you get your mind back.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://superachiever.xyz/superpowers#webpage",
      url: "https://superachiever.xyz/superpowers",
      name: "Superpowers",
      description:
        "The three powers of a Superachiever — starting, focusing, finishing — one complete loop from Current to Desired to Actions to Results.",
      isPartOf: { "@id": "https://superachiever.xyz/#website" },
      about: { "@id": "https://superachiever.xyz/superpowers#term" },
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://superachiever.xyz/superpowers#term",
      name: "Supermind Superpowers",
      url: "https://superachiever.xyz/superpowers",
      description:
        "The practice of running one complete problem-solving loop — Current → Desired → Actions → Results — and getting unstuck at the three places people stall: starting, focusing, and finishing.",
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        "@id": "https://supercivilization.xyz/#glossary",
        name: "Supercivilization glossary",
      },
    },
  ],
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Opening */}
      <section className="py-24 sm:py-32">
        <div
          aria-hidden
          className="h-px w-12 bg-gradient-to-r from-violet-500 to-purple-500"
        />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Superpowers · The harness
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Finish what you begin.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Superpowers aren’t motivation. They’re one loop — Current → Desired →
          Actions → Results — made runnable by your family office, with three
          powers at its seams: starting a plan for a conflict, focusing it, and
          finishing it. Most advice optimizes one segment and calls it the
          whole system; the power is the complete loop, and the three names
          tell you exactly where you’re stuck.
        </p>
      </section>

      {/* The three powers */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The three powers
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          You’re not lazy or scattered — most intentions never become action by
          default. That’s wiring, not character. Each power closes one gap.
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {powers.map((power) => (
            <div key={power.step} className="bg-background p-8">
              <div aria-hidden className={`h-px w-8 ${power.rule}`} />
              <p className="mt-4 font-mono text-sm tabular-nums text-muted-foreground">
                {power.step}
              </p>
              <p className="mt-3 text-lg font-medium leading-snug tracking-tight">
                {power.name}
              </p>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {power.move}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {power.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The diagnostic worth keeping: which of the three are you stuck at
          right now? Not “unproductive” in general — stuck at starting,
          focusing, or finishing, on one specific loop.
        </p>
      </section>

      {/* What stays yours */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          What stays yours
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          Your agents do the work, your tools extend the reach, your systems
          make it repeat — and two moments are always yours.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Set the Desired. Authorize the Actions. Everything between is
          delegable — that’s what makes the loop a harness instead of another
          job. The mind that holds those two moments is the{" "}
          <a
            href="/supermind"
            className="rounded-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Supermind
          </a>
          .
        </p>
      </section>

      {/* Closing */}
      <section className="border-t border-border py-20">
        <h2 className="max-w-2xl text-balance text-2xl font-medium tracking-tight">
          Run the loop with company.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Founding membership opens with the founding family offices, 2026.
          Participation starts now — privately, on founding terms.
        </p>
        <div className="mt-8">
          <a
            href="https://supercivilization.xyz/participate"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Participate privately
          </a>
        </div>
      </section>
    </main>
  )
}
