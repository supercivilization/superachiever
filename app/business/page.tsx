import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Success Puzzle",
  description:
    "The office half of your family office — front-stage users, back-stage admin, bottom-line profit, run as one system with three faces.",
}

const faces = [
  {
    name: "Front-stage Users",
    felt: "Where value is experienced.",
    dot: "bg-cyan-500",
    body: "Everything the customer sees and feels. The work is fit: matching what you offer to the jobs your users are trying to get done, the pains in their way, the gains they want. The stake is measurable — “no market need” is the #1 reason startups fail, cited in 42% of post-mortems. A front stage nobody asked for is the most expensive thing you can build.",
  },
  {
    name: "Back-stage Admin",
    felt: "Where value is made.",
    dot: "bg-teal-500",
    body: "The activities, resources, and partnerships that deliver the promise — invisible to the customer, decisive to the business. The back stage supports the front stage, never the reverse. It’s also the under-managed face where quiet failure lives, and the one your family office increasingly runs for you: work delegated to named agents, with an approval queue and an audit trail.",
  },
  {
    name: "Bottom-line Profit",
    felt: "Where the model is proven.",
    dot: "bg-teal-600",
    body: "Revenue from the front stage minus costs from the back stage — the evidence the whole system works. Cash is the oxygen: roughly 82% of small-business failures trace to cash-flow mismanagement, and about half of new businesses are gone within five years. Full bottom-line visibility, early — and your family office never moves your money.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://superachiever.xyz/business#webpage",
      url: "https://superachiever.xyz/business",
      name: "Business Success Puzzle",
      description:
        "The office half of your family office — front-stage users, back-stage admin, bottom-line profit, run as one system with three faces.",
      isPartOf: { "@id": "https://superachiever.xyz/#website" },
      about: { "@id": "https://superachiever.xyz/business#term" },
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://superachiever.xyz/business#term",
      name: "Business Success Puzzle",
      url: "https://superachiever.xyz/business",
      description:
        "The discipline of running a business as one integrated system with three faces: the front stage where users experience value, the back stage where the work is made, and the bottom line where profit proves the model.",
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
          className="h-px w-12 bg-gradient-to-r from-cyan-500 to-teal-600"
        />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Business Success Puzzle · The office half
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          The office half of your family office.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A business isn’t a hustle or a personality — it’s one system with
          three faces: a front stage where users meet value, a back stage where
          the work gets made, and a bottom line where the money proves it. If
          you’re working flat out and still can’t tell whether it’s working,
          that’s not a you problem. It’s an unsolved system.
        </p>
      </section>

      {/* The three faces */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Three faces, one system
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          The same three faces the standard business-model canvas teaches —
          stated plainly, and staffed for you.
        </h2>
        <ul className="mt-8 max-w-2xl space-y-10">
          {faces.map((face) => (
            <li key={face.name} className="flex gap-4">
              <span
                aria-hidden
                className={`mt-2 size-1.5 shrink-0 rounded-full ${face.dot}`}
              />
              <div>
                <p className="font-medium">{face.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {face.felt}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {face.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* How the family office carries it */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Why it’s a puzzle, not a checklist
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          The three faces constrain each other — that’s the whole game.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Value users love that costs more to deliver than they’ll pay is a
          charity. A lean back stage delivering something nobody wants is a
          hobby. Your family office is the integrator that keeps all three
          coherent — one operating system for your enterprise, owned by you,
          authorized by you, run async. You can see the whole system now.
        </p>
      </section>

      {/* Closing */}
      <section className="border-t border-border py-20">
        <h2 className="max-w-2xl text-balance text-2xl font-medium tracking-tight">
          A real operating team — owned by you.
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
