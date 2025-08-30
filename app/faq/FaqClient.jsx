'use client';
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Image from "next/image";
import Link from "next/link";
import { FAQ_DATA } from "@/lib/faq-data";


export default function FaqClient() {
    const [activeIndex, handleAccordion] = useAccordion();
    const [activeTab, handleTab] = useTabs();

    return (
        <>
            {/*...::: FAQ Section Start :::...*/}
            <section className="faq-section">
                {/* Section Spacer */}
                <div className="pb-20 xl:pb-[130px]">
                    {/* Section Container */}
                    <div className="global-container">
                        {/* Section Content Block */}
                        <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                            <div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
                                <h2>Clear answers to founder questions.</h2>
                            </div>
                        </div>
                        {/* Section Content Block */}
                        {/* Faq Wrapper */}
                        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-[minmax(0,_auto)_1fr] lg:grid-cols-[minmax(354px,_auto)_1fr] lg:gap-x-[86px]">
                            <div className="flex flex-col gap-y-6">
                                {FAQ_DATA.map((tab, index) => (
                                    <button
                                        key={tab.category}
                                        className={`tab-button faq-button ${
                                            activeTab === index ? "active" : ""
                                        }`}
                                        onClick={() => handleTab(index)}
                                    >
                                        {tab.category}
                                    </button>
                                ))}
                            </div>
                            <div>
                                {FAQ_DATA.map((tabData, tabIndex) => (
                                    activeTab === tabIndex && (
                                        <ul
                                            key={tabData.category}
                                            className="accordion tab-content flex flex-col gap-y-6"
                                        >
                                            {tabData.questions.map((item, itemIndex) => (
                                                <li
                                                    key={item.q}
                                                    className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                                                        activeIndex === itemIndex ? "active" : ""
                                                    }`}
                                                    data-jos_delay="0.1"
                                                    onClick={() => handleAccordion(itemIndex)}
                                                >
                                                    <div className="accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]">
                                                        <h5>{item.q}</h5>
                                                        <div className="accordion-icon">
                                                            <Image
                                                                src="/assets/img_placeholder/plus.svg"
                                                                width={24}
                                                                height={24}
                                                                alt="plus"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="accordion-content text-[#2C2C2C]">
                                                        <p>{item.a}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                ))}
                            </div>
                        </div>
                        {/* Faq Wrapper */}
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Spacer */}
            </section>
            {/*...::: FAQ Section End :::...*/}
            {/*...::: About Contact Section Start :::...*/}
            <section id="about-conact">
                {/* Section Spacer */}
                <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
                    {/* Section Container */}
                    <div className="global-container">
                        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">
                            {/* Content Left Block */}
                            <div
                                className="jos order-2 overflow-hidden rounded-[20px] md:order-1"
                                data-jos_animation="fade-left"
                            >
                                <Image
                                    src="/assets/img_placeholder/th-1/about-contact-img.jpg"
                                    alt="A member of the Devibi team ready to answer questions."
                                    width={526}
                                    height={550}
                                    className="h-auto w-full"
                                />
                            </div>
                            {/* Content Left Block */}
                            {/* Content Right Block */}
                            <div
                                className="jos order-1 md:order-2"
                                data-jos_animation="fade-down"
                            >
                                {/* Section Content Block */}
                                <div className="mb-8 max-w-sm md:max-w-max lg:mb-16 xl:mb-6">
                                    <h2 className="text-white">
                                        Have a Different Question?
                                    </h2>
                                </div>
                                {/* Section Content Block */}
                                <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
                                    <p className="mb-7 last:mb-0">
                                        If you don&apos;t see your question here, book a free call. We’re happy to talk through your specific goals, constraints, and timeline. No obligation, no sales pitch.
                                    </p>
                                </div>
                                <ul className="mt-10 flex flex-col gap-6 font-dmSans text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]">
                                    <li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
                                        Website:
                                        <Link
                                            rel="noopener noreferrer"
                                            href="https://devibi.com"
                                            className="text-white hover:text-colorOrangyRed"
                                        >
                                            www.devibi.com
                                        </Link>
                                    </li>
                                    <li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
                                        Email:
                                        <Link
                                            href="mailto:hello@devibi.com"
                                            className="text-white hover:text-colorOrangyRed"
                                        >
                                            hello@devibi.com
                                        </Link>
                                    </li>
                                    <li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
                                        Phone:
                                        <Link
                                            href="tel:+1234567890"
                                            className="text-white hover:text-colorOrangyRed"
                                        >
                                            (123) 456-7890
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Content Right Block */}
                        </div>
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Spacer */}
            </section>
            {/*...::: About Contact Section End :::...*/}
        </>
    );
}