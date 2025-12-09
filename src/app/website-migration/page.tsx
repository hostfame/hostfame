import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiClock, FiShield, FiZap, FiHeadphones } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Free Website Migration | Hostfame",
  description: "Move your website to Hostfame for free. Our experts handle the entire migration process with zero downtime. Switch from any host today.",
};

export const dynamic = "force-static";

const steps = [
  {
    step: "1",
    title: "Submit Request",
    description: "Fill out our migration form with your current hosting details.",
  },
  {
    step: "2",
    title: "We Review",
    description: "Our team analyzes your site and prepares the migration plan.",
  },
  {
    step: "3",
    title: "Migration",
    description: "We transfer all files, databases, and emails to your new Hostfame account.",
  },
  {
    step: "4",
    title: "Testing",
    description: "We verify everything works perfectly before going live.",
  },
  {
    step: "5",
    title: "Go Live",
    description: "Update your DNS and your site is live on Hostfame!",
  },
];

const features = [
  { icon: FiClock, title: "Zero Downtime", description: "Your website stays online during the entire migration process." },
  { icon: FiShield, title: "Secure Transfer", description: "All data is transferred securely with encrypted connections." },
  { icon: FiZap, title: "Fast Migration", description: "Most migrations completed within 24-48 hours." },
  { icon: FiHeadphones, title: "Expert Support", description: "Dedicated migration specialists handle your transfer." },
];

const included = [
  "All website files and folders",
  "MySQL/PostgreSQL databases",
  "Email accounts and data",
  "WordPress sites and plugins",
  "SSL certificate setup",
  "DNS configuration assistance",
  "Post-migration testing",
  "cPanel account setup",
];

export default function WebsiteMigrationPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm mb-4">
            100% Free Service
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Free Website Migration
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let our experts move your website to Hostfame for free. Zero downtime, zero hassle.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
          >
            Request Free Migration <FiArrowRight />
          </Link>
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

      {/* How It Works */}
      <SectionWrapper className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
          How Migration Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-100 -translate-x-1/2" />
            <div className="space-y-8">
              {steps.map((s, idx) => (
                <div key={s.step} className={`flex items-center gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-600">{s.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shrink-0 z-10">
                    {s.step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          What&apos;s Included
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
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
            Ready to Move?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Get started with Hostfame today and we&apos;ll migrate your website for free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/web-hosting" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
              View Hosting Plans
            </Link>
            <Link href="/support" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition">
              Contact Support
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
