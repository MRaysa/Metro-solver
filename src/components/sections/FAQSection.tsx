'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer in digital marketing?',
    answer: 'We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.',
  },
  {
    question: 'How can digital marketing help my business?',
    answer: 'Digital marketing helps increase your online visibility, attract more customers, improve brand awareness, and drive measurable results through targeted campaigns.',
  },
  {
    question: 'How do you measure campaign success?',
    answer: 'We track key performance indicators (KPIs) such as conversion rates, ROI, traffic growth, engagement metrics, and other relevant data to measure campaign effectiveness.',
  },
  {
    question: 'Do you offer local SEO?',
    answer: 'Yes, we specialize in local SEO services to help your business rank higher in local search results and attract customers in your geographic area.',
  },
];

const categories = [
  'Digital Marketing',
  'Web & Software Development',
  'Graphic Design & Logo',
  'Multimedia & Video Editing',
  'Creative Writing Solutions',
  'E-Commerce Solutions',
  'Refund, Earn & Cancel Policies',
  'Getting Started & General Info',
  'General Policies & Customer Support',
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('Digital Marketing');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0a0520] via-[#1a0f3a] to-[#0a0520]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Categories */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Got Questions?</span>
              <br />
              <span className="text-white">We&apos;ve got Answers</span>
            </h2>

            <div className="space-y-3 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeCategory === category
                      ? 'text-orange-500'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <span className="mr-3 text-sm">
                    {activeCategory === category ? '●' : '○'}
                  </span>
                  <span className="text-sm">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-purple-950/20 backdrop-blur-sm border border-purple-800/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-900/10 transition-colors"
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
