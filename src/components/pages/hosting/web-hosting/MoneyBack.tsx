import React from 'react';
import { FaCalendarCheck, FaRegClock } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

const MoneyBack = () => {
    const features = [
    {
      icon: <FaArrowRightArrowLeft className="text-white text-xl rotate-90" />,
      text: "Easily Upgrade or Downgrade",
    },
    {
      icon: <FaCalendarCheck className="text-white text-xl" />,
      text: "Get Notified before suspension",
    },
    {
      icon: <FaRegClock className="text-white text-xl" />,
      text: "Refund process is easy",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center bg-white py-8 md:py-16 px-4 sm:px-8 lg:px-16 text-center shadow-sm overflow-hidden">
      {/* Background Circles */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-bl from-[#3b82f6] to-[#a5b4fc] rounded-full z-10 opacity-20" />
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-tr from-[#f87171] to-[#fbbf24] rounded-full z-10 opacity-20" />

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        30 day Money-back Guarantee
      </h2>
      <p className="text-gray-500 mt-2 text-sm md:text-base max-w-2xl mx-auto">
        There is no risk with our 30-day money back guarantee. Stay safe with
        assurance of refund.
      </p>

      {/* Features */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-md">
              {feature.icon}
            </div>
            <span className="text-gray-700 font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoneyBack;