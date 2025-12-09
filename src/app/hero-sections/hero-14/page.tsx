"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 14: Animated Gradient Mesh
export default function Hero14() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/40 via-transparent to-transparent animate-[mesh1_10s_ease-in-out_infinite]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-[#8b5cf6]/30 via-transparent to-transparent animate-[mesh2_12s_ease-in-out_infinite]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#ec4899]/20 via-transparent to-transparent animate-[mesh3_14s_ease-in-out_infinite]" />
      </div>

      <style jsx>{`
        @keyframes mesh1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 5%) scale(1.1); }
        }
        @keyframes mesh2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5%, 3%) scale(1.05); }
        }
        @keyframes mesh3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(3%, -5%) scale(1.08); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-[#8b5cf6]/20 border border-white/10 text-sm font-semibold mb-10 backdrop-blur-sm">
            🎉 Special Launch Offer
          </span>
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-extralight to-white">
            Limitless
          </span>
          <br />
          Hosting
        </h1>

        <p className={`text-xl text-white/70 max-w-xl mb-12 transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          Break free from limitations. Experience hosting without boundaries, without compromises.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="px-10 py-4 bg-gradient-to-r from-primary to-[#00b3b3] text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,128,129,0.4)] transition-all hover:scale-105">
            Start Free Trial
          </Link>
          <Link href="/domain" className="px-10 py-4 bg-white/5 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/10 transition-all">
            Search Domain
          </Link>
        </div>

        {/* Bottom features */}
        <div className={`absolute bottom-16 left-0 right-0 transition-all duration-1000 delay-800 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-wrap justify-center gap-12 text-white/60 text-sm">
            <span>⚡ Lightning Fast</span>
            <span>🔒 SSL Included</span>
            <span>🌍 Global CDN</span>
            <span>💬 24/7 Support</span>
          </div>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
