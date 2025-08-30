"use client";
import Footer_01 from "@/components/footer/Footer";
import Header_01 from "@/components/header/Header_01";
import PricingTabs from "@/components/PricingTabs";
import PricingAccordion from "@/components/PricingAccordion";
import Image from "next/image";
import Link from "next/link";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";

function PricingClient() {
  const [activeTab, handleTab] = useTabs(0);
  const [activeIndex, handleAccordion] = useAccordion(0);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Pricing & Engagement Models</h1>
                <ul className="breadcrumb-nav">
                  <li><Link href="/">Home</Link></li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Breadcrumb Section End :::... */}

        {/*...::: Pricing Section Start :::... */}
        <section className="pricing-section">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-12">
                <div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
                  <h2>Simple, founder-friendly pricing</h2>
                  <p className="text-lg mt-4 text-black/70">
                    Two ways to work with us, both built for B2B SaaS. Choose a
                    fixed-scope sprint when the outcome is clear, or a monthly
                    retainer for ongoing growth. Transparent scope, weekly demos,
                    and zero surprises.
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="container mx-auto">
                {/* Tab buttons */}
                <div className="jos flex justify-center px-2" data-jos_delay="0.3">
                  <div className="inline-flex flex-wrap items-center gap-2 rounded-[50px] border-2 border-black font-semibold px-2 py-1">
                    <button
                      className={`tab-button price-button transition-colors duration-150 ${activeTab === 0 ? "active" : ""}`}
                      onClick={() => handleTab(0)}
                      data-tab="fixed-scope"
                    >
                      Fixed-Scope Sprints
                    </button>
                    <button
                      className={`tab-button price-button transition-colors duration-150 ${activeTab === 1 ? "active" : ""}`}
                      onClick={() => handleTab(1)}
                      data-tab="retainer"
                    >
                      Monthly Retainers
                    </button>
                  </div>
                </div>

                <div className="mt-12 lg:mt-16 xl:mt-20">
                  {/* FIXED-SCOPE TAB */}
                  {activeTab === 0 && (
                    <ul
                      id="fixed-scope"
                      className="tab-content mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                      {/* Launch Blueprint */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-colors duration-150 ease-out hover:bg-black"
                        data-jos_animation="flip"
                      >
                        <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-colors duration-150 ease-out group-hover:text-white">
                          Launch Blueprint
                        </h3>
                        <span className="text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          For idea validation
                        </span>
                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                        <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-colors duration-150 ease-out group-hover:text-white md:text-6xl">
                          Fixed price
                          <span className="text-lg font-semibold">From $10k</span>
                        </h4>
                        <p className="mb-6 text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          A one week sprint that defines scope, highlights risks,
                          and delivers a clickable prototype with a clear MVP plan.
                        </p>
                        <ul className="mb-10 flex flex-col gap-y-3">
                          {[
                            "Clickable wireflows and demo script",
                            "Prioritized backlog with acceptance criteria",
                            "Risk and dependency register",
                            "MVP scope, timeline, and price range",
                          ].map((feature) => (
                            <li key={feature} className="flex items-center gap-x-3 font-bold transition-colors duration-150 ease-out group-hover:text-white">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services/launch-blueprint"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-colors duration-150 ease-out after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Learn more
                        </Link>
                      </li>

                      {/* MVP Sprint */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-colors duration-150 ease-out hover:bg-black"
                        data-jos_animation="flip"
                      >
                        <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-colors duration-150 ease-out group-hover:text-white">
                          MVP Sprint
                        </h3>
                        <span className="text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          For market launch
                        </span>
                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                        <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-colors duration-150 ease-out group-hover:text-white md:text-6xl">
                          Fixed price
                          <span className="text-lg font-semibold">From $50k</span>
                        </h4>
                        <p className="mb-6 text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          An 8 to 12 week build that ships a production ready V1,
                          tested with real users and instrumented from day one.
                        </p>
                        <ul className="mb-10 flex flex-col gap-y-3">
                          {[
                            "Product design and UI kit",
                            "Working software with CI and docs",
                            "Weekly demos and story sign-off",
                            "QA, telemetry, and rollout plan",
                          ].map((feature) => (
                            <li key={feature} className="flex items-center gap-x-3 font-bold transition-colors duration-150 ease-out group-hover:text-white">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services/mvp-sprint"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-colors duration-150 ease-out after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  )}

                  {/* RETAINER TAB */}
                  {activeTab === 1 && (
                    <ul
                      id="retainer"
                      className="tab-content mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                      {/* Activation Lift */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-colors duration-150 ease-out hover:bg-black"
                        data-jos_animation="flip"
                      >
                        <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-colors duration-150 ease-out group-hover:text-white">
                          Activation Lift
                        </h3>
                        <span className="text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          For growth and onboarding
                        </span>
                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                        <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-colors duration-150 ease-out group-hover:text-white md:text-6xl">
                          Monthly
                          <span className="text-lg font-semibold">From $15k per month</span>
                        </h4>
                        <p className="mb-6 text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          Ongoing experiments to improve activation, time to value,
                          and retention while reducing support load.
                        </p>
                        <ul className="mb-10 flex flex-col gap-y-3">
                          {[
                            "Onboarding and funnel audit",
                            "A/B tests on pricing and paywalls",
                            "Event tracking and dashboards",
                            "Monthly growth report and roadmap",
                          ].map((feature) => (
                            <li key={feature} className="flex items-center gap-x-3 font-bold transition-colors duration-150 ease-out group-hover:text-white">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services/activation-lift"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-colors duration-150 ease-out after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Learn more
                        </Link>
                      </li>

                      {/* Dedicated Team */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-colors duration-150 ease-out hover:bg-black"
                        data-jos_animation="flip"
                      >
                        <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-colors duration-150 ease-out group-hover:text-white">
                          Dedicated Team
                        </h3>
                        <span className="text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          For scaling products
                        </span>
                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                        <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-colors duration-150 ease-out group-hover:text-white md:text-6xl">
                          Monthly
                          <span className="text-lg font-semibold">Custom quote</span>
                        </h4>
                        <p className="mb-6 text-lg text-black transition-colors duration-150 ease-out group-hover:text-white">
                          A senior product squad that works as your in-house team
                          with clean interfaces, CI, and clear ownership.
                        </p>
                        <ul className="mb-10 flex flex-col gap-y-3">
                          {[
                            "2 to 4 senior engineers",
                            "Product and design lead",
                            "Rolling roadmap and weekly demos",
                            "Full integration with your tools",
                          ].map((feature) => (
                            <li key={feature} className="flex items-center gap-x-3 font-bold transition-colors duration-150 ease-out group-hover:text-white">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-colors duration-150 ease-out after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Get a quote
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Pricing Section End :::... */}

        {/*...::: FAQ Section Start :::... */}
        <section className="faq-section">
          <div className="pb-40 xl:pb-[200px]">
            <div className="global-container">
              <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
                <div className="jos flex flex-col" data-jos_animation="fade-right">
                  <div className="mb-8 text-left lg:mb-16 xl:mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2>Pricing and process FAQ</h2>
                    </div>
                  </div>
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      We keep pricing and process simple. You get clear scope,
                      weekly demos, and acceptance criteria for every story. If
                      you do not see your question here, reach out and we will
                      answer in detail.
                    </p>
                    <Link
                      href="/contact"
                      className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                    >
                      Ask a question
                    </Link>
                  </div>
                </div>

                <div className="jos md:ml-10 lg:ml-20 xl:ml-32" data-jos_animation="fade-left">
                  <PricingAccordion />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*...::: FAQ Section End :::... */}
      </main>
      <Footer_01 />
    </>
  );
}

export default PricingClient;
