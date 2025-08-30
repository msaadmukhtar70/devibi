// app/robots.js
export default function robots() {
  const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.devibi.com").replace(/\/$/, "");

  return {
    host: site,
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block thin/utility endpoints from the index
        disallow: [
          "/api/",
          "/admin/",
          "/drafts/",
          "/private/",
          "/login",
          "/signup",
          "/reset-password",
          "/404",
          "/500",
          "/search" // keep if you don’t want search results indexed
        ],
      },
      // Example UA-specific rule (keep or remove as you prefer)
      // { userAgent: "AdsBot-Google", allow: "/" },
    ],
    // If you only have one sitemap, keep just the first entry
    sitemap: [
      `${site}/sitemap.xml`,
      // `${site}/sitemap-images.xml`,
      // `${site}/sitemap-videos.xml`,
      // `${site}/sitemap-blog.xml`,
    ],
  };
}
