"use client";
import { webHostingFeatures } from "@/data/hosting.data";
import Image from "next/image";

export default function WebHostingFeatures() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="flex flex-col">
        {webHostingFeatures.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:gap-16 xl:gap-32 ${
              feature.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="flex-1 flex flex-col  max-w-xl text-center lg:text-left space-y-3 lg:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg font-normal text-justify md:w-[500px] pb-10">
                {feature.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={300}
                className="object-contain drop-shadow-xl max-w-[300px] h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}