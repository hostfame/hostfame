"use client";
import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuTrendingUp } from "react-icons/lu";

interface HostingPlansProps {
  title: string;
  description: string;
  data: DataProps[];
}

interface DataProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkBtn: string;
}

const HostingForGrowth = ({ data }: { data: HostingPlansProps }) => {
  return (
    <section className="relative animate-fade-in-up">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-5 py-2.5 cursor-default">
            <LuTrendingUp className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-bold tracking-wide uppercase">Scale Your Success</span>
          </div>
        </div>
        
        <CenteredSectionHeader
          title={data.title}
          description={data.description}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.data.map((plan, index) => (
            <Link
              key={index}
              href={plan.link}
              className="adventure-card card-shine group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-md"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={100}
                  height={100}
                  className="h-8 w-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                {plan.title}
              </h3>
              <p className="text-description-text leading-relaxed mb-5">{plan.description}</p>
              
              {/* CTA */}
              <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all duration-300">
                {plan.linkBtn}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingForGrowth;
