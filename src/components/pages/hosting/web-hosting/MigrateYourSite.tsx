import { WebHostingData } from "@/data/hosting.data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MigrateYourSite = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl w-full  py-8 sm:py-10 gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center">
      <section className="flex-[0.6] flex justify-center lg:justify-start w-full lg:w-[340px] order-2 lg:order-1">
        <Image
          src={WebHostingData.migrateYourSiteSection.image}
          alt="Migration Illustration"
          loading="lazy"
          width={240}
          height={300}
          className="w-[200px] sm:w-[260px] md:w-[300px] h-auto"
        />
      </section>

      <section className="flex-1 text-center lg:text-left order-1 lg:order-2">
        <h2 className="text-[26px] sm:text-2xl md:text-3xl font-bold text-text-primary mb-3 sm:mb-4 leading-snug">
          {WebHostingData.migrateYourSiteSection.title}
        </h2>
        <p className="text-[15px] sm:text-base text-gray-500 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
          {WebHostingData.migrateYourSiteSection.description}
        </p>

        <Link href={WebHostingData.migrateYourSiteSection.buttonLink} className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base md:text-base w-full sm:w-auto inline-block text-center cursor-pointer font-bold">
          <button className="cursor-pointer ">{WebHostingData.migrateYourSiteSection.buttonText}</button>
        </Link>
      </section>
    </section>
  );
};

export default MigrateYourSite;
