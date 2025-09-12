import { HostingFeature } from "@/types/whyChooseWordPress.types";

export const hostingCopy = {
  eyebrow: "Why pick us for WordPress?",
  heading: "Why Choose WordPress Hosting with Hostfame?",
  subheading:
    "Setting up WordPress has never been easier. Hostfame’s ready-to-go platform gets your website live faster without the usual headaches. Plus, our simplified control panel makes managing your site a breeze.",
};

export const hostingStats = [
  { value: "30%", label: "of customers are web." },
  { value: "2M+", label: "websites currently hosted." },
];

export const hostingFeatures: HostingFeature[] = [
  {
    id: 1,
    title: "More Security",
    description:
      "Your WordPress site is protected with advanced security features included in every plan.",
    icon: "shield",
  },
  {
    id: 2,
    title: "30-Day Money-Back",
    description:
      "Try Hostfame risk-free with our full 30-day money-back guarantee.",
    icon: "guarantee",
  },
  // {
  //   id: 3,
  //   title: "Edge-level Speed",
  //   description:
  //     "Object caching and global CDN deliver consistently fast TTFB worldwide.",
  //   icon: "speed",
  // },
  // {
  //   id: 4,
  //   title: "Human Support",
  //   description:
  //     "Real engineers on chat 24/7 for migrations, tuning, and emergencies.",
  //   icon: "support",
  // },
];