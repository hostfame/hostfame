import CenteredSectionHeader from '@/components/shared/headers/CenteredSectionHeader';
import React from 'react';
import { IconType } from 'react-icons';
import { FaServer, FaTools, FaBolt, FaCloud, FaShieldAlt, FaHeadset } from 'react-icons/fa';

interface HighlightItem {
  icon: IconType;
  title: string;
  description: string;
}

const ManagedHostingHighlights = ({ data }: { data: { title: string; description: string } }) => {
  const highlights: HighlightItem[] = [
    {
      icon: FaServer,
      title: 'Autoscaling WordPress Hosting',
      description:
        'Never worry about traffic spikes again. Our cloud-based autoscaling technology adds resources when your site needs more power — no downtime, no limits.',
    },
    {
      icon: FaTools,
      title: 'WordPress Dev Tools',
      description:
        'Take full control with WP-CLI, SSH access, phpMyAdmin, SFTP/FTP, PHP versioning, and one-click installs — all included.',
    },
    {
      icon: FaBolt,
      title: 'Built For Maximum Speed',
      description:
        'Experience lightning-fast hosting with SSD storage, HTTP/2, optimized NGINX caching, and PHP tuning — designed to keep you ahead.',
    },
    {
      icon: FaCloud,
      title: 'Blazing-Fast WordPress Hosting',
      description:
        'Our multi-server network ensures no slowdowns, no bottlenecks. Stay fast and reliable, even during heavy traffic spikes.',
    },
    {
      icon: FaShieldAlt,
      title: 'Ultra-Secure Hosting',
      description:
        'Enterprise-grade protection with malware scanning, DDoS defense, PCI compliance, brute-force protection, 2FA, and more.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Expert Support',
      description:
        'Get instant help anytime. Our U.S.-based WordPress experts are available 24/7/365, ready to solve issues fast.',
    },
  ];

  return (
    <section className="space-y-4 lg:space-y-6 py-6 md:py-8 lg:py-12 xl:py-16">
      {/* Section Header */}
      <section className="flex flex-col gap-2 items-center justify-center mx-auto text-center">
        <CenteredSectionHeader title={data.title} description={data.description} />
      </section>

      {/* Highlights Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group p-6 rounded-2xl shadow-md border border-border-light-gray 
                         bg-card hover:bg-primary 
                         transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full 
                             bg-primary-light text-primary-foreground 
                             group-hover:bg-primary-foreground 
                             group-hover:text-primary transition-colors duration-300"
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-foreground)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-description-text)] group-hover:text-[var(--color-primary-foreground)] transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ManagedHostingHighlights;
