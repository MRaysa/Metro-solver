'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface PortfolioItemProps {
  image: string;
  title?: string;
  category?: string;
  size?: 'small' | 'medium' | 'large';
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category, size = 'medium' }) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-1',
    large: 'col-span-2 row-span-2',
  };

  return (
    <div className={`${sizeClasses[size]} group cursor-pointer overflow-hidden rounded-2xl relative`}>
      <div className="relative w-full h-full bg-slate-800 border-2 border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        {/* Placeholder for portfolio image */}
        <div className="w-full h-full min-h-[250px] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <div className="text-slate-600 text-center">
            <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs">Portfolio Image</p>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
          {title && (
            <div>
              <p className="text-purple-300 text-sm mb-1">{category}</p>
              <h3 className="text-white font-bold text-lg">{title}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const PortfolioSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    { image: '/portfolio/1.jpg', title: 'Build Your Own NFT', category: 'Web Design', size: 'medium' as const },
    { image: '/portfolio/2.jpg', title: 'Leading Blade Tech', category: 'Branding', size: 'medium' as const },
    { image: '/portfolio/3.jpg', title: 'Data Partner', category: 'App Design', size: 'medium' as const },
    { image: '/portfolio/4.jpg', title: 'Perfect Home', category: 'Website', size: 'medium' as const },
    { image: '/portfolio/5.jpg', title: 'Cybertruck', category: '3D Design', size: 'medium' as const },
    { image: '/portfolio/6.jpg', title: 'NFT Collection', category: 'Digital Art', size: 'medium' as const },
    { image: '/portfolio/7.jpg', title: 'Crypto Agency', category: 'Web3', size: 'large' as const },
    { image: '/portfolio/8.jpg', title: 'Hot Trending', category: 'Mobile App', size: 'medium' as const },
    { image: '/portfolio/9.jpg', title: 'Crypto Investing', category: 'Platform', size: 'medium' as const },
    { image: '/portfolio/10.jpg', title: 'NFT Marketplace', category: 'UI/UX', size: 'medium' as const },
    { image: '/portfolio/11.jpg', title: 'Top List Artist', category: 'Web Design', size: 'medium' as const },
    { image: '/portfolio/12.jpg', title: 'Investment Platform', category: 'Finance', size: 'medium' as const },
    { image: '/portfolio/13.jpg', title: 'All Time Sports', category: 'Dashboard', size: 'medium' as const },
    { image: '/portfolio/14.jpg', title: 'Healthcare Platform', category: 'Medical', size: 'medium' as const },
    { image: '/portfolio/15.jpg', title: 'Finance Experts', category: 'Corporate', size: 'medium' as const },
    { image: '/portfolio/16.jpg', title: 'Basketball News', category: 'Sports', size: 'medium' as const },
    { image: '/portfolio/17.jpg', title: 'Evolution Mini', category: 'Gaming', size: 'medium' as const },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.05),transparent_50%)]"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Our Latest Works</h2>
            <p className="text-slate-400 max-w-xl text-sm md:text-base lg:text-lg">
              Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business
            </p>
          </div>

        </div>

        {/* Portfolio Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>

        {/* Portfolio Carousel - Mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <PortfolioItem {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {portfolioItems.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-purple-600' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium text-sm md:text-base rounded-full hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2">
            View All Projects
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
