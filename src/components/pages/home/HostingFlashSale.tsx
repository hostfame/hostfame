// app/components/HostingFlashSale.tsx
import Link from "next/link";
import { FaServer } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";

type Offer = {
  id: string;
  badge: string;
  discount: string;
  label: string;
  ctaLabel: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const data = {
  heading: "Hosting Flash Sale",
  blurb: "For a limited time, launch your website with incredible savings.",
  detailsCtaLabel: "See Details",
  detailsHref: "/web-hosting",
  offers: [
    {
      id: "hosting",
      badge: "For a Limited Time",
      discount: "72% Off",
      label: "Hosting",
      ctaLabel: "Get Web Hosting",
      href: "/web-hosting",
      Icon: FaServer,
    },
    {
      id: "domains",
      badge: "For a Limited Time",
      discount: "57% Off",
      label: "Domains",
      ctaLabel: "Get A Domains",
      href: "/domain",
      Icon: HiGlobeAlt,
    },
  ] as Offer[],
};



export default async function HostingFlashSale() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-950 to-teal-800">
      {/* Decorative Background Circles */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-bl from-white to-gray-300 opacity-15" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-tr from-white to-gray-400 opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl p-6 lg:p-8">
        {/* 3-col on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Hero Column - Appears first on mobile, last on desktop */}
          <div className="flex flex-col justify-center order-first lg:order-last rounded-xl p-4 sm:p-6 text-white">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {data.heading}
              </h2>
              <p className="mt-3 text-white/85 sm:text-lg">{data.blurb}</p>
            </div>

            <Link
              href={data.detailsHref}
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-900 transition hover:bg-white/90 hover:scale-[1.03] duration-300"
            >
              {data.detailsCtaLabel}
            </Link>
          </div>

          {/* Offer Cards */}
          {data.offers.map(
            ({ id, badge, discount, label, ctaLabel, href, Icon }) => (
              <article
                key={id}
                className="relative flex flex-col justify-between rounded-2xl bg-white/10 p-5 lg:p-6 text-white ring-1 ring-white/15 backdrop-blur-sm"
              >
                {/* Badge */}
                <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {badge}
                </span>

                {/* Icon */}
                <span className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                  <Icon className="h-10 w-10 text-white" />
                </span>

                {/* Content */}
                <div className="mt-4 flex flex-col">
                  <p className="text-4xl font-extrabold leading-none text-white lg:text-5xl">
                    {discount}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    {label}
                  </p>

                  <Link
                    href={href}
                    className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-teal-900 transition hover:bg-white/90 hover:scale-[1.03] duration-300"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
