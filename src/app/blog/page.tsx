import Navbar from "@/components/navbar/Navbar";
import SectionWrapper from "@/components/shared/wrappers/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiClock, FiUser } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Blog & Tutorials | Hostfame",
  description: "Learn about web hosting, WordPress, website security, and more. Expert guides and tutorials to help you succeed online.",
};

export const dynamic = "force-static";

const featuredPost = {
  title: "Complete Guide to Choosing the Right Web Hosting in 2025",
  excerpt: "Everything you need to know about selecting the perfect hosting plan for your website, from shared hosting to VPS and dedicated servers.",
  image: "/assets/blog/hosting-guide.jpg",
  category: "Hosting Guide",
  author: "Hostfame Team",
  date: "December 2024",
  readTime: "10 min read",
  slug: "complete-guide-web-hosting-2025",
};

const blogPosts = [
  {
    title: "How to Speed Up Your WordPress Website",
    excerpt: "Learn proven techniques to make your WordPress site load faster and improve your SEO rankings.",
    category: "WordPress",
    author: "Hostfame Team",
    date: "November 2024",
    readTime: "7 min read",
    slug: "speed-up-wordpress-website",
  },
  {
    title: "SSL Certificates Explained: Why Your Site Needs HTTPS",
    excerpt: "Understanding SSL certificates and why they're essential for website security and customer trust.",
    category: "Security",
    author: "Hostfame Team",
    date: "November 2024",
    readTime: "5 min read",
    slug: "ssl-certificates-explained",
  },
  {
    title: "Beginner's Guide to Domain Names",
    excerpt: "Everything you need to know about choosing, registering, and managing your domain name.",
    category: "Domains",
    author: "Hostfame Team",
    date: "October 2024",
    readTime: "6 min read",
    slug: "beginners-guide-domain-names",
  },
  {
    title: "Website Backup Best Practices",
    excerpt: "Protect your website data with these essential backup strategies and tools.",
    category: "Security",
    author: "Hostfame Team",
    date: "October 2024",
    readTime: "5 min read",
    slug: "website-backup-best-practices",
  },
  {
    title: "How to Migrate Your Website to a New Host",
    excerpt: "Step-by-step guide to safely move your website to Hostfame without downtime.",
    category: "Tutorials",
    author: "Hostfame Team",
    date: "September 2024",
    readTime: "8 min read",
    slug: "migrate-website-new-host",
  },
  {
    title: "Understanding DNS: A Complete Guide",
    excerpt: "Learn how DNS works and how to manage your domain's DNS settings effectively.",
    category: "Tutorials",
    author: "Hostfame Team",
    date: "September 2024",
    readTime: "6 min read",
    slug: "understanding-dns-guide",
  },
];

const categories = [
  { name: "All Posts", count: 12 },
  { name: "Hosting Guide", count: 4 },
  { name: "WordPress", count: 3 },
  { name: "Security", count: 2 },
  { name: "Tutorials", count: 3 },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="banner-bg">
        <Navbar isTransparent />
        <SectionWrapper className="py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Blog & Tutorials
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Expert guides, tutorials, and tips to help you get the most out of your hosting and grow your online presence.
          </p>
        </SectionWrapper>
      </div>

      {/* Featured Post */}
      <SectionWrapper className="py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 md:p-12 flex items-center">
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-white/90 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
                  <span className="flex items-center gap-1">
                    <FiUser className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-teal-700 font-semibold rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  Read Article <FiArrowRight />
                </span>
              </div>
            </div>
            <div className="bg-teal-100 min-h-[300px] flex items-center justify-center">
              <div className="text-teal-600 text-6xl font-bold opacity-20">Featured</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Categories + Posts */}
      <SectionWrapper className="py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <span className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                      <span className="text-gray-700">{cat.name}</span>
                      <span className="text-sm text-gray-400">{cat.count}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="my-6" />

              <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center text-teal-600 font-medium text-sm hover:underline"
              >
                Contact Support <FiArrowRight className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-40 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300">{post.category.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <SectionWrapper className="py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Get the latest hosting tips, tutorials, and special offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
