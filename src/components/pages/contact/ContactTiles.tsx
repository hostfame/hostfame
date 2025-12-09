// ContactTiles.tsx
import { JSX } from "react";
import { FiMapPin, FiHeadphones, FiClock, FiGlobe } from "react-icons/fi";

type ContactItem = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  highlight?: string;
};

const contactData: ContactItem[] = [
  {
    id: "address",
    title: "Our Offices",
    description: "Bangladesh & USA locations serving customers globally.",
    icon: <FiMapPin className="w-6 h-6" />,
    highlight: "2 Locations"
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Our expert team is always ready to help you.",
    icon: <FiHeadphones className="w-6 h-6" />,
    highlight: "Always Online"
  },
  {
    id: "response",
    title: "Quick Response",
    description: "Average response time under 2 minutes.",
    icon: <FiClock className="w-6 h-6" />,
    highlight: "< 2 min"
  },
  {
    id: "global",
    title: "Global Reach",
    description: "Serving customers in 50+ countries worldwide.",
    icon: <FiGlobe className="w-6 h-6" />,
    highlight: "50+ Countries"
  }
];

export default function ContactTiles() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            
            {/* Content */}
            <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
            <p className="text-sm text-description-text mb-3">{item.description}</p>
            
            {/* Highlight Badge */}
            {item.highlight && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {item.highlight}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
