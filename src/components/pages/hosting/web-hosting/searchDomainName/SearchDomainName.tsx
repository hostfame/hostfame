import { WebHostingData } from "@/data/hosting.data";
import React from "react";
import SubmitDomainName from "./SubmitDomainName";
import Image from "next/image";

const SearchDomainName = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg md:px-8 lg:px-16 py-5 px-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
      <section className="flex-1 w-full flex flex-col justify-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center md:text-start">
          {WebHostingData.domainNameSection.title}
        </h2>

        <SubmitDomainName/>

        <section className="flex md:gap-6 gap-4 flex-wrap mx-auto md:mx-0 mt-4">
          <div className="text-start md:min-w-[80px] min-w-[50px]">
            <p className="font-bold text-xl sm:text-2xl text-[#00B6F3]">{WebHostingData.domainNameSection.pricing.dotCom.title}</p>
            <p className="text-gray-600 font-medium text-xs md:text-base">{WebHostingData.domainNameSection.pricing.dotCom.price}</p>
          </div>

          <div className="text-start md:min-w-[80px] min-w-[50px]">
            <p className="font-bold text-xl sm:text-2xl text-[#FF3B3B]">{WebHostingData.domainNameSection.pricing.dotNet.title}</p>
            <p className="text-gray-600 font-medium text-xs md:text-base">{WebHostingData.domainNameSection.pricing.dotNet.price}</p>
          </div>

          <div className="text-start md:min-w-[80px] min-w-[50px]">
            <p className="font-bold text-xl sm:text-2xl text-[#00C853]">{WebHostingData.domainNameSection.pricing.dotOrg.title}</p>
            <p className="text-gray-600 font-medium text-xs md:text-base">{WebHostingData.domainNameSection.pricing.dotOrg.price}</p>
          </div>

          <div className="text-start md:min-w-[80px] min-w-[50px]">
            <p className="font-bold text-xl sm:text-2xl text-[#FFD600]">{WebHostingData.domainNameSection.pricing.dotXyz.title}</p>
            <p className="text-gray-600 font-medium text-xs md:text-base">{WebHostingData.domainNameSection.pricing.dotXyz.price}</p>
          </div>
        </section>
      </section>

      <section className="w-full md:w-auto flex justify-center items-center">
        <Image
          width={300}
          height={300}
          loading="lazy"
          alt=".com domain offer"
          src="/assets/web-hosting/com-domain-offer.png"
        />

      </section>
    </section>
  );
};

export default SearchDomainName;
