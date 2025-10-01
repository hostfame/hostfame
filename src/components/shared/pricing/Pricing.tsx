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

        <section aria-label="Trust badges" className="mx-auto max-w-5xl px-4 py-8 md:py-10">
          <div className="relative overflow-hidden rounded-2xl border border-border-light-gray p-4 md:p-6">

            <p className="text-center text-[0.7rem] uppercase tracking-[0.12em] text-description-text">
              Trusted by thousands of businesses worldwide
            </p>

            {/* badges */}
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <li>
                <div className="group flex items-center justify-center gap-2 rounded-xl border border-border-light-gray bg-white-background px-4 py-3 text-text-accent shadow-sm transition-all duration-200 hover:-translate-y-px hover:shadow-md">
                  <FaShieldAlt className="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100" />
                  <span className="text-sm font-medium">30-Day Money Back</span>
                </div>
              </li>

              <li className="sm:hidden" aria-hidden="true">
                <div className="mx-auto h-px w-24 bg-border-light-gray" />
              </li>

              <li>
                <div className="group flex items-center justify-center gap-2 rounded-xl border border-border-light-gray bg-white-background px-4 py-3 text-text-accent shadow-sm transition-all duration-200 hover:-translate-y-px hover:shadow-md">
                  <MdNoAccounts className="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100" />
                  <span className="text-sm font-medium">No Setup Fees</span>
                </div>
              </li>

              <li>
                <div className="group flex items-center justify-center gap-2 rounded-xl border border-border-light-gray bg-white-background px-4 py-3 text-text-accent shadow-sm transition-all duration-200 hover:-translate-y-px hover:shadow-md">
                  <AiOutlineCloseCircle className="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100" />
                  <span className="text-sm font-medium">Cancel Anytime</span>
                </div>
              </li>
            </ul>

            {/* separators for wide screens */}
            <div className="mt-3 hidden items-center justify-center gap-6 sm:flex">
              <span className="h-px w-8 bg-border-light-gray" aria-hidden="true" />
              <span className="h-px w-8 bg-border-light-gray" aria-hidden="true" />
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
