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
  detailsHref: "#",
  offers: [
    {
      id: "hosting",
      badge: "For a Limited Time",
      discount: "90% Off",
      label: "Hosting",
      ctaLabel: "Get Web Hosting",
      href: "#",
      Icon: FaServer,
    },
    {
      id: "domains",
      badge: "For a Limited Time",
      discount: "57% Off",
      label: "Domains",
      ctaLabel: "Get A Domains",
      href: "#",
      Icon: HiGlobeAlt,
    },
  ] as Offer[],
};

export default async function HostingFlashSale() {
  return (
    <section className=" bg-gradient-to-r from-primary-dark to-primary rounded-2xl">
      <div className="mx-auto max-w-7xl  p-4 lg:p-6">
        {/* 3-col on desktop */}
        <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
          {/* Columns 2 & 3 — Offer cards styled same as hero */}
          {data.offers.map(
            ({ id, badge, discount, label, ctaLabel, href, Icon }) => (
              <article
                key={id}
                className="flex flex-col justify-between rounded-xl bg-white/10 p-4 lg:p-6 text-white ring-1 relative ring-white/15 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {badge}
                  </span>
                </div>
                  <span className="flex  absolute p-4  right-4 top-4    w-fit h-fit items-center justify-center rounded-lg bg-white/20 ring-1 ring-white/25">
                    <Icon className=" size-14  text-white" />
                  </span>

                <div className=" flex flex-col">
                  <p className="text-4xl font-extrabold leading-none text-white">
                    {discount}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    {label}
                  </p>

                  <Link
                    href={href}
                    className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-2 text-sm  text-gray-800 !font-semibold hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </article>
            )
          )}

          {/* Column 1 — Hero */}
          <div className="flex flex-col justify-between sm:col-span-3 lg:!col-span-1 rounded-xl p-6 sm:p-8 text-white">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                {data.heading}
              </h2>
              <p className="mt-2 text-white/90">{data.blurb}</p>
            </div>

            <Link
              href={data.detailsHref}
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-800 !font-semibold hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {data.detailsCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
