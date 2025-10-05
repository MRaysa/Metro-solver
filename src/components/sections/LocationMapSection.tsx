'use client';

import { MapPin, Phone, FileText } from 'lucide-react';

export default function LocationMapSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0a0520] via-[#1a0f3a] to-[#0a0520]">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
          {/* Google Maps Embed */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1234567890!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale brightness-75"
            ></iframe>

            {/* Company Info Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl z-10">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <h3 className="text-white font-semibold text-lg">Metro solver</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p className="font-medium">Head office: Metro Solver Limited Grantham</p>
                    <p>Road, London E12 5LX, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <p className="text-sm text-gray-300">1447956455446</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <p className="text-sm text-gray-300">14474648502205</p>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <p className="text-sm text-gray-300">02046484</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
