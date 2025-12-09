"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hero 4: Minimal with Typewriter Effect
export default function Hero4() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Ultra-Fast Hosting";

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,128,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,128,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
            Trusted by 50,000+ websites
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 h-[1.2em]">
          {text}
          <span className="inline-block w-1 h-[0.8em] bg-primary ml-1 animate-pulse" />
        </h1>

        <p className={`text-xl text-gray-600 max-w-2xl mb-10 transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Deploy in seconds. Scale to millions. Sleep peacefully knowing your site is in good hands.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-1200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/web-hosting" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
            Start Free Trial
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all">
            Contact Sales
          </Link>
        </div>

        {/* Logos */}
        <div className={`mt-20 transition-all duration-1000 delay-1400 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <p className="text-sm text-gray-400 mb-6">Powering websites for</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            {["WordPress", "Laravel", "React", "Node.js", "Python"].map((tech) => (
              <span key={tech} className="text-gray-900 font-bold text-lg">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <Link href="/hero-sections" className="fixed top-6 left-6 z-50 px-4 py-2 bg-gray-100 rounded-lg text-gray-900 text-sm hover:bg-gray-200 transition">
        ← Back to Gallery
      </Link>
    </section>
  );
}
