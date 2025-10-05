import React from 'react';
import { BlogCard } from './BlogCard';
import { Button } from '../ui/Button';

const blogData = [
  {
    title: 'The Future of Metro Systems by Company',
    description: 'Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.',
    image: '/images/blog-1.jpg',
    views: '524k Views',
    ctr: '39% Lower CTA',
    sales: '$24+ Sales Generated',
  },
  {
    title: 'The Future of Metro Systems by Company',
    description: 'Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.',
    image: '/images/blog-2.jpg',
    views: '524k Views',
    ctr: '39% Lower CTA',
    sales: '$24+ Sales Generated',
  },
  {
    title: 'The Future of Metro Systems by Company',
    description: 'Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.',
    image: '/images/blog-3.jpg',
    views: '524k Views',
    ctr: '39% Lower CTA',
    sales: '$24+ Sales Generated',
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Success Stories,
            <br />
            Case Studies & Blog
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore a quick introduction to your metro solver company. Highlight your mission, core expertise,
            and what makes your approach unique in helping others.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button variant="primary" size="md">Success Stories</Button>
          <Button variant="text" size="md">Case Studies</Button>
          <Button variant="text" size="md">Blogs of News</Button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <BlogCard key={index} {...blog} variant={index === 1 ? 'gradient' : 'default'} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Button variant="primary" size="lg">View More</Button>
        </div>
      </div>
    </section>
  );
};
