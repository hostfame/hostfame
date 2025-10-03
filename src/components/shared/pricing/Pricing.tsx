"use client";

import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import { PricingCard } from "@/components/shared/pricing/PricingCard";
import { PricingToggle } from "@/components/shared/pricing/PricingToggle";
import { BillingPeriod, PricingData } from "@/types/pricing.types";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaShieldAlt } from "react-icons/fa";
import { MdNoAccounts } from "react-icons/md";

export function Pricing({
  data,
  toggleButton,
}: {
  data: PricingData;
  toggleButton: boolean;
}) {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");
  // Always expanded → single state instead of per-card
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="relative">
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" /> */}

      <div className="mx-auto relative z-10 space-y-10">
        <div className="text-center ">
          <CenteredSectionHeader title={data.title} />
          {data.subtitle && (
            <p className="text-xl text-muted-foreground max-w-1.5xl mx-auto leading-relaxed text-balance">
              {data.subtitle}
            </p>
          )}
        </div>

        {toggleButton && (
          <PricingToggle
            billingPeriod={billingPeriod}
            onToggle={setBillingPeriod}
            yearlyDiscount={data.yearlyDiscount}
            yearlyDiscountBdt={data.yearlyDiscountBdt}
          />
        )}

        <div
          className={`grid grid-cols-1 lg:grid-cols-${data.plans.length} gap-10 lg:gap-8 mx-auto pt-10 items-stretch`}
        >
          {data.plans.map((plan, index) => (
            <div
              key={plan.id}
              className="h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PricingCard
                plan={plan}
                billingPeriod={billingPeriod}
                isExpanded={isExpanded}
                onToggleExpand={handleToggleExpand}
                className="w-full h-full flex flex-col"
              />
            </div>
          ))}
        </div>

        <section className="relative w-full bg-gradient-to-r  from-teal-950 to-teal-800 py-8 md:py-12 px-4 sm:px-8 lg:px-14 text-white rounded-2xl overflow-hidden">
          {/* Background Circles */}
          <div className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-bl from-white to-gray-300 rounded-full opacity-15" />
          <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-tr from-white to-gray-400 rounded-full opacity-15" />

          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              30 Day Money-back Guarantee
            </h2>
            <p className="text-white text-sm md:text-base ">
              There is no risk with our 30-day money back guarantee. No question asked.
            </p>
          </div>

        </section>

      </div>
    </section>
  );
}
