"use client";

import { FaChevronLeft, FaChevronRight, FaPlay, FaClock, FaCalendar } from "react-icons/fa";
import Image from "next/image";

const podcasts = [
  {
    id: 1,
    title: "How Brands Can Prepare for Black Friday & Christmas",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    duration: "30 Minute",
    date: "Mar 11, 2025",
  },
  {
    id: 2,
    title: "How Brands Can Prepare for Black Friday & Christmas",
    image: "https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=600&h=400&fit=crop",
    duration: "30 Minute",
    date: "Mar 11, 2025",
  },
];

export default function PodcastSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1a0b2e] to-[#2d1b4e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Did You Hear about
            <br />
            Our Podcast?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the development of Metro Solver, read the design provided here is to have positive feedback from to happy clients, so players.
          </p>
        </div>

        {/* Podcasts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-80">
                <Image
                  src={podcast.image}
                  alt={podcast.title}
                  fill
                  className="object-cover"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                {/* Duration Badge - Top Left */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaClock className="w-3 h-3 text-gray-700" />
                  <span className="text-sm font-medium text-gray-800">{podcast.duration}</span>
                </div>

                {/* Date Badge - Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaCalendar className="w-3 h-3 text-gray-700" />
                  <span className="text-sm font-medium text-gray-800">{podcast.date}</span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <FaPlay className="w-6 h-6 text-purple-600 ml-1" />
                  </button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h3 className="text-white text-xl font-bold">
                    {podcast.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button
            className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-700/50 flex items-center justify-center text-white transition-colors"
            aria-label="Previous podcast"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-700/50 flex items-center justify-center text-white transition-colors"
            aria-label="Next podcast"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
