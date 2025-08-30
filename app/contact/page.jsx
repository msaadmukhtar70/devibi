// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

// SEO Optimized Metadata
export const metadata = {
  title: 'Contact Us | Get a B2B SaaS Scope & Proposal in 48 Hours',
  description: 'Contact the Devibi team to de-risk your B2B SaaS idea. We\'ll send a scoped plan, timeline, and price band within 48 hours. Let\'s build.',
  alternates: { canonical: '/contact' },
};

import Footer_01 from "@/components/footer/Footer";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { webPageLD, breadcrumbLD } from "@/lib/jsonld";

function Contact() {
  const web = webPageLD({
    canonical: "/contact",
    title: "Contact | Devibi",
    description: "Get in touch with Devibi for B2B SaaS design and development.",
    type: "ContactPage",
  });

  const crumbs = breadcrumbLD([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ]);

  // Optional: inline an Organization object including contactPoint
  const orgContact = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Devibi",
    url: "https://www.devibi.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@devibi.com",
        telephone: "+1-012-345-6789",
        availableLanguage: ["en"],
      },
    ],
  };

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Contact Us</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}

        {/*...::: Contact Section Start :::... */}
        <section className="contact-section">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1fr)_1.1fr]">
                {/* Contact Left Block */}
                <div className="order-2 flex flex-col md:order-1">
                  {/* Section Content Block */}
                  <div className="mb-8 text-left lg:mb-16 xl:mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2>Let&apos;s scope your next release.</h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Send your goals, constraints, and any existing assets. We’ll reply within 24–48 hours with a scoped plan, timeline, and price band. If it’s a fit, we start with a short, focused discovery call.
                    </p>

                    <ul className="mt-12 flex flex-col gap-y-8 lg:gap-y-12">
                      {/* Email */}
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Email
                        <Link
                          href="mailto:hello@devibi.com"
                          className="text-2xl font-normal leading-loose lg:text-3xl hover:text-colorOrangyRed transition-colors duration-200 ease-out motion-reduce:transition-none"
                        >
                          hello@devibi.com
                        </Link>
                      </li>

                      {/* Phone */}
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Phone
                        <Link
                          href="tel:+0123456789"
                          className="text-2xl font-normal leading-loose lg:text-3xl hover:text-colorOrangyRed transition-colors duration-200 ease-out motion-reduce:transition-none"
                        >
                          +(012) 345 6789
                        </Link>
                      </li>

                      {/* Social */}
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Follow
                        <ul className="mt-auto flex gap-x-[15px]">
                          {/* Facebook */}
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.facebook.com"
                              aria-label="Facebook"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed transition-colors duration-200 ease-out motion-reduce:transition-none"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/facebook-icon-white.svg"
                                alt="facebook"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/facebook-icon-black.svg"
                                alt="facebook"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                            </Link>
                          </li>

                          {/* Twitter / X */}
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.twitter.com"
                              aria-label="Twitter"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed transition-colors duration-200 ease-out motion-reduce:transition-none"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/twitter-icon-white.svg"
                                alt="twitter"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/twitter-icon-black.svg"
                                alt="twitter"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                            </Link>
                          </li>

                          {/* LinkedIn */}
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.linkedin.com"
                              aria-label="LinkedIn"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed transition-colors duration-200 ease-out motion-reduce:transition-none"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                                alt="linkedin"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                                alt="linkedin"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                            </Link>
                          </li>

                          {/* Instagram */}
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="http://www.instagram.com"
                              aria-label="Instagram"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed transition-colors duration-200 ease-out motion-reduce:transition-none"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                                alt="instagram"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/instagram-icon-black.svg"
                                alt="instagram"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out motion-reduce:transition-none"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Contact Left Block */}

                {/* Contact Right Block */}
                <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
                  {/* Contact Form */}
                  <form
                    action="https://formspree.io/f/mlqvzkyx"
                    method="post"
                    encType="multipart/form-data"
                    className="flex flex-col gap-y-5"
                  >
                    {/* Form Group */}
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                      {/* Name */}
                      <div className="flex flex-col gap-y-[10px]">
                        <label
                          htmlFor="contact-name"
                          className="text-lg font-bold leading-[1.6]"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="contact-name"
                          placeholder="Jane Doe"
                          className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                          required
                        />
                      </div>
                      {/* Email */}
                      <div className="flex flex-col gap-y-[10px]">
                        <label
                          htmlFor="contact-email"
                          className="text-lg font-bold leading-[1.6]"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="contact-email"
                          placeholder="jane.doe@company.com"
                          className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                          required
                        />
                      </div>
                    </div>
                    {/* Form Group */}

                    {/* Form Group */}
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                      {/* Phone */}
                      <div className="flex flex-col gap-y-[10px]">
                        <label
                          htmlFor="contact-phone"
                          className="text-lg font-bold leading-[1.6]"
                        >
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="contact-phone"
                          placeholder="(123) 456 - 7890"
                          className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                        />
                      </div>
                      {/* Company */}
                      <div className="flex flex-col gap-y-[10px]">
                        <label
                          htmlFor="contact-company"
                          className="text-lg font-bold leading-[1.6]"
                        >
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="contact-company"
                          placeholder="Acme Inc."
                          className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                        />
                      </div>
                    </div>
                    {/* Form Group */}

                    {/* Message */}
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex flex-col gap-y-[10px]">
                        <label
                          htmlFor="contact-message"
                          className="text-lg font-bold leading-[1.6]"
                        >
                          What are you building?
                        </label>
                        <textarea
                          name="message"
                          id="contact-message"
                          className="min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                          placeholder="Include your goals, timeline, and links to any existing products or documentation."
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Send Scope Request
                      </button>
                    </div>
                    {/* Form Group */}
                  </form>
                  {/* Contact Form */}
                </div>
                {/* Contact Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Contact Section End :::... */}

        {/*...::: Map Section Start :::... */}
        <section className="map-section">
          {/* Section Spacer */}
          <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]">
                  <h2 className="text-white">We&apos;re a remote team, but happy to meet.</h2>
                </div>
              </div>
              {/* Map Block */}
              <div className="relative">
                <Image
                  src="/assets/img_placeholder/th-1/mapbase.svg"
                  width={100}
                  height={100}
                  alt="mapbase"
                  className="h-auto w-full"
                />
                {/* Locations can be dynamically generated if needed */}
                <div className="group absolute hidden gap-2 sm:left-[13%] sm:top-[10%] sm:flex">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <Image
                        src="/assets/img_placeholder/th-1/icon-gray-location-marker.svg"
                        alt="Location marker"
                        width={35}
                        height={35}
                        className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <Image
                        src="/assets/img_placeholder/th-1/icon-orange-location-marker.svg"
                        alt="Active location marker"
                        width={50}
                        height={50}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 w-[170px] translate-y-12 rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-3 font-bold">
                        <Image
                          src="/assets/img_placeholder/th-1/icon-black-location-marker.svg"
                          alt="Location icon"
                          width={17}
                          height={17}
                        />
                        Toronto, Canada
                      </div>
                      <address className="not-italic font-semibold">
                        Line 1: House/Flat 208, Venue Street
                      </address>
                    </div>
                  </div>
                </div>
                {/* Add other locations as needed */}
              </div>
              {/* Map Block */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Map Section End :::... */}
      </main>
      <JsonLd id="ld-contactpage" data={web} />
      <JsonLd id="ld-breadcrumb-contact" data={crumbs} />
      <JsonLd id="ld-org-contact" data={orgContact} />
      <Footer_01 />
    </>
  );
}

export default Contact;