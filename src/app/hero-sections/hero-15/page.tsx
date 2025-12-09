"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 15: Interactive Hover Reveal
export default function Hero15() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { title: "Blazing Speed", desc: "NVMe SSD with 10x faster read/write", color: "from-orange-500 to-red-500" },
    { title: "Fort Knox Security", desc: "Enterprise-grade DDoS protection", color: "from-green-500 to-emerald-500" },
    { title: "Global Network", desc: "12+ data centers worldwide", color: "from-blue-500 to-cyan-500" },
    { title: "Expert Support", desc: "Real humans, 24/7/365", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Dynamic gradient based on active feature */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-10 transition-all duration-1000`} 
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div className="text-white">
            <div className={`transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
                Web Hosting Redefined
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              One Platform,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-extralight">
                Infinite Possibilities
              </span>
            </h1>

            <p className={`text-lg text-white/70 max-w-md mb-8 transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
              Everything you need to succeed online, powered by world-class infrastructure.
            </p>

            <div className={`flex gap-4 transition-all duration-1000 delay-600 ${mounted ? "opacity-100" : "opacity-0"}`}>
              <Link href="/web-hosting" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
                Start Building →
              </Link>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div className={`space-y-4 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeFeature === i 
                    ? "bg-white/10 border-white/20 scale-105" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <span className="text-white text-xl">
                      {i === 0 ? "⚡" : i === 1 ? "🛡️" : i === 2 ? "🌍" : "💬"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
