import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import ManagedHostingThatGrows from "@/components/shared/sections/ManagedHostingThatGrows";
import WhatAreSpecials from "@/components/shared/sections/WhatAreSpecials";

const ManagedHosting = () => {
  return (
    <section className="">
      <SectionWrapper className="my-12 md:my-16">
        <ManagedHostingThatGrows />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <WhatAreSpecials />
      </SectionWrapper>
    </section>
  );
};

export default ManagedHosting;
