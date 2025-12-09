import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "../wrappers/SectionWrapper";
import DomainSearchBox from "./DomainSearchBox";
import DualPricing from "./domain-hero/DualPricing";
import { domainPricingData } from "@/data/domainPricing.data";
import DomainLink from "../DomainLink";

export default function DomainBanner() {
  const data = {
    title: "Find Best Unique Domains Checker!",
    subtitle: "Not sure what name to choose? Start here and check instantly.",
    placeholder: "find your domain name",
    button: "Search",
  } as const;

  // All TLDs come from domainPricingData
  const tlds = domainPricingData.items.map((item) => item.tld);

  // Pick first 5 popular TLDs (or any rule you want)
  const popular = domainPricingData.items.slice(0, 5);

  return (
    <section className="relative -mt-[1px]">
      <Navbar isTransparent />
      {/* Layered teal header */}
      <div className="absolute inset-0 -z-10 banner-bg " />

      {/* Decorative orbs - simplified */}
      <div
        className="pointer-events-none absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-white/5"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-white/5"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 opacity-30"
        height="140"
        viewBox="0 0 1200 140"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 80 C200 120 300 20 500 60 C700 100 800 10 1200 40"
          stroke="white"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      </svg>

      <SectionWrapper className="py-12 lg:py-16">
        {/* Card layout: content left, action right */}
        <div className="grid items-center gap-10 rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur md:grid-cols-2 md:p-10">
          {/* Left: heading */}
          <header className="space-y-5 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/25">
              <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
              Domain Toolkit
            </span>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              {data.title}
            </h1>
            <p className="text-white/90 sm:text-lg">{data.subtitle}</p>

            {/* Popular pills */}
            <div className="mt-6">
              <div className="text-white/80 text-sm font-semibold mb-2">
                Popular Domain
              </div>
              <ul className="flex flex-wrap gap-2">
                {popular.map((item) => (
                  <DomainLink
                    key={item.tld}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm backdrop-blur transition hover:bg-white/15"
                  >
                    <span className="font-medium text-white">{item.tld}</span>
                    <span className="text-white/80 group-hover:text-white">
                      <DualPricing
                        price={item.price}
                        pricebdt={item.priceBdt}
                      />
                    </span>
                  </DomainLink>
                ))}
              </ul>
            </div>
          </header>

          {/* Right: search card */}
          <aside className="relative">
            <div className="rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary-dark">
                  Instant Availability
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                  100% Secured
                </span>
              </div>

              <DomainSearchBox
                tlds={tlds}
                placeholder={data.placeholder}
                buttonLabel={data.button}
              />

              {/* Quick TLD chooser */}
              <div className="mt-5">
                <div className="text-xs font-medium text-gray-600 mb-2">
                  Extensions
                </div>
                <div className="flex flex-wrap gap-2">
                  {tlds.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Accent ring */}
            <div
              className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-tr from-primary-dark to-primary opacity-20"
              aria-hidden
            />
          </aside>
        </div>
      </SectionWrapper>
    </section>
  );
}
