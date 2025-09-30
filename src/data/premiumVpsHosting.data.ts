import { PremiumVpsHostingProps } from "@/types/premiumVpsHosting.types";

export const premiumVpsHostingData: PremiumVpsHostingProps = {
  title: "Premium VPS Hosting Features For You",
  blurb:
    "Everything your developers, startups, or SaaS apps need, already included in every VPS plan.",
  leftImage: {
    src: "https://hostfame.com/wp-content/uploads/2024/02/vps__feature__small.png.webp",
    alt: "Datacenter small preview",
  },
  rightImage: {
    src: "https://hostfame.com/wp-content/uploads/2024/02/vps__feature__big.png.webp",
    alt: "Datacenter wide preview",
  },
  featuresCol: [
    { label: "Blazing-Fast NVMe SSDs" },
    { label: "Intel & AMD EPYC Processors" },
    { label: "Unmetered Bandwidth" },
    { label: "Global Server Locations" },
    { label: "OS Flexibility" },
    { label: "DDoS Protection" },
    { label: "24/7 Hardware Support" },
    { label: "Full Admin Access" },
  ],
};