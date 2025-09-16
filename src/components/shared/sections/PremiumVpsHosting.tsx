import { premiumVpsHostingData } from "@/data/premiumVpsHosting.data";
import { FaCheckCircle } from "react-icons/fa";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";
import Image from "next/image";

export default function PremiumVpsHosting() {
  return (
    <section className=" w-full text-text ">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[0.8fr_1fr]  md:gap-12">
        {/* Left: copy + features */}
        <div className=" space-y-6">
          <CenteredSectionHeader
            title={premiumVpsHostingData.title}
            description={premiumVpsHostingData.blurb}
            classNameForTitle=" !text-wrap !text-start"
            classNameForDescription="!text-start"
          />

          <div className="">
            <ul className="grid grid-cols-2 gap-3">
              {premiumVpsHostingData.featuresCol.map((f, i) => (
                <li
                  key={i}
                  className=" group flex items-center gap-3 rounded-lg border border-border-light-gray bg-gradient-to-r  from-primary/80  via-primary/90 to-primary-dark text-white px-4 py-3 transition-transform hover:-translate-y-0.5 "
                >
                  <FaCheckCircle className="shrink-0" aria-hidden />
                  <span className="text-sm">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: custom collage */}
        <div className="grid grid-cols-3 gap-4">
          {/* Tall left image */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-xl border border-border-light-gray bg-white-background">
            <Image
              src={premiumVpsHostingData.leftImage.src}
              alt={premiumVpsHostingData.leftImage.alt}
              fill
              className="object-cover object-right"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              priority={false}
            />
          </div>

          {/* Wide right image */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl border border-border-light-gray bg-white-background">
            <Image
              src={premiumVpsHostingData.rightImage.src}
              alt={premiumVpsHostingData.rightImage.alt}
              fill
              className="object-cover object-left"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
