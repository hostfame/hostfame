"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 12: Glassmorphism with Floating Cards
export default function Hero12() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-dark via-[#006666] to-primary">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-extralight/20 rounded-full blur-3xl" />
      </div>

      {/* Floating glass cards */}
      <div className={`absolute top-20 right-[10%] transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}>
        <div className="w-48 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 animate-[float_6s_ease-in-out_infinite]">
          <div className="text-white/60 text-xs">Monthly visitors</div>
          <div className="text-white text-2xl font-bold mt-1">2.4M+</div>
        </div>
      </div>

      <div className={`absolute bottom-32 left-[8%] transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
        <div className="w-56 h-36 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 animate-[float_8s_ease-in-out_infinite_1s]">
          <div className="text-white/60 text-xs">Server response</div>
          <div className="text-white text-3xl font-bold mt-1">&lt;100ms</div>
          <div className="w-full h-2 bg-white/20 rounded-full mt-3">
            <div className="w-[85%] h-full bg-green-400 rounded-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-8">
            ✨ New: AI-Powered Optimization
          </span>
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Hosting That
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-extralight">
            Gets You
          </span>
        </h1>

        <p className={`text-xl text-white/80 max-w-xl mb-10 transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          We understand what your business needs. That&apos;s why we built hosting that actually works.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
            View Plans
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            Talk to Expert
          </Link>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
