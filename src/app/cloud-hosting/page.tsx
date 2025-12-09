import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiCloud, FiZap, FiShield, FiTrendingUp, FiServer, FiCheck, FiCpu, FiHardDrive } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Cloud Hosting | Hostfame",
  description: "High-performance cloud hosting with auto-scaling, SSD storage, and 99.9% uptime. Perfect for growing businesses and high-traffic websites.",
};

export const dynamic = "force-static";

const features = [
  { icon: FiZap, title: "Auto-Scaling", description: "Resources scale automatically based on your traffic demands" },
  { icon: FiShield, title: "Redundant Infrastructure", description: "Multiple data centers ensure your site stays online" },
  { icon: FiTrendingUp, title: "High Availability", description: "99.9% uptime SLA with automatic failover" },
  { icon: FiServer, title: "Dedicated Resources", description: "Guaranteed CPU, RAM, and storage for your sites" },
];

const plans = [
  {
    name: "Cloud Starter",
    price: "$9.99",
    period: "/mo",
    features: ["2 vCPU Cores", "4GB RAM", "50GB NVMe SSD", "3TB Bandwidth", "Free SSL", "Daily Backups"],
    popular: false,
  },
  {
    name: "Cloud Business",
    price: "$24.99",
    period: "/mo",
    features: ["4 vCPU Cores", "8GB RAM", "100GB NVMe SSD", "5TB Bandwidth", "Free SSL", "Daily Backups", "Free Domain"],
    popular: true,
  },
  {
    name: "Cloud Pro",
    price: "$49.99",
    period: "/mo",
    features: ["8 vCPU Cores", "16GB RAM", "200GB NVMe SSD", "Unlimited Bandwidth", "Free SSL", "Daily Backups", "Free Domain", "Priority Support"],
    popular: false,
  },
];

const techSpecs = [
  { icon: FiCpu, label: "Latest Intel/AMD CPUs" },
  { icon: FiHardDrive, label: "NVMe SSD Storage" },
  { icon: FiCloud, label: "Cloud Infrastructure" },
  { icon: FiShield, label: "DDoS Protection" },
];

export default function CloudHostingPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg min-h-screen flex flex-col">
        <Navbar isTransparent />
        <SectionWrapper className="flex-1 flex items-center py-16">
          <div className="text-center text-white w-full">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <FiCloud className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Cloud Hosting
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Enterprise-grade cloud infrastructure for businesses that need speed, reliability, and scalability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#plans" className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
                View Plans
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition">
                Talk to Sales
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Features */}
      <SectionWrapper className="py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper id="plans" className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Cloud Hosting Plans
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the cloud plan that fits your needs. All plans include 24/7 support and 30-day money-back guarantee.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 ${plan.popular ? "bg-teal-600 text-white ring-4 ring-teal-200" : "bg-gray-50 border border-gray-200"}`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "" : "text-gray-900"}`}>{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.popular ? "text-white/80" : "text-gray-500"}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <FiCheck className={plan.popular ? "text-white" : "text-teal-600"} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-white text-teal-700 hover:bg-gray-100"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Tech Specs */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Powered by Premium Hardware
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {techSpecs.map((spec) => (
            <div key={spec.label} className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100">
              <spec.icon className="w-6 h-6 text-teal-600" />
              <span className="font-medium text-gray-900">{spec.label}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Scale?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Get started with cloud hosting today. 30-day money-back guarantee on all plans.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            Contact Sales
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
