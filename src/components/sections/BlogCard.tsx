import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/Card';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  views: string;
  ctr: string;
  sales: string;
  variant?: 'default' | 'gradient';
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  views,
  ctr,
  sales,
  variant = 'default',
}) => {
  return (
    <Card variant={variant} hover className="p-6 flex flex-col gap-4">
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-white font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2">{description}</p>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>{views}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span>{ctr}</span>
        </div>
      </div>

      <div className="text-slate-300 font-semibold">{sales}</div>
    </Card>
  );
};
