"use client"

import { PricingCardProps } from "@/types/pricing.types"
import { Card, CardContent, CardHeader } from "../html/Card"
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { PrimaryButton } from "../html/PrimaryButton"

export function PricingCard({ plan, billingPeriod, isExpanded, onToggleExpand, className }: PricingCardProps) {
  const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
  const formattedPrice = (price / 1000).toLocaleString("en-BD")
  const period = billingPeriod === "monthly" ? "Per Month" : "Per Year"

  const getTierIcon = () => {
    switch (plan.name.toLowerCase()) {
      case "starter":
        return "⚡"
      case "pro":
        return "👑"
      case "ultimate":
        return "🚀"
      default:
        return plan.icon
    }
  }

  // Show only first 8 features when collapsed
  const visibleFeatures = isExpanded
    ? plan.features
    : plan.features
      .map((section) => ({
        ...section,
        features: section.features.slice(0, section.title === "Features" ? 8 : 0),
      }))
      .filter((section) => section.features.length > 0)

  return (
    <Card
      className={
        `relative transition-all duration-500 hover:shadow-2xl group overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-border/50 ${plan.isPopular && "ring-2 ring-secondary/50 shadow-2xl scale-105 z-10 bg-gradient-to-br from-secondary/5 to-secondary/10"} ${isExpanded && "shadow-xl"} ${className}`
      }
    >
      {
        plan.isPopular && (
          <div className=" w-fit mx-auto">
            <section className="rounded-xl bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-6 py-2 text-sm font-bold shadow-lg animate-pulse">
              👑 Most Popular
            </section>
          </div>
        )
      }

      <CardHeader className="space-y-5 text-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div
            className={
              `p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 text-4xl ${plan.isPopular ? "bg-gradient-to-br from-secondary to-secondary/80 shadow-lg" : "bg-muted"}`
            }
          >
            {getTierIcon()}
          </div>

          <div>
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-muted-foreground text-balance">{plan.description}</p>
          </div>
        </div>

        <div className="">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-lg text-muted-foreground">{plan.currency}</span>
            <span
              className={
                `text-5xl font-black tracking-tight ${plan.isPopular ? "text-secondary" : "text-foreground"}`
              }
            >
              {formattedPrice}
            </span>
          </div>
          <div className="text-muted-foreground font-medium">/{period}</div>
        </div>

        <div className="">
          <section
            className="text-emerald-600 border-emerald-200 bg-emerald-100 rounded-full"
          >
            {plan.guarantee}
          </section>
        </div>

        <PrimaryButton variant={plan.isPopular ? "dark" : "light"}>
          {plan.ctaText}
        </PrimaryButton>

        <p className="text-xs text-muted-foreground">{plan.renewalText}</p>
      </CardHeader>

      <CardContent className=" space-y-5 relative z-10">
        {plan.specialOffer && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 ">
            <section
              className="">
              {plan.specialOffer.title}
            </section>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-2xl">🎁</span>
              <span className="text-muted-foreground leading-relaxed">{plan.specialOffer.description}</span>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {visibleFeatures.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-secondary to-secondary/50 rounded-full" />
                {section.title}
              </h4>
              <div className="space-y-3 ml-3">
                {section.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm group/feature">
                    <div
                      className={
                        `p-1 rounded-full transition-all duration-200 ${feature.included ? " group-hover/feature:scale-110" : ""}`
                      }
                    >
                      {feature.included ? (
                        <FaCheckCircle className="h-5 w-5 text-emerald-500 " />
                      ) : (
                        <RxCross2 className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <span
                      className={
                        `leading-relaxed transition-colors duration-200 ${feature.included ? "text-foreground group-hover/feature:text-secondary" : "text-muted-foreground line-through"}`
                      }
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50">
          <button
            // variant="ghost"
            onClick={onToggleExpand}
            className={` cursor-pointer w-full h-12 flex justify-center items-center rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-foreground hover:bg-secondary/10 hover:text-secondary border border-transparent hover:border-secondary/20`}
          >
            {isExpanded ? (
              <>
                <FaChevronUp className="h-5 w-5 mr-2" />
                Show Less Features
              </>
            ) : (
              <>
                <FaChevronDown className="h-5 w-5 mr-2" />
                See More Features
              </>
            )}
          </button>
        </div>
      </CardContent>
    </Card >
  )
}
