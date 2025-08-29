// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer";
import Link from "next/link";
import FaqClient from "./FaqClient";

// SEO Optimized Metadata
export const metadata = {
  title: "FAQs | Questions B2B SaaS Founders Ask | Devibi",
  description: "Answers to common questions about our process, pricing, timelines, and deliverables for B2B SaaS product development.",
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
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

      </main>
      <Footer_01 />
    </>
  );
}