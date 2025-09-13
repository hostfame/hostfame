import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";

type DomainItem = {
  tld: string;                // e.g. ".com"
  blurb: string;
  price: string;              // current price
  oldPrice?: string;          // optional list price
  registerUrl?: string;
  transferUrl?: string;
  // Future image fields (not used yet, placeholder shown instead)
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

type DomainPricingData = {
  title: string | React.ReactNode;
  description?: string;
  items: DomainItem[];
};

const data: DomainPricingData = {
  title: "Simple, Honest Domain Pricing",
  description:
    "No surprise fees. Just straight-forward prices on popular domain extensions.",
  items: [
    {
      tld: ".com",
      blurb: "Trusted for almost any kind of website.",
      oldPrice: "$9.99",
      price: "$6.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/com.svg",
      alt: "Dot com logo",
      width: 72,
      height: 24,
    },
    {
      tld: ".org",
      blurb: "Great for non-profits, communities, and open projects.",
      oldPrice: "$12.99",
      price: "$8.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/org.svg",
      alt: "Dot org logo",
      width: 72,
      height: 24,
    },
    {
      tld: ".net",
      blurb: "A solid choice for tooling, tech, and services.",
      oldPrice: "$15.99",
      price: "$15.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/net.svg",
      alt: "Dot net logo",
      width: 72,
      height: 24,
    },
    {
      tld: ".online",
      blurb: "Create a memorable, modern brand.",
      oldPrice: "$32.99",
      price: "$2.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/online.svg",
      alt: "Dot online logo",
      width: 84,
      height: 24,
    },
    {
      tld: ".shop",
      blurb: "Perfect for ecommerce and product brands.",
      oldPrice: "$29.99",
      price: "$0.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/shop.svg",
      alt: "Dot shop logo",
      width: 72,
      height: 24,
    },
    {
      tld: ".xyz",
      blurb: "A flexible favorite for creators and startups.",
      oldPrice: "$14.99",
      price: "$2.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/xyz.svg",
      alt: "Dot xyz logo",
      width: 64,
      height: 24,
    },
    {
      tld: ".pro",
      blurb: "Show you mean business with a pro domain.",
      oldPrice: "$24.99",
      price: "$4.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/pro.svg",
      alt: "Dot pro logo",
      width: 64,
      height: 24,
    },
    {
      tld: ".club",
      blurb: "Build community, memberships, or fandoms.",
      oldPrice: "$19.99",
      price: "$5.99",
      registerUrl: "#",
      transferUrl: "#",
      src: "/logos/club.svg",
      alt: "Dot club logo",
      width: 64,
      height: 24,
    },
  ],
};

// Small visual stand-in for a future logo/image.
// Unique look: a 4×4 mosaic inside a rounded chip.
function BrandPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="
        inline-flex items-center gap-3
        rounded-xl border border-border-light bg-card px-3 py-2
      "
      aria-label={`${label} placeholder`}
    >
      <div className="grid grid-cols-4 grid-rows-4 gap-0.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-[2px] bg-primary/70"
          />
        ))}
      </div>
      <span className="text-lg font-bold tracking-tight">{label}</span>
    </div>
  );
}

export default function DomainPricing() {
  return (
    <section className="w-full bg-background text-text">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <CenteredSectionHeader
          title={data.title}
          description={data.description}
          className="mb-10"
          classNameForDescription="text-muted"
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((d, idx) => (
            <li
              key={idx}
              className="
                rounded-2xl border border-border-light bg-card p-6
                shadow-sm transition hover:-translate-y-0.5 hover:shadow
              "
            >
              {/* Top accent chip (unique detail vs. reference) */}
              <div className="mb-4 h-1.5 w-14 rounded-full bg-primary/80" />

              {/* “Logo” area (4×4 mosaic placeholder) */}
              <BrandPlaceholder label={d.tld} />

              {/* Copy */}
              <p className="mt-4 text-sm text-muted">{d.blurb}</p>

              {/* Pricing */}
              <div className="mt-6 flex items-baseline gap-3">
                {d.oldPrice ? (
                  <span className="text-xs line-through text-muted">
                    {d.oldPrice}
                  </span>
                ) : null}
                <span className="text-xl font-semibold">{d.price}</span>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={d.registerUrl ?? "#"}
                  className="
                    inline-flex items-center justify-center rounded-lg
                    bg-primary px-4 py-2 text-sm font-medium text-white
                    shadow-sm hover:opacity-95
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                  "
                >
                  Register
                </a>
                <a
                  href={d.transferUrl ?? "#"}
                  className="
                    inline-flex items-center justify-center rounded-lg
                    border border-border-light px-4 py-2 text-sm font-medium
                    text-text hover:bg-primary/5
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                  "
                >
                  Transfer
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}