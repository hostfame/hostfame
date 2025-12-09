"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 3: Split Screen with Animated Gradient Border
export default function Hero3() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-gradient-to-br from-primary to-primary-dark" />
        <div className="bg-gray-950" />
      </div>

      {/* Animated border line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-30" />

      {/* Content */}
      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">
        {/* Left side */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-20 text-white">
          <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            <span className="text-sm font-bold tracking-widest uppercase text-white/70">Premium Hosting</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black mt-4 leading-tight transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            Build Your
            <br />
            Digital Empire
          </h1>

          <p className={`text-lg text-white/80 mt-6 max-w-md transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            Enterprise-grade infrastructure at startup-friendly prices. Scale without limits.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-20 text-white">
          <div className={`space-y-6 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            {/* Pricing card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-sm text-primary font-semibold mb-2">Starting at</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black">$2.49</span>
                <span className="text-white/60">/month</span>
              </div>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">✓</span>
                  Free SSL Certificate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">✓</span>
                  Free Domain for 1 Year
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">✓</span>
                  24/7 Expert Support
                </li>
              </ul>
              <Link href="/web-hosting" className="mt-8 block w-full py-4 bg-primary text-white font-bold rounded-xl text-center hover:bg-primary-dark transition">
                Get Started Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-black/70 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
