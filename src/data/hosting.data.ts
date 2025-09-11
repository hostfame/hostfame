import { Feature } from "@/types/hosting.types";
import { TbAward, TbHeadset, TbPhone, TbRocket } from "react-icons/tb";

export const WebHostingData = {
  "domainNameSection": {
    title: "Search your Domain Name",
    searchPlaceholder: "yourdomain.com",
    pricing: {
      dotCom: {
        title: ".com",
        price: "৳1650/Year"
      },
      dotNet: {
        title: ".net",
        price: "৳1650/Year"
      },
      dotOrg: {
        title: ".org",
        price: "৳1650/Year"
      },
      dotXyz: {
        title: ".xyz",
        price: "৳599/Year"
      }
    }
  }
};

export const features: Feature[] = [
  {
    title: "Fastest Loading Speed",
    description:
      "You create your website and we take care of the rest. This is the promise of NVMe SSD of super fast enhanced website performance.",
    icon: TbRocket,
    bgIcon: TbRocket,
  },
  {
    title: "24/7 Dedicated Support",
    description:
      "We provide 24/7 LiveChat support for you to help anytime you need. Support is provided through calls, chat, and ticket systems.",
    icon: TbHeadset,
    bgIcon: TbHeadset,
  },
  {
    title: "99.9% Uptime Guarantee",
    description:
      "There is no way a professional website can go down. Stay always online with our web hosting with a 99.9% uptime guarantee.",
    icon: TbAward,
    bgIcon: TbAward,
  },
];
