"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

const testimonials = [
  {
    id: 1,
    name: "Katie Allman",
    role: "Founder of Shero's",
    image: "/avatars/katie.jpg",
    review:
      "We've become 20X What we've to be in just a few clicks. It's time to be taking everything. We've also saved so much time with features over the last few years, I just wish we had Metro Solver from the start.",
    platform: "Google",
    icon: FaGoogle,
    rating: 5,
    color: "bg-yellow-500",
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Founder of Shero's",
    image: "/avatars/wade.jpg",
    review:
      "Using Trustpilot with Metro Solver has given me the tools and insights I needed to grow my business and get new clients. The metrics and analytics are second to none.",
    platform: "Trustpilot",
    icon: SiTrustpilot,
    rating: 5,
    color: "bg-cyan-500",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Founder of Shero's",
    image: "/avatars/jenny.jpg",
    review:
      "Metro Solver took Metro from an idea to a real business in 20 minutes. Having already worked with them and already launched our product, we can't recommend them enough!",
    platform: "Google",
    icon: FaGoogle,
    rating: 5,
    color: "bg-yellow-500",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1a0b2e] to-[#2d1b4e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Owned by the distribution of icons within what the design provided here is to have positive feedback from to happy clients.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <div
                  key={testimonial.id}
                  className={`bg-gradient-to-br ${
                    index === 1
                      ? "from-purple-900/50 to-purple-800/30 border-2 border-purple-500/50"
                      : "from-purple-900/30 to-purple-800/20"
                  } rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105`}
                >
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {testimonial.review}
                  </p>

                  {/* Platform Badge */}
                  <div className="flex items-center gap-2">
                    <Icon
                      className={`w-5 h-5 ${
                        index === 1 ? "text-cyan-400" : "text-yellow-400"
                      }`}
                    />
                    <span className="text-gray-400 text-sm">
                      {testimonial.platform}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-700/50 flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-700/50 flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
