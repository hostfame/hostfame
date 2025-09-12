import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import React from "react";
import { IconType } from "react-icons";

interface HostingSupportItem {
  icon: IconType;
  title: string;
  description: string;
}

interface HostingSupportProps {
  title: string;
  subtitle: string;
  items: HostingSupportItem[];
}

const HostingSupport = ({ data }: { data: HostingSupportProps }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">
      <CenteredSectionHeader title={data.title} description={data.subtitle} />

      <div className="grid grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-card-background border border-border-light-gray"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted text-primary mb-4">
                  <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mt-2 text-center">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[--color-description-text] text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HostingSupport;
