"use client";

import { useState } from "react";
import Image from "next/image";

const contentData = {
  successStories: [
    {
      id: 1,
      title: "The Future of Metro Systems by Company",
      description:
        "Discover how modern metro systems are transforming urban transportation with cutting-edge technology and sustainable practices.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      author: {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      stats: [
        { label: "Clients Served", value: "350+" },
        { label: "Success Rate", value: "98%" },
      ],
    },
    {
      id: 2,
      title: "The Future of Metro Systems by Company",
      description:
        "Discover how modern metro systems are transforming urban transportation with cutting-edge technology and sustainable practices.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      author: {
        name: "Jane Smith",
        avatar: "https://i.pravatar.cc/150?img=45",
      },
      stats: [
        { label: "Clients Served", value: "350+" },
        { label: "Success Rate", value: "98%" },
      ],
    },
    {
      id: 3,
      title: "The Future of Metro Systems by Company",
      description:
        "Discover how modern metro systems are transforming urban transportation with cutting-edge technology and sustainable practices.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      author: {
        name: "Mike Johnson",
        avatar: "https://i.pravatar.cc/150?img=33",
      },
      stats: [
        { label: "Clients Served", value: "350+" },
        { label: "Success Rate", value: "98%" },
      ],
    },
  ],
  caseStudies: [
    {
      id: 4,
      title: "Optimizing Metro Routes for Better Efficiency",
      description:
        "A comprehensive case study on how we helped reduce travel times by 30% through intelligent route optimization and real-time data analysis.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=300&fit=crop",
      author: {
        name: "Sarah Williams",
        avatar: "https://i.pravatar.cc/150?img=25",
      },
      stats: [
        { label: "Projects", value: "120+" },
        { label: "Efficiency Gain", value: "30%" },
      ],
    },
    {
      id: 5,
      title: "Smart Ticketing System Implementation",
      description:
        "Case study showcasing the implementation of a contactless payment system that increased passenger throughput by 40%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      author: {
        name: "David Chen",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      stats: [
        { label: "Users", value: "500K+" },
        { label: "Speed Up", value: "40%" },
      ],
    },
    {
      id: 6,
      title: "Predictive Maintenance for Metro Fleets",
      description:
        "How AI-powered predictive maintenance reduced downtime by 50% and saved millions in operational costs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      author: {
        name: "Emma Johnson",
        avatar: "https://i.pravatar.cc/150?img=44",
      },
      stats: [
        { label: "Downtime Cut", value: "50%" },
        { label: "Cost Saved", value: "$5M+" },
      ],
    },
  ],
  blogNews: [
    {
      id: 7,
      title: "Latest Trends in Urban Transportation 2025",
      description:
        "Explore the cutting-edge innovations shaping the future of metro systems worldwide, from autonomous trains to sustainable energy solutions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      author: {
        name: "Alex Martinez",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
      stats: [
        { label: "Read Time", value: "5 min" },
        { label: "Views", value: "12K+" },
      ],
    },
    {
      id: 8,
      title: "Sustainability in Metro Operations",
      description:
        "How metro systems are leading the charge in green transportation with solar power, energy recovery, and zero-emission vehicles.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      author: {
        name: "Lisa Anderson",
        avatar: "https://i.pravatar.cc/150?img=30",
      },
      stats: [
        { label: "Read Time", value: "7 min" },
        { label: "Views", value: "8.5K+" },
      ],
    },
    {
      id: 9,
      title: "Digital Transformation in Public Transit",
      description:
        "The role of IoT, big data, and mobile apps in creating smarter, more responsive metro systems for modern commuters.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      author: {
        name: "Ryan Foster",
        avatar: "https://i.pravatar.cc/150?img=52",
      },
      stats: [
        { label: "Read Time", value: "6 min" },
        { label: "Views", value: "15K+" },
      ],
    },
  ],
};

type TabType = "successStories" | "caseStudies" | "blogNews";

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("successStories");

  const currentContent = contentData[activeTab];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#2d1b4e] to-[#1a0b2e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Success Stories,
            <br />
            Case Studies & Blog
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Read the collection of icons within what the design provided here is to have positive feedback from to happy clients.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("successStories")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === "successStories"
                ? "bg-purple-600 text-white"
                : "bg-transparent text-gray-300 hover:bg-purple-900/30"
            }`}
          >
            Success Stories
          </button>
          <button
            onClick={() => setActiveTab("caseStudies")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === "caseStudies"
                ? "bg-purple-600 text-white"
                : "bg-transparent text-gray-300 hover:bg-purple-900/30"
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveTab("blogNews")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === "blogNews"
                ? "bg-purple-600 text-white"
                : "bg-transparent text-gray-300 hover:bg-purple-900/30"
            }`}
          >
            Blog/Hot News
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {currentContent.map((study, index) => (
            <div
              key={study.id}
              className={`rounded-3xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300 ${
                index === 1
                  ? "bg-gradient-to-br from-purple-700/50 to-purple-900/50 border-2 border-purple-500/50"
                  : "bg-gradient-to-br from-purple-900/30 to-purple-800/20"
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="flex gap-3 mb-4">
                  {study.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex-1 bg-purple-900/50 rounded-lg px-3 py-2 text-center"
                    >
                      <p className="text-purple-300 text-xs mb-1">{stat.label}</p>
                      <p className="text-white font-bold text-sm">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
