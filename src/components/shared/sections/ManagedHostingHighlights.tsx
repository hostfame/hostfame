import CenteredSectionHeader from '@/components/shared/headers/CenteredSectionHeader';
import React from 'react';

const ManagedHostingHighlights = ({data}) => {
  return (
    <section className='space-y-4 lg:space-y-6 py-6 md:py-8 lg:py-12 xl:py-16'>
      <section className='flex flex-col gap-2 items-center justify-center mx-auto text-center'>
        <CenteredSectionHeader
          title={data.title}
          description={data.description}
        />
      </section>

      <section>
        
      </section>
      
    </section>
  );
};

export default ManagedHostingHighlights;