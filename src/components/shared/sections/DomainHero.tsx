import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import DualPricing from "./domain-hero/DualPricing";

type PopularTLD = { tld: string; price: string; pricebdt: string; href?: string };

const data: {
  title: string;
  subtitle?: string;
  placeholder: string;
  cta: string;
  popularLabel: string;
  popular: PopularTLD[];
} = {
  title: "Get your domain. Launch your brand.",
  subtitle: "Find the perfect name to kickstart your idea.",
  placeholder: "Search your brand or business name",
  cta: "Search",
  popularLabel: "Popular domains",
  popular: [
    { tld: ".COM", price: "$6.99", pricebdt: "৳699", href: "#" },
    { tld: ".NET", price: "$9.99", pricebdt: "৳999", href: "#" },
    { tld: ".INFO", price: "$5.19", pricebdt: "৳519", href: "#" },
    { tld: ".ORG", price: "$7.79", pricebdt: "৳779", href: "#" },
  ],
};

export default function DomainHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-6 py-16 sm:px-8 md:px-12">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-bl from-white to-gray-300 opacity-15" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-tr from-white to-gray-400 opacity-15" />

      <div className="mx-auto max-w-5xl text-center text-white">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-white/80 sm:mt-4 sm:text-lg">
            {data.subtitle}
          </p>
        )}

        {/* Search */}
        <div className="mx-auto mt-8 w-full max-w-2xl">
          <div className="relative rounded-full bg-white/90 p-2 shadow-xl ring-1 ring-white/25 backdrop-blur-sm">
            <label htmlFor="domain-search" className="sr-only">
              {data.placeholder}
            </label>
            <input
              id="domain-search"
              type="text"
              placeholder={data.placeholder}
              className="w-full rounded-full border-0 bg-transparent px-4 py-2 pr-28 text-base text-gray-900 placeholder-gray-500 outline-none focus:ring-0"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 focus-visible:outline-none"
            >
              <FiSearch aria-hidden className="text-base" />
              <span>{data.cta}</span>
            </button>
          </div>

          {/* Popular */}
          <div className="mt-5 flex flex-col items-center gap-2 sm:mt-6">
            <span className="text-xs uppercase tracking-wider text-white">
              {data.popularLabel}
            </span>
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 transition-all duration-300 ease-in-out">
              {data.popular.map((item) => (
                <li
                  key={item.tld}
                  className="transition-all duration-300 ease-in-out"
                >
                  <Link
                    href={item.href || "#"}
                    className="group inline-flex w-[132px] hover:w-[153px]  items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur transition-all duration-300 ease-in-out hover:bg-white/20"
                  >
                    <span className="font-semibold">{item.tld}</span>
                    Only<DualPricing price={item.price} pricebdt={item.pricebdt}/>
                    <FiSearch className="text-xs absolute  group-hover:static opacity-0 scale-75 transition-all duration-300 ease-in-out group-hover:opacity-70 group-hover:scale-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
