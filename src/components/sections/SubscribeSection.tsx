import React from 'react';
import { SubscribeInput } from '../ui/SubscribeInput';

const subscribeData = [
  { email: 'Enter your email', status: 'default' },
  { email: 'hello@gmail.com', status: 'default' },
  { email: 'hello@', status: 'error' },
  { email: 'hello@hello@gmail', status: 'error' },
  { email: 'Enter your email', status: 'disabled' },
];

export const SubscribeSection: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Subscribe to Updates</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Stay informed about our latest features and updates
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        {subscribeData.map((item, idx) => (
          <SubscribeInput key={idx} placeholder={item.email} />
        ))}
      </div>
    </section>
  );
};
