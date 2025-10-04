import { WebHostingData } from "@/data/hosting.data";
import React from "react";
import SubmitDomainName from "./SubmitDomainName";


const SearchDomainName = () => {
  function classNames(...cn: (string | false | null | undefined)[]) {
    return cn.filter(Boolean).join(" ");
  }

  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_20px_5px_rgb(0,0,0,0.15)]">
      {/* Subtle radial background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary-blue/20 to-secondary-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary-blue/10 to-secondary-blue/20 blur-3xl" />

      <div className="relative w-full grid gap-10 p-0 py-8 md:p-8 lg:px-12 lg:py-20 lg:grid-cols-2">
        {/* Left */}
        <div className="!w-[90%] md:w-full mx-auto flex flex-col justify-center gap-6">
          <header className="space-y-3">
            <h2 className="text-center lg:text-left text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              {WebHostingData.domainNameSection.title}
            </h2>
          </header>

          {/* Search Form */}
          <SubmitDomainName />
        </div>

        {/* Right */}
        <div className="flex items-center justify-center lg:justify-end">
          {/* <div className="relative">
            <Image
              width={420}
              height={420}
              priority={false}
              loading="lazy"
              alt="Domain deals visual"
              src="/assets/web-hosting/com-domain-offer.png"
              className=""
            />
          </div> */}

          {/* Pricing */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 !h-full !w-[90%] md:!w-[80%]">
            {Object.values(WebHostingData.domainNameSection.pricing).map(
              (pricing, idx) => (
                <div
                  key={`${pricing.title}-${idx}`}
                  className="relative rounded-2xl border  border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition"
                >
                  {idx === 0 && (
                    <span className="absolute -top-3 right-3 rounded-full bg-teal-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow text-lg">
                      Popular
                    </span>
                  )}
                  <div className="flex flex-col items-center justify-between">
                    <p
                      className={classNames(
                        "text-xl sm:text-2xl font-extrabold",
                        idx === 0 && "text-sky-600",
                        idx === 1 && "text-red-500",
                        idx === 2 && "text-emerald-600",
                        idx === 3 && "text-amber-500"
                      )}
                    >
                      {pricing.title}
                    </p>

                    <p className=" text-gray-700 font-semibold text-lg">
                      {pricing.price}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchDomainName;
