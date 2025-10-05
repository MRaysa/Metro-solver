'use client';

import React, { useState } from 'react';

const topBarItems = [
  { label: 'Budget Friendly', icon: '💰' },
  { label: 'No. 1 in Europe', icon: '🏆' },
  { label: 'On your first order', badge: '30% OFF', icon: '🎁' },
  { label: 'For all products buy now get the offer', icon: '🛍️' },
  { label: 'User Friendly', icon: '👤' },
  { label: '24/7 Service', icon: '⏰' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-950 to-slate-900 border-b border-slate-800/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-center lg:justify-start h-10 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-8 text-xs whitespace-nowrap">
              {topBarItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-2.5 py-0.5 rounded-md text-xs font-bold uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-slate-950 via-purple-950/20 to-slate-950 backdrop-blur-md border-b border-purple-500/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-14 h-14 relative">
                <img
                  src="/Frame_1.gif"
                  alt="Metro Solver Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#"
                className="px-8 py-2.5 rounded-full border border-purple-500/60 bg-gradient-to-r from-purple-600/30 to-purple-700/30 text-white font-medium hover:from-purple-600/40 hover:to-purple-700/40 transition-all shadow-lg shadow-purple-500/20"
              >
                Home
              </a>
              <a
                href="#"
                className="px-5 py-2.5 text-slate-300 hover:text-white transition-colors font-medium"
              >
                About us
              </a>
              <div className="relative group">
                <button className="px-5 py-2.5 text-slate-300 hover:text-white transition-colors font-medium flex items-center gap-1.5">
                  Services
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <a
                href="#"
                className="px-5 py-2.5 text-slate-300 hover:text-white transition-colors font-medium"
              >
                White label
              </a>
              <a
                href="#"
                className="px-5 py-2.5 text-slate-300 hover:text-white transition-colors font-medium"
              >
                Contact us
              </a>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Shopping Cart */}
              <button className="relative text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* User Profile */}
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  onBlur={(e) => {
                    // Close dropdown when clicking outside
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setTimeout(() => setProfileDropdownOpen(false), 200);
                    }
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-purple-400">
                    <span className="text-white font-semibold">A</span>
                  </div>
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-slate-900 border-2 border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">
                    {/* User Info */}
                    <div className="p-4 bg-gradient-to-br from-purple-600/20 to-purple-900/20 border-b border-purple-500/20">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-2 border-purple-400">
                          <span className="text-white font-semibold">AF</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Albert Flores</h4>
                          <p className="text-slate-400 text-xs">albertflores@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 px-3 py-1.5 bg-purple-600 text-white text-xs rounded-lg font-medium hover:bg-purple-700 transition-colors">
                          Website
                        </button>
                        <button className="flex-1 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs rounded-lg font-medium hover:bg-slate-700 transition-colors">
                          Dashboard
                        </button>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-purple-600/20 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-sm">User Profile</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-purple-600/20 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Referrals</span>
                      </a>
                      <a href="#" className="flex items-center justify-between px-3 py-2.5 text-slate-300 hover:bg-purple-600/20 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                          </svg>
                          <span className="text-sm">Rewards</span>
                        </div>
                        <span className="px-2 py-0.5 bg-red-600 text-white text-xs rounded font-semibold">
                          LIVE NOW
                        </span>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-purple-600/20 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="text-sm">Log out</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Shopping Cart - Mobile */}
              <button className="relative text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Full Screen Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-slate-950 top-[168px]">
              <div className="flex flex-col h-full overflow-y-auto">
                <div className="flex flex-col gap-2 p-6">
                  <a
                    href="#"
                    className="px-4 py-3 bg-purple-600/20 border-2 border-purple-500/50 rounded-lg text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-slate-300 hover:bg-purple-600/10 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-slate-300 hover:bg-purple-600/10 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-slate-300 hover:bg-purple-600/10 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    White label
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-slate-300 hover:bg-purple-600/10 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact us
                  </a>

                  {/* Mobile Profile Section */}
                  <div className="mt-6 p-4 bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-2xl border border-purple-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-2 border-purple-400">
                        <span className="text-white font-semibold">AF</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Albert Flores</h4>
                        <p className="text-slate-400 text-xs">albertflores@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <button className="flex-1 px-3 py-1.5 bg-purple-600 text-white text-xs rounded-lg font-medium">
                        Website
                      </button>
                      <button className="flex-1 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs rounded-lg font-medium">
                        Dashboard
                      </button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <a href="#" className="px-3 py-2 text-slate-300 hover:bg-purple-600/20 rounded-lg text-sm">
                        User Profile
                      </a>
                      <a href="#" className="px-3 py-2 text-slate-300 hover:bg-purple-600/20 rounded-lg text-sm">
                        Referrals
                      </a>
                      <a href="#" className="px-3 py-2 text-slate-300 hover:bg-purple-600/20 rounded-lg text-sm flex items-center justify-between">
                        <span>Rewards</span>
                        <span className="px-2 py-0.5 bg-red-600 text-white text-xs rounded">LIVE NOW</span>
                      </a>
                      <a href="#" className="px-3 py-2 text-slate-300 hover:bg-purple-600/20 rounded-lg text-sm">
                        Log out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
