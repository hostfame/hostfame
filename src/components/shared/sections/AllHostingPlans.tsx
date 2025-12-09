import React from "react";
import Image from "next/image";
import { LuSparkles } from "react-icons/lu";

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
    <section className="w-full space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 rounded-full px-4 py-2">
          <LuSparkles className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-semibold">All Included Free</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          {data.title}
        </h2>
        <p className="mx-auto max-w-2xl text-description-text">
          {data.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:border-primary/30"
          >
            {/* Icon Container */}
            <div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
              <Image
                src={item.image}
                alt={item.title}
                width={44}
                height={44}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            
            {/* Title */}
            <h3 className="text-base font-semibold text-text leading-tight">{item.title}</h3>
            
            {/* Included text */}
            <span className="mt-2 text-xs text-green-600 font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Included
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllHostingPlans;
