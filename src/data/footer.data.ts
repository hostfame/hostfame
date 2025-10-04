import { FooterColumn } from "@/types/footer.types";

export const footerColumns: FooterColumn[] = [
  {
    title: "Hosting",
    links: [
      { label: "Web Hosting", href: "/web-hosting" },
      { label: "Cloud Hosting", href: "/cloud-hosting" },
      { label: "BDIX Hosting", href: "/bdix-hosting" },
      { label: "Turbo Hosting", href: "/turbo-hosting" },
    ],
  },
  {
    title: "Domain",
    links: [
      { label: "Register Your Domain", href: "/domain" },
      { label: "Transfer to Us", href: "#" },
      { label: "Renew Domains", href: "#" },
      { label: "Manage Domains", href: "#" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Manage Service", href: "#" },
      { label: "View Addons", href: "#" },
      { label: "Renew Services", href: "#" },
      { label: "Service Status", href: "#" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Website Backup", href: "#" },
      { label: "Website Security", href: "#" },
      { label: "Professional Emails", href: "#" },
      { label: "SSL Certificates", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "24/7 LiveChat", href: "/support" },
      { label: "24/7 WhatsApp", href: "/support" },
      { label: "24/7 Email", href: "/support" },
      { label: "Open Ticket", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Terms & Conditions", href: "/terms-of-services" },
      { label: "Privacy & Policy", href: "/privacy-policy" },
      { label: "Careers (Hiring)", href: "#", highlight: true },
      { label: "Contact", href: "/contact" },
    ],
  },
];