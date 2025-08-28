'use client';
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const Footer_01 = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      {/* Top divider */}
      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
      </div>

      {/* Main */}
      <div className="global-container">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-[1.1fr_.8fr_.8fr_.9fr] xl:gap-16 xl:py-[90px]">
          {/* Brand + mission */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block" aria-label="Go to homepage">
              <Image
                src="/assets/img_placeholder/th-1/logo.png"
                alt="Company logo"
                width={120}
                height={30}
                className="h-auto w-[120px]"
                priority
              />
            </Link>
            <p className="text-black/80">
              We design and ship software that explains itself, converts
              faster, and scales cleanly. Strategy → UX → UI → dev-ready
              deliverables.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 transition hover:bg-black hover:text-white"
              >
                {/* LinkedIn */}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8 8.98h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.65V24h-5v-6.45c0-1.54-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V24H8z" />
                </svg>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 transition hover:bg-black hover:text-white"
              >
                {/* GitHub */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.79.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.94 0-1.31.47-2.37 1.23-3.21-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.84 1.23 1.9 1.23 3.21 0 4.62-2.8 5.63-5.47 5.93.43.37.81 1.09.81 2.2v3.26c0 .32.21.7.82.58A12 12 0 0 0 12 .5z" />
                </svg>
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 transition hover:bg-black hover:text-white"
              >
                {/* X */}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.4.6 24 1.77 24h20.46c1.17 0 1.77-.6 1.77-1.77V1.77C24 .6 23.4 0 22.23 0zM7.18 19.09l3.42-5.14L7.3 5h2.38l2.1 4.69L13.7 5h2.31l-3.2 4.78 3.53 9.31h-2.4l-2.32-5.37-3.5 5.37H7.18z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[18px] font-semibold text-black">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/services/launch-blueprint", label: "Launch Blueprint" },
                { href: "/services/mvp-sprint", label: "MVP Sprint" },
                { href: "/services/activation-lift", label: "Activation Lift" },
                { href: "/services/practical-ai", label: "Practical AI" },
                { href: "/services/mobile-app-design", label: "Mobile App Design" },
                { href: "/services/web-design", label: "Web Design" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-black/80 transition-all hover:text-colorOrangyRed"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[18px] font-semibold text-black">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "All Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-black/80 transition-all hover:text-colorOrangyRed"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Legal */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-[18px] font-semibold text-black">
                Subscribe to updates
              </h4>
              <form
                action="#"
                method="post"
                className="mt-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="relative h-[50px] max-w-[320px]">
                  <input
                    type="email"
                    id="newsletter-email"
                    placeholder="Enter your email"
                    required
                    className="h-full w-full rounded-[50px] border border-black/20 bg-white px-5 pr-16 text-[15px] outline-none ring-black/5 placeholder:text-black/40 focus:ring-2"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-[5px] top-1/2 h-10 -translate-y-1/2 rounded-[50px] bg-black px-4 transition hover:bg-colorOrangyRed focus:outline-none focus-visible:ring-2 focus-visible:ring-colorOrangyRed"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-large.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>

            <div className="h-[1px] w-full max-w-[320px] bg-[#DBD6CF]" />

            <ul className="flex flex-wrap justify-between gap-4 text-[15px]">
              <li>
                <Link
                  href="/privacy"
                  className="text-black/70 transition hover:text-colorOrangyRed"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-black/70 transition hover:text-colorOrangyRed"
                >
                  Terms & Conditions
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[#DBD6CF]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-7 text-center md:flex-row md:text-left">
          <p className="text-black/70">
            © {year} Devibi. All rights reserved.
          </p>
          <p className="text-black/70">
            Built with care —{" "}
            <Link
              href="https://www.devibi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-black/30 underline-offset-4 transition hover:text-colorOrangyRed"
            >
              devibi.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer_01;
