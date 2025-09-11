import React from "react";
import SearchDomainName from "./searchDomainName/SearchDomainName";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";

const WebHosting = () => {
  return (
    <section>
      <SectionWrapper>
        <SearchDomainName />
      </SectionWrapper>
    </section>
  );
};

export default WebHosting;
