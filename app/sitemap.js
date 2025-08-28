import { ALL_SERVICES } from '../lib/services';

export default function sitemap() {
  const base = 'https://devibi-ten.vercel.app';
  const now = new Date();

  // Static routes
  const staticUrls = [
    '/',
    '/about',
    '/contact',
    '/pricing',
    '/services',
    '/portfolio',
    '/blogs',
    '/team',
    '/faq-1',
  ];

  // Dynamic service routes
  const serviceUrls = ALL_SERVICES.map(service => `/services/${service.slug}`);

  // Sample portfolio and blog routes - you can expand these with actual data later
  const portfolioUrls = [
    '/portfolio/acme-insights',
    '/portfolio/tech-startup-mvp',
    '/portfolio/fintech-redesign',
  ];

  const blogUrls = [
    '/blogs/ai-integration-for-startups',
    '/blogs/saas-design-best-practices',
    '/blogs/mvp-development-guide',
  ];

  // Combine all URLs
  const allUrls = [
    ...staticUrls,
    ...serviceUrls,
    ...portfolioUrls,
    ...blogUrls,
  ];

  return allUrls.map(url => ({
    url: base + url,
    lastModified: now,
    changeFrequency: url === '/' ? 'daily' : url.includes('/blogs') ? 'weekly' : 'monthly',
    priority: url === '/' ? 1.0 : url.includes('/services') || url === '/pricing' ? 0.8 : 0.6,
  }));
}