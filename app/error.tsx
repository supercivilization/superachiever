"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
      <div
        aria-hidden
        className="h-px w-12 bg-gradient-to-r from-violet-500 to-purple-500"
      />
      <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Something went wrong
      </p>
      <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        An unexpected error occurred.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        The issue has been logged. You can try again, or head back home.
      </p>
      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-md text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
