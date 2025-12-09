import { FiSearch } from "react-icons/fi";
import DualPricing from "./domain-hero/DualPricing";
import { domainPricingData } from "@/data/domainPricing.data";
import DomainSearch from "./DomainSearch";
import DomainLink from "../DomainLink";
import { LuGlobe } from "react-icons/lu";

export default function DomainHero() {
  const data = {
    title: "Get your domain. Launch your brand.",
    subtitle: "Find the perfect name to kickstart your idea.",
    placeholder: "Search your brand or business name",
    placeholderMobile: "Search your domain",
    cta: "Search",
    popularLabel: "Popular domains",
    popularDomainRoute:
      "https://my.hostfame.com/cart.php?a=add&domain=register",
  } as const;

  // Pick popular extensions dynamically (e.g. .COM, .NET, .INFO, .ORG)
  const popular = domainPricingData.items.slice(0, 4);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark px-6 py-20 sm:px-10 md:px-14">
      {/* DRAMATIC decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary-extralight/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        {/* Particles */}
        <div className="absolute top-16 left-[15%] w-3 h-3 bg-white/30 rounded-full animate-particle" />
        <div className="absolute top-32 right-[20%] w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-24 left-[30%] w-2 h-2 bg-white/25 rounded-full animate-particle" style={{ animationDelay: '3s' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center text-white relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-8 icon-spin-hover cursor-default backdrop-blur-sm">
          <LuGlobe className="w-5 h-5" />
          <span className="text-sm font-bold tracking-wide uppercase">Claim Your Territory</span>
        </div>
        
        <h1 className="mx-auto max-w-3xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight neon-text">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-white/85 text-lg md:text-xl leading-relaxed">
            {data.subtitle}
          </p>
        )}

        {/* Search */}
        <div className="mx-auto mt-10 w-full max-w-2xl">
          <DomainSearch placeholder={data.placeholder} placeholderMobile={data.placeholderMobile} cta={data.cta} />

          {/* Popular */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-white/70 font-semibold">
              {data.popularLabel}
            </span>
            <ul className="flex flex-wrap justify-center gap-3 transition-all duration-300 ease-in-out stagger-children">
              {popular.map((item, idx) => (
                <li
                  key={item.tld}
                  className="transition-all duration-300 ease-in-out"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <DomainLink className="group relative inline-flex w-[132px] hover:w-[153px] items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/25 hover:-translate-y-1 hover:shadow-lg">
                    <span className="font-bold">{item.tld}</span>
                    Only
                    <DualPricing price={item.price} pricebdt={item.priceBdt} />
                    <FiSearch className="text-xs absolute group-hover:static opacity-0 scale-75 transition-all duration-300 ease-in-out group-hover:opacity-70 group-hover:scale-100 shrink-0" />
                  </DomainLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
