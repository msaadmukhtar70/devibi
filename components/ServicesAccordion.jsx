'use client';
import Image from "next/image";
import Link from "next/link";
import useAccordion from "@/components/hooks/useAccordion";

export default function ServicesAccordion() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  const faqs = [
    {
      q: "How do we start?",
      a: "We review your context and return a 48-hour scope with features, risks, and a price band. If aligned, we kick the first sprint the following week."
    },
    {
      q: "What's a typical MVP timeline?",
      a: "Most MVPs ship in 8–12 weeks. Weekly demos, clear acceptance criteria, and analytics ready on day one to measure activation and retention."
    },
    {
      q: "How do you price?",
      a: "Fixed-price ranges for scoped projects; monthly for ongoing growth. You'll always see burn, trade-offs, and risks—no black boxes."
    }
  ];

  return (
    <ul className="accordion">
      {faqs.map((item, index) => (
        <li
          key={item.q}
          className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <div
            onClick={() => handleAccordion(index)}
            className="accordion-header flex cursor-pointer items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]"
          >
            <p>{item.q}</p>
            <div className="accordion-icon">
              <Image
                src="/assets/img_placeholder/plus.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="accordion-content text-[#2C2C2C]">
            <p className="text-[15px] leading-[1.65] sm:text-base">{item.a}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}