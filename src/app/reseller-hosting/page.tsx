import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiUsers, FiDollarSign, FiSettings, FiShield, FiCheck, FiTrendingUp, FiHeadphones } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Reseller Hosting | Hostfame",
  description: "Start your own hosting business with Hostfame reseller hosting. White-label solution with WHM/cPanel, free WHMCS, and full support.",
};

export const dynamic = "force-static";

const features = [
  { icon: FiUsers, title: "White-Label Ready", description: "Your brand, your business. Fully customizable for your clients." },
  { icon: FiDollarSign, title: "Set Your Prices", description: "Complete control over pricing and packages you offer." },
  { icon: FiSettings, title: "WHM Control Panel", description: "Powerful WHM interface to manage all client accounts." },
  { icon: FiShield, title: "Free WHMCS License", description: "Automate billing and support with included WHMCS." },
];

const plans = [
  {
    name: "Starter Reseller",
    price: "$19.99",
    period: "/mo",
    features: ["50GB SSD Storage", "500GB Bandwidth", "25 cPanel Accounts", "Free WHM/cPanel", "Free WHMCS", "Free SSL"],
    popular: false,
  },
  {
    name: "Business Reseller",
    price: "$39.99",
    period: "/mo",
    features: ["100GB SSD Storage", "1TB Bandwidth", "50 cPanel Accounts", "Free WHM/cPanel", "Free WHMCS", "Free SSL", "Priority Support"],
    popular: true,
  },
  {
    name: "Pro Reseller",
    price: "$79.99",
    period: "/mo",
    features: ["200GB SSD Storage", "Unlimited Bandwidth", "Unlimited Accounts", "Free WHM/cPanel", "Free WHMCS", "Free SSL", "Priority Support", "White-label DNS"],
    popular: false,
  },
];

const benefits = [
  { icon: FiTrendingUp, title: "Passive Income", description: "Build recurring revenue by hosting client websites" },
  { icon: FiHeadphones, title: "We Handle Support", description: "Focus on sales while we handle server maintenance" },
  { icon: FiDollarSign, title: "Low Startup Cost", description: "Start your hosting business with minimal investment" },
  { icon: FiUsers, title: "Grow Unlimited", description: "Scale your business as you get more clients" },
];

export default function ResellerHostingPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg min-h-screen flex flex-col">
        <Navbar isTransparent />
        <SectionWrapper className="flex-1 flex items-center py-16">
          <div className="text-center text-white w-full">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-4">
              Start Your Hosting Business
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Reseller Hosting
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Launch your own web hosting company with our white-label reseller hosting. 
              Includes WHM, cPanel, and WHMCS at no extra cost.
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
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
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
          Reseller Hosting Plans
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to start your hosting business. All plans include WHM, cPanel, and WHMCS.
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
                  plan.popular ? "bg-white text-teal-700 hover:bg-gray-100" : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Start Reselling */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Start a Hosting Business?
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your Hosting Empire
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join hundreds of entrepreneurs who&apos;ve built successful hosting businesses with Hostfame.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            Contact Sales
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
