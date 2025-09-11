import { Feature } from "@/types/hosting.types";
import { FaCalendarCheck, FaRegClock } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import { TbAward, TbHeadset, TbRocket } from "react-icons/tb";

export const WebHostingData = {
  domainNameSection: {
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
  },
  webHostingPartnersSection: {
    title: "Web Hosting Infrastructure",
    highlighted: "Partners",
    partners: [
      "/assets/web-hosting/partners/cpanel.png", //cpanel
      "/assets/web-hosting/partners/cloud-linux.jpeg", //cloudlinux
      "/assets/web-hosting/partners/litespeed.png", //litespeed
      "/assets/web-hosting/partners/webuzu.jpeg", //webuzu
      "/assets/web-hosting/partners/spam-expert.png", //spamexpert
      "/assets/web-hosting/partners/cloudflare.jpeg", //cloudflare
      "/assets/web-hosting/partners/mailchannels.jpeg", //mailchannels
      "/assets/web-hosting/partners/intel.png", //intel
      "/assets/web-hosting/partners/jetbackup.png", //jetbackup
      "/assets/web-hosting/partners/imunify360.png" //imunify360
    ]
  },
  moneyBackSection: {
    title: "30 Day Money-back Guarantee",
    description:
      "There is no risk with our 30-day money back guarantee. Stay safe with assurance of refund."
  },
  questionSection: {
    title1: "Do You Have Questions?",
    title2: "Feel free to ask anything!",
    description: "Feel free to contact our friendly technical advisors at any time. Our team of professionals is available 24/7 via live chat, ticket, and WhatsApp to assist you.",
    buttonText: "Live Chat With Sales",
    buttonLink: "#",
    image: "/assets/web-hosting/question-section/man-attending-online-meeting.png"
  }
};

export const webHostingFeatures = [
  {
    title: "Litespeed Server with LS Cache",
    description:
      "We offer advanced technology with the latest CloudLinux server, making your website more secure and faster. This kernel-level technology isolates each tenant into their own environment and provides them with the appropriate amount of resources (CPU, IO, memory, processes, etc) based on their needs.",
    image: "/assets/web-hosting/hosting-features/server-protection.png", 
    reverse: false
  },
  {
    title: "Advanced Firewall",
    description:
      "Our latest server technology will make your site more secure and resistant to theft. Worried about hackers? You don’t have to be. Your website will always be protected by our automatic malware detection and cleanup system. Additionally, every website and hosted domain comes with SSL encryption security as a standard feature.",
    image: "/assets/web-hosting/hosting-features/firewall-security.png",
    reverse: true
  },
  {
    title: "Built For Your Success",
    description:
      "We have a variety of features that will make your web space more user friendly and helpful to you, whether you’re a start-up or a big business. Our advanced server features will aid you in your growth and eventually help you to succeed. We offer high quality hosting with an on-call support system, so you don’t have to spend time fixing system issues. Our main goal is to help you succeed in business.",
    image: "/assets/web-hosting/hosting-features/successfully-done.png",
    reverse: false
  }
];

export const moneyBackFeatures = [
  {
    icon: RiArrowUpDownLine,
    text: "Easily Upgrade or Downgrade"
  },
  {
    icon: FaCalendarCheck,
    text: "Get Notified before suspension"
  },
  {
    icon: FaRegClock,
    text: "Refund process is easy"
  }
];

export const features: Feature[] = [
  {
    title: "Fastest Loading Speed",
    description:
      "You create your website and we take care of the rest. This is the promise of NVMe SSD of super fast enhanced website performance.",
    icon: TbRocket,
    bgIcon: TbRocket
  },
  {
    title: "24/7 Dedicated Support",
    description:
      "We provide 24/7 LiveChat support for you to help anytime you need. Support is provided through calls, chat, and ticket systems.",
    icon: TbHeadset,
    bgIcon: TbHeadset
  },
  {
    title: "99.9% Uptime Guarantee",
    description:
      "There is no way a professional website can go down. Stay always online with our web hosting with a 99.9% uptime guarantee.",
    icon: TbAward,
    bgIcon: TbAward
  }
];
