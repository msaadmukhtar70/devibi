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
    '/case-studies',
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

  const caseStudyUrls = [
    '/case-studies/ai-integration-for-startups',
    '/case-studies/saas-design-best-practices',
    '/case-studies/mvp-development-guide',
  ];

  // Combine all URLs
  const allUrls = [
    ...staticUrls,
    ...serviceUrls,
    ...portfolioUrls,
    ...caseStudyUrls,
  ];

  return allUrls.map(url => ({
    url: base + url,
    lastModified: now,
    changeFrequency: url === '/' ? 'daily' : url.includes('/case-studies') ? 'weekly' : 'monthly',
    priority: url === '/' ? 1.0 : url.includes('/services') || url === '/pricing' ? 0.8 : 0.6,
  }));
}