import React from "react";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import Image from "next/image";
import Link from "next/link";
import { whatAreSpecialsData } from "@/data/what-are-speacials.data";



const WhatAreSpecials = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <section className="mx-auto max-w-7xl">
        <CenteredSectionHeader
          title={
            <span id="hosting-support-title">{whatAreSpecialsData.title}</span>
          }
          description={whatAreSpecialsData.description}
        />
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whatAreSpecialsData.data.map((plan, index) => {
            return (
              <div key={index} className="group relative">
                <div className="border border-x-0 border-y-1 md:border-x-1 md:border-y-0 border-primary/10 group-hover:border-primary/30 transition-all duration-300 bg-white-background p-6 space-y-2">
                  <div
                    className="w-full h-full flex flex-col justify-center items-center group-hover:scale-[1.02] transition-all duration-300 gap-3"
                  >
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      width={plan.width}
                      height={plan.height}
                      className="rounded-lg p-2 bg-card border border-primary object-contain"
                    />
                    <h3 className="text-lg text-center font-semibold group-hover:text-primary">
                      {plan.title}
                    </h3>
                    <p className="text-center">{plan.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default WhatAreSpecials;
