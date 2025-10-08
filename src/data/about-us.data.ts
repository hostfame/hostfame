import {
  AboutUsFeatureItem,
  AdvancedFeatureTab,
  FounderCardProps,
  InfoCard,
  Strength,
  WhatMakesUsDifferentItem
} from "@/types/about-us.types";
import { FiPhoneCall, FiMail, FiHome } from "react-icons/fi";
import {
  FaBolt,
  FaGlobe,
  FaBullseye,
  FaShieldAlt,
  FaLightbulb,
  FaHeadset,
  FaStar,
  FaServer,
  FaCogs,
  FaRocket
} from "react-icons/fa";

export const FoundersData: FounderCardProps[] = [
  {
    name: "Imran Mahmud",
    role: "Founder & CEO",
    image: "/assets/founders/imran-mahmud.png"
  },
  {
    name: "Asad Ujjaman",
    role: "Head of Operations",
    image: "/assets/founders/asad-ujjaman.png"
  }
];

export const contactInfoData = [
  {
    id: 1,
    icon: FiPhoneCall,
    title: "Hotline",
    details: ["+880 1325 875 955", "(24/7 WhatsApp Support)"]
  },
  {
    id: 2,
    icon: FiMail,
    title: "Email Us",
    details: [
      "info@hostfame.com (Management)",
      "Trade License ID: TRAD/CHTG/005863/2023"
    ]
  },
  {
    id: 3,
    icon: FiHome,
    title: "Address",
    details: [
      "Bangladesh Office : Kayobollodham R/A, Ferozshah, Akbarshah, Chattogram.",
      "USA Office : 75 E 3rd St, Sheridan, WY 82801, USA."
    ]
  }
];

// --- NEW: Advanced Features section content ---
export const advancedFeaturesTabs: AdvancedFeatureTab[] = [
  {
    slug: "latest-control-panel",
    label: "Latest Control Panel",
    heading:
      "Enjoy the latest cPanel with an intuitive dashboard and powerful tools to elevate your website management experience.",
    bullets: [
      { id: "fdr", text: "File & Directory Restoration" },
      { id: "anon", text: "Anonymous FTP" },
      { id: "git", text: "Git™ Version Control" },
      { id: "migrate", text: "24-Hour Website Migration" }
    ],
    image: "/assets/about/team-hostnin.jpeg",
    imageAlt: "Team using latest control panel"
  },
  {
    slug: "premium-resources",
    label: "Premium Resources",
    heading:
      "Access premium tools and dedicated support designed to simplify your workflow and accelerate your growth.",
    bullets: [
      { id: "whatsapp", text: "24/7 WhatsApp Call Support" },
      { id: "seo", text: "SEO & Site Issue Guidance" },
      { id: "s360", text: "360° Security Hardening" },
      { id: "malware", text: "Malware Detection System" }
    ],
    image: "/assets/about/team-hostnin.jpeg",
    imageAlt: "Premium resources and support"
  },
  {
    slug: "backup",
    label: "Backup",
    heading:
      "A multi-layered backup system with off-site storage keeps your data secure and always recoverable.",
    bullets: [
      { id: "hourly", text: "Hourly Snapshots" },
      { id: "daily", text: "Daily Backup" },
      { id: "cloud-backup", text: "Weekly Cloud Backup" },
      { id: "local-backup", text: "Monthly Local Backup" }
    ],
    image: "/assets/about/team-hostnin.jpeg",
    imageAlt: "Backup and restore workflow"
  }
];

