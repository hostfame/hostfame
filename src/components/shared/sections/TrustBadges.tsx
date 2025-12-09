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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {badges.map((badge, idx) => (
        <Link
          key={badge.title}
          href={badge.href}
          className="adventure-card group flex flex-col items-center text-center gap-5 p-7 md:p-8 bg-white rounded-2xl shadow-md border border-gray-100 relative overflow-hidden"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          {/* Background gradient on hover */}
          <div className={`absolute inset-0 ${badge.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
          
          {/* Icon Container */}
          <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl ${badge.bgColor} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <badge.icon className={`w-8 h-8 md:w-10 md:h-10 ${badge.color} group-hover:scale-110 transition-transform`} />
          </div>
          
          {/* Text Content */}
          <div className="relative space-y-1.5">
            <div className="font-black text-gray-900 text-lg md:text-xl group-hover:text-primary transition-colors">
              {badge.title}
            </div>
            <div className="text-sm md:text-base text-gray-500 font-semibold">{badge.description}</div>
          </div>
          
          {/* Arrow indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className={`w-5 h-5 ${badge.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
