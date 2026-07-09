import type { MetadataRoute } from "next"

const paths = [
  "/privacy",
  "/terms","", "/about", "/superpowers", "/personal", "/business", "/supermind"]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://superachiever.xyz"
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }))
}
