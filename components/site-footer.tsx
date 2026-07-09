const family = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "https://supercivilization.xyz", label: "Supercivilization" },
  { href: "https://superachievers.xyz", label: "Superachievers" },
  { href: "https://avolve.io", label: "Avolve" },
  { href: "https://joshuaseymour.com", label: "Joshua Seymour" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">© 2026 Superachiever</p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {family.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
