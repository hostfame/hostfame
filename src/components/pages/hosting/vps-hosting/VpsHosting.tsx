import NextLevelVPS from '@/components/shared/sections/NextLevelVPS';
import React from 'react';
import CloudVps from '../../../shared/sections/CloudVps';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import PremiumVpsHosting from '@/components/shared/sections/PremiumVpsHosting';

const VpsHosting = () => {
  return (
    <div>
      <SectionWrapper className="my-12 md:my-16">
        <NextLevelVPS />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <CloudVps />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <PremiumVpsHosting />
      </SectionWrapper>
    </div>
  );
};

export default VpsHosting;