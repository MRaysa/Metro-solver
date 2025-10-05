'use client';

import React from 'react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] lg:min-h-[700px] py-12 lg:py-20 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="max-w-2xl lg:w-1/2 z-10">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 leading-[1.1] tracking-tight">
              Expert to
              <br />
              Digitalise Your
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Growth
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base lg:text-lg mb-8 lg:mb-12 max-w-xl leading-relaxed">
              We are constantly growing or learning and improving. Enter your the personal real estate sanctf uary, where finding the ideal home is
            </p>

            {/* CTA Button */}
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
              Explore Now
            </Button>
          </div>

          {/* Right Side - Video (Desktop: Side, Mobile: Below) */}
          <div className="lg:w-[60%] w-full flex items-center justify-center lg:justify-end">
            <div className="w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ mixBlendMode: 'lighten' }}
                className="w-full h-auto scale-150 lg:scale-[1.8]"
              >
                <source src="/v.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Icon */}
      <div className="absolute bottom-8 right-6 lg:bottom-16 lg:right-16 z-20">
        <div className="relative group cursor-pointer">
          {/* Pulsing Purple Circle Border */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute -inset-4 border-[3px] border-purple-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -inset-4 border-[3px] border-purple-500/60 rounded-full"></div>
          </div>

          {/* Chat Bot Icon */}
          <button className="relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 hover:scale-110 transition-transform duration-300 group-hover:shadow-purple-500/70">
            <svg className="w-8 h-8 lg:w-9 lg:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.34 0-2.61-.35-3.71-.97l-.27-.15-2.76.47.47-2.76-.15-.27C5.35 14.61 5 13.34 5 12c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7z"/>
              <circle cx="9" cy="12" r="1.5"/>
              <circle cx="15" cy="12" r="1.5"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="bg-slate-950/80 backdrop-blur-sm border-t border-slate-800/50">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap opacity-50">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span className="text-white font-semibold text-base lg:text-lg">luminus</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path fill="black" d="M12 6l-6 6h4v6h4v-6h4z"/>
              </svg>
              <span className="text-white font-semibold text-base lg:text-lg">brembo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
              <span className="text-white font-semibold text-base lg:text-lg">motorola</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span className="text-white font-semibold text-base lg:text-lg">luminus</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path fill="black" d="M12 6l-6 6h4v6h4v-6h4z"/>
              </svg>
              <span className="text-white font-semibold text-base lg:text-lg">brembo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
