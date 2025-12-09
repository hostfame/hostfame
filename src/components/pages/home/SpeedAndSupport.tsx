"use client";
import { speedAndSupportData } from "@/data/home.data";
import Image from "next/image";
import { LuZap } from "react-icons/lu";

export default function SpeedAndSupport() {
  return (
    <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr] items-center animate-fade-in-up">
      {/* Left Content */}
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-5 py-2.5 mb-6 cursor-default">
          <LuZap className="w-5 h-5 text-primary" />
          <span className="text-primary text-sm font-bold tracking-wide uppercase">Lightning Fast</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
          {speedAndSupportData.title}
        </h2>
        <p className="mt-5 text-description-text text-lg leading-relaxed">
          {speedAndSupportData.description}
        </p>

        {/* Feature Cards */}
        <div className="mt-10 space-y-5">
          {speedAndSupportData.features.map((feature) => (
            <div
              key={feature.id}
              className="adventure-card card-shine flex items-center gap-5 bg-white border border-gray-100 p-5 rounded-2xl shadow-md group"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={36}
                  height={36}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-1 text-description-text">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Dramatic gradient panel with GIF */}
      <div className="flex justify-center items-center bg-gradient-to-br from-primary via-primary-dark to-primary-dark h-full min-h-[400px] rounded-3xl overflow-hidden relative">
        {/* Adventure decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-2xl animate-float" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary-extralight/20 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
          {/* Particles */}
          <div className="absolute top-16 left-[20%] w-2 h-2 bg-white/30 rounded-full animate-particle" />
          <div className="absolute bottom-24 right-[25%] w-3 h-3 bg-white/20 rounded-full animate-particle" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <Image
          src="/assets/gifs/hostfame-gif-circle-appear.gif"
          alt="Hostfame Speed & Support"
          width={450}
          height={350}
          unoptimized
          className="object-contain scale-100 lg:scale-110 xl:scale-125 relative z-10 animate-hero-float"
        />
      </div>
    </section>
  );
}
