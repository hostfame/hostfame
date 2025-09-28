"use client";

import useBrowserCountryCode from "@/hooks/useBrowserCountryCode";
import { BillingPeriod, PricingPlan } from "@/types/pricing.types";
import { formatPrice } from "@/utils/formatPrice";
import React from "react";

interface PricingValueProps {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
  children: React.ReactNode;
}

const PricingValue = ({ plan, billingPeriod, children }: PricingValueProps) => {
  const { countryCode } = useBrowserCountryCode();
  const isBD = countryCode === "BD";

  const mainCurrency = isBD ? "৳" : plan.currency;

  const monthlyPrice = isBD ? plan.monthlyPriceBdt : plan.monthlyPrice;
  const yearlyPrice = isBD ? plan.yearlyPriceBdt : plan.yearlyPrice;
  const monthlyPrevPrice = isBD ? plan.monthlyPrevPriceBdt : plan.monthlyPrevPrice;
  const yearlyPrevPrice = isBD ? plan.yearlyPrevPriceBdt : plan.yearlyPrevPrice;

  const price = billingPeriod === "yearly" ? yearlyPrice : monthlyPrice;
  const prevPrice = billingPeriod === "yearly" ? yearlyPrevPrice : monthlyPrevPrice;

  const renewalText = isBD
    ? (billingPeriod === "monthly") ? plan.renewalTextMonthlyBdt : plan.renewalTextYearlyBdt
    : (billingPeriod === "monthly") ? plan.renewalTextMonthly : plan.renewalTextYearly
  return (
    <>
      {!isBD && <div className="flex gap-2 justify-center items-center text-text">
        <p className="line-through">
          {mainCurrency}
          {formatPrice(Number(prevPrice), { southAsianGrouping: isBD })}
        </p>

        <p className="border rounded-full px-4 py-1">{plan.offer}% OFF</p>
      </div>}

      <div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-lg text-text">{mainCurrency}</span>
          <span
            className={`text-5xl font-semibold tracking-tight ${plan?.isPopular ? "text-primary" : "text-text"
              }`}
          >
            {formatPrice(Number(price), { southAsianGrouping: isBD })}{" "}
            <span className="text-2xl font-light">/mo</span>
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-2">
        {children}
        {(plan.renewalTextMonthly || plan.renewalTextYearly || plan.renewalTextMonthlyBdt || plan.renewalTextYearlyBdt) && (
          <p>{renewalText}</p>
        )}
      </div>
    </>
  );
};

export default PricingValue;
