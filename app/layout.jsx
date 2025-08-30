import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/globals.css';
import '@/styles/vendors/menu.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from './ClientLayout';
import JsonLd from "@/components/seo/JsonLd";
import { orgLD, websiteLD } from "@/lib/jsonld";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.devibi.com"),
  title: { default: "Devibi", template: "%s — Devibi" },
  description: "We design & build B2B SaaS that ships cleanly to dev."
};

export const dynamic = "force-static";
export const revalidate = 86400;

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
        <JsonLd id="ld-org" data={orgLD} />
        <JsonLd id="ld-website" data={websiteLD} />
      </body>
    </html>
  );
}