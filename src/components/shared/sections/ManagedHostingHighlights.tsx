import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
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
    <section className="space-y-4 lg:space-y-6">
      {/* Section Header */}
      <section className="flex flex-col gap-2 items-center justify-center mx-auto text-center">
        <CenteredSectionHeader
          title={data.title}
          description={data.description}
        />
      </section>

      {/* Highlights Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {data.highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl shadow-md border border-border-light-gray 
                         bg-gray-background hover:bg-primary 
                         transition-all duration-500 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full 
                             bg-primary-light text-primary-foreground 
                             group-hover:bg-primary-foreground 
                             group-hover:text-primary transition-colors duration-300"
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-text group-hover:text-primary-foreground transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-description-text group-hover:text-primary-foreground transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ManagedHostingHighlights;
