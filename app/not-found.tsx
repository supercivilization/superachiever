import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
      <div
        aria-hidden
        className="h-px w-12 bg-gradient-to-r from-violet-500 to-purple-500"
      />
      <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.2em] tabular-nums text-muted-foreground">
        Error 404
      </p>
      <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        This page isn’t here.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        The link may be broken, or the page may have moved. Everything that
        exists is one step from home.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
