"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { FiShield, FiRefreshCw, FiHeadphones, FiActivity } from "react-icons/fi";
import FooterPricingImage from "./FooterPricingImage";
import { useIpProviderContextValue } from "@/providers/IpProvider";

const footerLinks = {
  hosting: [
    { label: "Web Hosting", href: "/web-hosting" },
    { label: "WordPress Hosting", href: "/wordpress-hosting" },
    { label: "Cloud Hosting", href: "/cloud-hosting" },
    { label: "VPS Hosting", href: "/vps-hosting" },
  ],
  domains: [
    { label: "Register Domain", href: "/domain" },
    { label: "Transfer Domain", href: "/domain" },
    { label: "Domain Pricing", href: "/domain" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "/support" },
    { label: "System Status", href: "/status" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms-of-services" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

const Footer: React.FC = () => {
  const countryCode = useIpProviderContextValue();
  const isBangladesh = countryCode === "BD";

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-dark dark:from-black dark:via-black dark:to-black text-white overflow-hidden">
      {/* Top Section - Trust Badges */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-[2%] py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/uptime-guarantee" className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FiShield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">99.9% Uptime</div>
                <div className="text-xs text-white/60">SLA Guaranteed</div>
              </div>
            </Link>
            <Link href="/refund-policy" className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FiRefreshCw className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">30-Day</div>
                <div className="text-xs text-white/60">Money Back</div>
              </div>
            </Link>
            <Link href="/support" className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FiHeadphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">24/7 Support</div>
                <div className="text-xs text-white/60">Real Humans</div>
              </div>
            </Link>
            <Link href="/status" className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FiActivity className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">System Status</div>
                <div className="text-xs text-white/60">All Systems Go</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-[2%] py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
            <Link href="/" className="pb-2 block">
              <Image
                src="/assets/hostfame-white.webp"
                alt="Hostfame"
                width={180}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Premium web hosting solutions with blazing-fast speeds, rock-solid security, and 24/7 expert support. Trusted by thousands of businesses worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                aria-label="Facebook"
                href="http://facebook.com/hostfameusa"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/hostfame/"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
              <Link
                aria-label="YouTube"
                href="https://www.youtube.com/@hostfameofficial"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <FaYoutube className="w-4 h-4" />
              </Link>
              <Link
                aria-label="Instagram"
                href="https://www.instagram.com/hostfame/"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hosting Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Hosting</h4>
            <ul className="space-y-3">
              {footerLinks.hosting.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Domains</h4>
            <ul className="space-y-3">
              {footerLinks.domains.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods - Only for Bangladesh */}
      {isBangladesh && (
        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-[2%] py-6">
            <FooterPricingImage />
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-primary-dark/50 dark:bg-black/50">
        <div className="mx-auto max-w-7xl px-[2%] py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2025 Hostfame. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/terms-of-services" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refunds
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
