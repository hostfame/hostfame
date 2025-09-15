import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import React from 'react';
import DomainPricing from '../../shared/sections/DomainPricing';
import WhyChooseHostfame from './WhyChooseHostfame';
import DomainCheckerBanner from '@/components/shared/sections/DomainCheckerBanner';

const DomainChecker = () => {
  return (
    <div>
      <DomainCheckerBanner />
      <SectionWrapper className="my-12 md:my-16">
        <DomainPricing />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <WhyChooseHostfame />
      </SectionWrapper>
    </div>
  );
};

export default DomainChecker;