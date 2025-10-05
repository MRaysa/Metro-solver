'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('GBP - British Pound');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currencies = [
    { value: 'USD - US Dollar', flag: 'US' },
    { value: 'GBP - British Pound', flag: 'GB' },
    { value: 'CAD - Canadian Dollar', flag: 'CA' },
    { value: 'AUD - Australian Dollar', flag: 'AU' },
    { value: 'NZD - New Zealand Dollar', flag: 'NZ' },
    { value: 'EUR - Euro', flag: 'EU' },
    { value: 'SGD - Singapore Dollar', flag: 'SG' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
  };

  return (
    <footer className="bg-[#0A0A1B] text-white pt-16 pb-8">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                    <path d="M10 20L20 10L30 20M10 30L20 20L30 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">METRO SOLVER</div>
                  <div className="text-xs text-slate-400">your it partner</div>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-slate-400 text-sm mb-4">Join the 25000+ client, in our company</p>

              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 pr-32 rounded-full bg-white/10 border border-slate-700 focus:border-purple-500 focus:outline-none text-white placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2"
                >
                  <span className="text-lg">✨</span> Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6">Got Questions?<br />Call us !</h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-500 mt-1 flex-shrink-0" />
                <p>Head office: Metro Solver Limited<br />Grantham Road, London E12<br />5LX, United Kingdom</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-500 flex-shrink-0" />
                <p>+44/9756 455446</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500 flex-shrink-0" />
                <p>official@metrosolver.com</p>
              </div>
            </div>

            {/* Currency Dropdown */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Country Currency</h5>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-white text-left flex items-center justify-between hover:border-purple-500 transition-all duration-200 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-4 bg-slate-600 rounded"></span>
                    {selectedCurrency}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl max-h-64 overflow-auto">
                    {currencies.map((currency) => (
                      <button
                        key={currency.value}
                        onClick={() => {
                          setSelectedCurrency(currency.value);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left hover:bg-purple-600/20 transition-colors flex items-center gap-2 text-white text-sm"
                      >
                        <span className="w-6 h-4 bg-slate-600 rounded text-xs text-center">{currency.flag}</span>
                        {currency.value}
                        {selectedCurrency === currency.value && (
                          <svg className="w-4 h-4 ml-auto text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">User Profile</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">White Labelling</a></li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Our Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Send Message</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Start Earning</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Creative Writing Solution</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Web & Software Development</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">E-Commerce Solution</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Graphic Design</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Multimedia & Video Editing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Merchandise</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Premium Website</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Premium Domains</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Special Combo</a></li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-12">
          <h5 className="text-sm text-slate-500 mb-6">Our Future Partners</h5>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-blue-500 font-bold text-lg">meta</div>
              <div className="text-xs text-slate-400">Business Partner</div>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-black">G</span>
              </div>
              <div className="text-xs">
                <div className="font-semibold">Google Marketing Platform</div>
                <div className="text-slate-400">Sales Partner</div>
              </div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded"></div>
                <div className="font-semibold">Microsoft</div>
              </div>
              <div className="text-xs text-slate-400">Partner</div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="bg-slate-800 px-4 py-2 rounded">
                <div className="text-orange-500 font-bold">AWS</div>
                <div className="text-xs text-slate-400">Partner</div>
              </div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Google</div>
                  <div className="text-slate-400">Partner</div>
                </div>
              </div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="text-lg font-bold">amazon</div>
                <div className="text-xs text-orange-500">spn</div>
              </div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full"></div>
                <div className="text-xs">
                  <div className="font-semibold">TikTok</div>
                  <div className="text-slate-400">Marketing Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© Metro Solver. All Rights Reserved 2024</p>
          <p>Metro Solver Ltd incorporated in England & Wales Registration No: 15792819</p>
        </div>
      </div>
    </footer>
  );
};
