import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/globals.css';
import '@/styles/vendors/menu.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from './ClientLayout';

const DMSans = localFont({
  src: '../fonts/DMSans-Bold.woff2',
  variable: '--font-DMSans',
});

const ClashDisplay = localFont({
  src: '../fonts/ClashDisplay-Medium.woff2',
  variable: '--font-clash-display',
});

const Raleway = localFont({
  src: '../fonts/Raleway-Bold.woff2',
  variable: '--font-raleway',
});

const SpaceGrotesk = localFont({
  src: '../fonts/SpaceGrotesk-Bold.woff2',
  variable: '--font-space-grotesk',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://devibi-ten.vercel.app'),
  title: { default: 'Devibi', template: '%s | Devibi' },
  description: 'Launch a revenue-ready B2B SaaS in 8–12 weeks.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://devibi-ten.vercel.app',
    title: 'Devibi',
    description: 'Launch a revenue-ready B2B SaaS in 8–12 weeks.',
    siteName: 'Devibi',
  },
  twitter: { card: 'summary_large_image', title: 'Devibi', description: 'Launch B2B SaaS in 8–12 weeks.' },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${DMSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable}`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
