import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiX, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Hostfame vs Hostinger - Hosting Comparison 2025",
  description: "Compare Hostfame and Hostinger web hosting. See which hosting provider offers better features, pricing, support, and value for your website.",
};

export const dynamic = "force-static";

const comparisonData = [
  { feature: "Starting Price", hostfame: "$1.49/mo", competitor: "$2.99/mo", winner: "hostfame" },
  { feature: "Free Domain", hostfame: true, competitor: true, winner: "tie" },
  { feature: "Free SSL", hostfame: true, competitor: true, winner: "tie" },
  { feature: "24/7 Human Support", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "NVMe SSD Storage", hostfame: true, competitor: true, winner: "tie" },
  { feature: "Daily Backups", hostfame: true, competitor: "Weekly", winner: "hostfame" },
  { feature: "Uptime Guarantee", hostfame: "99.9%", competitor: "99.9%", winner: "tie" },
  { feature: "Money-Back Guarantee", hostfame: "30 Days", competitor: "30 Days", winner: "tie" },
  { feature: "Free Website Migration", hostfame: true, competitor: true, winner: "tie" },
  { feature: "cPanel Included", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "LiteSpeed Web Server", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "Unlimited Bandwidth", hostfame: true, competitor: "100GB", winner: "hostfame" },
];

const highlights = [
  {
    title: "Better Value",
    description: "Hostfame offers more features at a lower price point, including cPanel and LiteSpeed server.",
  },
  {
    title: "Real Human Support",
    description: "Get help from real humans 24/7, not just chatbots or AI assistants.",
  },
  {
    title: "Daily Backups",
    description: "Your data is backed up daily for free, compared to weekly backups from competitors.",
  },
  {
    title: "No Hidden Limits",
    description: "Truly unlimited bandwidth and resources, without hidden fair-use restrictions.",
  },
];

export default function CompareHostingerPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-4">
            Hosting Comparison 2025
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hostfame vs Hostinger
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            See how Hostfame compares to Hostinger and why thousands of customers choose us for reliable, affordable hosting.
          </p>
        </SectionWrapper>
      </div>

      {/* Quick Summary */}
      <SectionWrapper className="py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-teal-600 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Hostfame</h3>
            <p className="text-white/80 mb-4">Reliable hosting with real human support</p>
            <div className="text-4xl font-bold mb-2">$1.49<span className="text-lg font-normal">/mo</span></div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><FiCheck /> 24/7 Human Support</li>
              <li className="flex items-center gap-2"><FiCheck /> cPanel Included</li>
              <li className="flex items-center gap-2"><FiCheck /> LiteSpeed Server</li>
              <li className="flex items-center gap-2"><FiCheck /> Daily Backups</li>
            </ul>
            <Link
              href="/web-hosting"
              className="inline-block mt-6 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Choose Hostfame
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hostinger</h3>
            <p className="text-gray-500 mb-4">Budget hosting provider</p>
            <div className="text-4xl font-bold text-gray-900 mb-2">$2.99<span className="text-lg font-normal">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> AI Chat Support Only</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Custom Panel (hPanel)</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Apache Server</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Weekly Backups</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Detailed Comparison Table */}
      <SectionWrapper className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Feature-by-Feature Comparison
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-teal-600">Hostfame</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-500">Hostinger</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.hostfame === "boolean" ? (
                      row.hostfame ? (
                        <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <FiX className="w-5 h-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className={row.winner === "hostfame" ? "font-semibold text-teal-600" : ""}>
                        {row.hostfame}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500">
                    {typeof row.competitor === "boolean" ? (
                      row.competitor ? (
                        <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <FiX className="w-5 h-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      row.competitor
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Why Choose Hostfame */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Customers Choose Hostfame
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {highlights.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join thousands who&apos;ve switched to Hostfame. Free migration included with all plans.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/web-hosting"
              className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Get Started Now
            </Link>
            <Link
              href="/website-migration"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition"
            >
              Free Migration <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Other Comparisons */}
      <SectionWrapper className="py-12 bg-white">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          More Comparisons
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/compare/hostfame-vs-bluehost" className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            Hostfame vs Bluehost
          </Link>
          <Link href="/compare/hostfame-vs-godaddy" className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            Hostfame vs GoDaddy
          </Link>
          <Link href="/compare/hostfame-vs-siteground" className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            Hostfame vs SiteGround
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
