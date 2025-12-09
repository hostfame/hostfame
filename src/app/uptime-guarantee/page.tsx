import TermsAndConditionBanner from "@/components/shared/sections/TermsAndConditionBanner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import { FiCheckCircle, FiClock, FiShield, FiZap, FiServer, FiRefreshCw } from "react-icons/fi";

export const metadata: Metadata = {
  title: "99.9% Uptime Guarantee | Hostfame",
  description: "Hostfame guarantees 99.9% uptime for all hosting services. Learn about our SLA, infrastructure, and commitment to keeping your website online.",
};

export const dynamic = "force-static";

const uptimeBannerData = {
  title: "99.9% Uptime Guarantee",
  subtitle:
    "Your website deserves to be online 24/7. Our infrastructure is built for reliability, backed by our industry-leading Service Level Agreement.",
  updatedISO: "2025-01-01",
  badgeLabel: "SLA",
  ctas: [
    {
      label: "View Our SLA",
      href: "#sla-details",
      variant: "primary" as const,
      icon: "file" as const,
    },
    {
      label: "Check Status",
      href: "/status",
      variant: "ghost" as const,
      icon: "shield" as const,
    },
  ],
  highlights: [
    {
      icon: "shield" as const,
      text: "99.9% uptime guarantee backed by our Service Level Agreement.",
    },
    {
      icon: "clock" as const,
      text: "Maximum 43 minutes of downtime per month allowed under SLA.",
    },
    {
      icon: "support" as const,
      text: "Account credits issued automatically for SLA breaches.",
    },
  ],
};

const uptimeFeatures = [
  {
    icon: FiServer,
    title: "Enterprise Infrastructure",
    description: "Our servers run on enterprise-grade hardware with redundant power supplies, RAID storage, and ECC memory for maximum reliability.",
  },
  {
    icon: FiShield,
    title: "DDoS Protection",
    description: "Advanced DDoS mitigation protects your website from attacks, ensuring your services remain accessible even under heavy traffic.",
  },
  {
    icon: FiRefreshCw,
    title: "Automated Failover",
    description: "Automatic failover systems detect issues and redirect traffic instantly, minimizing any potential downtime.",
  },
  {
    icon: FiZap,
    title: "24/7 Monitoring",
    description: "Our team monitors all systems around the clock with real-time alerts to address issues before they affect your website.",
  },
];


export default function UptimeGuaranteePage() {
  return (
    <section className="pb-16">
      <TermsAndConditionBanner data={uptimeBannerData} />

      {/* Why Uptime Matters */}
      <SectionWrapper className="py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Uptime Matters
          </h2>
          <p className="text-lg text-gray-600">
            Every minute of downtime costs you visitors, revenue, and reputation. 
            That&apos;s why we&apos;ve built our infrastructure for maximum reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uptimeFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Guarantee */}
      <SectionWrapper id="sla-details" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
            <div className="text-7xl md:text-8xl font-bold mb-4">99.9%</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Guaranteed Uptime
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              We guarantee your website will be online 99.9% of the time. That&apos;s our promise, 
              backed by our Service Level Agreement. If we ever fall short, you&apos;ll be compensated.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="bg-white/10 rounded-xl px-6 py-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-white/80">Monitoring</div>
              </div>
              <div className="bg-white/10 rounded-xl px-6 py-4">
                <div className="text-2xl font-bold">&lt;43 min</div>
                <div className="text-white/80">Max Monthly Downtime</div>
              </div>
              <div className="bg-white/10 rounded-xl px-6 py-4">
                <div className="text-2xl font-bold">Auto</div>
                <div className="text-white/80">Credit if SLA Breached</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What's Covered */}
      <SectionWrapper className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What&apos;s Covered
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-teal-900 mb-4 flex items-center gap-2">
                <FiCheckCircle className="text-teal-600" />
                Included in SLA
              </h3>
              <ul className="space-y-3">
                {[
                  "Server hardware failures",
                  "Network connectivity issues",
                  "Data center power outages",
                  "Unplanned maintenance",
                  "DDoS attacks affecting service",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-teal-800">
                    <FiCheckCircle className="text-teal-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FiClock className="text-gray-600" />
                Not Covered
              </h3>
              <ul className="space-y-3">
                {[
                  "Scheduled maintenance (announced 24hrs ahead)",
                  "Customer-side issues or misconfigurations",
                  "Third-party service outages",
                  "Domain/DNS propagation delays",
                  "Resource limit exceeded suspensions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for Reliable Hosting?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of websites that trust Hostfame for their hosting needs. 
            Start with our 30-day money-back guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/web-hosting"
              className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Get Started Now
            </a>
            <a
              href="/status"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition"
            >
              View System Status
            </a>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
