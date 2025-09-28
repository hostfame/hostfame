import { WebHostingData } from '@/data/hosting.data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const QuestionSection = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row items-center bg-gradient-to-r from-blue-950 to-teal-800 rounded-2xl shadow-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-8 w-full min-h-[250px] sm:min-h-[200px] gap-6 sm:gap-8 lg:gap-0'>
      <section className='flex-1 flex flex-col justify-center items-start lg:pr-10 text-center lg:text-left'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mx-auto lg:mx-0'>{WebHostingData.questionSection.title1}</h2>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight mx-auto lg:mx-0'>{WebHostingData.questionSection.title2}</h2>
        <p className='text-gray-200 mb-4 sm:mb-6 text-[15px] sm:text-base md:text-base max-w-xl mx-auto lg:mx-0'>{WebHostingData.questionSection.description}</p>

        <Link href={WebHostingData.questionSection.buttonLink} className='bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base md:text-base w-full sm:w-auto inline-block text-center cursor-pointer font-bold'>
          <button className='cursor-pointer '>
            {WebHostingData.questionSection.buttonText}
          </button>
        </Link>
      </section>

      <section className='w-[200px] sm:w-[260px] md:w-[320px] lg:w-[400px]'>
        <Image
          src={WebHostingData.questionSection.image}
          alt="A man attending an online meeting"
          loading='lazy'
          width={400}
          height={400}
          className='w-full h-auto max-w-[360px]'
        />
      </section>
    </section>
  );
};

export default QuestionSection;