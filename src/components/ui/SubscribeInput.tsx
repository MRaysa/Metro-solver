'use client';

import React, { useState } from 'react';
import { Button } from './Button';

interface SubscribeInputProps {
  variant?: 'primary' | 'secondary';
  placeholder?: string;
}

export const SubscribeInput: React.FC<SubscribeInputProps> = ({
  variant = 'primary',
  placeholder = 'Enter your email',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setStatus('success');
      // Handle subscription logic here
    } else {
      setStatus('error');
    }
  };

  const inputStyles = {
    idle: 'border-slate-700 focus:border-purple-500',
    success: 'border-green-500 focus:border-green-400',
    error: 'border-red-500 focus:border-red-400',
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus('idle');
            }}
            placeholder={placeholder}
            className={`w-full px-4 py-3 bg-slate-800/50 border-2 rounded-lg text-white placeholder:text-slate-500 outline-none transition-all duration-200 ${inputStyles[status]}`}
          />
          {status === 'success' && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={handleSubmit}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          }
        >
          Subscribe
        </Button>
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm">Please enter a valid email address</p>
      )}
      {status === 'success' && (
        <p className="text-green-400 text-sm">Successfully subscribed!</p>
      )}
    </div>
  );
};
