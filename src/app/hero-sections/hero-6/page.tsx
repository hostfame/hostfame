"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 6: Geometric Shapes with Morphing Animation
export default function Hero6() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* Morphing shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-white/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[morph_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-white/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[morph_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[40%] left-[30%] w-48 h-48 bg-primary-extralight/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[morph_6s_ease-in-out_infinite]" />
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}>
          Hosting
          <br />
          <span className="text-primary-dark">Evolved</span>
        </h1>

        <p className={`text-xl md:text-2xl text-white/80 max-w-2xl mb-12 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Where performance meets simplicity. Launch your website with confidence.
        </p>

        <div className={`flex flex-wrap gap-6 justify-center transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="px-10 py-5 bg-white text-primary font-black text-lg rounded-2xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
            Get Started
          </Link>
          <Link href="/domain" className="px-10 py-5 bg-primary-dark text-white font-bold text-lg rounded-2xl hover:bg-primary-dark/80 transition-all border-2 border-white/20">
            Search Domain
          </Link>
        </div>

        {/* Bottom badges */}
        <div className={`absolute bottom-12 left-0 right-0 flex justify-center gap-8 transition-all duration-1000 delay-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
          {["Free SSL", "Free Migration", "24/7 Support", "99.9% Uptime"].map((badge) => (
            <span key={badge} className="text-sm text-white/60 font-medium">{badge}</span>
          ))}
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/30 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