export const aboutUsFeatures: AboutUsFeatureItem[] = [
  {
    id: 1,
    icon: FaBolt,
    iconColor: "text-yellow-500",
    title: "Lightning Fast",
    subtitle: "Always reliable",
    description:
      "Powered by cutting-edge SSD storage, global CDN, and optimized server configurations. Built for maximum speed and reliability with 99.9% uptime guarantee."
  },
  {
    id: 2,
    icon: FaGlobe,
    iconColor: "text-blue-500",
    title: "Global Reach",
    subtitle: "Worldwide coverage",
    description:
      "Choose from over 15 data centers around the world and launch your website in minutes. Global infrastructure for local performance."
  },
  {
    id: 3,
    icon: FaShieldAlt,
    iconColor: "text-green-500",
    title: "Enterprise Security",
    subtitle: "Advanced protection",
    description:
      "Manage all your servers, websites, domains, and security from our intuitive control panel. SSL certificates, DDoS protection, and daily backups included."
  },
  {
    id: 4,
    icon: FaLightbulb,
    iconColor: "text-purple-500",
    title: "Constant Innovation",
    subtitle: "Latest technology",
    description:
      "Development is all done in-house, so we can create unique solutions like our free migration service and one-click installations. Always access the latest tech."
  },
  {
    id: 5,
    icon: FaHeadset,
    iconColor: "text-orange-500",
    title: "Expert Support",
    subtitle: "24/7 assistance",
    description:
      "Our support team are hosting enthusiasts with years of experience. Get 24/7 help from real people who love what they do, not automated responses."
  },
  {
    id: 6,
    icon: FaStar,
    iconColor: "text-pink-500",
    title: "Five-Star Service",
    subtitle: "Proven excellence",
    description:
      "Customers give us five-star ratings consistently. Read testimonials from experienced developers, agencies, and businesses who trust us."
  }
];


export const visionMissionData: InfoCard[] = [
  {
    id: 1,
    icon: FaGlobe,
    iconColor: "text-primary",
    title: "Our Vision",
    description:
      "To empower businesses, developers, and entrepreneurs worldwide with high-performance hosting infrastructure, unmatched speed, and expert support—making online growth seamless and worry-free."
  },
  {
    id: 2,
    icon: FaBullseye,
    iconColor: "text-primary",
    title: "Our Mission",
    description:
      "To deliver secure, scalable, and affordable hosting solutions with 24×7 expert support, enabling our customers to focus on their goals while we power their online success."
  }
];


export const strengths: Strength[] = [
  {
    id: 1,
    title: "Seamless management tools",
    description:
      "Easily manage your hosting environment with our intuitive control panel. Handle domains, databases, and configurations with just a few clicks — no technical expertise needed.",
  },
  {
    id: 2,
    title: "Website speed",
    description:
      "We ensure blazing-fast website performance using advanced caching, CDN, and optimized SSD storage — delivering smooth user experiences across the globe.",
  },
  {
    id: 3,
    title: "Dedicated 24/7 support",
    description:
      "Our Customer Success team is available 24/7 in over 10 languages. We help you solve issues fast, so you can focus on growing your business without worrying about downtime.",
  },
];




export const WhatMakesUsDifferentData: WhatMakesUsDifferentItem[] = [
  {
    id: 1,
    icon: FaServer,
    iconColor: "text-primary",
    title: "Always fast, always reliable",
    description:
      "Cloud hosting powered by 20iCloud, AWS and Google Cloud. Built for maximum speed and reliability with Redis, ElasticSearch, Optimized PHP-FPM and PHP OPcache, NGINX Edge Cache and Unlimited CDN.",
  },
  {
    id: 2,
    icon: FaGlobe,
    iconColor: "text-primary",
    title: "Global reach",
    description:
      "Choose from over 60 data centers around the world and launch your websites and apps in a matter of minutes.",
  },
  {
    id: 3,
    icon: FaCogs,
    iconColor: "text-primary",
    title: "Easy management",
    description:
      "Manage all your servers, websites, email, security, backups and domains from My20i, the most advanced and intuitive control panel around.",
  },
  {
    id: 4,
    icon: FaRocket,
    iconColor: "text-primary",
    title: "Constant innovation",
    description:
      "All development is done in-house, so we can create and support unique products like Website Turbo, our free CDN and Website Acceleration Suite at a fraction of the cost of outsourcing to third-party providers.",
  },
  {
    id: 5,
    icon: FaHeadset,
    iconColor: "text-primary",
    title: "Hosting experts",
    description:
      "Our Support Team are hosting enthusiasts with rave reviews. Get 24×7×365 help from real people who love what they do, not canned responses.",
  },
  {
    id: 6,
    icon: FaStar,
    iconColor: "text-primary",
    title: "Five-star reviews",
    description:
      "Experts give us five-star ratings. Read our reviews from experienced web designers and developers.",
  },
];
