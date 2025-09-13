import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import React from 'react';
import DomainPricing from '../../shared/sections/DomainPricing';

const DomainChecker = () => {
  return (
    <div>
      <SectionWrapper className="my-12 md:my-16">
        <DomainPricing />
      </SectionWrapper>
    </div>
  );
};

export default DomainChecker;