import { MetadataRoute } from "next";
import { states } from "@/lib/states";
import { blogPosts } from "@/lib/blog";
import { cities, getCitiesByState } from "@/lib/cities";
import { dealers } from "@/lib/dealers";

const BASE = "https://firearmselect.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/dealers`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const statePages = states.map((s) => ({
    url: `${BASE}/${s.slug}/gun-laws`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const stateDealerPages = states
    .filter((s) => getCitiesByState(s.slug).length > 0)
    .map((s) => ({
      url: `${BASE}/dealers/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));

  const cityPages = cities.map((c) => ({
    url: `${BASE}/dealers/${c.stateSlug}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const dealerPages = dealers.map((d) => ({
    url: `${BASE}/dealers/${d.state}/${d.citySlug}/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...statePages, ...stateDealerPages, ...cityPages, ...dealerPages, ...blogPages];
}
