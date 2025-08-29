// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// SEO Optimized Metadata
export const metadata = {
  title: 'Portfolio - Revenue-Ready B2B SaaS Products | Devibi',
  description: 'Case studies showing how we help founders launch and scale. See the outcomes, timelines, and tech stacks behind our B2B SaaS development work.',
  alternates: { canonical: '/portfolio' },
};

import PortfolioClient from './PortfolioClient';
import { CASES } from '@/lib/cases';

export default function PortfolioPage() {
  return <PortfolioClient cases={CASES} />;
}