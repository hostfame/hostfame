"use client";
import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HostingPlansProps {
  title: string;
  description: string;
  data: DataProps[];
}

interface DataProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkBtn: string;
}

const HostingForGrowth = ({ data }: { data: HostingPlansProps }) => {
  return (
    <section>
      <CenteredSectionHeader
        title={data.title}
        description={data.description}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.data.map((plan, index) => (
          <div key={index} className="group relative">
            <div className="border border-x-0 border-y-1 md:border-x-1 md:border-y-0 border-primary/10 group-hover:border-primary/30 transition-all duration-300 bg-white-background p-6 h-[250px] md:h-[280px] space-y-2">
              <Link
                href={plan.link}
                className="w-full h-full flex flex-col group-hover:scale-105 transition-all duration-300 gap-3 items-start"
              >
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={100}
                  height={100}
                  className="h-12 w-12 rounded-lg p-2 bg-card border border-primary object-contain"
                />
                <h3 className="text-lg font-semibold group-hover:text-primary">
                  {plan.title}
                </h3>
                <p>{plan.description}</p>
                <button className="mt-auto inline-block text-sm font-medium group-hover:text-primary">
                  {plan.linkBtn} →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HostingForGrowth;
