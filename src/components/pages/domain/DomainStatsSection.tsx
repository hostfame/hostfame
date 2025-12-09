import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { LuGlobe, LuUsers, LuShieldCheck, LuHeadphones } from "react-icons/lu";

const stats = [
  {
    icon: LuGlobe,
    value: "100+",
    label: "Domain Extensions",
    description: "Choose from a wide variety of TLDs",
  },
  {
    icon: LuUsers,
    value: "6,000+",
    label: "Happy Customers",
    description: "Across all the brands",
  },
  {
    icon: LuShieldCheck,
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Your domain is always accessible",
  },
  {
    icon: LuHeadphones,
    value: "24/7",
    label: "Expert Support",
    description: "Real humans, real help",
  },
];

export default function DomainStatsSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark">
      <SectionWrapper className="py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Hostfame for their domain needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <stat.icon className="w-7 h-7 text-white" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/70">
                {stat.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <LuShieldCheck className="w-5 h-5" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <LuShieldCheck className="w-5 h-5" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <LuShieldCheck className="w-5 h-5" />
            <span>Money Back Guarantee</span>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
