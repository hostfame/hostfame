import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { FoundersData } from "@/data/about-us.data";
import { FounderCardProps } from "@/types/about-us.types";
import Image from "next/image";
import React from "react";

/* ------------------- Dotted Background ------------------- */
interface DottedBackgroundProps {
  className?: string;
}

const DottedBackground: React.FC<DottedBackgroundProps> = ({
  className = ""
}) => {
  return (
    <div
      className={`absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1px)] 
      [background-size:20px_20px] pointer-events-none select-none ${className}`}
    />
  );
};

/* ------------------- Founder Card ------------------- */
const FounderCard: React.FC<FounderCardProps> = ({ name, role, image }) => {
  return (
    <div className="relative flex justify-between items-center h-72 bg-card-background rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full border border-border-light-gray overflow-hidden">
      {/* Background Pattern */}
      <DottedBackground className="opacity-50" />

      {/* Text Section */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-text mb-1">{name}</h3>
        <p className="text-text/80">{role}</p>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-0 -right-8 w-64 h-64 z-10 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

/* ------------------- Founders Section ------------------- */
const Founders = () => {
  return (
    <section>
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4">
        Meet The Founders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {FoundersData.map((founder, index) => (
          <FounderCard
            key={index}
            name={founder.name}
            role={founder.role}
            image={founder.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Founders;
