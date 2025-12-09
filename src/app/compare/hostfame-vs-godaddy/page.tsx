import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Hostfame vs GoDaddy - Hosting Comparison 2025",
  description: "Compare Hostfame and GoDaddy web hosting. See which provider offers better features, pricing, and support for your website.",
};

export const dynamic = "force-static";

const comparisonData = [
  { feature: "Starting Price", hostfame: "$1.49/mo", competitor: "$5.99/mo", winner: "hostfame" },
  { feature: "Free Domain", hostfame: true, competitor: true, winner: "tie" },
  { feature: "Free SSL", hostfame: true, competitor: "1st Year Only", winner: "hostfame" },
  { feature: "24/7 Human Support", hostfame: true, competitor: true, winner: "tie" },
  { feature: "NVMe SSD Storage", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "Daily Backups", hostfame: true, competitor: "Paid Add-on", winner: "hostfame" },
  { feature: "Uptime Guarantee", hostfame: "99.9%", competitor: "99.9%", winner: "tie" },
  { feature: "Money-Back Guarantee", hostfame: "30 Days", competitor: "30 Days", winner: "tie" },
  { feature: "Free Website Migration", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "cPanel Included", hostfame: true, competitor: "Paid Extra", winner: "hostfame" },
  { feature: "LiteSpeed Web Server", hostfame: true, competitor: false, winner: "hostfame" },
  { feature: "Upselling/Add-ons", hostfame: "Minimal", competitor: "Heavy", winner: "hostfame" },
];

export default function CompareGodaddyPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-4">
            Hosting Comparison 2025
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hostfame vs GoDaddy
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            GoDaddy is known for domains, but how does their hosting compare? See the full breakdown.
          </p>
        </SectionWrapper>
      </div>

      <SectionWrapper className="py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-teal-600 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Hostfame</h3>
            <p className="text-white/80 mb-4">All-inclusive hosting, no upsells</p>
            <div className="text-4xl font-bold mb-2">$1.49<span className="text-lg font-normal">/mo</span></div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><FiCheck /> Everything Included</li>
              <li className="flex items-center gap-2"><FiCheck /> Free SSL Forever</li>
              <li className="flex items-center gap-2"><FiCheck /> cPanel Included</li>
              <li className="flex items-center gap-2"><FiCheck /> No Hidden Fees</li>
            </ul>
            <Link href="/web-hosting" className="inline-block mt-6 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
              Choose Hostfame
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">GoDaddy</h3>
            <p className="text-gray-500 mb-4">Domain registrar with hosting</p>
            <div className="text-4xl font-bold text-gray-900 mb-2">$5.99<span className="text-lg font-normal">/mo</span></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Many Paid Add-ons</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> SSL Costs After Year 1</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> cPanel Costs Extra</li>
              <li className="flex items-center gap-2"><FiX className="text-red-500" /> Heavy Upselling</li>
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
                <th className="text-center py-4 px-4 font-semibold text-gray-500">GoDaddy</th>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get More for Less</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Switch from GoDaddy and save. Free migration included.</p>
          <Link href="/web-hosting" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            Get Started Now
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
