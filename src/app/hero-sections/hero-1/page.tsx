"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 1: Gradient Wave with Floating Elements
export default function Hero1() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#004d4d]">
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-white/5 to-transparent" />
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.05)" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,128C96,160,192,224,288,234.7C384,245,480,203,576,165.3C672,128,768,96,864,101.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </path>
        </svg>
      </div>

      {/* Floating circles */}
      <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-white/5 animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 right-[15%] w-48 h-48 rounded-full bg-white/5 animate-[float_8s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-[5%] w-32 h-32 rounded-full bg-primary-extralight/10 animate-[float_7s_ease-in-out_infinite_2s]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-8">
            🚀 Limited Offer: 72% OFF
          </span>
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Hosting That
          <br />
          <span className="bg-gradient-to-r from-white via-primary-extralight to-white bg-clip-text text-transparent">Never Sleeps</span>
        </h1>

        <p className={`text-xl md:text-2xl text-white/80 max-w-2xl mb-10 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Lightning-fast servers, 24/7 expert support, and 99.9% uptime guaranteed.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
            Start Hosting →
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            Talk to Us
          </Link>
        </div>
      </div>

      {/* Back link */}
      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
