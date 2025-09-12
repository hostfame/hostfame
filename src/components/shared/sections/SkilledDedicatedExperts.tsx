import Image from "next/image";
import { ReactNode } from "react";

import { FaHeadset, FaBolt } from "react-icons/fa";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface SkilledExpertsData {
  title: string;
  description: string;
  features: Feature[];
  images: string[];
  cta: string;
}

export const skilledExpertsData: SkilledExpertsData = {
  title: "Skilled & Dedicated Experts",
  description:
    "Our team is highly trained and ready to assist you anytime. With advanced support and optimized hosting solutions, we make sure your business runs smoothly without stress.",
  features: [
    {
      icon: <FaHeadset size={22} />,
      title: "24/7 Expert Support",
      description:
        "Our friendly support team is always available to help you stay stress-free.",
    },
    {
      icon: <FaBolt size={22} />,
      title: "Up to 20X Faster Hosting",
      description:
        "Experience lightning-fast performance and smooth operation with our optimized control panel.",
    },
  ],
  images: [
    "https://themewant.com/products/wordpress/hostie/wp-content/uploads/2024/02/image-1.png",
    "https://themewant.com/products/wordpress/hostie/wp-content/uploads/2024/02/image-2.png",
  ],
  cta: "Chat with Us",
};

const SkilledDedicatedExperts = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
        {/* Left Section - Text */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">
            {skilledExpertsData.title}
          </h2>
          <p className="text-lg text-text/80 mb-10">
            {skilledExpertsData.description}
          </p>

          <div className="space-y-8">
            {skilledExpertsData.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text">
                    {feature.title}
                  </h3>
                  <p className="text-text/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition">
            {skilledExpertsData.cta}
          </button>
        </div>

        {/* Right Section - Images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={skilledExpertsData.images[0]}
              alt="Expert working"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg mt-10">
            <Image
              src={skilledExpertsData.images[1]}
              alt="Technology workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilledDedicatedExperts;
