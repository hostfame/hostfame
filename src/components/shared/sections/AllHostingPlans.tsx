import React from "react";
import Image from "next/image";
import { LuSparkles, LuCompass } from "react-icons/lu";

type HostingPlanFeature = {
  title: string;
  image: string;
};

type AllHostingPlansProps = {
  title: string;
  description: string;
  items: HostingPlanFeature[];
};

const AllHostingPlans = ({ data }: { data: AllHostingPlansProps }) => {
  return (
    <section className="w-full space-y-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="text-center space-y-5 relative">
        <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-5 py-2.5 hover-compass cursor-default">
          <LuCompass className="w-5 h-5 text-primary" />
          <span className="text-primary text-sm font-bold tracking-wide uppercase">Your Toolkit</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text tracking-tight">
          {data.title}
        </h2>
        <p className="mx-auto max-w-2xl text-description-text text-lg">
          {data.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 relative stagger-children">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="adventure-card group relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col items-center text-center"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon Container */}
            <div className="relative w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Image
                src={item.image}
                alt={item.title}
                width={44}
                height={44}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            
            {/* Title */}
            <h3 className="relative text-base font-bold text-text leading-tight">{item.title}</h3>
            
            {/* Included badge */}
            <span className="relative mt-3 text-xs text-white font-semibold flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-full shadow-sm">
              <LuSparkles className="w-3 h-3" />
              Included
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllHostingPlans;
