"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 10: Bold Typography Focus with Scroll Indicator
export default function Hero10() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[20vw] font-black text-gray-100 tracking-tighter">
          HOST
        </span>
      </div>

      {/* Accent line */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block w-16 h-1 bg-primary mb-10" />
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-none mb-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          Fast.
          <span className="text-primary"> Secure.</span>
          <br />
          Reliable.
        </h1>

        <p className={`text-xl text-gray-600 max-w-xl mb-12 transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          Three words that define hosting excellence. Experience all three with Hostfame.
        </p>

        <div className={`transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-all group">
            Explore Hosting
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm hover:bg-gray-200 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
