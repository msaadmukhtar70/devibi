'use client';
import Image from "next/image";
import useAccordion from "@/components/hooks/useAccordion";

export default function PricingAccordion() {
  const [activeIndex, handleAccordion] = useAccordion();

  const faqs = [
    {
      q: "How do you price?",
      a: "Fixed scopes for defined outcomes or monthly retainers for ongoing work. You receive a plan, risks, and a price band within 48 hours."
    },
    {
      q: "What's included?",
      a: "Design, development, project management, and handoff documentation. We also provide training and support during the transition."
    },
    {
      q: "Do you work with existing teams?",
      a: "Yes. We can integrate with your team or work independently. We adapt to your tools, processes, and communication preferences."
    }
  ];

  return (
    <ul className="accordion">
      {faqs.map((item, index) => (
        <li
          key={item.q}
          onClick={() => handleAccordion(index)}
          className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <div className="accordion-header flex cursor-pointer items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
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