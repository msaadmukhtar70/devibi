// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// Add minimal metadata
export const metadata = {
  title: 'Pricing - Transparent B2B SaaS Development Costs',
  description: 'Clear pricing for MVP development, design sprints, and dedicated teams. Fixed scopes and monthly retainers available.',
  alternates: { canonical: '/pricing' },
};

import PricingClient from './PricingClient';

export default function PricingPage() {
  return <PricingClient />;
}