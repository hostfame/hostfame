import { Banner } from "@/components/shared/banners/Banner";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import React from "react";
import ContactTiles from "./ContactTiles";
import SupportBanner from "@/components/shared/sections/SupportBanner";
import Link from "next/link";
import WhiteButton from "@/components/shared/html/WhiteButton";
import AskAQuestion from "@/components/shared/sections/AskAQuestion";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { FiMail, FiArrowRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section>
      <Banner
        topTitle={{
          content: "Get In Touch",
          className: " bg-white/10 backdrop-blur-md",
        }}
        title={<>We’re Here to Help</>}
        waveImage="/assets/web-hosting/banner-left-wave.png"
        // countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now"
        }}
        
        description="Have a question, need support, or just want to chat? Our team is available 24/7 to make sure you get the help you need,  quickly and easily."
        // heightClassName="h-fit lg:h-[550px] lg:max-h-[550px]"
        ctaSection={<ContactCtaSection />}
        imageProps={{ width: 400, height: 400 }}
        image="/assets/contactbanner.svg"
        // imageComponent={<AnimationBanner />}
        classNameForTitle="text-nowrap"
      />
      {/* <SectionWrapper className="mb-8 mt-4">
        <PrioritySupport />
      </SectionWrapper> */}
      <SectionWrapper className=" mt-8">
        <ContactTiles />
      </SectionWrapper>

      {/* Contact Mediums Section */}
      <SectionWrapper className="my-12 md:my-16">
        <ContactMediums />
      </SectionWrapper>

      <SectionWrapper className="my-12 md:my-16">
        <AskAQuestion />
      </SectionWrapper>

      <SectionWrapper className="mt-8 mb-12">
        <SupportBanner />
      </SectionWrapper>
    </section>
  );
};

// export function AnimationBanner() {
//   return (
//     <div
//       className={` w-full relative  max-lg:mt-[14%] flex justify-center items-center  max-sm:scale-90`}
//     >
      
//       <Image
//         src={"/assets/banner__contact__image-sm3.svg"}
//         width={70}
//         height={70}
//         alt="Hosting illustration"
//         className=" z-10 absolute left-[10%]   -top-[10%] swing-bottom"
//       />
//       <Image
//         src={"/assets/banner__contact__image-sm1.svg"}
//         alt={"Home Banner"}
//         width={180}
//         height={180}
//         className={` left-[25%] max-sm:scale-90`}
//         priority
//       />
//       <section className=" flex justify-end items-end w-fit h-fit -ml-[15%]">
//         <Image
//           src="/assets/banner__contact__image.svg"
//           width={350}
//           height={350}
//           alt="Hosting illustration"
//           className="z-10   "
//         />
//       </section>
//       <Image
//         src={"/assets/banner__contact__image-sm2.svg"}
//         width={150}
//         height={150}
//         alt="Hosting illustration"
//         className=" absolute max-sm:scale-90 -top-[20%] left-[40%] top-bottom2"
//       />
//       <Image
//         src={"/assets/banner__contact__image-sm4.svg"}
//         width={100}
//         height={100}
//         alt="Hosting illustration"
//         className=" absolute   right-0 top-0   left-right"
//       />
//     </div>
//   );
// }

function ContactCtaSection() {
  return (
    <section className=" ">
      <Link
        href={"http://wa.me/+8801884586407"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhiteButton className="!rounded !border-0 py-2 px-7 text-lg ">Chat with Us</WhiteButton>
      </Link>
    </section>
  );
}

const contactMediums = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Quick responses, instant support. Chat with our team directly.",
    icon: FaWhatsapp,
    href: "http://wa.me/+8801884586407",
    color: "from-green-500 to-green-600",
    hoverColor: "group-hover:from-green-400 group-hover:to-green-500",
    iconBg: "bg-green-500",
    buttonText: "Start Chat",
  },
  {
    id: "messenger",
    title: "Messenger",
    description: "Connect with us on Facebook Messenger for friendly support.",
    icon: FaFacebookMessenger,
    href: "https://m.me/hostfameofficial",
    color: "from-blue-500 to-indigo-600",
    hoverColor: "group-hover:from-blue-400 group-hover:to-indigo-500",
    iconBg: "bg-blue-500",
    buttonText: "Message Us",
  },
  {
    id: "email",
    title: "Email",
    description: "Send us a detailed message. We typically respond within 24 hours.",
    icon: FiMail,
    href: "mailto:info@hostfame.com",
    color: "from-primary to-primary-dark",
    hoverColor: "group-hover:from-primary-light group-hover:to-primary",
    iconBg: "bg-primary",
    buttonText: "Send Email",
  },
];

function ContactMediums() {
  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Get in Touch Instantly
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose your preferred way to reach us. We&apos;re available 24/7 to help you.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactMediums.map((medium) => (
          <a
            key={medium.id}
            href={medium.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${medium.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative">
              {/* Icon */}
              <div className={`w-14 h-14 ${medium.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <medium.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {medium.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                {medium.description}
              </p>
              
              {/* Button */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${medium.color} ${medium.hoverColor} text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300`}>
                <span>{medium.buttonText}</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
