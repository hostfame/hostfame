"use client";

import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiGlobe, FiUser, FiCalendar, FiServer, FiShield } from "react-icons/fi";

export default function WhoisPage() {
  const [domain, setDomain] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) {
      setSearched(true);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <FiSearch className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            WHOIS Lookup
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Look up domain registration information. Find out who owns a domain, when it expires, and more.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter domain name (e.g., example.com)"
                className="flex-1 px-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition whitespace-nowrap"
              >
                Lookup
              </button>
            </div>
          </form>
        </SectionWrapper>
      </div>

      {/* Results or Info */}
      <SectionWrapper className="py-12">
        {searched ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-teal-600 text-white p-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FiGlobe /> {domain || "example.com"}
                </h2>
              </div>
              <div className="p-6">
                <div className="text-center py-12">
                  <FiSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">WHOIS Lookup Service</h3>
                  <p className="text-gray-600 mb-6">
                    For detailed WHOIS information, please contact our support team or use an external WHOIS service.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://www.whois.com/whois/${domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                    >
                      View on WHOIS.com
                    </a>
                    <Link href="/domain" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                      Register This Domain
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* What is WHOIS */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                What is WHOIS?
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                <p className="text-gray-600 text-lg leading-relaxed">
                  WHOIS is a public database that contains registration information about domain names. 
                  When you perform a WHOIS lookup, you can find details like who registered the domain, 
                  when it was registered, when it expires, and the domain&apos;s nameservers.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                What Information Does WHOIS Show?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: FiUser, title: "Registrant Info", desc: "Domain owner name and contact details (if not privacy protected)" },
                  { icon: FiCalendar, title: "Registration Dates", desc: "When the domain was registered and when it expires" },
                  { icon: FiServer, title: "Nameservers", desc: "The DNS servers the domain is pointing to" },
                  { icon: FiGlobe, title: "Registrar Info", desc: "Which company the domain is registered with" },
                  { icon: FiShield, title: "Status Codes", desc: "Domain lock status and transfer eligibility" },
                  { icon: FiSearch, title: "Technical Contact", desc: "Who to contact for technical issues" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Domain?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Register your domain with Hostfame and get free WHOIS privacy protection included.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/domain" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
              Register Domain
            </Link>
            <Link href="/transfer-domain" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition">
              Transfer Domain
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
