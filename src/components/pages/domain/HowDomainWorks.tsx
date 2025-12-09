import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { LuSearch, LuShoppingCart, LuSettings, LuRocket } from "react-icons/lu";

const steps = [
  {
    icon: LuSearch,
    step: "01",
    title: "Search Your Domain",
    description: "Enter your desired domain name and check availability across multiple extensions instantly.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: LuShoppingCart,
    step: "02",
    title: "Add to Cart",
    description: "Select your preferred domain and add any optional services like email hosting or SSL certificates.",
    color: "from-primary-dark to-primary",
  },
  {
    icon: LuSettings,
    step: "03",
    title: "Configure DNS",
    description: "Point your domain to your website with our easy DNS management tools - or let us help you.",
    color: "from-primary to-primary-light",
  },
  {
    icon: LuRocket,
    step: "04",
    title: "Go Live!",
    description: "Your domain is active and ready. Start building your online presence with confidence.",
    color: "from-primary-light to-primary",
  },
];

export default function HowDomainWorks() {
  return (
    <SectionWrapper className="pb-16 md:pb-20">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          Get Your Domain in 4 Easy Steps
        </h2>
        <p className="text-description-text max-w-2xl mx-auto">
          From search to launch, we&apos;ve made domain registration simple, fast, and hassle-free.
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group">
              {/* Step Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden">
                {/* Step Number Badge - Inline */}
                <div className={`py-2 px-4 bg-gradient-to-r ${step.color} text-white text-xs font-bold`}>
                  Step {step.step}
                </div>

                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-description-text leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Arrow (Mobile/Tablet) */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
