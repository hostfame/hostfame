import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { WebHostingData } from '@/data/hosting.data';
import Image from 'next/image';
import React from 'react';

const WebHostingPartners = () => {
  return (
    <section className='bg-secondary'>
      <SectionWrapper className='py-8 sm:py-12 md:py-16 flex flex-col items-center px-4 sm:px-6 space-y-8 sm:space-y-10 md:space-y-12'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white '>{WebHostingData.webHostingPartnersSection.title} <span className='text-[#FFB800]'>{WebHostingData.webHostingPartnersSection.highlighted}</span></h2>

        <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full'>
          {
            WebHostingData.webHostingPartnersSection.partners.map((partner, index) => (
              <div key={index} className='bg-white rounded-xl flex items-center justify-center h-24 sm:h-28 md:h-32 shadow-md transition-transform hover:scale-105 duration-200 p-2 sm:p-4'>
                <Image
                  width={160}
                  height={80}
                  src={partner}
                  loading='lazy'
                  alt={`partner-${index}`}
                  style={{ color: 'transparent' }}
                  className='object-contain max-h-16 sm:max-h-18 md:max-h-20 w-full h-auto'
                />
              </div>
            ))
          }
        </section>
      </SectionWrapper>
    </section>
  );
};

export default WebHostingPartners;