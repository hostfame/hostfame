import { FaExchangeAlt, FaHeadset, FaUserTie } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

export const hostingSupportData = {
  title: "Your Hosting Support, Upgraded",
  subtitle: "Supporting your website’s growth, every step of the way.",
  items: [
    {
      icon: FaHeadset,
      title: "Priority Support",
      description:
        "24/7 fast-track Live Chat and mail support from real experts.",
      className: "lg:col-span-2",
    },
    {
      icon: MdOutlineSecurity,
      title: "Proactive Monitoring",
      description:
        "We monitor your site round the clock to catch issues early.",
      className: "",
    },
    {
      icon: FaExchangeAlt,
      title: "Migration Assistance",
      description: "Help in moving sites from old hosts to Hostfame.",
      className: "",
    },
    {
      icon: FaUserTie,
      title: "Account Manager",
      description: "Dedicated manager to help you grow with us.",
      className: "lg:col-span-2",
    },
  ],
};
