import Link from "next/link";
import { FiDollarSign, FiUsers, FiTrendingUp, FiGift, FiCheckCircle, FiArrowRight, FiClock, FiShield, FiPercent, FiTarget, FiZap, FiAward } from "react-icons/fi";
import Navbar from "@/components/navbar/Navbar";

const benefits = [
  {
    icon: FiPercent,
    title: "70% Commission",
    description: "Earn a massive 70% commission on every sale you refer. No tiers, no complexity.",
  },
  {
    icon: FiClock,
    title: "90-Day Cookie",
    description: "Long cookie duration means you get credit for sales even if customers return later.",
  },
  {
    icon: FiTrendingUp,
    title: "Real-Time Tracking",
    description: "Monitor your clicks, conversions, and earnings with our advanced dashboard.",
  },
  {
    icon: FiGift,
    title: "Recurring Revenue",
    description: "Earn on renewals too! Get paid every time your referrals renew their plans.",
  },
  {
    icon: FiUsers,
    title: "Dedicated Support",
    description: "Get personalized support from our affiliate team to maximize your success.",
  },
  {
    icon: FiShield,
    title: "Reliable Payouts",
    description: "Monthly payouts via PayPal, bank transfer, or bKash. Always on time.",
  },
];

const steps = [
  { step: "1", title: "Sign Up", description: "Create your free affiliate account in under 2 minutes." },
  { step: "2", title: "Share Your Link", description: "Promote Hostfame using your unique referral link." },
  { step: "3", title: "Earn Money", description: "Get 70% of every sale made through your link." },
];

const promotionIdeas = [
  { icon: FiTarget, title: "Blog Posts", description: "Write hosting reviews and tutorials" },
  { icon: FiUsers, title: "Social Media", description: "Share on Facebook, Twitter, LinkedIn" },
  { icon: FiZap, title: "YouTube Videos", description: "Create hosting comparison videos" },
  { icon: FiAward, title: "Email Marketing", description: "Recommend to your subscribers" },
];

const faqs = [
  {
    question: "How much can I earn as an affiliate?",
    answer: "You earn 70% commission on every sale, regardless of the plan. If someone buys a ৳2,000 hosting plan through your link, you earn ৳1,400. Top affiliates earn ৳50,000+ per month.",
  },
  {
    question: "When and how do I get paid?",
    answer: "Payouts are processed monthly, with a minimum threshold of ৳1,000 or $20. We support bKash, Nagad, PayPal, and bank transfer.",
  },
  {
    question: "Is there a cost to join the program?",
    answer: "No! Joining our affiliate program is completely free. There are no hidden fees or requirements.",
  },
  {
    question: "Do I earn on renewals?",
    answer: "Yes! You earn 70% commission not just on the first sale, but also on every renewal. This means recurring passive income.",
  },
  {
    question: "What marketing materials do you provide?",
    answer: "We provide banners, text links, email templates, social media graphics, and promotional content to help you succeed.",
  },
];

const earnings = [
  { plan: "Starter", price: "৳849", commission: "৳594" },
  { plan: "Pro", price: "৳2,149", commission: "৳1,504" },
  { plan: "Business", price: "৳4,999", commission: "৳3,499" },
];

export default function AffiliatePage() {
  return (
    <>
      {/* Hero Section with Navbar inside */}
      <section className="relative banner-bg overflow-hidden">
        <Navbar isTransparent />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light/20 via-transparent to-transparent" />
        <div className="py-16 sm:py-20">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <FiDollarSign className="text-primary-light" />
              <span className="text-white/90 text-sm font-medium">Earn 70% Commission</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Partner With Hostfame & Earn Big
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-6">
              Join our affiliate program and earn <span className="text-white font-semibold">70% commission</span> on every sale. 
              No tiers, no limits — just generous earnings.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="http://wa.me/+8801884586407"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
              >
                Become an Affiliate
                <FiArrowRight />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "70%", label: "Commission Rate" },
              { value: "90", label: "Day Cookie" },
              { value: "৳1K", label: "Min Payout" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Highlight */}
      <section className="py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Earn 70% on Every Sale
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unlike other programs with complex tiers, we keep it simple. You earn 70% commission on every hosting plan sold through your referral link.
                </p>
                <ul className="space-y-2">
                  {["All plans qualify", "No minimum sales required", "Recurring commissions on renewals", "Instant tracking & attribution"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-4 text-center">Example Earnings</h3>
                <div className="space-y-3">
                  {earnings.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{item.plan}</p>
                        <p className="text-xs text-muted-foreground">Plan Price: {item.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{item.commission}</p>
                        <p className="text-xs text-muted-foreground">Your Earning</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-14 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Start earning in 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item, i) => (
              <div key={i} className="relative text-center bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Why Join Our Program?
            </h2>
            <p className="text-muted-foreground">
              Industry-leading benefits for our affiliate partners
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Ideas */}
      <section className="py-12 sm:py-14 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Ways to Promote
            </h2>
            <p className="text-muted-foreground">
              Multiple channels to maximize your earnings
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {promotionIdeas.map((idea, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <idea.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{idea.title}</h3>
                <p className="text-muted-foreground text-xs">{idea.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold text-foreground mb-1.5 flex items-start gap-2 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-light/20 via-transparent to-transparent" />
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Start Earning?
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Join our affiliate program today and earn 70% on every referral.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="http://wa.me/+8801884586407"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
                >
                  Join Now — It&apos;s Free
                  <FiArrowRight />
                </Link>
                <Link
                  href="mailto:affiliate@hostfame.com"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  Contact Affiliate Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
