"use client";

import Link from "next/link";
import { FiShield, FiRefreshCw, FiHeadphones, FiZap, FiServer } from "react-icons/fi";

const badges = [
  {
    icon: FiShield,
    title: "99.9% Uptime",
    description: "SLA Guaranteed",
    href: "/uptime-guarantee",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: FiRefreshCw,
    title: "30-Day",
    description: "Money Back",
    href: "/refund-policy",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "Real Humans",
    href: "/support",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: FiZap,
    title: "NVMe SSD",
    description: "Blazing Fast",
    href: "/web-hosting",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {badges.map((badge) => (
        <Link
          key={badge.title}
          href={badge.href}
          className="group flex flex-col items-center text-center gap-4 p-6 md:p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
        >
          {/* Icon Container */}
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${badge.bgColor} flex items-center justify-center shadow-sm`}>
            <badge.icon className={`w-8 h-8 md:w-10 md:h-10 ${badge.color}`} />
          </div>
          
          {/* Text Content */}
          <div className="space-y-1">
            <div className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-primary transition-colors">
              {badge.title}
            </div>
            <div className="text-sm md:text-base text-gray-500 font-medium">{badge.description}</div>
          </div>

          </Link>
      ))}
    </div>
  );
}

export function TrustBadgesCompact() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
      <div className="flex items-center gap-2 text-white/90">
        <FiShield className="w-4 h-4" />
        <span>99.9% Uptime SLA</span>
      </div>
      <div className="flex items-center gap-2 text-white/90">
        <FiRefreshCw className="w-4 h-4" />
        <span>30-Day Money Back</span>
      </div>
      <div className="flex items-center gap-2 text-white/90">
        <FiHeadphones className="w-4 h-4" />
        <span>24/7 Human Support</span>
      </div>
      <div className="flex items-center gap-2 text-white/90">
        <FiZap className="w-4 h-4" />
        <span>NVMe SSD Storage</span>
      </div>
    </div>
  );
}

export function TrustBadgesMinimal() {
  const items = [
    { icon: FiShield, text: "99.9% Uptime" },
    { icon: FiRefreshCw, text: "30-Day Guarantee" },
    { icon: FiHeadphones, text: "24/7 Support" },
    { icon: FiServer, text: "US & EU Servers" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-1.5">
          <item.icon className="w-4 h-4 text-teal-600" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
