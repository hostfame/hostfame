"use client"

import { PricingCardProps } from "@/types/pricing.types"
import { Card, CardContent, CardHeader } from "../html/Card"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { PrimaryButton } from "../html/PrimaryButton"
import Image from "next/image"
import { Tooltip } from "react-tooltip"

export function PricingCard({ plan, billingPeriod, isExpanded, onToggleExpand, className }: PricingCardProps) {
  const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
  const formattedPrice = (price / 1000).toLocaleString("en-BD")
  const period = billingPeriod === "monthly" ? "Per Month" : "Per Year"

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
        `relative transition-all duration-500 hover:shadow-2xl group overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-border/50 ${plan.isPopular && "ring-2 ring-primary/50 shadow-2xl z-10 bg-gradient-to-br from-primary/5 to-primary/10"} ${isExpanded && "shadow-xl"} ${plan.isPopular ? isExpanded ? "scale-102" : "scale-105" : ""} ${className}`
      }
    >
      {
        plan.isPopular && (
          <div className=" w-fit mx-auto">
            <section className="rounded-xl bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-6 py-2 text-sm font-bold shadow-lg animate-pulse">
              <span className=" flex justify-center items-center gap-3">
                <Image
                  src={plan.icon}
                  alt={plan.name}
                  width={20}
                  height={20}
                />
                <p>Most Popular</p>
              </span>
            </section>
          </div>
        )
      }

      <CardHeader className="space-y-5 text-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div
            className={
              `h-18 rounded-2xl transition-all duration-300 group-hover:scale-110 text-4xl }`
            }
          >
            <Image
              src={plan.icon}
              alt={plan.name}
              width={60}
              height={60}
            />
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
            className="text-emerald-600 border border-emerald-300 bg-emerald-100 rounded-full py-1.5"
          >
            {plan.guarantee}
          </section>
        </div>

        <PrimaryButton variant={plan.isPopular ? "light" : "bordered"}>
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
            <div key={section.title} className=" space-y-5">
              <h4 className="bg-gray-100 py-2 px-5 font-bold text-foreground text-xl rounded-xl flex items-center gap-2">
                {section.title}
              </h4>
              <div className="space-y-3 ml-3">
                {section.features.map((feature, index) => (
                  <div
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Hello world!"
                    key={index}
                    className="flex items-center gap-3 text-sm group/feature"
                  >
                    <div
                      className={
                        `p-1 rounded-full transition-all duration-200 ${feature.included ? " group-hover/feature:scale-110" : ""}`
                      }
                    >
                      {feature.included ? (
                        <div className=" bg-emerald-200 p-1 rounded-full">
                          <Image
                            src={"/assets/pricing/check.svg"}
                            alt={"check"}
                            width={10}
                            height={10}
                          />
                        </div>
                      ) : (
                        <div className=" bg-red-200 p-1 rounded-full">
                          <Image
                            src={"/assets/pricing/cross.svg"}
                            alt={"cross"}
                            width={10}
                            height={10}
                          />
                        </div>
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
            onClick={onToggleExpand}
            className={` cursor-pointer w-full h-12 flex justify-center items-center rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-foreground hover:bg-primary/20 hover:text-secondary border border-primary/40 hover:border-primary/80 `}
          >
            {isExpanded ? (
              <>
                <FaChevronUp className="h-3 w-3 mr-2" />
                Show Less Features
              </>
            ) : (
              <>
                <FaChevronDown className="h-3 w-3 mr-2" />
                See More Features
              </>
            )}
          </button>
        </div>
      </CardContent>
    </Card >
  )
}
