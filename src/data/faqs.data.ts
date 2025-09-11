import { FaqCategory, FaqItem } from "@/types/faqs.types";
import { TbHeadset, TbHelpCircle, TbServer, TbSettings, TbShoppingCart } from "react-icons/tb";

export const FAQS: FaqItem[] = [
  {
    id: "q1",
    categoryId: "hosting",
    question: "What is disk space and how much do I need?",
    answer:
      "Disk space is the amount of storage available for your website files (HTML, images, databases, emails, etc.). Small brochure sites often use less than 1GB, but dynamic sites or media-heavy projects may need more. You can upgrade storage anytime.",
  },
  {
    id: "q2",
    categoryId: "hosting",
    question: "Is disk space matter for website speed?",
    answer:
      "Speed is more impacted by NVMe SSDs, caching, CDN, and optimized code than raw disk size. However, keeping enough free space helps databases and logs perform efficiently.",
  },
  {
    id: "q3",
    categoryId: "hosting",
    question: "What is SSL security?",
    answer:
      "SSL encrypts the connection between your visitors and your website. It protects data in transit and enables HTTPS (the browser padlock).",
  },
  {
    id: "q4",
    categoryId: "hosting",
    question: "How can I activate the SSL?",
    answer:
      "From your control panel, issue a free SSL for your domain and apply it. Our system auto-renews certificates. If you need help, open a ticket and we’ll do it for you.",
  },
  {
    id: "q5",
    categoryId: "hosting",
    question: "What is bandwidth and how much do you need?",
    answer:
      "Bandwidth is the amount of data transferred from your site to visitors. It depends on traffic and file sizes. Blogs and portfolios usually need far less than download sites or video streaming.",
  },

  // Some extra sample items for other categories (optional)
  {
    id: "g1",
    categoryId: "general",
    question: "Can I migrate my site to your hosting?",
    answer:
      "Yes. Our team migrates your existing website and email for free with minimal downtime.",
  },
  {
    id: "b1",
    categoryId: "billing",
    question: "Which payment methods are supported?",
    answer: "We support major cards, PayPal, and local gateways in select regions.",
  },
  {
    id: "p1",
    categoryId: "panel",
    question: "Do you provide a modern control panel?",
    answer:
      "Yes, you get the latest, user-friendly control panel with one-click installers, file manager, and backup tools.",
  },
  {
    id: "s1",
    categoryId: "support",
    question: "Is your support 24/7?",
    answer:
      "Absolutely. Live chat and ticket support are available 24/7, with phone callbacks in select plans.",
  },
];

export const CATEGORIES: FaqCategory[] = [
  { id: "general", label: "General Questions", icon: TbHelpCircle },
  { id: "billing", label: "Ordering & Billing", icon: TbShoppingCart },
  { id: "hosting", label: "Hosting Server", icon: TbServer },
  { id: "panel", label: "Control Panel", icon: TbSettings },
  { id: "support", label: "Support System", icon: TbHeadset },
];