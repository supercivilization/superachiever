import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const pieces = [
  {
    name: "Superpowers",
    dot: "bg-violet-500",
    href: "/superpowers",
    body: "The harness — the loop (Current → Desired → Actions → Results) made runnable: your agents, your tools, your systems. Everything delegable, delegated well.",
  },
  {
    name: "Personal Success Puzzle",
    dot: "bg-amber-500",
    href: "/personal",
    body: "Your health and energy. Your wealth and career. Your peace and people. The family half of a family office.",
  },
  {
    name: "Business Success Puzzle",
    dot: "bg-teal-500",
    href: "/business",
    body: "Your front-stage users. Your back-stage admin. Your bottom-line profit. The office half of a family office.",
  },
  {
    name: "Supermind",
    dot: "bg-purple-500",
    href: "/supermind",
    body: "The mind that runs the harness — yours plus your agents’, holding Current and Desired. Two moments are always yours: set the Desired, authorize the Actions.",
  },
]

const loop = [
  {
    step: "1",
    name: "Starting",
    move: "Current → Desired",
    body: "Name what you don’t want. Define what you do want, in relation to it.",
  },
  {
    step: "2",
    name: "Focusing",
    move: "Desired → Actions",
    body: "The next logical steps from here to there — chosen, scheduled, begun.",
  },
  {
    step: "3",
    name: "Finishing",
    move: "Actions → Results",
    body: "The score. What tells you it’s working, and what to start next.",
  },
]

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://superachiever.xyz/#webpage",
            url: "https://superachiever.xyz",
            name: "Superachiever",
            isPartOf: { "@id": "https://superachiever.xyz/#website" },
          }),
        }}
      />
      {/* Hero */}
      <section className="py-24 sm:py-32 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both motion-reduce:animate-none">
        <div
          aria-hidden
          className="h-px w-12 bg-gradient-to-r from-violet-500 to-purple-500"
        />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Superachiever · One member
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Create your success puzzle.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          As a Superachiever — one member of Supercivilization — you run your
          own single-family office async, at your own pace. Your family office carries
          the load beneath you, so more of what you create is kept, compounded,
          and protected. Wherever you are on the path, you start from there —
          participate privately, for member benefits.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="https://supercivilization.xyz/participate"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Participate privately
          </a>
          <a
            href="https://avolve.io"
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Your family office is built through Avolve
            <ArrowUpRight
              aria-hidden
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>

      {/* The four components */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Your family office
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          Your single-family office has four components.
        </h2>
        <ul className="mt-8 max-w-2xl space-y-8">
          {pieces.map((piece) => (
            <li key={piece.name}>
              <Link href={piece.href} className="group flex gap-4">
                <span
                  aria-hidden
                  className={`mt-2 size-1.5 shrink-0 rounded-full ${piece.dot}`}
                />
                <div>
                  <p className="inline-flex items-center gap-1.5 font-medium">
                    {piece.name}
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {piece.body}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* The loop */}
      <section className="border-t border-border py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The loop
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight">
          What separates an achiever from a superachiever is completing the
          loop — starting, focusing, finishing.
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {loop.map((stage) => (
            <div key={stage.step} className="bg-background p-8">
              <p className="font-mono text-sm tabular-nums text-muted-foreground">
                {stage.step}
              </p>
              <p className="mt-3 text-lg font-medium leading-snug tracking-tight">
                {stage.name}
              </p>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {stage.move}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Honest close */}
      <section className="border-t border-border py-20">
        <h2 className="max-w-2xl text-balance text-2xl font-medium tracking-tight">
          Founding membership opens with the founding family offices, 2026.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Until then, everything is built where you can watch — the{" "}
          <a
            href="https://supercivilization.xyz"
            className="rounded-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            publication
          </a>{" "}
          is the front row.
        </p>
      </section>
    </main>
  )
}
