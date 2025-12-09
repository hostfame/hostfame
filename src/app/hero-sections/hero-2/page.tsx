"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 2: Particle Explosion with Glowing Text
export default function Hero2() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Particle background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 border border-primary/40 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-primary font-semibold">Live Now: Flash Sale</span>
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <span className="block text-white">Web Hosting</span>
          <span className="block bg-gradient-to-r from-primary via-[#00d4d4] to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,128,129,0.5)]">
            Reimagined
          </span>
        </h1>

        <p className={`text-lg md:text-xl text-gray-400 max-w-xl mb-10 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Experience next-gen hosting with NVMe SSD storage, free SSL, and migrations.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="group px-10 py-4 bg-gradient-to-r from-primary to-[#00d4d4] text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,128,129,0.5)] transition-all">
            Get Started
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Stats */}
        <div className={`mt-16 flex gap-12 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "30-Day", label: "Money Back" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-primary">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
