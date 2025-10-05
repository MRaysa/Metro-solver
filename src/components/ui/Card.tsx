import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = false,
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300';

  const variants = {
    default: 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50',
    gradient: 'bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-2 border-purple-500/50',
    outline: 'border-2 border-slate-700',
  };

  const hoverEffect = hover ? 'hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 cursor-pointer' : '';

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};
