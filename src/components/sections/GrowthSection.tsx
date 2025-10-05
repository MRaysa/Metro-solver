import React from 'react';
import { Button } from '../ui/Button';

export const GrowthSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600/10 to-purple-900/10 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-16 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            We are constantly growing or learning and improving. Enter your the personal real estate sanctf uary,
            where finding the ideal home is
          </p>

          <Button
            variant="primary"
            size="lg"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};
