"use client";
import { speedAndSupportData } from "@/data/home.data";
import Image from "next/image";

export default function SpeedAndSupport() {
  return (
    <section className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div className="flex justify-center w-full max-h-[480px] p-8 lg:p-12 bg-gradient-to-t from-primary to-primary-extralight rounded-2xl lg:rounded-4xl">
        <Image
          src="/assets/home/wordpress.png" // put your image in public/images
          alt="WordPress Hosting"
          width={450}
          height={350}
          className="w-full object-contain"
        />
      </div>

      {/* Right Content */}
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
              className="flex items-start space-x-3 border border-border-light-gray p-4 rounded-xl"
            >
              <div className="w-10 h-10 p-2 bg-white rounded-lg">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={30}
                  height={30}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h2 className="font-semibold">{feature.title}</h2>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
