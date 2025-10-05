import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { label: 'Home', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Our Culture', href: '#' },
      { label: 'Hire Traffics', href: '#' },
      { label: 'Work Catalog', href: '#' },
    ],
    connect: [
      { label: 'For Brands', href: '#' },
      { label: 'Career', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    aboutUs: [
      { label: 'Help Center', href: '#' },
      { label: 'Social Commerce', href: '#' },
      { label: 'Terms and Conditions', href: '#' },
      { label: 'New Brands', href: '#' },
    ],
    services: [
      { label: 'Digital Marketing', href: '#' },
      { label: 'Cookies Management', href: '#' },
      { label: 'Growth Strategy', href: '#' },
      { label: 'E-Commerce Services', href: '#' },
      { label: 'Product Optimization', href: '#' },
      { label: 'Social Commerce', href: '#' },
      { label: 'Brand Partnership', href: '#' },
      { label: 'Social Grader', href: '#' },
    ],
  };

  const partnerLogos = [
    { name: 'Polaris', logo: '/images/polaris.svg' },
    { name: 'GHD', logo: '/images/ghd.svg' },
    { name: 'Microsoft', logo: '/images/microsoft.svg' },
    { name: 'Red Partner', logo: '/images/red-partner.svg' },
    { name: 'Amazon', logo: '/images/amazon.svg' },
    { name: 'TikTok', logo: '/images/tiktok.svg' },
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 pb-16 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">METRO SOLVER</h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-lg font-semibold">Subscribe to Our Newsletter</h4>
            <p className="text-slate-400 text-sm">Stay Up-to-date! Let's get to a new company!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 bg-slate-800/50 border-2 border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-purple-500 outline-none min-w-[300px]"
              />
              <Button variant="primary" size="md">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-purple-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Connect</h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.connect.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-purple-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">About Us</h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.aboutUs.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-purple-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Services</h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-purple-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-12 pb-12 border-b border-slate-800">
          <h5 className="text-white font-bold mb-4">Got Questions? Call us !</h5>
          <div className="flex flex-col gap-2 text-slate-300">
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (You can dig this phone number to direct)
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@yourcompany.com
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              +44 987654321
            </p>
          </div>

          <div className="mt-6">
            <p className="text-white font-semibold mb-3">Choose Currency</p>
            <select className="px-4 py-2 bg-slate-800/50 border-2 border-slate-700 rounded-lg text-white focus:border-purple-500 outline-none">
              <option>🇺🇸 USD - US Dollar</option>
              <option>🇬🇧 GBP - British Pound</option>
              <option>🇨🇦 CAD - Canadian Dollar</option>
              <option>🇦🇺 AUD - Australian Dollar</option>
            </select>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {partnerLogos.map((partner, idx) => (
              <div key={idx} className="text-slate-400 font-semibold">
                {partner.name}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © Metro Solver. All rights reserved 2025 | Privacy Policy | Support | Careers Inquiry | Terms of Service by EcoTech 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
