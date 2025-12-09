import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Hostfame vs SiteGround - Hosting Comparison 2025",
  description: "Compare Hostfame and SiteGround web hosting. See which provider offers better value, features, and support.",
};

export const dynamic = "force-static";

const comparisonData = [
  { feature: "Starting Price", hostfame: "$1.49/mo", competitor: "$2.99/mo", winner: "hostfame" },
  { feature: "Free Domain", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "Free SSL", hostfame: true, competitor: true, winner: "tie" },
  { feature: "24/7 Human Support", hostfame: true, competitor: true, winner: "tie" },
  { feature: "NVMe SSD Storage", hostfame: true, competitor: true, winner: "tie" },
  { feature: "Daily Backups", hostfame: true, competitor: true, winner: "tie" },
  { feature: "Uptime Guarantee", hostfame: "99.9%", competitor: "99.9%", winner: "tie" },
  { feature: "Money-Back Guarantee", hostfame: "30 Days", competitor: "30 Days", winner: "tie" },
  { feature: "Free Website Migration", hostfame: true, competitor: "1 Site", winner: "hostfame" },
  { feature: "cPanel Included", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "Storage Limit", hostfame: "Unlimited", competitor: "10-40GB", winner: "hostfame" },
  { feature: "Monthly Visits Limit", hostfame: "Unlimited", competitor: "10K-100K", winner: "hostfame" },
];

export default function CompareSitegroundPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-4">
            Hosting Comparison 2025
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hostfame vs SiteGround
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            SiteGround offers premium hosting, but is it worth the price? Compare the details.
          </p>
        </SectionWrapper>
      </div>

      <SectionWrapper className="py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-teal-600 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Hostfame</h3>
            <p className="text-white/80 mb-4">Premium features at affordable prices</p>
            <div className="text-4xl font-bold mb-2">$1.49<span className="text-lg font-normal">/mo</span></div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><FiCheck /> Free Domain Included</li>
              <li className="flex items-center gap-2"><FiCheck /> Unlimited Storage</li>
              <li className="flex items-center gap-2"><FiCheck /> cPanel Included</li>
              <li className="flex items-center gap-2"><FiCheck /> No Traffic Limits</li>
            </ul>
            <Link href="/web-hosting" className="inline-block mt-6 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
              Choose Hostfame
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">SiteGround</h3>
            <p className="text-gray-500 mb-4">Premium managed hosting</p>
            <div className="text-4xl font-bold text-gray-900 mb-2">$2.99<span className="text-lg font-normal">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Domain Costs Extra</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> 10-40GB Storage</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Custom Panel (Site Tools)</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Monthly Visit Caps</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Feature Comparison
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-teal-600">Hostfame</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-500">SiteGround</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.hostfame === "boolean" ? (
                      row.hostfame ? <FiCheck className="w-5 h-5 text-green-500 mx-auto" /> : <FiX className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className={row.winner === "hostfame" ? "font-semibold text-teal-600" : ""}>{row.hostfame}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500">
                    {typeof row.competitor === "boolean" ? (
                      row.competitor ? <FiCheck className="w-5 h-5 text-green-500 mx-auto" /> : <FiX className="w-5 h-5 text-red-500 mx-auto" />
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

      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Features, Better Price</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Get SiteGround-level quality without the premium price tag.</p>
          <Link href="/web-hosting" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            Get Started Now
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
