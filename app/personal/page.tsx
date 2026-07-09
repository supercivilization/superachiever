import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personal Success Puzzle",
  description:
    "The family half of your family office — Health & Energy, Wealth & Career, Peace & People, run as one system instead of three hobbies.",
}

const pieces = [
  {
    name: "Health & Energy",
    felt: "The energy everything else runs on.",
    dot: "bg-amber-500",
    body: "Healthspan, not lifespan — keep the years functional, not merely numerous. The strongest modifiable lever is fitness: each 1-MET gain in aerobic capacity is associated with roughly 11–17% lower all-cause mortality, and strength is what protects your independence. Your family office keeps the training, the checkups, and the follow-through scheduled — so the base gets built even in busy seasons.",
  },
  {
    name: "Wealth & Career",
    felt: "Money as a tool, not a scoreboard.",
    dot: "bg-amber-400",
    body: "Financial independence is a defined line — investment income covering living costs, roughly 25× annual expenses invested. Behavior beats brilliance: savings rate matters more than income, income more than returns, and compounding does the rest if you don’t interrupt it. Know your “enough,” so this piece never eats the other two. Your career is the engine that funds the rate.",
  },
  {
    name: "Peace & People",
    felt: "The relationships and calm that make it worth it.",
    dot: "bg-yellow-400",
    body: "The longest-running study of adult life — 85+ years at Harvard — keeps returning one answer: the quality of your close relationships is the single best predictor of a happy and healthy life. Peace isn’t a mood you wait for; it’s time protected for the people who matter, and a calm that the other two pieces exist to fund.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://superachiever.xyz/personal#webpage",
      url: "https://superachiever.xyz/personal",
      name: "Personal Success Puzzle",
      description:
        "The family half of your family office — Health & Energy, Wealth & Career, Peace & People, run as one system instead of three hobbies.",
      isPartOf: { "@id": "https://superachiever.xyz/#website" },
      about: { "@id": "https://superachiever.xyz/personal#term" },
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://superachiever.xyz/personal#term",
      name: "Personal Success Puzzle",
      url: "https://superachiever.xyz/personal",
      description:
        "The three things a good life runs on — health, wealth, and peace — treated as one system that compounds together or fails together, rather than three separate projects.",
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
          className="h-px w-12 bg-gradient-to-r from-amber-500 to-yellow-400"
        />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Personal Success Puzzle · The family half
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          The family half of your family office.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The three things a good life runs on — your health, your
          money, your peace — treated as one system, not three hobbies. They
          compound together or fail together, so your family office runs them
          together: async, at your pace, so progress accrues even while your
          attention is elsewhere.
        </p>
      </section>

      {/* The three pieces */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Three pieces, one system
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          You’ve felt what it costs to win at one of these and lose the others.
          The discipline is keeping all three above threshold at once.
        </h2>
        <ul className="mt-8 max-w-2xl space-y-10">
          {pieces.map((piece) => (
            <li key={piece.name} className="flex gap-4">
              <span
                aria-hidden
                className={`mt-2 size-1.5 shrink-0 rounded-full ${piece.dot}`}
              />
              <div>
                <p className="font-medium">{piece.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {piece.felt}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {piece.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* How the family office carries it */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Why one puzzle, not three
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          Energy funds everything. Money buys back time. Relationships are what
          the other two are for.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          The failure mode is optimizing one piece to the ruin of the others —
          the fit-but-broke, the rich-but-lonely. Run as one portfolio by your
          family office, the feedback loops work for you instead: health powers
          the career, the money removes a whole category of stress, and the
          people pay it all back into both.
        </p>
      </section>

      {/* Closing */}
      <section className="border-t border-border py-20">
        <h2 className="max-w-2xl text-balance text-2xl font-medium tracking-tight">
          Health, wealth, peace — the life the family office is for.
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
