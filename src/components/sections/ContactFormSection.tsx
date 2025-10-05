"use client";

import { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaPaperPlane } from "react-icons/fa";

const services = [
  "Graphic Design",
  "Creative Writing Solution",
  "Multimedia & Video Editing",
  "Digital Marketing",
  "Creative Writing Solution",
];

export default function ContactFormSection() {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-[#0f0520]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Branding */}
          <div className="text-center md:text-left">
            {/* Logo */}
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="relative">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* M Logo Shape */}
                  <path
                    d="M20 70V30L35 50L50 30L65 50L80 30V70H70V45L65 52L50 35L35 52L30 45V70H20Z"
                    fill="url(#gradient1)"
                  />
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="20"
                      y1="30"
                      x2="80"
                      y2="70"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5B7FFF" />
                      <stop offset="1" stopColor="#3B5CFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Still Have
              <br />
              A Questions?
            </h2>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#2d1654] hover:bg-[#3d2164] flex items-center justify-center text-white transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#2d1654] hover:bg-[#3d2164] flex items-center justify-center text-white transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#2d1654] hover:bg-[#3d2164] flex items-center justify-center text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#2d1654] hover:bg-[#3d2164] flex items-center justify-center text-white transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#2d1654] hover:bg-[#3d2164] flex items-center justify-center text-white transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#2d1654] hover:bg-[#3d2164] flex items-center justify-center text-white transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#1a0d35] rounded-3xl p-8 border border-purple-900/20">
            <form className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 rounded-xl bg-[#2d1654] border border-purple-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 rounded-xl bg-[#2d1654] border border-purple-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp/Phone and Service Dropdown */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    WhatsApp/Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your number..."
                    className="w-full px-4 py-3 rounded-xl bg-[#2d1654] border border-purple-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                <div className="relative">
                  <label className="block text-white text-sm font-medium mb-2">
                    Which are You Looking for Support in?
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2d1654] border border-purple-800/30 text-left text-gray-500 focus:outline-none focus:border-purple-600 transition-colors flex items-center justify-between"
                  >
                    <span>{selectedService || "Choose services"}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-[#2d1654] border border-purple-800/30 rounded-xl shadow-xl overflow-hidden">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedService(service);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-white hover:bg-purple-700/30 transition-colors flex items-center justify-between"
                        >
                          <span>{service}</span>
                          {selectedService === service && (
                            <svg
                              className="w-5 h-5 text-purple-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  How Can We Help?
                </label>
                <textarea
                  rows={5}
                  placeholder="Message goes in here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#2d1654] border border-purple-800/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
