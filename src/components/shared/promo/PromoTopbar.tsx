import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import CloseX from "./CloseX"; // <-- client component
import { BannerTimer } from "../banners/BannerTimer";

type PromoTopBarProps = {
  countdownTarget?: Date | number | string;
  title?: string;
  subtitle?: string;
  id?: string; // DOM id used by CloseX to hide this bar
  className?: string;
};

export default function PromoTopBar({
  countdownTarget = new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  title = "24-Hour Flash Sale!",
  subtitle = "Get 76% off Hosting plans + free Domain & SSL!",
  id = "promo-top-bar",
  className = "",
}: PromoTopBarProps) {
  return (
    <div
      id={id}
      className={`w-full bg-gradient-to-r from-primary-light via-primary-light to-primary text-white px-2 md:px-4 py-1 md:py-6 text-sm  ${className}`}
    >
      <div className="mx-auto max-w-7xl  sm:px-4">
        {/* Always flex; allow horizontal scroll when cramped */}
        <div className="flex items-center justify-between gap-1 sm:gap-3 py-1 overflow-x-auto">
          {/* Left: texts + timer (kept as a single row using min-w-max) */}
          <div className="flex min-w-max items-center min-[389px]:gap-2 sm:gap-4">
            <div className="flex min-w-max flex-col">
              <p className="text-xs sm:text-base md:text-xl font-semibold leading-tight ">
                {title}
              </p>
              <p className=" leading-tight max-lg:hidden font-semibold text-sm sm:text-base md:text-lg">
                {subtitle}
              </p>
            </div>

            {/* Compact timer boxes for the slim top bar */}
            <BannerTimer
              target={countdownTarget}
              className="ml-1"
              timerClassName="!text-xs sm:!text-sm md:!text-lg lg:!text-lg"
              unitClassName="!text-[8px] sm:!text-[10px] md:!text-[10px] lg:!text-[10px]"
              boxClassName=" !w-8 !h-8 min-[389px]:!w-10 min-[389px]:!h-10
                      sm:!w-12 sm:!h-12
                      md:!w-12 md:!h-12
                      lg:!w-12 lg:!h-12 rounded-md"
              hideDays
            />
          </div>

          {/* Right: view link + close button */}
          <div className="flex min-w-max items-center  sm:gap-4 pl-2">
            <Link
              href="#pricing-section"
              className="flex items-center text-xs  gap-1 whitespace-nowrap sm:text-sm md:text-lg  underline underline-offset-4 hover:opacity-90"
            >
              View Details <FiChevronDown className="mt-[1px]" />
            </Link>

            {/* Close button hides this bar by id */}
            <CloseX targetId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
