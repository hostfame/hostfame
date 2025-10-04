import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { whatMakesUpDifferentCards } from "@/data/what-makes-up-dif.data";
import Image from "next/image";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function WhatMakesUsDifferent({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden py-10 md:pb-16 pt-[50px] md:pt-[200px] bg-no-repeat bg-cover md:bg-[url('/assets/shape.png')] ${className}`}
    >
      {/* Background */}
      {/* <div className="absolute inset-0 z-0">
        <Image src="/assets/shape.png" alt="" fill priority className="object-cover" />
        
      </div> */}

      <SectionWrapper className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: Person */}
        <div className="relative mx-auto hidden lg:block w-full max-w-[620px]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/assets/cd-man.webp"
              alt="Hostfame team member"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 560px"
            />
          </div>

          <div className="  p-4 w-[80%] space-y-2 hover:scale-[1.02] duration-300 bottom-0 left-[10%] absolute  bg-card-background rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-primary/20">
                <IoMdInformationCircleOutline size={24}  className=" text-primary" />
              </div>
              <p className=" text-text font-semibold">Meet Our Expert</p>
            </div>

            <p className=" text-sm text-description-text">
              Dedicated to delivering high-performance hosting and support you
              can trust.
            </p>
          </div>
        </div>

        {/* Right: Copy + cards */}
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
            What makes Hostfame
            <br className="hidden sm:block" /> different from others?
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-6 text-slate-600">
            Using our incredible technology, we will help you improve your
            website&apos;s accessibility. With LiteSpeed Server and CloudLinux
            OS, you can speed up loading times, enhance security, and make your
            site faster and more reliable.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whatMakesUpDifferentCards.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl bg-white/90 p-5 shadow-[0_10px_28px_rgba(10,30,70,0.08)] ring-1 ring-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-teal-600 ring-1 ring-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
