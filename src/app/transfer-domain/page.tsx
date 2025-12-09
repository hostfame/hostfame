import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiGlobe, FiCheck, FiArrowRight, FiShield, FiClock, FiDollarSign } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Domain Transfer | Hostfame",
  description: "Transfer your domain to Hostfame. Get 1 year free extension, free WHOIS privacy, and easy management. Move your domain today.",
};

export const dynamic = "force-static";

const benefits = [
  { icon: FiClock, title: "+1 Year Free", description: "Get an extra year added to your domain registration" },
  { icon: FiShield, title: "Free Privacy", description: "WHOIS privacy protection included at no cost" },
  { icon: FiDollarSign, title: "Competitive Pricing", description: "Low transfer and renewal rates" },
  { icon: FiGlobe, title: "Easy Management", description: "Manage domains and hosting in one place" },
];

const steps = [
  { step: "1", title: "Unlock Your Domain", description: "Log into your current registrar and unlock your domain" },
  { step: "2", title: "Get Auth Code", description: "Request the authorization/EPP code from your registrar" },
  { step: "3", title: "Start Transfer", description: "Enter your domain and auth code on our transfer page" },
  { step: "4", title: "Approve Transfer", description: "Click the approval link sent to your email" },
  { step: "5", title: "Done!", description: "Your domain is now with Hostfame" },
];

const popularTlds = [
  { tld: ".com", price: "$12.99" },
  { tld: ".net", price: "$14.99" },
  { tld: ".org", price: "$14.99" },
  { tld: ".io", price: "$39.99" },
  { tld: ".co", price: "$29.99" },
  { tld: ".info", price: "$19.99" },
];

export default function TransferDomainPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Transfer Your Domain
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Move your domain to Hostfame and get +1 year free. Easy process, great support.
          </p>
          
          {/* Transfer Search */}
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter domain to transfer (e.g., example.com)"
                className="flex-1 px-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <button className="px-6 py-4 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
                Transfer Now
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Benefits */}
      <SectionWrapper className="py-12">
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

      {/* Transfer Pricing */}
      <SectionWrapper className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Transfer Pricing
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {popularTlds.map((item) => (
            <div key={item.tld} className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-gray-900">{item.tld}</div>
              <div className="text-teal-600 font-semibold">{item.price}/yr</div>
              <div className="text-xs text-gray-500">+1 year free</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Transfer price includes 1 year extension. <Link href="/domain" className="text-teal-600 hover:underline">View all TLDs</Link>
        </p>
      </SectionWrapper>

      {/* How to Transfer */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          How to Transfer
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper className="py-12 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "1 year added to registration",
              "Free WHOIS privacy",
              "DNS management",
              "Email forwarding",
              "Domain locking",
              "Easy renewals",
              "Transfer protection",
              "24/7 support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <FiCheck className="w-5 h-5 text-teal-600 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transfer?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Move your domain to Hostfame today and get +1 year free extension.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/domain" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
              Start Transfer
            </Link>
            <Link href="/support" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition">
              Need Help? <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
