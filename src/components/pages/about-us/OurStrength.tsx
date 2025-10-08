"use client";
import { strengths } from "@/data/about-us.data";
import React, { useState } from "react";

const OurStrengths: React.FC = () => {
  const [selected, setSelected] = useState(strengths[0]);

  return (
    <section>
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">
          Our strengths
        </h2>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Left Side – Strength List */}
          <div className="flex flex-col gap-4">
            {strengths.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`text-left font-medium text-lg border-l-4 pl-4 py-2 transition-all duration-300 ${
                  selected.id === item.id
                    ? "border-primary text-primary bg-primary/10"
                    : "border-transparent text-text hover:text-primary/80 hover:bg-primary/5 hover:border-primary/80"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right Side – Dynamic Content */}
          <div className="lg:col-span-2 p-6 border border-border-light-gray rounded-2xl shadow-md bg-card-background transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold text-text mb-3">
              {selected.title}
            </h3>
            <p className="text-text/80 leading-relaxed">
              {selected.description}
            </p>
          </div>
        </div>
    </section>
  );
};

export default OurStrengths;
