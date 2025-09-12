"use client";

import * as React from "react";

type BillingPeriod = "monthly" | "yearly";

export type PricingToggleProps = {
  billingPeriod: BillingPeriod;
  onToggle: (p: BillingPeriod) => void;
  yearlyDiscount: number | string;
  /** pass your shared toggle here; it will replace the fallback */
  ToggleComponent?: React.ReactNode;
  className?: string;
};

/* --- dashed curved arrow (like the screenshot) --- */
function CurvedDottedArrow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      width="96"
      height="52"
      viewBox="0 0 96 52"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6.5"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
        </marker>
      </defs>

      {/* arcing dashed line */}
      <path
        d="M4 40 C 30 8, 64 8, 92 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 6"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
}

/* --- fallback segmented toggle (use your shared comp instead) --- */
function FallbackToggle({
  billingPeriod,
  onToggle,
}: {
  billingPeriod: BillingPeriod;
  onToggle: (p: BillingPeriod) => void;
}) {
  return (
    <div className="flex rounded-full bg-[#1E2A3B] p-1">
      <button
        onClick={() => onToggle("monthly")}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billingPeriod === "monthly"
          ? "bg-primary text-white"
          : "text-white/70 hover:text-white"
          }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onToggle("yearly")}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billingPeriod === "yearly"
          ? "bg-primary text-white"
          : "text-white/70 hover:text-white"
          }`}
      >
        Yearly
      </button>
    </div>
  );
}

export function PricingToggle({
  billingPeriod,
  onToggle,
  yearlyDiscount,
  ToggleComponent,
  className = "",
}: PricingToggleProps) {
  return (
    <div className={`flex justify-center items-center gap-4 ${className}`}>
      {/* your shared toggle goes here */}
      {ToggleComponent ?? (
        <FallbackToggle billingPeriod={billingPeriod} onToggle={onToggle} />
      )}

      {/* discount with arrow */}
      <div className="relative flex items-start">
        {/* nudge the arrow up a bit so it sits above the text like the mock */}
        <CurvedDottedArrow className="text-primary -mt-2 mr-2" />
        <span className="text-primary text-sm font-medium whitespace-nowrap self-center -ml-12 mt-7">
          Upto {yearlyDiscount}% save
        </span>
      </div>
    </div>
  );
}