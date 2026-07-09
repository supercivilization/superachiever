import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "What a Superachiever is — your own single-family office: a mind that knows, a harness that acts, and the two puzzles they keep solving.",
}

const facets = [
  {
    name: "Superpowers",
    dot: "bg-violet-500",
    href: "/superpowers",
    body: "The harness. The loop — Current → Desired → Actions → Results — made runnable by your agents, your tools, your systems, so starting, focusing, and finishing stop depending on a good day.",
  },
  {
    name: "Personal Success Puzzle",
    dot: "bg-amber-500",
    href: "/personal",
    body: "The family half of your family office. Health & Energy, Wealth & Career, Peace & People — the three things a good life runs on, treated as one system instead of three hobbies.",
  },
  {
    name: "Business Success Puzzle",
    dot: "bg-teal-500",
    href: "/business",
    body: "The office half of your family office. Front-stage users, back-stage admin, bottom-line profit — your enterprise run as one system with three faces, not a hustle that consumes you.",
  },
  {
    name: "Supermind",
    dot: "bg-purple-500",
    href: "/supermind",
    body: "The mind that runs the harness — yours plus your agents’, holding where you are and where you’re going. Two moments are always yours: set the Desired, authorize the Actions.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://superachiever.xyz/about#webpage",
      url: "https://superachiever.xyz/about",
      name: "About Superachiever",
      description:
        "What a Superachiever is — your own single-family office: a mind that knows, a harness that acts, and the two puzzles they keep solving.",
      isPartOf: { "@id": "https://superachiever.xyz/#website" },
      about: [
        "https://superachiever.xyz/superpowers",
        "https://superachiever.xyz/personal",
        "https://superachiever.xyz/business",
        "https://superachiever.xyz/supermind",
      ],
      mentions: {
        "@type": "Person",
        "@id": "https://joshuaseymour.com/#person",
        name: "Joshua Seymour",
        url: "https://joshuaseymour.com",
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
          About · The model
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Your own family office. Your own success puzzle.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Most people run life and work as an unmanaged pile of open loops. A
          Superachiever runs them as a family office: a mind that holds where
          you are and where you’re going, a harness that turns that into
          scheduled action, and two puzzles — personal and business — it keeps
          solving. Async and self-paced, because your family office works while
          you don’t.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          You’re already on the path — the fact that you’re reading this means
          you’ve been assembling the pieces for years. Wherever you are,
          first pieces or well along, you start from there. Nothing here
          presumes your level; every level reads the same page.
        </p>
      </section>

      {/* The four facets */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The four facets
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          One family office, four components — an engine that knows and acts,
          and the two puzzles it works on.
        </h2>
        <ul className="mt-8 max-w-2xl space-y-10">
          {facets.map((facet) => (
            <li key={facet.name} className="flex gap-4">
              <span
                aria-hidden
                className={`mt-2 size-1.5 shrink-0 rounded-full ${facet.dot}`}
              />
              <div>
                <p className="font-medium">{facet.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {facet.body}
                </p>
                <a
                  href={facet.href}
                  className="mt-2 inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {facet.name} →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing */}
      <section className="border-t border-border py-20">
        <h2 className="max-w-2xl text-balance text-2xl font-medium tracking-tight">
          The path is shared. Walk it at your own pace.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Founding membership opens with the founding family offices, 2026.
          Participation starts now — privately, on founding terms, wherever you
          are on the path.
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
