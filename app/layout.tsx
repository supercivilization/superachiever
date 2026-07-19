import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL("https://superachiever.xyz"),
  title: {
    default: "Superachiever",
    template: "%s · Superachiever",
  },
  description:
    "One member of Supercivilization. Your own single-family office, run async, creating your success puzzle for member benefits.",
  alternates: { canonical: "./" },
  openGraph: {
    siteName: "Superachiever",
    type: "website",
    url: "./",
    title: "Superachiever",
    description:
      "Create your success puzzle. Your own single-family office, run async, for member benefits.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@joshuaseymour",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://superachiever.xyz/#website",
      name: "Superachiever",
      url: "https://superachiever.xyz",
      description:
        "One member of Supercivilization: the async single-family office — create your success puzzle for member benefits.",
      publisher: { "@id": "https://supercivilization.xyz/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://supercivilization.xyz/#organization",
      name: "Supercivilization",
      url: "https://supercivilization.xyz",
      sameAs: ["https://x.com/supercivilizing"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
