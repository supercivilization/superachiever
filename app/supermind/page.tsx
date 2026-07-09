import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Supermind",
  description:
    "The mind that runs your family office — yours plus your agents’, holding Current and Desired. Two moments are always yours.",
}

const moments = [
  {
    name: "Set the Desired",
    body: "Only you can say what you actually want. No agent, no system, no advisor sets the destination — the direction of your family office is authored by you, always.",
  },
  {
    name: "Authorize the Actions",
    body: "Nothing consequential runs without your yes. The go/no-go stays human — that’s what keeps an async family office yours, not something that happens to you.",
  },
]

const practice = [
  {
    step: "1",
    name: "Name the Current",
    body: "What, exactly, don’t you want? One plain sentence about one real thing.",
  },
  {
    step: "2",
    name: "Define the Desired",
    body: "What do you want instead — defined against that Current, not floating free of it?",
  },
  {
    step: "3",
    name: "Choose the Actions",
    body: "The few next steps, each bound to a moment: when X happens, I do Y.",
  },
  {
    step: "4",
    name: "Run to Results",
    body: "Finish and score it. Did the measure move toward the Desired? Then the next loop starts.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://superachiever.xyz/supermind#webpage",
      url: "https://superachiever.xyz/supermind",
      name: "Supermind",
      description:
        "The mind that runs your family office — yours plus your agents’, holding Current and Desired. Two moments are always yours.",
      isPartOf: { "@id": "https://superachiever.xyz/#website" },
      about: { "@id": "https://superachiever.xyz/supermind#term" },
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://superachiever.xyz/supermind#term",
      name: "Supermind",
      url: "https://superachiever.xyz/supermind",
      description:
        "Your mind plus your agents’, together holding Current (where you are) and Desired (where you’re going) — the knowing half of a family office, with two moments always human: set the Desired, authorize the Actions.",
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
          Supermind · The engine
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          The mind that runs both halves.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Your Supermind is your mind plus your agents’ — together holding
          Current (where you are) and Desired (where you’re going), kept so
          current that every action across your personal and business puzzles
          is aimed at the same Desired. It’s the knowing half of your family office; the
          Superpowers are the doing half. Insight, not surveillance — a memory
          you own.
        </p>
      </section>

      {/* The two moments */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Two moments, always yours
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          Everything between them can be delegated. These two, never.
        </h2>
        <ul className="mt-8 max-w-2xl space-y-8">
          {moments.map((moment) => (
            <li key={moment.name} className="flex gap-4">
              <span
                aria-hidden
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-purple-500"
              />
              <div>
                <p className="text-lg font-medium leading-snug tracking-tight">
                  {moment.name}
                </p>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {moment.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* The loop as daily practice */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The daily practice
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          Run one loop on one real thing this week.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Not a system overhaul — one loop, small enough to finish. This is the
          whole practice; the family office exists to run it for you, at scale,
          while these four moves stay this simple.
        </p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {practice.map((move) => (
            <div key={move.step} className="bg-background p-8">
              <p className="font-mono text-sm tabular-nums text-muted-foreground">
                {move.step}
              </p>
              <p className="mt-3 text-lg font-medium leading-snug tracking-tight">
                {move.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {move.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border py-20">
        <h2 className="max-w-2xl text-balance text-2xl font-medium tracking-tight">
          A mind that knows your world, working for you — and owned by you.
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
