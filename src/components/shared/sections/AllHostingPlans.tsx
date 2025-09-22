import React from "react";
import Image from "next/image";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";

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
    <section className="w-full py-12 space-y-4 lg:space-y-6">
      <CenteredSectionHeader
        title={data.title}
        description={data.description}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="group bg-background border border-border-light-gray rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 mb-4 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllHostingPlans;
