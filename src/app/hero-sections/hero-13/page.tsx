"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 13: Retro/Vintage Style with Modern Touch
export default function Hero13() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f0e8]">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-primary/20 rounded-full" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-primary/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 text-sm font-bold tracking-widest uppercase mb-10">
            Est. 2018
          </span>
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-none mb-8 tracking-tight transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          Good Hosting
          <br />
          <span className="text-primary italic font-serif">Never Dies</span>
        </h1>

        <p className={`text-xl text-gray-600 max-w-xl mb-12 font-serif transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          Time-tested reliability meets modern performance. Hosting the way it should be.
        </p>

        <div className={`flex flex-wrap gap-6 justify-center transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="group px-10 py-4 bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 transition-all">
            Get Started
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link href="/about-us" className="px-10 py-4 bg-transparent text-gray-900 font-bold text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
            Our Story
          </Link>
        </div>

        {/* Trust badges */}
        <div className={`mt-20 flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-800 ${mounted ? "opacity-100" : "opacity-0"}`}>
          {["50K+ Websites", "99.9% Uptime", "Award Winning Support"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-gray-600">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
