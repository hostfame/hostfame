import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { 
  FiServer, FiGlobe, FiMail, FiShield, FiSettings, 
  FiDatabase, FiCode, FiHelpCircle, FiSearch, FiArrowRight 
} from "react-icons/fi";
import { FaWordpress } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Knowledge Base | Hostfame",
  description: "Find answers to common questions about web hosting, domains, email, WordPress, and more. Comprehensive guides and tutorials.",
};

export const dynamic = "force-static";

const categories = [
  {
    icon: FiServer,
    title: "Getting Started",
    description: "New to Hostfame? Start here with setup guides and basics.",
    articles: 12,
    color: "bg-blue-50 text-blue-600",
    popular: ["How to access cPanel", "Setting up your first website", "Understanding your hosting dashboard"],
  },
  {
    icon: FiGlobe,
    title: "Domains",
    description: "Domain registration, transfers, DNS settings, and management.",
    articles: 8,
    color: "bg-green-50 text-green-600",
    popular: ["How to point domain to hosting", "Updating nameservers", "Domain transfer process"],
  },
  {
    icon: FaWordpress,
    title: "WordPress",
    description: "WordPress installation, themes, plugins, and optimization.",
    articles: 15,
    color: "bg-purple-50 text-purple-600",
    popular: ["One-click WordPress install", "WordPress speed optimization", "Fixing common errors"],
  },
  {
    icon: FiMail,
    title: "Email",
    description: "Email account setup, configuration, and troubleshooting.",
    articles: 10,
    color: "bg-amber-50 text-amber-600",
    popular: ["Creating email accounts", "Email client configuration", "Fixing email delivery issues"],
  },
  {
    icon: FiShield,
    title: "Security",
    description: "SSL certificates, backups, malware protection, and security best practices.",
    articles: 9,
    color: "bg-red-50 text-red-600",
    popular: ["Installing SSL certificate", "Enabling 2FA", "Malware removal guide"],
  },
  {
    icon: FiDatabase,
    title: "Databases",
    description: "MySQL database management, phpMyAdmin, and database optimization.",
    articles: 6,
    color: "bg-indigo-50 text-indigo-600",
    popular: ["Creating a database", "Database backup & restore", "phpMyAdmin basics"],
  },
  {
    icon: FiSettings,
    title: "cPanel",
    description: "Complete guide to using cPanel for website management.",
    articles: 14,
    color: "bg-teal-50 text-teal-600",
    popular: ["cPanel overview", "File Manager guide", "Managing subdomains"],
  },
  {
    icon: FiCode,
    title: "Developer Tools",
    description: "FTP, SSH, Git, and other developer resources.",
    articles: 7,
    color: "bg-gray-100 text-gray-600",
    popular: ["FTP connection setup", "SSH access guide", "Using Git with hosting"],
  },
];

const popularArticles = [
  "How to install WordPress using Softaculous",
  "How to create an email account in cPanel",
  "How to point your domain to Hostfame",
  "How to install a free SSL certificate",
  "How to backup your website",
  "How to increase PHP memory limit",
];

export default function KnowledgeBasePage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Knowledge Base
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Find answers, tutorials, and guides to help you get the most out of your hosting.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Categories Grid */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-4`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {cat.description}
              </p>
              <span className="text-xs text-gray-400">{cat.articles} articles</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Popular Articles */}
      <SectionWrapper className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Popular Articles
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-3">
            {popularArticles.map((article) => (
              <div
                key={article}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors cursor-pointer group"
              >
                <span className="text-gray-700 group-hover:text-teal-700">
                  {article}
                </span>
                <FiArrowRight className="text-gray-400 group-hover:text-teal-600" />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Detailed Categories */}
      <SectionWrapper className="py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Browse All Topics
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cat.title}</h3>
                  <span className="text-xs text-gray-400">{cat.articles} articles</span>
                </div>
              </div>
              <ul className="space-y-2">
                {cat.popular.map((article) => (
                  <li key={article}>
                    <span className="text-sm text-gray-600 hover:text-teal-600 cursor-pointer transition-colors">
                      {article}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 mt-4 text-sm text-teal-600 font-medium cursor-pointer hover:underline">
                View all articles <FiArrowRight />
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Support */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <FiHelpCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Contact Support
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition"
            >
              Submit a Ticket
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
