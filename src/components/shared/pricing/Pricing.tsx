"use client";

import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import { PricingCard } from "@/components/shared/pricing/PricingCard";
import { PricingToggle } from "@/components/shared/pricing/PricingToggle";
import { BillingPeriod, PricingData } from "@/types/pricing.types";
import { useState } from "react";

export function Pricing({
  data,
  toggleButton,
}: {
  data: PricingData;
  toggleButton: boolean;
}) {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  // Always expanded → single state instead of per-card
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="relative overflow-hidden">
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
          />
        )}

        <div
          className={`grid grid-cols-1 lg:grid-cols-${data.plans.length} gap-10 lg:gap-8 mx-auto pt-5 items-stretch`}
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

        <section aria-label="Trust badges" className="py-4 text-center">
          <p className="text-xs uppercase tracking-[0.08em] text-description-text">
            Trusted by thousands of businesses worldwide
          </p>

          <div className="">
            <div className="mx-auto px-2 py-2">
              <ul className="flex flex-wrap items-center justify-center gap-2 text-text text-[0.8rem] font-medium leading-6 md:gap-0">
                <li className="px-3 py-1">30-Day Money Back</li>

                {/* Divider (only show when not wrapping) */}
                <li
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-neutral-300/60 md:block dark:bg-neutral-700/60"
                />

                <li className="px-3 py-1">No Setup Fees</li>

                <li
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-neutral-300/60 md:block dark:bg-neutral-700/60"
                />

                <li className="px-3 py-1">Cancel Anytime</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
