import { FounderCardProps } from "@/types/about-us.types";
import Image from "next/image";
import React from "react";


const FounderCard: React.FC<FounderCardProps> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-sm border border-gray-100 dark:border-gray-800">
      {/* Image Section */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-md mb-4">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          fill
          className="object-contain"
        />
      </div>

      {/* Text Section */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>

      {/* Decorative Accent */}
      <div className="mt-4 w-12 h-1 bg-primary rounded-full"></div>
    </div>
  );
};

const Founders = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 lg:py-12">
      
    </section>
  );
};

export default Founders;
