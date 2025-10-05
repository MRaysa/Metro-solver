import React from 'react';
import { Card } from '../ui/Card';

export const QuestionsCard: React.FC = () => {
  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', href: '#' },
    { icon: '📘', name: 'Facebook', href: '#' },
    { icon: '📷', name: 'Instagram', href: '#' },
    { icon: '🐦', name: 'Twitter', href: '#' },
    { icon: '📧', name: 'Email', href: '#' },
    { icon: '📱', name: 'TikTok', href: '#' },
  ];

  return (
    <Card className="p-12 flex flex-col items-center justify-center gap-8 min-h-[500px]">
      <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <div className="text-center">
        <h2 className="text-white text-4xl font-bold mb-2">Still Have</h2>
        <h2 className="text-white text-4xl font-bold">A Questions?</h2>
      </div>

      <div className="flex items-center gap-4 flex-wrap justify-center">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            className="w-12 h-12 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label={social.name}
          >
            <span className="text-xl">{social.icon}</span>
          </a>
        ))}
      </div>
    </Card>
  );
};
