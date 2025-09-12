import React from "react";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { wordpressHostingData } from "@/types/wordpress-hosting/wordpress-hosting.data";
import ManagedHostingHighlights from "@/components/shared/sections/ManagedHostingHighlights";

const WordPressHosting = () => {
  return (
    <section>
      <SectionWrapper>
        <ManagedHostingHighlights data={wordpressHostingData}/>
      </SectionWrapper>
    </section>
  );
};

export default WordPressHosting;
