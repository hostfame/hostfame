import React, { forwardRef } from "react";
import { VPSHostingData, VPSPlans } from "@/data/vpsHosting.data";
import { Button } from "@/components/shared/html/Button";

/**
 * Props:
 *  - className?: string to allow styling on the THEAD
 *  - isClone?: boolean  -> when true we omit `sticky top-0` classes (clone is already fixed)
 */
type Props = {
  className?: string;
  countryCode: string;
  currencyQuery: string;
  isClone?: boolean;
};

const VPSPricingHeader = forwardRef<HTMLTableSectionElement, Props>(
  ({ className = "", countryCode, currencyQuery, isClone = false }, ref) => {
    // When rendering the clone (isClone = true), do not add "sticky top-0" classes.
    const thFeatureClass =
      "w-56 p-4 text-left bg-primary text-primary-foreground font-semibold border-r border-border " +
      (isClone ? "" : "sticky top-0 left-0 z-40");
    const thPlanClass =
      "p-4 text-center bg-primary text-primary-foreground border-l border-border " +
      (isClone ? "" : "sticky top-0 z-30");

    return (
      <thead ref={ref} className={className}>
        <tr>
          <th className={thFeatureClass} scope="col">
            Features
          </th>

          {VPSPlans.map((plan) => (
            <th key={plan.name} className={thPlanClass} scope="col">
              <div className="text-sm font-semibold">{plan.name}</div>

              <div className="w-full mt-3 inline-block px-6 py-2 rounded-xl bg-primary-light text-primary-foreground font-bold text-2xl">
                {countryCode === "BD" ? plan.priceBDT : plan.priceUSD}
                <span className="block text-sm font-normal text-color-description-text">
                  /mo
                </span>
              </div>

              <Button
                target="_blank"
                href={plan.href + `&${currencyQuery}`}
                variant="bordered"
                size="sm"
                className="mt-4 w-full bg-white  text-primary !rounded-md !py-2 font-medium hover:!bg-white hover:!text-primary !hover:scale-105 transition duration-500 text-nowrap"
              >
                {VPSHostingData.orderNow}
              </Button>
            </th>
          ))}
        </tr>
      </thead>
    );
  }
);

VPSPricingHeader.displayName = "VPSPricingHeader";
export default VPSPricingHeader;
