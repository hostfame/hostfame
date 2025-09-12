import { wordpressHostingData } from '@/types/wordpress-hosting/wordpress-hosting.data';
import React from 'react';

const ManagedWordPressHosting = () => {
  return (
    <section className='space-y-4 lg:space-y-6 py-6 md:py-8 lg:py-12 xl:py-16'>
      <section className='flex flex-col gap-2 items-center justify-center mx-auto text-center'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{wordpressHostingData.title}</h2>
        <p className='text-sm sm:text-base md:text-lg w-[80%]'>{wordpressHostingData.description}</p>
      </section>

      <section>
        
      </section>
      
    </section>
  );
};

export default ManagedWordPressHosting;