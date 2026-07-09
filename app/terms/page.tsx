import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms for using superachiever.xyz — written to be read: what this site is, what it is not, and where responsibility sits.",
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Terms
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Terms written to be read.
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Using superachiever.xyz means agreeing to the following — stated plainly.
          Effective July 9, 2026.
        </p>
      </section>

      <section className="border-t border-border py-16">
        <div className="max-w-2xl space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">What this site is.</span>{" "}
            Information about Superachiever — published in good faith, kept current,
            and offered as-is, without warranties of any kind.
          </p>
          <p>
            <span className="font-medium text-foreground">What it is not.</span>{" "}
            Nothing here is investment, legal, tax, or accounting advice.
            For decisions in those domains, work with the licensed
            professionals you choose.
          </p>
          <p>
            <span className="font-medium text-foreground">Your use.</span>{" "}
            Use the site lawfully and don&apos;t abuse it (no scraping at
            volumes that degrade it, no attempts to breach it). Content is
            ours or used with permission; quote it with attribution.
          </p>
          <p>
            <span className="font-medium text-foreground">Changes and law.</span>{" "}
            We may update these terms; the effective date above moves when we
            do. United States law governs. Questions:{" "}
            <a href="mailto:josh@avolve.io" className="font-medium text-foreground underline-offset-4 hover:underline">
              josh@avolve.io
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
