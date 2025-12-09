import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import { FiActivity, FiExternalLink } from "react-icons/fi";

export const metadata: Metadata = {
  title: "System Status | Hostfame",
  description: "Check the real-time status of Hostfame servers and services. Monitor uptime, performance, and any ongoing incidents.",
};

export const dynamic = "force-static";

export default function StatusPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-12 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-grid place-items-center rounded-2xl bg-white/15 p-2 backdrop-blur">
              <FiActivity className="h-7 w-7" />
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">System Status</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Real-time monitoring of all Hostfame services and infrastructure. 
            Check current status, uptime history, and any ongoing incidents.
          </p>
          <a
            href="https://status.balancedserver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition"
          >
            Open in new tab <FiExternalLink />
          </a>
        </SectionWrapper>
      </div>

      {/* Status Iframe */}
      <SectionWrapper className="py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <iframe
            src="https://status.balancedserver.com"
            title="Hostfame System Status"
            className="w-full min-h-[800px] border-0"
            loading="lazy"
          />
        </div>
      </SectionWrapper>

      {/* Quick Info */}
      <SectionWrapper className="py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">99.9% Uptime SLA</h3>
            <p className="text-sm text-gray-600">
              We guarantee 99.9% uptime for all hosting services, backed by our Service Level Agreement.
            </p>
            <a href="/uptime-guarantee" className="text-teal-600 text-sm font-medium mt-3 inline-block hover:underline">
              Learn more →
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
            <p className="text-sm text-gray-600">
              Our team monitors all systems around the clock with automated alerts for instant response.
            </p>
            <a href="/support" className="text-teal-600 text-sm font-medium mt-3 inline-block hover:underline">
              Contact support →
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Incident Reports</h3>
            <p className="text-sm text-gray-600">
              Detailed incident reports and post-mortems are published for transparency and accountability.
            </p>
            <a href="/contact" className="text-teal-600 text-sm font-medium mt-3 inline-block hover:underline">
              Get notified →
            </a>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
