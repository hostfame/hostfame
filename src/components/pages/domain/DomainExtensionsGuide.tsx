import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { LuBuilding2, LuUsers, LuCode, LuShoppingBag, LuGlobe, LuBriefcase } from "react-icons/lu";

const extensions = [
  {
    tld: ".com",
    icon: LuGlobe,
    bestFor: "Everyone",
    description: "The world's most recognized and trusted domain extension. Perfect for any type of website.",
    popularity: 95,
    useCases: ["Businesses", "Personal Sites", "E-commerce", "Blogs"],
  },
  {
    tld: ".org",
    icon: LuUsers,
    bestFor: "Organizations",
    description: "Ideal for non-profits, communities, open-source projects, and organizations.",
    popularity: 75,
    useCases: ["Non-profits", "Charities", "Communities", "Foundations"],
  },
  {
    tld: ".net",
    icon: LuCode,
    bestFor: "Tech & Networks",
    description: "Great for tech companies, network services, and internet-related businesses.",
    popularity: 70,
    useCases: ["Tech Startups", "SaaS", "Network Services", "IT Companies"],
  },
  {
    tld: ".shop",
    icon: LuShoppingBag,
    bestFor: "E-commerce",
    description: "Perfect for online stores, retail businesses, and e-commerce brands.",
    popularity: 60,
    useCases: ["Online Stores", "Retail", "Dropshipping", "Marketplaces"],
  },
  {
    tld: ".pro",
    icon: LuBriefcase,
    bestFor: "Professionals",
    description: "Show your expertise. Great for consultants, freelancers, and service providers.",
    popularity: 50,
    useCases: ["Consultants", "Freelancers", "Portfolios", "Services"],
  },
  {
    tld: ".online",
    icon: LuBuilding2,
    bestFor: "Modern Brands",
    description: "A versatile, modern extension for any online presence or digital business.",
    popularity: 55,
    useCases: ["Startups", "Digital Services", "Blogs", "Personal Brands"],
  },
];

export default function DomainExtensionsGuide() {
  return (
    <SectionWrapper className="py-16 md:py-20">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
          Extension Guide
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          Choose the Perfect Domain Extension
        </h2>
        <p className="text-description-text max-w-2xl mx-auto">
          Not sure which extension to pick? Here&apos;s a quick guide to help you choose the right one for your needs.
        </p>
      </div>

      {/* Extensions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map((ext, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark transition-colors">
                  <ext.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{ext.tld}</h3>
                  <span className="text-xs text-description-text">Best for {ext.bestFor}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-description-text leading-relaxed mb-4">
              {ext.description}
            </p>

            {/* Popularity Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-description-text mb-1">
                <span>Popularity</span>
                <span>{ext.popularity}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
                  style={{ width: `${ext.popularity}%` }}
                />
              </div>
            </div>

            {/* Use Cases */}
            <div className="flex flex-wrap gap-2">
              {ext.useCases.map((useCase, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-description-text mb-4">
          Still not sure? Our domain experts are here to help you choose.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
        >
          Contact Support
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </SectionWrapper>
  );
}
