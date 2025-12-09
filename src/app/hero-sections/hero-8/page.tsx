"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 8: Clean Corporate with Animated Counter
export default function Hero8() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    const target = 50000;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Trusted by {count.toLocaleString()}+ websites
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              Web Hosting
              <br />
              <span className="text-primary">Done Right</span>
            </h1>

            <p className={`text-lg text-gray-600 max-w-lg mb-8 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              Professional hosting with blazing-fast speeds, enterprise security, and award-winning support. Your success is our mission.
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <Link href="/web-hosting" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition shadow-lg shadow-primary/20">
                View Plans →
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {[
              { value: "99.9%", label: "Uptime SLA", color: "bg-green-50 text-green-600" },
              { value: "24/7", label: "Expert Support", color: "bg-blue-50 text-blue-600" },
              { value: "<30ms", label: "Avg Latency", color: "bg-purple-50 text-purple-600" },
              { value: "30-Day", label: "Money Back", color: "bg-orange-50 text-orange-600" },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.color} p-8 rounded-2xl text-center hover:scale-105 transition-transform cursor-default`}>
                <div className="text-3xl font-black mb-2">{stat.value}</div>
                <div className="text-sm font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm hover:bg-gray-200 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
