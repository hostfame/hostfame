import React from "react";
import { FaGoogle, FaStar } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import ReviewCarousel, { Review } from "./ReviewCarousel";
import Image from "next/image";

/** Data array of reviews */
const REVIEWS: Review[] = [
  {
    name: "Saad Ahmed",
    rating: 5,
    text: "One of the best Domain & Hosting provider I have ever seen. The best part about them what I liked most is their support. All of the time whenever I needed help about anything they stayed always by my side. Really a great service provider. The hosting performance is outstanding and the pricing is very competitive. Their team is knowledgeable and always goes the extra mile to ensure customer satisfaction. I couldn't be happier with their services.",
  },
  {
    name: "Amina Rahman",
    rating: 5,
    text: "Incredible uptime and swift support responses. Migration was handled smoothly and my site performance improved noticeably after switching.",
  },
  {
    name: "Sanjay Kapoor",
    rating: 4,
    text: "Great value for money. Dashboard is simple to use and tickets are answered quickly. Would recommend for small businesses.",
  },
  {
    name: "Emily Carter",
    rating: 5,
    text: "Lightning fast NVMe SSDs and free SSL were a big plus. Live chat helped me at 2am — that says it all!",
  },
];

export default function ReviewsSection() {
  return (
    <section className=" py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-[2%]  lg:grid-cols-2">
        {/* Left column */}
        <div className="relative sm:ml-[10vw] lg:ml-0">
          {/* subtle circular backdrop to match screenshot */}
          {/* <div className="pointer-events-none absolute -left-24 -top-20 hidden h-96 w-96 rounded-full bg-white/70 blur-md md:block" /> */}
          <div className="relative">
            <div className="flex flex-col gap-3">
              <Image
                src={"/assets/icons/google.webp"}
                width={80}
                height={40}
                alt="Google"
              />
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-4 w-4" />
                ))}
              </div>
            </div>

            <p className="mt-2  font-semibold text-base text-text sm:text-lg">
              4.8 out of 5 based on 147+ reviews.
            </p>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight  text-primary md:text-4xl">
              Hear from our
              <br /> happy customers
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-6  text-description-text">
              Getting positive reviews from hundreds of clients means a lot to
              us. We care about every feedback and adjust our services
              accordingly.
            </p>

            <div className="mt-6 flex items-center gap-6">
              {/* avatar placeholders */}
              <div className="flex -space-x-3">
                {[0, 1, 2].map((k) => (
                  <div
                    key={k}
                    className="h-10 w-10 rounded-full border-2 border-[#f6f6f8] bg-slate-300"
                    aria-hidden
                  />
                ))}
              </div>

              <a
                href="#more-reviews"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary-light"
              >
                More Review
                <HiOutlineArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column (client auto slider) */}
        <ReviewCarousel reviews={REVIEWS} />
      </div>
    </section>
  );
}
