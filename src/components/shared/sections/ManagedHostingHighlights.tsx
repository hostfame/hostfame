import React from "react";
import { IconType } from "react-icons";

interface ManagedHostingHighlightsProps {
  title: string;
  description: string;
  highlights: HighlightItem[];
}
interface HighlightItem {
  icon: IconType;
  title: string;
  description: string;
}

const ManagedHostingHighlights = ({
  data,
}: {
  data: ManagedHostingHighlightsProps;
}) => {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-primary text-sm font-medium">Managed Hosting</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px] text-text mb-4">
          {data.title}
        </h2>
        <p className="mx-auto max-w-3xl text-description-text sm:text-lg">
          {data.description}
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm
                         hover:shadow-xl hover:border-primary/30 
                         transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-2xl 
                             bg-gradient-to-br from-primary/10 to-primary/5
                             group-hover:from-primary group-hover:to-primary-dark
                             transition-all duration-300"
                >
                  <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-text">
                  {item.title}
                </h3>
                <p className="text-sm text-description-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ManagedHostingHighlights;
