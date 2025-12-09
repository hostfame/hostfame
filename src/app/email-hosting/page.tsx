import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { LuMail, LuShield, LuSmartphone, LuCloud, LuCheck, LuCalendar, LuUsers, LuHardDrive, LuCompass, LuSparkles } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Email Hosting & Google Workspace | Hostfame",
  description: "Professional email hosting with your domain. Choose from our email hosting or Google Workspace for business-class email, calendar, and more.",
};

export const dynamic = "force-static";

const features = [
  { icon: LuMail, title: "Professional Email", description: "Use your own domain for a professional email address" },
  { icon: LuShield, title: "Spam Protection", description: "Advanced spam filtering keeps your inbox clean" },
  { icon: LuSmartphone, title: "Mobile Access", description: "Access email on any device with IMAP/POP3" },
  { icon: LuCloud, title: "Webmail Included", description: "Check email from any browser with our webmail" },
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
  { icon: LuMail, label: "Gmail" },
  { icon: LuCalendar, label: "Calendar" },
  { icon: LuHardDrive, label: "Drive Storage" },
  { icon: LuUsers, label: "Meet Video" },
];

export default function EmailHostingPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="banner-bg min-h-[80vh] flex flex-col relative overflow-hidden">
        {/* Adventure decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-extralight/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <LuSparkles className="absolute top-40 left-1/4 w-6 h-6 text-white/30 animate-pulse" />
          <LuSparkles className="absolute bottom-40 right-1/3 w-4 h-4 text-white/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <Navbar isTransparent />
        <SectionWrapper className="flex-1 flex items-center py-16 relative">
          <div className="text-center text-white w-full animate-slide-up">
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-6 hover-compass cursor-default backdrop-blur-sm">
              <LuCompass className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide uppercase">Coming Soon</span>
            </div>
            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-8 animate-float">
              <LuMail className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              Professional Email Hosting
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Get a professional email address with your domain. Choose standard email hosting or Google Workspace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#email-plans" className="btn-adventure px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition shadow-lg">
                Email Hosting
              </Link>
              <Link href="#google-workspace" className="btn-adventure px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition border border-white/20">
                Google Workspace
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Features */}
      <SectionWrapper className="py-16">
        <div className="grid md:grid-cols-4 gap-6 stagger-children">
          {features.map((f, idx) => (
            <div key={f.title} className="adventure-card bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:from-primary group-hover:to-primary-dark transition-all">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
              <p className="text-description-text">{f.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Email Hosting Plans */}
      <SectionWrapper id="email-plans" className="py-16 bg-white">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-5 py-2.5 mb-6 hover-compass cursor-default">
            <LuMail className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-bold tracking-wide uppercase">Email Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Email Hosting Plans
          </h2>
          <p className="text-description-text text-lg max-w-2xl mx-auto">
            Simple, reliable email hosting for your business domain.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {emailPlans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`adventure-card rounded-3xl p-8 ${plan.popular ? "bg-gradient-to-br from-primary to-primary-dark text-white ring-4 ring-primary/20 shadow-2xl shadow-primary/20" : "bg-white border border-gray-200 shadow-lg"}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {plan.popular && (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold mb-6">
                  <LuSparkles className="w-4 h-4" />
                  Recommended
                </span>
              )}
              <h3 className={`text-2xl font-black mb-3 ${plan.popular ? "" : "text-gray-900"}`}>{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`text-base ${plan.popular ? "text-white/80" : "text-gray-500"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-base">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.popular ? "bg-white/20" : "bg-primary/10"}`}>
                      <LuCheck className={`w-4 h-4 ${plan.popular ? "text-white" : "text-primary"}`} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn-adventure block text-center py-4 rounded-xl font-bold text-lg transition ${
                  plan.popular ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Google Workspace */}
      <SectionWrapper id="google-workspace" className="py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div className="animate-slide-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <FaGoogle className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-black text-gray-900">Google Workspace</h2>
              </div>
              <p className="text-lg text-description-text mb-8 leading-relaxed">
                Get Gmail, Google Drive, Meet, Calendar, and more for your business. 
                Professional email with the power of Google.
              </p>
              <div className="text-5xl font-black text-gray-900 mb-8">
                $6<span className="text-xl font-semibold text-gray-500">/user/mo</span>
              </div>
              <Link
                href="/contact"
                className="btn-adventure inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition shadow-lg"
              >
                Get Google Workspace →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5 animate-slide-right">
              {workspaceFeatures.map((f, idx) => (
                <div key={f.label} className="adventure-card flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="font-bold text-gray-900">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Adventure decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary-extralight/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative">
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-6 hover-compass cursor-default">
              <LuCompass className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide uppercase">Get Help</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Not sure which email solution is right for you? Our team can help you decide.
            </p>
            <Link href="/contact" className="btn-adventure inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-xl hover:bg-gray-100 transition shadow-lg">
              Contact Us →
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
