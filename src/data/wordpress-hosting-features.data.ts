// wordpress-hosting-features.data.ts
import { HiOutlineCog } from "react-icons/hi";
import { TbBolt } from "react-icons/tb";
import { FiGlobe, FiMousePointer } from "react-icons/fi";
import { MdExtension, MdSupportAgent } from "react-icons/md";
import { BsCloudCheck } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Feature } from "@/components/pages/hosting/wordpress-hosting/WordPressHostingFeatures";

export const defaultFeatures: Feature[] = [
  // Row 1 → total 12
  {
    title: "Auto-Setup",
    description: "WordPress is pre-installed.",
    Icon: HiOutlineCog,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-5",
  },
  {
    title: "Up To 20X Faster",
    description: "Host your site on our Turbo.",
    Icon: TbBolt,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-7",
  },

  // Row 2 → total 12
  {
    title: "Global Servers",
    description: "Speed and security settings.",
    Icon: FiGlobe,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-5",
  },
  {
    title: "A2 Optimized Plugin",
    description: "Global data centers.",
    Icon: MdExtension,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-4",
  },
  {
    title: "Daily Backups",
    description: "Automatic data protection.",
    Icon: BsCloudCheck,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-3",
  },

  // Row 3 → total 12
  {
    title: "Free SSL & Security",
    description: "Enhanced site security.",
    Icon: AiOutlineSafetyCertificate,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-4",
  },
  {
    title: "One-Click Staging",
    description: "Simplified site testing.",
    Icon: FiMousePointer,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-4",
  },
  {
    title: "24/7 Expert Support",
    description: "Around-the-clock assistance.",
    Icon: MdSupportAgent,
    className:
      "col-span-12 md:col-span-6 lg:col-span-4 min-[1113px]:!col-span-4",
  },
];
