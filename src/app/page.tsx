import FaqSection from "@/components/pages/hosting/faqs/FaqSection";
import HostingBenefits from "@/components/pages/hosting/web-hosting/HostingBenefits";
import ReviewsSection from "@/components/pages/hosting/web-hosting/reviews/ReviewSection";
import WebHosting from "@/components/pages/hosting/web-hosting/WebHosting";
import { Banner } from "@/components/shared/banners/Banner";

export default function Home() {
  return (
    <section>
      <Banner
        title={
          <>
            Get Fastest Hosting
            <br className="hidden md:block" />
            <span className="sr-only"> — </span>
            <span className="block">Up to 76% Discount</span>
          </>
        }
        image="/assets/web-hosting/webhero.webp"
        waveImage="/assets/web-hosting/banner-left-wave.png"
        bgGradient="linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)"
        countdownTarget={new Date(Date.now() + 15 * 60 * 60 * 1000)} // 15 hours
        cta={{
          text: "Claim Offer Now",
        }}
        lists={[
          "Free .COM Domain on Trinnially",
          "Genuine & Latest Control Panel",
          "Free WildCard SSL for Lifetime"
        ]}
      />
      <HostingBenefits />
      <WebHosting />
      <ReviewsSection />
      <FaqSection />
    </section>
  );
}
