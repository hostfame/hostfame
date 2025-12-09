"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 11: Diagonal Split with Animated Gradient
export default function Hero11() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900" />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 40% 100%, 60% 0)" }}
        />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left content */}
          <div className="text-white">
            <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <span className="text-primary-extralight text-sm font-bold tracking-widest uppercase">
                Premium Hosting
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight mt-4 mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
              Where Speed
              <br />
              Meets <span className="text-primary-extralight">Power</span>
            </h1>

            <p className={`text-lg text-white/70 max-w-md mb-8 transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
              Enterprise-grade infrastructure at prices that make sense. Scale your business without breaking the bank.
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Link href="/web-hosting" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-xl">
                Start Hosting →
              </Link>
            </div>
          </div>

          {/* Right - Pricing preview */}
          <div className={`transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm ml-auto">
              <div className="text-sm text-gray-500 mb-2">Starting from</div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-gray-900">$2.49</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["100GB NVMe Storage", "Free SSL Certificate", "Free Domain", "24/7 Support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/web-hosting" className="block w-full py-4 bg-primary text-white font-bold rounded-xl text-center hover:bg-primary-dark transition">
                Get This Deal
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
