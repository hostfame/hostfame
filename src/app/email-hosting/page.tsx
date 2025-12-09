import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiMail, FiShield, FiSmartphone, FiCloud, FiCheck, FiCalendar, FiUsers, FiHardDrive } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Email Hosting & Google Workspace | Hostfame",
  description: "Professional email hosting with your domain. Choose from our email hosting or Google Workspace for business-class email, calendar, and more.",
};

export const dynamic = "force-static";

const features = [
  { icon: FiMail, title: "Professional Email", description: "Use your own domain for a professional email address" },
  { icon: FiShield, title: "Spam Protection", description: "Advanced spam filtering keeps your inbox clean" },
  { icon: FiSmartphone, title: "Mobile Access", description: "Access email on any device with IMAP/POP3" },
  { icon: FiCloud, title: "Webmail Included", description: "Check email from any browser with our webmail" },
];

const emailPlans = [
  {
    name: "Basic Email",
    price: "$1.99",
    period: "/mo per mailbox",
    features: ["5GB Storage", "IMAP/POP3/SMTP", "Webmail Access", "Spam Protection", "Mobile Sync"],
    popular: false,
  },
  {
    name: "Business Email",
    price: "$3.99",
    period: "/mo per mailbox",
    features: ["25GB Storage", "IMAP/POP3/SMTP", "Webmail Access", "Advanced Spam Filter", "Mobile Sync", "Email Aliases", "Auto-responders"],
    popular: true,
  },
];

const workspaceFeatures = [
  { icon: FiMail, label: "Gmail" },
  { icon: FiCalendar, label: "Calendar" },
  { icon: FiHardDrive, label: "Drive Storage" },
  { icon: FiUsers, label: "Meet Video" },
];

export default function EmailHostingPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="banner-bg min-h-screen flex flex-col">
        <Navbar isTransparent />
        <SectionWrapper className="flex-1 flex items-center py-16">
          <div className="text-center text-white w-full">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <FiMail className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Professional Email Hosting
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Get a professional email address with your domain. Choose standard email hosting or Google Workspace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#email-plans" className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
                Email Hosting
              </Link>
              <Link href="#google-workspace" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition">
                Google Workspace
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

      {/* Email Hosting Plans */}
      <SectionWrapper id="email-plans" className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Email Hosting Plans
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Simple, reliable email hosting for your business domain.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {emailPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 ${plan.popular ? "bg-teal-600 text-white ring-4 ring-teal-200" : "bg-gray-50 border border-gray-200"}`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">
                  Recommended
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "" : "text-gray-900"}`}>{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-white/80" : "text-gray-500"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
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

      {/* Google Workspace */}
      <SectionWrapper id="google-workspace" className="py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaGoogle className="w-8 h-8 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900">Google Workspace</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Get Gmail, Google Drive, Meet, Calendar, and more for your business. 
                Professional email with the power of Google.
              </p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                $6<span className="text-lg font-normal text-gray-500">/user/mo</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition"
              >
                Get Google Workspace
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {workspaceFeatures.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <f.icon className="w-6 h-6 text-blue-500" />
                  <span className="font-medium text-gray-900">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Not sure which email solution is right for you? Our team can help you decide.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            Contact Us
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
