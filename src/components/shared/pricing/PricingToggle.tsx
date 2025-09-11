"use client"

import { PricingToggleProps } from "@/types/pricing.types"

export function PricingToggle({ billingPeriod, onToggle, yearlyDiscount }: PricingToggleProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="relative flex items-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-2 shadow-lg">
        <div
          className={`absolute top-2 bottom-2 rounded-xl transition-all duration-300 ease-out shadow-md ${billingPeriod === "monthly" ? "left-2 right-1/2 bg-primary" : "left-1/2 right-2 bg-secondary"}`}
        />

        <button
          onClick={() => onToggle("monthly")}
          className={` cursor-pointer relative z-10 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${billingPeriod === "monthly" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          Monthly
        </button>

        <button
          onClick={() => onToggle("yearly")}
          className={` cursor-pointer relative z-10 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${billingPeriod === "yearly" ? "text-secondary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          ✨ Yearly
        </button>
      </div>

      <div className="flex items-center gap-2 animate-pulse">
        <div className={`${billingPeriod === "yearly" ? "opacity-100" : " opacity-0"} flex items-center gap-1`}>
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.1s]" />
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
        </div>
        <span className={`${billingPeriod === "yearly" ? "opacity-100" : " opacity-0"} text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full`}>
          Save up to {yearlyDiscount}%
        </span>
      </div>
    </div>
  )
}
