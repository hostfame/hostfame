import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import Image from "next/image";
import { Button } from "../html/Button";
import { domainPricingData } from "@/data/domainPricing.data";
import DualPricing from "./domain-hero/DualPricing";
import DomainPricingButtonGroup from "./DomainPricingButtonGroup";

export default function DomainPricing() {
  return (
    <section className="w-full text-text ">
      <div className="space-y-10">
        <CenteredSectionHeader
          title={domainPricingData.title}
          description={domainPricingData.description}
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domainPricingData.items.map((d, idx) => (
            <li
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 hover:border-primary/40 transition"
            >
              <div className=" space-y-4 ">
                {/* Logo */}
                <div className="flex justify-center">
                  <Image
                    src={d.src}
                    alt={d.alt}
                    height={d.height}
                    width={d.width}
                    className="h-10 w-auto"
                  />
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <div className="flex justify-center items-baseline gap-2">
                    {d.oldPrice && (
                      <DualPricing price={d.oldPrice} pricebdt={String(d.oldPriceBdt)} className="text-base !text-gray-400 line-through" />
                    )}
                    <DualPricing price={d.price} pricebdt={d.priceBdt} className="text-xl font-bold !text-gray-900" />
                  </div>
                </div>

                {/* Blurb */}
                <p className="text-sm text-center text-gray-600">{d.blurb}</p>

              </div>
              {/* Actions */}
              <DomainPricingButtonGroup />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
