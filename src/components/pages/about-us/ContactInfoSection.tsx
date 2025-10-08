import { contactInfoData } from "@/data/about-us.data";
import React from "react";

const ContactInfoSection = () => {
  return (
    <section className="relative pt-l2 lg:pt-16">
      <div className="hidden md:block absolute top-0 w-full bg-gradient-to-b from-primary-dark to-primary rounded-lg h-32" />
      <div className="md:px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        {contactInfoData.map(({ id, icon: Icon, title, details }) => (
          <div
            key={id}
            className="relative bg-card-background rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
          >
            {/* Floating Icon */}
            <div className="flex gap-2 items-center">
              <div className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-xl">
                <Icon />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-text">{title}</h3>
            </div>
            {/* Content */}
            <div className="mt-2">
              {details.map((line, index) => (
                <p
                  key={index}
                  className="text-sm text-text/80  font-medium leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoSection;
