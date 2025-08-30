// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer";
import Link from "next/link";
import FaqClient from "./FaqClient";
import JsonLd from "@/components/seo/JsonLd";
import { faqLD, webPageLD, breadcrumbLD } from "@/lib/jsonld";
import { FAQS, FAQ_DATA } from "@/lib/faq-data";

// SEO Optimized Metadata
export const metadata = {
  title: "FAQs | Questions B2B SaaS Founders Ask | Devibi",
  description: "Answers to common questions about our process, pricing, timelines, and deliverables for B2B SaaS product development.",
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {

  const faq = faqLD(FAQS);
  const web = webPageLD({
    canonical: "/faq",
    title: "FAQ | Devibi",
    description: "Answers to common questions about our process and pricing.",
    type: "FAQPage",
  });
  const crumbs = breadcrumbLD([
    { name: "Home", item: "/" },
    { name: "FAQ", item: "/faq" },
  ]);
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Frequently Asked Questions</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Breadcrumb Section End :::... */}

        <FaqClient />
      <JsonLd id="ld-faqpage" data={web} />
      <JsonLd id="ld-faq" data={faq} />
      <JsonLd id="ld-breadcrumb-faq" data={crumbs} />
      </main>
      <Footer_01 />
    </>
  );
}