import { aboutUsFeatures } from "@/data/about-us.data";
import React from "react";
const WhyDifferent: React.FC = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4">
          What makes us different
        </h2>
        <p className="text-text/80 mb-6 lg:mb-12 max-w-2xl mx-auto">
          We’re not just another hosting provider. Here’s what sets us apart from the competition.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutUsFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="p-6 rounded-2xl border border-border-light-gray bg-card-background shadow-sm hover:shadow-md transition hover:scale-[1.02] duration-500 ease-in-out"
              >
                <div className="flex justify-center mb-4">
                  <Icon className={`text-3xl ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-text">
                  {feature.title}
                </h3>
                <p className="text-sm text-text">{feature.subtitle}</p>
                <p className="mt-3 text-text/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
