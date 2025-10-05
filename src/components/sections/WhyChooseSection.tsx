'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface FeatureCardProps {
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="relative bg-slate-800/40 border-2 border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-purple-500/50 transition-all duration-300 text-center">
        <h3 className="text-white font-semibold text-lg lg:text-xl">{title}</h3>
      </div>
    </div>
  );
};

export const WhyChooseSection: React.FC = () => {
  const features = [
    { title: 'Cancel Anytime' },
    { title: '24/7 Customer Service' },
    { title: 'Refers & Earn' },
    { title: 'Money Back Guarantee' },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
              Why You Choose Metro Solver?
            </h2>
            <p className="text-slate-400 text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed max-w-xl">
              We are constantly growing or learning and improving. Enter your the personal real estate sanctf uary, where finding the ideal home is effortless and comfortable with our assistance.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="text-base lg:text-lg px-8 py-4"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            >
              Explore
            </Button>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
