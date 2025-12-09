"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 7: Neon Glow Cyberpunk Style
export default function Hero7() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Neon lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff00ff] to-transparent opacity-30" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </div>

      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[150px] opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ff00ff] rounded-full blur-[120px] opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <span className="inline-block px-6 py-2 rounded-full border border-primary text-primary text-sm font-mono mb-10 shadow-[0_0_20px_rgba(0,128,129,0.5)]">
            NEXT_GEN_HOSTING
          </span>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <span className="block text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">POWER</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#00ffff] to-primary drop-shadow-[0_0_30px_rgba(0,128,129,0.8)]">
            UNLEASHED
          </span>
        </h1>

        <p className={`text-lg text-gray-400 max-w-xl mb-12 font-mono transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          {"// High-performance servers for the digital frontier"}
        </p>

        <div className={`transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link 
            href="/web-hosting" 
            className="group relative px-12 py-5 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-none hover:bg-primary hover:text-black transition-all shadow-[0_0_20px_rgba(0,128,129,0.3)] hover:shadow-[0_0_40px_rgba(0,128,129,0.6)]"
          >
            <span className="relative z-10">INITIALIZE →</span>
            <div className="absolute inset-0 bg-primary/20 animate-pulse" />
          </Link>
        </div>

        {/* Terminal-style stats */}
        <div className={`mt-16 font-mono text-sm text-gray-500 transition-all duration-1000 delay-800 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <span className="text-primary">$</span> uptime: <span className="text-green-400">99.99%</span> | 
          latency: <span className="text-green-400">&lt;30ms</span> | 
          nodes: <span className="text-green-400">12</span>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 border border-primary/50 rounded text-primary text-sm hover:bg-primary/20 transition font-mono">
        ← BACK
      </Link>
    </section>
  );
}
