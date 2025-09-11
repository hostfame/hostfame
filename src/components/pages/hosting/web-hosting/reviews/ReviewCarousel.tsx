"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { reviewsData } from "@/data/reviews.daa";

/* ---------------- Types ---------------- */
export type Review = {
  name: string;
  rating: number; // 1-5
  text: string;
};

export type ReviewCarouselProps = {
  reviews: Review[];
  autoPlayMs?: number;
  speedMs?: number; // transition duration (ms)
  className?: string; // apply to outer container
};

/* ---------------- UI helpers ---------------- */
const clampRating = (n: number) => Math.max(0, Math.min(5, Math.round(n)));

const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const r = clampRating(rating);
  return (
    <div className="mt-1 flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={`h-4 w-4 ${i < r ? "" : "opacity-30"}`} />
      ))}
    </div>
  );
};

/* ---------------- Carousel ---------------- */
const ReviewCarousel: React.FC<ReviewCarouselProps> = ({
  reviews = reviewsData,
  autoPlayMs = 2000,
  speedMs = 450,
  className = "",
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className={`relative h-full min-h-0 ${className}`}
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        slidesPerView={1}
        loop
        speed={speedMs}
        // Do NOT use autoHeight; we want fixed height == parent's height
        autoplay={{
          delay: autoPlayMs,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        className="h-full !rounded-2xl"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i} className="!h-full flex ">
            {/* Card fills slide height */}
            <article className="relative h-full min-h-0 w-full  bg-white p-6 shadow-[0_8px_24px_rgba(10,30,70,0.08)] md:p-8 flex flex-col">
              {/* watermark quote icon */}
              

              {/* Header (avatar + name + stars) */}
              <div className="flex items-start gap-4">
                {/* avatar placeholder */}
                <div
                  className="h-12 w-12 shrink-0 rounded-full bg-slate-300"
                  aria-hidden
                />
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {r.name}
                  </h4>
                  <Stars rating={r.rating} />
                </div>
              </div>

              {/* Body that can scroll if long */}
              <div className="mt-4 flex-1 min-h-0 overflow-y-auto pr-1">
                <p className="text-[15px] leading-7 text-slate-600">{r.text}</p>
              </div>

              <FaQuoteLeft
                className="pointer-events-none  -bottom-2 left-6 h-16 w-16 text-slate-300/25"
                aria-hidden
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewCarousel;
