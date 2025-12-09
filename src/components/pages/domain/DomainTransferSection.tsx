"use client";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Button } from "@/components/shared/html/Button";
import { useIpProviderContextValue } from "@/providers/IpProvider";
import { redirectLinkConfig } from "@/config/redirect-links.config";
import { LuArrowRight, LuShieldCheck, LuClock, LuHeadphones, LuBadgeCheck } from "react-icons/lu";

const transferFeatures = [
  {
    icon: LuShieldCheck,
    title: "Secure Transfer",
    description: "Your domain stays online throughout the entire transfer process with zero downtime.",
  },
  {
    icon: LuClock,
    title: "Fast Processing",
    description: "Most transfers complete within 5-7 days, with real-time status updates.",
  },
  {
    icon: LuHeadphones,
    title: "Expert Support",
    description: "Our domain specialists help you every step of the way - from start to finish.",
  },
];

const transferSteps = [
  { step: "1", title: "Unlock Domain", desc: "Unlock at current registrar" },
  { step: "2", title: "Get Auth Code", desc: "Request EPP/Auth code" },
  { step: "3", title: "Start Transfer", desc: "Enter domain & code" },
  { step: "4", title: "Confirm & Done", desc: "Approve & enjoy!" },
];

export default function DomainTransferSection() {
  const countryCode = useIpProviderContextValue();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-950">
      <SectionWrapper className="py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <LuArrowRight className="w-4 h-4" />
              Easy Domain Transfer
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Transfer Your Domain to Hostfame
            </h2>
            
            <p className="text-description-text text-base leading-relaxed">
              Already own a domain? Move it to Hostfame and enjoy better pricing, free WHOIS privacy, 
              and expert support. Plus, we&apos;ll extend your registration by 1 year at no extra cost.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {transferFeatures.map((feature, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text">{feature.title}</h3>
                  <p className="text-sm text-description-text leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                href={
                  redirectLinkConfig.transferLink +
                  `&currency=${countryCode === "BD" ? "2" : "1"}`
                }
                target="_blank"
                size="lg"
              >
                Transfer Now →
              </Button>
            </div>
          </div>

          {/* Right - Transfer Steps */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-text mb-6 text-center">
                4 Simple Steps to Transfer
              </h3>
              
              <div className="space-y-4">
                {transferSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text">{step.title}</h4>
                      <p className="text-sm text-description-text">{step.desc}</p>
                    </div>
                    <LuBadgeCheck className="w-5 h-5 text-primary ml-auto" />
                  </div>
                ))}
              </div>

              {/* Bonus Banner */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <p className="text-center text-sm font-medium text-primary">
                  Bonus: Get +1 Year Free on all transfers
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
