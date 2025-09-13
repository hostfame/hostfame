import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import Image from "next/image";
import { Button } from "../html/Button";
import { domainPricingData } from "@/data/domainPricing.data";



export default function DomainPricing() {
  return (
    <section className="w-full text-text">
      <div className="mx-auto max-w-7xl px-4 py-16 space-y-5">
        <CenteredSectionHeader
          title={domainPricingData.title}
          description={domainPricingData.description}
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domainPricingData.items.map((d, idx) => (
            <li
              key={idx}
              className=" rounded-2xl border border-primary-extralight bg-background p-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow space-y-4">
              {/* Top accent chip (unique detail vs. reference) */}
              <div className="h-1.5 w-14 rounded-full bg-primary/80" />

              {/* “Logo” area (4×4 mosaic placeholder) */}
              <div className=" bg-[#f4f9ff] w-fit p-2 rounded-xl">
                <Image
                  src={d.src}
                  alt={d.alt}
                  height={d.height}
                  width={d.width}
                />
              </div>

              {/* Copy */}
              <p className=" text-sm text-text">{d.blurb}</p>

              {/* Pricing */}
              <div className=" flex items-baseline gap-3">
                {d.oldPrice ? (
                  <span className="text-xs line-through text-text">
                    {d.oldPrice}
                  </span>
                ) : null}
                <span className="text-xl font-semibold">{d.price}</span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap justify-center items-center gap-3">
                <Button
                  size="sm"
                >
                  Register
                </Button>

                <Button
                  variant="bordered"
                  size="sm"
                >
                  Transfer
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}