"use client";

import React, { useEffect } from "react";
import { FiCalendar, FiClock, FiCheckCircle, FiUsers, FiHeadphones, FiAward } from "react-icons/fi";

export default function BookConsultationPage() {
  useEffect(() => {
    // Load TidyCal script
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const benefits = [
    {
      icon: FiHeadphones,
      title: "Expert Guidance",
      description: "Get personalized advice from our hosting specialists",
    },
    {
      icon: FiClock,
      title: "Save Time",
      description: "Skip the research - we'll find the perfect solution for you",
    },
    {
      icon: FiCheckCircle,
      title: "Free Consultation",
      description: "No obligations, just helpful advice tailored to your needs",
    },
    {
      icon: FiAward,
      title: "Best Recommendations",
      description: "Get the most suitable hosting plan for your budget",
    },
  ];

  const whatToExpect = [
    "Discuss your website requirements and goals",
    "Get expert recommendations on hosting plans",
    "Learn about domain options and email setup",
    "Understand security and backup solutions",
    "Get answers to all your technical questions",
    "Receive a custom quote if needed",
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-16 sm:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FiCalendar className="text-primary-light" />
              <span className="text-white/90 text-sm font-medium">Free 15-Minute Consultation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Book Your Free Consultation
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Let our experts help you find the perfect hosting solution for your business. 
              Schedule a free consultation call today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Benefits */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Why Book a Consultation?
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you&apos;re starting a new website or looking to upgrade your hosting, 
                our team is here to guide you through every step.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FiUsers className="text-primary" />
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {whatToExpect.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: TidyCal Embed */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Select a Time Slot
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Choose a convenient time for your free consultation
                </p>
                
                {/* TidyCal Embed Container */}
                <div className="min-h-[500px] bg-muted/30 rounded-xl overflow-hidden">
                  <div 
                    className="tidycal-embed" 
                    data-path="screative/hostfame"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Trusted by Businesses
            </h2>
            <p className="text-muted-foreground">
              Join hundreds of satisfied customers who found their perfect hosting solution
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Have Questions Before Booking?
          </h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out to us anytime. We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/+8801884586407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info@hostfame.com"
              className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
