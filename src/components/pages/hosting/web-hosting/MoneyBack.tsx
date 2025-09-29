import WhiteButton from "@/components/shared/html/WhiteButton";
import { moneyBackFeatures, WebHostingData } from "@/data/hosting.data";
import React from "react";

const MoneyBack = () => {
  return (
    <section className="relative w-full bg-gradient-to-r  from-teal-950 to-teal-800 py-8 md:py-16 px-4 sm:px-8 lg:px-16 text-white rounded-2xl overflow-hidden">
      {/* Background Circles */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-bl from-white to-gray-300 rounded-full opacity-15" />
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-tr from-white to-gray-400 rounded-full opacity-15" />

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Heading + Description */}
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {WebHostingData.moneyBackSection.title}
          </h2>
          <p className="text-white text-sm md:text-base max-w-xl mx-auto lg:mx-0">
            {WebHostingData.moneyBackSection.description}
          </p>
          <WhiteButton href="#web-hosting-pricing" showIcon={false}>Get Started Risk-Free</WhiteButton>
        </div>

        {/* Right: Features */}
        <div className="grid grid-cols-1 gap-6">
          {moneyBackFeatures.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md hover:bg-white/80 transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-md flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm sm:text-base font-medium text-text-primary">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MoneyBack;
