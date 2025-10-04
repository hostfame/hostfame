import React from "react";
import { FaGoogle, FaStar } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import ReviewCarousel, { Review } from "./ReviewCarousel";
import Image from "next/image";
import { review, reviewsData } from "@/data/reviews.data";

export default function ReviewsSection() {
  return (
    <section className="my-12 md:my-16">
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
              5 out of 5 based on our customer reviews.
            </p>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight  text-primary md:text-4xl">
              Hear from our
              <br /> happy customers
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-6  text-description-text">
              {review.description}
            </p>

            <div className="mt-6 flex items-center gap-6">

              {/* avatar placeholders */}
              <div className="flex -space-x-3">
                {reviewsData.slice(0, 3).map((r,id) => (
                  <div key={id}>
                    {/* Header (avatar + name + stars) */}
                    <div className="flex items-start gap-4">
                      {/* avatar placeholder */}
                      {r.image ?
                        <Image
                          src={r.image}
                          alt={r.name}
                          height={100}
                          width={100}
                          className="h-12 w-12 shrink-0 rounded-full "
                        /> : <div
                          className="h-12 w-12 shrink-0 rounded-full bg-slate-300"
                          aria-hidden
                        />}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={review.moreReviewHref}
                target="_blank"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary-light"
              >
                More Review
                <HiOutlineArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column (client auto slider) */}
        <ReviewCarousel reviews={reviewsData} />
      </div>
    </section>
  );
}
