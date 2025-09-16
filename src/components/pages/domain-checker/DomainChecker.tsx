import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import React from 'react';
import DomainPricing from '../../shared/sections/DomainPricing';
import WhyChooseHostFame from '@/components/shared/sections/WhyChooseHostFame';

const DomainChecker = () => {
  return (
    <div>
      <SectionWrapper className="my-12 md:my-16">
        <DomainPricing />
      </SectionWrapper>
      <SectionWrapper className="my-12 md:my-16">
        <WhyChooseHostFame />
      </SectionWrapper>
    </div>
  );
};

export default DomainChecker;