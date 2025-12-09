import Image from "next/image";
import { domainPricingData } from "@/data/domainPricing.data";
import DualPricing from "./domain-hero/DualPricing";
import DomainPricingButtonGroup from "./DomainPricingButtonGroup";
import { LuSparkles, LuTag, LuBadgeCheck } from "react-icons/lu";

export default function DomainPricing() {
  // Calculate savings percentage for first item as featured
  const calculateSavings = (oldPrice: string, newPrice: string) => {
    const old = parseFloat(oldPrice.replace("$", ""));
    const current = parseFloat(newPrice.replace("$", ""));
    return Math.round(((old - current) / old) * 100);
  };

  return (
    <section className="w-full text-text">
      <div className="space-y-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <LuTag className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Domain Sale</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-text">
            Simple, Honest Domain Pricing
          </h2>
          <p className="text-description-text max-w-2xl mx-auto text-base">
            No surprise fees. No hidden charges. Just straightforward prices on popular domain extensions with free WHOIS privacy included.
          </p>
        </div>

        {/* Domain Grid - Redesigned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {domainPricingData.items.map((d, idx) => {
            const savings = d.oldPrice ? calculateSavings(d.oldPrice, d.price) : 0;
            const isPopular = idx === 0; // .com is popular

            return (
              <div
                key={idx}
                className={`group flex flex-col rounded-2xl border bg-white dark:bg-gray-900 transition-all duration-300
                  ${isPopular 
                    ? "border-primary/30 shadow-lg shadow-primary/5 ring-1 ring-primary/10" 
                    : "border-gray-200 dark:border-gray-800 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                  }`}
              >
                {/* Popular/Savings Badge - Inline */}
                {(isPopular || savings > 0) && (
                  <div className="flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-primary to-primary-dark rounded-t-2xl">
                    {isPopular && (
                      <span className="flex items-center gap-1.5 text-white text-xs font-semibold">
                        <LuSparkles className="w-3 h-3" />
                        Most Popular
                      </span>
                    )}
                    {savings > 0 && (
                      <span className="text-white text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">
                        {savings}% OFF
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* TLD Logo */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Image
                        src={d.src}
                        alt={d.alt}
                        height={d.height}
                        width={d.width}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Pricing Block */}
                  <div className="text-center mb-4">
                    <div className="flex flex-col items-center gap-1">
                      {d.oldPrice && (
                        <DualPricing 
                          price={d.oldPrice} 
                          pricebdt={String(d.oldPriceBdt)} 
                          className="text-sm !text-gray-400 line-through" 
                        />
                      )}
                      <DualPricing 
                        price={d.price} 
                        pricebdt={d.priceBdt} 
                        className="text-2xl font-bold !text-primary" 
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">/first year</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-center text-description-text leading-relaxed mb-4 flex-1">
                    {d.blurb}
                  </p>

                  {/* Features */}
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <LuBadgeCheck className="w-3.5 h-3.5 text-primary" />
                      Free Privacy
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="flex items-center gap-1">
                      <LuBadgeCheck className="w-3.5 h-3.5 text-primary" />
                      DNS Included
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <DomainPricingButtonGroup />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-description-text">
          <div className="flex items-center gap-2">
            <LuBadgeCheck className="w-5 h-5 text-primary" />
            <span>Free WHOIS Privacy</span>
          </div>
          <div className="flex items-center gap-2">
            <LuBadgeCheck className="w-5 h-5 text-primary" />
            <span>Free DNS Management</span>
          </div>
          <div className="flex items-center gap-2">
            <LuBadgeCheck className="w-5 h-5 text-primary" />
            <span>24/7 Expert Support</span>
          </div>
          <div className="flex items-center gap-2">
            <LuBadgeCheck className="w-5 h-5 text-primary" />
            <span>Easy Transfer Process</span>
          </div>
        </div>
      </div>
    </section>
  );
}
