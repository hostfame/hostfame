"use client";
import { speedAndSupportData } from "@/data/home.data";
import Image from "next/image";

export default function SpeedAndSupport() {
  return (
    <section className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
      {/* Left Image */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          {speedAndSupportData.title}
        </h2>
        <p className="mt-4">{speedAndSupportData.description}</p>

        {/* Features */}
        <div className="mt-6 space-y-4">
          {speedAndSupportData.features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center   bg-card-background space-x-4 border border-border-light-gray hover:scale-[1.02]  duration-300 transition  p-4 rounded-xl relative"
            >
              <p className=" min-w-[10px] min-h-[10px]  absolute right-0 top-4 w-fit rounded-full bg-gradient-to-r from-primary-light to-primary animate-pulse"></p>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={200}
                height={200}
                className="h-16 w-16 p-2 bg-card border border-border light-gray rounded-lg object-contain"
              />
              <div>
                <h2 className="text-xl relative font-semibold">
                  {feature.title}
                </h2>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex justify-center w-full h-full  p-8 bg-gradient-to-br from-primary-light via-primary to-primary-dark rounded-2xl lg:rounded-4xl">
        <Image
          src="/assets/home/wordpress.png" // put your image in public/images
          alt="WordPress Hosting"
          width={450}
          height={350}
          className="w-[70%] object-contain top-bottom2"
        />
      </div>
    </section>
  );
}
