"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 5: 3D Perspective Cards
export default function Hero5() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-primary-dark">
      {/* Grid lines */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,128,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,128,129,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"
          style={{ transform: "rotateX(60deg)", transformOrigin: "center top" }}
        />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm">All systems operational</span>
          </div>
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-3"}`}>
          The Future of
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-extralight via-primary to-primary-extralight">
            Web Hosting
          </span>
        </h1>

        <p className={`text-lg text-white/70 max-w-xl mb-12 transition-all duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          Next-gen infrastructure powered by cutting-edge technology. Experience hosting that thinks ahead.
        </p>

        {/* Feature cards */}
        <div className={`grid md:grid-cols-3 gap-6 max-w-4xl transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          {[
            { icon: "⚡", title: "Lightning Speed", desc: "NVMe SSD storage" },
            { icon: "🛡️", title: "Fort Knox Security", desc: "Free SSL & DDoS protection" },
            { icon: "🌍", title: "Global CDN", desc: "12+ data centers worldwide" },
          ].map((card, i) => (
            <div
              key={card.title}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-white/60 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        <Link 
          href="/web-hosting" 
          className={`mt-12 px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark hover:scale-105 shadow-lg shadow-primary/30 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Launch Your Site →
        </Link>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
