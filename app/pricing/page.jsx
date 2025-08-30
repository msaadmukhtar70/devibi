// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// SEO Optimized Metadata
export const metadata = {
  title: 'Pricing & Engagement Models | Devibi',
  description: 'De-risk your investment with transparent pricing. We offer fixed-price Sprints and flexible retainers for B2B SaaS startups who need clear outcomes without surprises.',
  alternates: { canonical: '/pricing' },
};

import PricingClient from './PricingClient';

export default function PricingPage() {
  return <PricingClient />;
}