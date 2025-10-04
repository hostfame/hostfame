import { FeatureTab } from "@/types/features-tab.types";

export const featureTabs: FeatureTab[] = [
  {
    slug: "latest-control-panel",
    label: "Latest Control Panel",
    description:
      "We use the latest version of the cPanel control panel to provide you with the best and smoothest experience. Enjoy advanced features with our control panel and be ready to take your website to the next level.",
    bullets: [
      "File & Directory Restoration",
      "Anonymous FTP",
      "Git™ Version Control",
      "Email Deliverability",
      "24 Hours Website Migration",
    ],
  },
  {
    slug: "premium-resources",
    label: "Premium Resources",
    description:
      "We provide smooth calling support with advanced tools to help you manage your daily tasks efficiently. Take advantage of the advanced tools and features we offer to streamline your workflow.",
    bullets: [
      "24/7 What's App Call Support",
      "Advising SEO & Site Issues",
      "360 Degree Security",
      "Malware Detection System",
      "Softaculous App Installer",
    ],
  },
  {
    slug: "global-data-centers",
    label: "Global Data Centers",
    description:
      "We use multiple data centers to ensure your website remains fast from anywhere in the world. Here are our core data center locations:",
    bullets: [
      "Dhaka, Bangladesh",
      "Singapore",
      "East USA",
      "West USA",
      "Germany",
      "Finland",
    ],
    cta: { label: "Explore More", href: "#" },
  },
  {
    slug: "backup",
    label: "Backup",
    description:
      "To keep your data secure, we use a multi-layered backup system. Each backup is stored in a different location and hosted separately. This ensures maximum protection and redundancy for your data.",
    bullets: [
      "Hourly Snapshots",
      "Daily Backup",
      "Weekly Cloud Backup",
      "Monthly Local Backup",
    ],
  },
];
