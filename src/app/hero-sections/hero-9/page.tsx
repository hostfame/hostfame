"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 9: Aurora Borealis Effect
export default function Hero9() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f23]">
      {/* Aurora effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/40 rounded-full blur-[150px] animate-[aurora_8s_ease-in-out_infinite]" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-[#00ff88]/30 rounded-full blur-[120px] animate-[aurora_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-10 left-1/2 w-[400px] h-[350px] bg-[#8b5cf6]/30 rounded-full blur-[130px] animate-[aurora_12s_ease-in-out_infinite]" />
      </div>

      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-30px) translateX(20px) scale(1.1); }
          50% { transform: translateY(-10px) translateX(-20px) scale(0.95); }
          75% { transform: translateY(-20px) translateX(10px) scale(1.05); }
        }
      `}</style>

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <span className="text-primary-extralight text-sm font-semibold tracking-widest uppercase mb-6 block">
            Premium Cloud Hosting
          </span>
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          Host Beyond
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-extralight via-primary to-[#00ff88]">
            The Clouds
          </span>
        </h1>

        <p className={`text-lg md:text-xl text-white/70 max-w-2xl mb-12 transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          Experience hosting that&apos;s as limitless as the northern sky. Ultra-fast, infinitely scalable, beautifully simple.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
            Start Your Journey
          </Link>
          <Link href="/domain" className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
            Find Domain
          </Link>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
