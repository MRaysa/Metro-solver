'use client';

import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const infoCards = [
    { title: 'Delivery and Support', icon: 'delivery' },
    { title: 'Quality Assurance', icon: 'quality' },
    { title: 'Implement & Develop', icon: 'develop' },
    { title: 'Book a Call', icon: 'call' },
    { title: 'Requirement Analysis', icon: 'analysis' },
    { title: 'Service Customization', icon: 'service' },
  ];

  const stats = [
    { number: '150', label: 'Current Clients', suffix: '+' },
    { number: '25k', label: 'Completed Projects', suffix: '+' },
    { number: '90', label: 'Metro Solver Teams', suffix: '+' },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-[1400px] mx-auto">
        {/* Video with Play Button */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer mb-12">
          {/* Placeholder Image */}
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <svg className="w-32 h-32 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 group-hover:bg-slate-950/40 transition-all">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* How to Works? Circular Diagram */}
        <div className="relative py-12 mb-12">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-full border-2 border-purple-500/50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white font-bold text-lg lg:text-xl">How</p>
              <p className="text-white font-bold text-lg lg:text-xl">to Works?</p>
            </div>
          </div>

          {/* Circular Border */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] border-2 border-purple-500/30 rounded-full"></div>

          {/* Info Cards in Circle */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Top Left */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
              <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/50 transition-all cursor-pointer min-w-[180px]">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">Delivery and Support</p>
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
              <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/50 transition-all cursor-pointer min-w-[180px]">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">Book a Call</p>
              </div>
            </div>

            {/* Middle Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0">
              <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/50 transition-all cursor-pointer min-w-[180px]">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">Quality Assurance</p>
              </div>
            </div>

            {/* Middle Right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0">
              <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/50 transition-all cursor-pointer min-w-[200px]">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">Requirement Analysis</p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
              <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/50 transition-all cursor-pointer min-w-[180px]">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">Implement & Develop</p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12">
              <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/50 transition-all cursor-pointer min-w-[200px]">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">Service Customization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}<span className="text-purple-500">{stat.suffix}</span>
              </h3>
              <p className="text-slate-400 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
