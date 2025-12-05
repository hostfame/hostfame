"use client";
import { speedAndSupportData } from "@/data/home.data";
import Image from "next/image";

export default function SpeedAndSupport() {
  return (
    <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr] items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
          {speedAndSupportData.title}
        </h2>
        <p className="mt-4 text-description-text">
          {speedAndSupportData.description}
        </p>

        {/* Feature Cards - Clean white cards */}
        <div className="mt-8 space-y-4">
          {speedAndSupportData.features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 ring-1 ring-teal-100">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Teal gradient panel with GIF */}
      <div className="flex justify-center items-center bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 h-full min-h-[320px] rounded-3xl overflow-hidden relative">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-white/10" />
        
        <Image
          src="/assets/gifs/hostfame-gif-circle-appear.gif"
          alt="Hostfame Speed & Support"
          width={450}
          height={350}
          unoptimized
          className="object-contain scale-100 lg:scale-110 xl:scale-125 relative z-10"
        />
      </div>
    </section>
  );
}
