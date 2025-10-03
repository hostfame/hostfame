"use client";

import { BillingPeriod, PricingPlan } from "@/types/pricing.types";
import { formatPrice } from "@/utils/formatPrice";
import React from "react";
import { PlainButton } from "../html/PlainButton";
import { useIpProviderContextValue } from "@/providers/IpProvider";

interface PricingValueProps {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
  children?: React.ReactNode;
}

const PricingValue = ({ plan, billingPeriod, children }: PricingValueProps) => {
  const countryCode = useIpProviderContextValue();
  const isBD = countryCode === "BD";

  const mainCurrency = isBD ? "৳" : plan.currency;

  const monthlyPrice = isBD ? plan.monthlyPriceBdt : plan.monthlyPrice;
  const yearlyPrice = isBD ? plan.yearlyPriceBdt : plan.yearlyPrice;
  const monthlyPrevPrice = isBD
    ? plan.monthlyPrevPriceBdt
    : plan.monthlyPrevPrice;
  const yearlyPrevPrice = isBD ? plan.yearlyPrevPriceBdt : plan.yearlyPrevPrice;

  const price = billingPeriod === "yearly" ? yearlyPrice : monthlyPrice;
  const prevPrice =
    billingPeriod === "yearly" ? yearlyPrevPrice : monthlyPrevPrice;

  const perMonthText = billingPeriod === "yearly" ? "/year" : "/mo";

  const renewalText = isBD
    ? billingPeriod === "monthly"
      ? plan.renewalTextMonthlyBdt
      : plan.renewalTextYearlyBdt
    : billingPeriod === "monthly"
    ? plan.renewalTextMonthly
    : plan.renewalTextYearly;

  const setCountryQuery = isBD ? "currency=2" : "currency=1";

  return (
    <>
      {/* {!isBD && <div className="flex gap-2 justify-start items-center text-text">
        <p className="line-through">
          {mainCurrency}
          {formatPrice(Number(prevPrice), { southAsianGrouping: isBD })}
        </p>

        <p className="border rounded-full px-4 py-1">{plan.offer}% OFF</p>
      </div>} */}

      <div className="flex items-center gap-4 text-text">
        {/* Old price */}
        <p
          className={`text-gray-400 ${
            billingPeriod === "monthly" ? "" : "line-through"
          }`}
        >
          Was {mainCurrency}
          {formatPrice(
            Number(billingPeriod === "monthly" ? price : prevPrice),
            { southAsianGrouping: isBD }
          )}
        </p>

        {/* Discount tag */}
        <span className=" relative inline-flex items-center select-none px-3 py-1 rounded-md bg-lime-400 text-black text-xs font-semibold tracking-wide shadow rotate-[-10deg] -mt-4">
          <span className="relative z-[1] pl-2">
            {billingPeriod === "monthly"
              ? 0
              : isBD
              ? plan.offerBdt
              : plan.offer}
            % OFF
          </span>

          {/* Left-pointed wedge */}
          <span className=" pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-lime-400 " />

          {/* Tag hole */}
          <span className=" pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white ring-2 ring-lime-400 shadow-sm " />
        </span>
      </div>

      <div>
        <div className="flex items-baseline justify-start gap-1">
          <span className="text-5xl font-semibold text-text">
            {mainCurrency}
          </span>
          <span
            className={`text-5xl font-semibold tracking-tight ${
              plan?.isPopular ? "text-text" : "text-text"
            }`}
          >
            {formatPrice(Number(price), { southAsianGrouping: isBD })}{" "}
            <span className="text-2xl font-light">{perMonthText}</span>
          </span>
        </div>
      </div>

      {(plan.renewalTextMonthly ||
        plan.renewalTextYearly ||
        plan.renewalTextMonthlyBdt ||
        plan.renewalTextYearlyBdt) && (
        <p className=" text-text">{renewalText}</p>
      )}

      <div className="w-full flex flex-col space-y-2">
        {plan.ctaText && (
          <PlainButton
            target="_blank"
            href={`${isBD ? plan.hrefBdt : plan.href}&${setCountryQuery}&${
              billingPeriod === "yearly"
                ? "billingcycle=annually"
                : "billingcycle=monthly"
            }`}
            variant={plan.isPopular ? "dark" : "dark"}
            size="md"
            className={`transition-transform duration-200 hover:scale-105 !rounded-full ${
              plan.isPopular ? "!bg-primary" : "!bg-black/90"
            }`}
          >
            {plan.ctaText}
          </PlainButton>
        )}
      </div>
    </>
  );
};

export default PricingValue;
