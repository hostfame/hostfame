"use client"

import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader"
import { PricingCard } from "@/components/shared/pricing/PricingCard"
import { PricingToggle } from "@/components/shared/pricing/PricingToggle"
import { pricingData } from "@/data/pricing.data"
import { BillingPeriod } from "@/types/pricing.types"
import { useState } from "react"

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly")
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const handleToggleExpand = (planId: string) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(planId)) {
      newExpanded.delete(planId)
    } else {
      newExpanded.add(planId)
    }
    setExpandedCards(newExpanded)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="mx-auto relative z-10 space-y-10">
        <div className="text-center ">
          <CenteredSectionHeader title={pricingData.title} />
          {pricingData.subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              {pricingData.subtitle}
            </p>
          )}
        </div>

        <PricingToggle
          billingPeriod={billingPeriod}
          onToggle={setBillingPeriod}
          yearlyDiscount={pricingData.yearlyDiscount}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-6 max-w-7xl mx-auto">
          {pricingData.plans.map((plan, index) => (
            <div
              key={plan.id}
              className="flex justify-center"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <PricingCard
                plan={plan}
                billingPeriod={billingPeriod}
                isExpanded={expandedCards.has(plan.id)}
                onToggleExpand={() => handleToggleExpand(plan.id)}
                className="w-full max-w-sm animate-fade-in-up"
              />
            </div>
          ))}
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">Trusted by thousands of businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 text-foreground">
            <div className="text-xs font-medium">30-Day Money Back</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="text-xs font-medium">No Setup Fees</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="text-xs font-medium">Cancel Anytime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
