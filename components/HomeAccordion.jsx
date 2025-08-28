'use client';
import Image from "next/image";
import useAccordion from "@/components/hooks/useAccordion";

export default function HomeAccordion() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  const faqs = [
    {
      q: "How do we start?",
      a: "Fill the contact form and ask for a 48 hour scope. We send a short plan with features, risks, a timeline, and a price band.",
    },
    {
      q: "Can you use our stack?",
      a: "Yes. We pick tools that fit your team and stage. We document choices and acceptance criteria so handover is clean.",
    },
    {
      q: "Where does AI fit?",
      a: "We add AI when it lifts a metric. Think onboarding helpers, search with sources, or support replies. If it does not help, we skip it.",
    },
  ];

  return (
    <ul className="accordion">
      {faqs.map((item, i) => (
        <li
          key={item.q}
          className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
            activeIndex === i ? "active" : ""
          }`}
          onClick={() => handleAccordion(i)}
        >
          <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
            <p>{item.q}</p>
            <div className="accordion-icon">
              <Image
                src="/assets/img_placeholder/plus.svg"
                width={24}
                height={24}
                alt="toggle"
              />
            </div>
          </div>
          <div className="accordion-content text-[#2C2C2C]">
            <p>{item.a}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}