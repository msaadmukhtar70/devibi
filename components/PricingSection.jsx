'use client';
import Image from "next/image";
import Link from "next/link";
import useTabs from "@/components/hooks/useTabs";

export default function PricingSection() {
  const [activeTab, handleTab] = useTabs();

  return (
    <div className="container mx-auto">
      {/* Tab buttons */}
      <div className="jos flex justify-center" data-jos_delay="0.3">
        <div className="inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold">
          <button
            className={`tab-button price-button ${
              activeTab === 0 ? "active" : ""
            }`}
            onClick={() => handleTab(0)}
            data-tab="monthly"
          >
            Monthly
          </button>
          <button
            className={`tab-button price-button ${
              activeTab === 1 ? "active" : ""
            }`}
            onClick={() => handleTab(1)}
            data-tab="annually"
          >
            Annually
          </button>
        </div>
      </div>
      {/* Pricing Block */}
      <div className="mt-12 lg:mt-16 xl:mt-20">
        {/* Monthly Price List */}
        {activeTab === 0 && (
          <ul
            id="monthly"
            className="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4"
          >
            {/* Free Plan */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay={0}>
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Free
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                1 member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                $0
                <span className="text-lg font-semibold">
                  /Per month
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Ideal for individuals person and small businesses just getting started.
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  10 Credits per month
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Limited Integrations
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Email Support
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-black bg-black px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 group-hover:border-colorOrangyRed group-hover:bg-colorOrangyRed"
                >
                  Get Started Free
                </Link>
              </div>
            </li>

            {/* Starter Plan */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay="0.1">
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Starter
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                5+ member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                $25
                <span className="text-lg font-semibold">
                  /Per month
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Perfect for startups and growing teams looking for more advanced features.
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  100 Credits per month
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  All Integrations
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Priority Support
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-black bg-black px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 group-hover:border-colorOrangyRed group-hover:bg-colorOrangyRed"
                >
                  Get Started
                </Link>
              </div>
            </li>

            {/* Professional Plan */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay="0.2">
              <div className="relative mb-3 h-8">
                <span className="absolute left-0 top-0 rounded-[50px] bg-colorOrangyRed px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  Popular
                </span>
              </div>
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Professional
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                15+ member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                $75
                <span className="text-lg font-semibold">
                  /Per month
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Best for established businesses that need premium features and dedicated support.
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Unlimited Credits
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Advanced Analytics
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  24/7 Phone Support
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-colorOrangyRed bg-colorOrangyRed px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 hover:border-black hover:bg-black"
                >
                  Get Started
                </Link>
              </div>
            </li>

            {/* Enterprise Plan */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay="0.3">
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Enterprise
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                50+ member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                Custom
                <span className="text-lg font-semibold">
                  /Contact us
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Tailored solutions for large organizations with specific requirements.
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Custom Solutions
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Dedicated Account Manager
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  On-premise Deployment
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-black bg-black px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 group-hover:border-colorOrangyRed group-hover:bg-colorOrangyRed"
                >
                  Contact Sales
                </Link>
              </div>
            </li>
          </ul>
        )}

        {/* Annual Price List */}
        {activeTab === 1 && (
          <ul
            id="annually"
            className="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4"
          >
            {/* Free Plan */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay={0}>
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Free
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                1 member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                $0
                <span className="text-lg font-semibold">
                  /Per year
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Ideal for individuals person and small businesses just getting started.
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  120 Credits per year
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Limited Integrations
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Email Support
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-black bg-black px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 group-hover:border-colorOrangyRed group-hover:bg-colorOrangyRed"
                >
                  Get Started Free
                </Link>
              </div>
            </li>

            {/* Starter Plan Annual */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay="0.1">
              <div className="relative mb-3 h-8">
                <span className="absolute left-0 top-0 rounded-[50px] bg-green-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  Save 20%
                </span>
              </div>
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Starter
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                5+ member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                $240
                <span className="text-lg font-semibold">
                  /Per year
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Perfect for startups and growing teams. Save $60 annually!
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  1,200 Credits per year
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  All Integrations
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Priority Support
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-black bg-black px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 group-hover:border-colorOrangyRed group-hover:bg-colorOrangyRed"
                >
                  Get Started
                </Link>
              </div>
            </li>

            {/* Professional Plan Annual */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay="0.2">
              <div className="relative mb-3 h-8">
                <span className="absolute left-0 top-0 rounded-[50px] bg-colorOrangyRed px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  Most Popular
                </span>
              </div>
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Professional
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                15+ member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                $720
                <span className="text-lg font-semibold">
                  /Per year
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Best for established businesses. Save $180 annually!
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Unlimited Credits
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Advanced Analytics
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  24/7 Phone Support
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-colorOrangyRed bg-colorOrangyRed px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 hover:border-black hover:bg-black"
                >
                  Get Started
                </Link>
              </div>
            </li>

            {/* Enterprise Plan Annual */}
            <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black" data-jos_animation="flip" data-jos_delay="0.3">
              <h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                Enterprise
              </h3>
              <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                50+ member
              </span>
              <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
              <h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                Custom
                <span className="text-lg font-semibold">
                  /Contact us
                </span>
              </h4>
              <p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                Tailored solutions for large organizations. Custom discounts available.
              </p>
              {/* Price Info List */}
              <ul className="mb-10 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Custom Solutions
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  Dedicated Account Manager
                </li>
                <li className="flex items-center gap-x-3 font-bold group-hover:text-white">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="opacity-100 group-hover:opacity-0"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/icon-white-badge-check.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  On-premise Deployment
                </li>
              </ul>
              {/* Price Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="button mt-auto block rounded-[50px] border-2 border-black bg-black px-8 py-4 text-center text-base font-bold uppercase text-white transition-all duration-300 group-hover:border-colorOrangyRed group-hover:bg-colorOrangyRed"
                >
                  Contact Sales
                </Link>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}