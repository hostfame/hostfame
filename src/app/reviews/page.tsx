import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { reviewsData, review } from "@/data/reviews.data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiStar, FiExternalLink, FiMessageCircle } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Customer Reviews | Hostfame",
  description: "Read what our customers say about Hostfame hosting services. Real reviews from real users about our speed, support, and reliability.",
};

export const dynamic = "force-static";

const stats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "500+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Expert Support" },
];

const additionalReviews = [
  {
    name: "Tanvir Hassan",
    role: "E-commerce Owner",
    rating: 5,
    text: "Switched from a major competitor and couldn't be happier. Website loads 3x faster now and the support team actually understands technical issues. Highly recommended for anyone serious about their online presence.",
    date: "November 2024",
  },
  {
    name: "Rafiq Ahmed",
    role: "Web Developer",
    rating: 5,
    text: "As a developer managing multiple client sites, I need reliable hosting with good support. Hostfame delivers on both. The cPanel is intuitive and their staging environments save me hours of work.",
    date: "October 2024",
  },
  {
    name: "Nadia Islam",
    role: "Blogger",
    rating: 5,
    text: "Started my blog with Hostfame and it's been smooth sailing. The one-click WordPress install got me up and running in minutes. Love the free SSL and daily backups included!",
    date: "September 2024",
  },
];

export default function ReviewsPage() {
  return (
    <section className="min-h-screen">
      {/* Hero */}
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by Hundreds of Happy Customers
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {review.description}
          </p>
          <a
            href="https://www.google.com/search?q=hostfame&oq=hostfame+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgYIAhAjGCcyCwgDEAAYChgLGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNjAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x5335fb8d52d9de1b:0x434717d7d570f32c,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-lg" />
            See All Google Reviews
            <FiExternalLink />
          </a>
        </SectionWrapper>
      </div>

      {/* Stats */}
      <SectionWrapper className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Reviews */}
      <SectionWrapper className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real customers who trust Hostfame for their hosting needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((reviewItem) => (
            <div
              key={reviewItem.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {reviewItem.image && (
                  <Image
                    src={reviewItem.image}
                    alt={reviewItem.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{reviewItem.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(reviewItem.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                &ldquo;{reviewItem.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* More Reviews */}
      <SectionWrapper className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            More Success Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalReviews.map((item) => (
            <div
              key={item.name}
              className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border border-teal-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="border-t border-teal-100 pt-4">
                <div className="font-semibold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role} • {item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Google Reviews CTA */}
      <SectionWrapper className="py-16 bg-gray-50">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
          <FaGoogle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            See Our Reviews on Google
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            We&apos;re proud of our 4.9-star rating on Google. Check out what hundreds of customers have to say about their experience with Hostfame.
          </p>
          <a
            href="https://www.google.com/search?q=hostfame&oq=hostfame+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgYIAhAjGCcyCwgDEAAYChgLGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNjAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x5335fb8d52d9de1b:0x434717d7d570f32c,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition"
          >
            Read All Reviews on Google
            <FiExternalLink />
          </a>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <FiMessageCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the hosting that hundreds of customers love. Start with our 30-day money-back guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/web-hosting"
              className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
