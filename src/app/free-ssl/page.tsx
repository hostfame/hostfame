import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiShield, FiLock, FiCheck, FiZap, FiTrendingUp, FiAward } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Free SSL Certificate | Hostfame",
  description: "Get free SSL certificates with all Hostfame hosting plans. Secure your website with HTTPS, boost SEO, and build customer trust.",
};

export const dynamic = "force-static";

const benefits = [
  {
    icon: FiLock,
    title: "Encrypted Connections",
    description: "All data between your visitors and your website is encrypted and secure.",
  },
  {
    icon: FiTrendingUp,
    title: "Better SEO Rankings",
    description: "Google prioritizes HTTPS websites, helping you rank higher in search results.",
  },
  {
    icon: FiAward,
    title: "Customer Trust",
    description: "The padlock icon shows visitors your site is safe and trustworthy.",
  },
  {
    icon: FiZap,
    title: "Auto-Renewal",
    description: "Your SSL certificate renews automatically, so you're always protected.",
  },
];

const features = [
  "256-bit encryption",
  "Works with all browsers",
  "Automatic installation",
  "Free for life",
  "Auto-renewal included",
  "Wildcard SSL available",
  "No validation hassles",
  "Instant activation",
];

const faq = [
  {
    q: "What is an SSL certificate?",
    a: "SSL (Secure Sockets Layer) encrypts data between your website and visitors, showing the padlock icon and HTTPS in browsers.",
  },
  {
    q: "Do I need SSL for my website?",
    a: "Yes! SSL is essential for security, SEO rankings, and customer trust. Browsers now warn visitors about non-HTTPS sites.",
  },
  {
    q: "Is the SSL really free forever?",
    a: "Yes! Our Let's Encrypt SSL certificates are included free with all hosting plans and auto-renew at no cost.",
  },
  {
    q: "How do I install the SSL?",
    a: "It's automatic! When you host with us, SSL is installed and configured within minutes of setting up your domain.",
  },
];

export default function FreeSSLPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <FiShield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Free SSL Certificate
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Secure your website with HTTPS at no extra cost. Free SSL included with every hosting plan.
          </p>
          <Link
            href="/web-hosting"
            className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
          >
            Get Free SSL Now
          </Link>
        </SectionWrapper>
      </div>

      {/* Benefits */}
      <SectionWrapper className="py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* SSL Badge Visual */}
      <SectionWrapper className="py-12 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Show Visitors You&apos;re Secure
            </h2>
            <p className="text-gray-600 mb-6">
              When your site has SSL, visitors see the padlock icon and &quot;https://&quot; in their browser. 
              This tells them your site is safe and their data is protected.
            </p>
            <div className="bg-gray-100 rounded-xl p-4 inline-block">
              <div className="flex items-center gap-2 text-green-600">
                <FiLock className="w-4 h-4" />
                <span className="text-sm">https://</span>
                <span className="text-gray-900 font-medium">yourdomain.com</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
            <h3 className="font-semibold text-gray-900 mb-4">What&apos;s Included</h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <FiCheck className="w-4 h-4 text-teal-600" />
                  <span className="text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <FiShield className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Secure Your Website Today
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Every Hostfame hosting plan includes free SSL. Start hosting and get your certificate instantly.
          </p>
          <Link href="/web-hosting" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            View Hosting Plans
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
