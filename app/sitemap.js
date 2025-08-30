// app/sitemap.js
// Refresh the sitemap hourly
export const revalidate = 3600;

import { ALL_SERVICES } from "@/lib/services";
import { BLOGS } from "@/lib/blogs";
import { CASES } from "@/lib/cases";

// Normalize site (no trailing slash). Pick ONE canonical domain and use it everywhere.
const SITE =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://www.devibi.com").replace(/\/$/, "");

function toDate(input, fallback = new Date()) {
  const d = input ? new Date(input) : null;
  return d && !Number.isNaN(+d) ? d : fallback;
}

export default async function sitemap() {
  const now = new Date();

  // Static sections
  const staticRoutes = [
    { path: "/",            cf: "weekly",  pr: 1.0 },
    { path: "/about",       cf: "monthly", pr: 0.6 },
    { path: "/services",    cf: "weekly",  pr: 0.8 },
    { path: "/blogs",       cf: "daily",   pr: 0.7 },
    { path: "/portfolio",   cf: "weekly",  pr: 0.7 },
    { path: "/pricing",     cf: "monthly", pr: 0.6 },
    { path: "/contact",     cf: "yearly",  pr: 0.4 },
    { path: "/faq",         cf: "monthly", pr: 0.5 },
    { path: "/team",        cf: "monthly", pr: 0.5 },
  ].map(({ path, cf, pr }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: cf,
    priority: pr,
  }));

  // Services
  const serviceRoutes = (ALL_SERVICES || [])
    .filter((s) => !s.draft)
    .map((s) => ({
      url: `${SITE}/services/${s.slug}`,
      lastModified: toDate(s.updatedAt || s.lastModified, now),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  // Blogs
  const blogRoutes = (BLOGS || [])
    .filter((b) => !b.draft)
    .map((b) => ({
      url: `${SITE}/blogs/${b.slug}`,
      lastModified: toDate(b.updatedAt || b.date, now),
      changeFrequency: "daily",
      priority: 0.7,
    }));

  // Case studies / portfolio
  const caseRoutes = (CASES || [])
    .filter((c) => !c.draft)
    .map((c) => ({
      url: `${SITE}/portfolio/${c.slug}`,
      lastModified: toDate(c.updatedAt || c.lastModified, now),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseRoutes];
}
