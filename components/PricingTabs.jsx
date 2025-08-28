'use client';
import Image from "next/image";
import Link from "next/link";
import useTabs from "@/components/hooks/useTabs";

export default function PricingTabs() {
  const [activeTab, handleTab] = useTabs();

  return (
    <>
      {/* Tab Navigation */}
      <div className="jos mb-10 flex flex-wrap justify-center gap-6 lg:mb-16 xl:mb-20">
        <button
          className={`button rounded-[50px] border-2 border-black bg-transparent px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:border-colorOrangyRed hover:text-colorOrangyRed ${
            activeTab === 0 ? "active" : ""
          }`}
          onClick={() => handleTab(0)}
        >
          Packages
        </button>
        <button
          className={`button rounded-[50px] border-2 border-black bg-transparent px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:border-colorOrangyRed hover:text-colorOrangyRed ${
            activeTab === 1 ? "active" : ""
          }`}
          onClick={() => handleTab(1)}
        >
          Dedicated Team
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {/* Package pricing content would go here */}
          <div className="pricing-card">
            <h3>Launch Blueprint</h3>
            <p>Scope, wireframes, and a plan in seven days</p>
            <div className="price">From $8,000</div>
          </div>
          <div className="pricing-card">
            <h3>MVP Sprint</h3>
            <p>Design and build your MVP in 8-12 weeks</p>
            <div className="price">From $45,000</div>
          </div>
          <div className="pricing-card">
            <h3>Activation Lift</h3>
            <p>Onboarding and pricing experiments that convert</p>
            <div className="price">From $15,000</div>
          </div>
        </div>
      )}

      {activeTab === 1 && (
        <div className="dedicated-team-content">
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold">Dedicated Team</h3>
            <p className="mb-8 text-lg">
              A senior squad that owns outcomes. Monthly engagement with weekly demos.
            </p>
            <div className="text-4xl font-bold">From $25,000/month</div>
          </div>
        </div>
      )}
    </>
  );
}