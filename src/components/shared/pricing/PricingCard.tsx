"use client";

import { PricingCardProps } from "@/types/pricing.types";
import { Card, CardContent, CardHeader } from "../html/Card";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import { PlainButton } from "../html/PlainButton";
import { RxCross2 } from "react-icons/rx";
import PricingValue from "./PricingValue";
import { Tooltip } from "react-tooltip";

export function PricingCard({
  plan,
  billingPeriod,
  isExpanded,
  onToggleExpand,
  className,
}: PricingCardProps) {
  // const formattedPrice = (price / 1000).toLocaleString("en-BD")

  // Show only first 8 features when collapsed
  const visibleFeatures = isExpanded
    ? plan.features
    : plan.features
      .map((section) => ({
        ...section,
        features: section.features.slice(
          0,
          section.title === "Features" ? 12 : 0
        ),
      }))
      .filter((section) => section.features.length > 0);

  return (
    <section className="relative h-full">
      {plan.isPopular && (
        // <div className=" absolute -top-5 w-full mx-auto z-20">
        //   <section className="mx-auto w-fit text-white bg-primary rounded-full px-8 py-2">
        //     <span className=" flex justify-center items-center gap-3 uppercase">
        //       Most Popular
        //     </span>
        //   </section>
        // </div>

        <div className=" absolute -top-10 w-full mx-auto z-20">
          <section className="mx-auto w-full text-white bg-primary rounded-t-2xl px-8 py-2">
            <span className=" flex justify-center items-center gap-3 uppercase">
              Most Popular
            </span>
          </section>
        </div>
      )}

      <Card
        className={`relative transition-all duration-500 hover:shadow-2xl group overflow-hidden bg-gray-background backdrop-blur-sm border-border/50 flex flex-col h-full ${plan.isPopular && "border-2 border-t-0 border-primary rounded-t-none"
          }  ${isExpanded && "shadow-xl"}  ${className} `}
      >
        <CardHeader className="space-y-5 text-start relative z-10">
          <div className="flex flex-col items-start gap-4">
            <div className=" flex justify-center items-center gap-3 h-14">
              {/* <div
                className={`transition-all duration-300 group-hover:scale-110 text-4xl`}
              >
                <Image src={plan.icon} alt={plan.name} width={30} height={30} />
              </div> */}

              <h3 className="text-2xl font-bold text-dark-description-text">
                {plan.name}
              </h3>
            </div>
            {plan.description && (
              <p className="text-dark-description-text ">
                {plan.description}
              </p>
            )}
          </div>

          <PricingValue plan={plan} billingPeriod={billingPeriod}>
            {/* {plan.guarantee && (
              <div className="">
                <section className="mb-4 text-center text-emerald-800 border border-emerald-300 bg-emerald-100 rounded-full py-1.5">
                  {plan.guarantee}
                </section>
              </div>
            )} */}

            {plan.ctaText && (
              <PlainButton
                variant={plan.isPopular ? "dark" : "dark"}
                size="md"
                className={`transition-transform duration-200 hover:scale-105 !rounded-full ${plan.isPopular ? "!bg-primary" : "!bg-black/90"}`}
              >
                {plan.ctaText}
              </PlainButton>
            )}
          </PricingValue>
        </CardHeader>

        <CardContent className="space-y-5 relative z-10 flex flex-col flex-grow">
          {plan.specialOffer && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 ">
              <section className="">{plan.specialOffer.title}</section>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-2xl">🎁</span>
                <span className="text-black leading-relaxed">
                  {plan.specialOffer.description}
                </span>
              </div>
            </div>
          )}

          <div className="space-y-8">
            {visibleFeatures.map((section) => (
              <div key={section.title} className=" space-y-5">
                <h4 className={`font-bold text-dark-description-text text-xl rounded-xl flex items-center gap-2 ${section.title !== "Features" && "w-full px-5 py-2 bg-primary-extralight/10"}`}>
                  {section.title !== "Features" && section.title}
                </h4>
                <div className="space-y-3">
                  {section.features.map((feature, index) => {
                    // generate unique id using random
                    const id = Math.random().toString(36).substring(7);
                    return (
                      <div
                        data-tooltip-id={id}
                        data-tooltip-content={feature.description}
                        key={index}
                        className="flex items-center gap-3 group/feature"
                      >
                        <Tooltip
                          id={id}
                          place="right"
                          className=" max-w-[200px] text-wrap break-words !opacity-100 !bg-opacity-100 !bg-gradient-to-b from-primary-light to-primary !rounded-xl"
                        />
                        <div
                          className={`p-1 rounded-full transition-all duration-200 ${feature.included
                            ? " group-hover/feature:scale-110"
                            : ""
                            }`}
                        >
                          {feature.included ? (
                            <FaCheck className=" text-emerald-500" />
                          ) : (
                            <RxCross2 className=" text-red-500" />
                          )}
                        </div>
                        <span
                          className={`leading-relaxed transition-colors duration-200 font-semibold ${feature.included
                            ? "text-dark-description-text group-hover/feature:text-primary"
                            : "text-dark-description-text line-through"
                            }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <button
              onClick={onToggleExpand}
              className="w-full h-12 flex justify-center items-center 
                   rounded-2xl font-medium transition-all duration-300 
                   hover:scale-105 text-dark-description-text"
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
      </Card>
    </section>
  );
}
