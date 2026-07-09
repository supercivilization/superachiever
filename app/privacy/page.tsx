import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What Superachiever collects (almost nothing), what it never does with your information, and how to reach a human about any of it.",
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Privacy
        </p>
        <h1 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          We collect almost nothing. Here is all of it.
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Discretion is not a setting here — it is the way Superachiever is built.
          This page says plainly what exists, what never happens, and who to
          ask. Effective July 9, 2026.
        </p>
      </section>

      <section className="border-t border-border py-16">
        <h2 className="text-2xl font-medium tracking-tight text-balance">What we collect</h2>
        <ul className="mt-6 grid max-w-2xl gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
              <span>Nothing, today. This site has no forms and no accounts; subscription happens on supercivilization.xyz under its privacy terms.</span>
            </li>
        </ul>
      </section>

      <section className="border-t border-border py-16">
        <h2 className="text-2xl font-medium tracking-tight text-balance">What never happens</h2>
        <ul className="mt-6 grid max-w-2xl gap-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" /><span>No advertising trackers, no third-party analytics scripts, no cookies beyond what the site needs to function.</span></li>
          <li className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" /><span>Your information is never sold, rented, or shared for marketing — to anyone, ever.</span></li>
          <li className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" /><span>Nothing you send us is used to train anyone&apos;s models.</span></li>
        </ul>
      </section>

      <section className="border-t border-border py-16">
        <h2 className="text-2xl font-medium tracking-tight text-balance">Who touches the data</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          No third-party data processors beyond hosting. Hosting is provided by Vercel, which keeps standard
          server logs (IP address, request time) for security and operations.
          That is the whole list.
        </p>
      </section>

      <section className="border-t border-border py-16">
        <h2 className="text-2xl font-medium tracking-tight text-balance">Your choices</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Want anything corrected or deleted, or just want to know what we
          hold about you? Email{" "}
          <a href="mailto:josh@avolve.io" className="font-medium text-foreground underline-offset-4 hover:underline">
            josh@avolve.io
          </a>{" "}
          — a human reads it, and unsubscribing or deleting is honored without
          ceremony.
        </p>
      </section>
    </main>
  )
}
