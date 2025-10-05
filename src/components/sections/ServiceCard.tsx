import React from 'react';
import { Card } from '../ui/Card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'gradient';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
}) => {
  return (
    <Card variant={variant} hover className="p-8 flex flex-col gap-4">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl flex items-center justify-center border-2 border-purple-500/30">
        {icon}
      </div>

      <h3 className="text-white font-bold text-xl">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

      <button className="text-purple-500 font-medium flex items-center gap-2 mt-2 hover:gap-3 transition-all">
        Read More
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </Card>
  );
};
