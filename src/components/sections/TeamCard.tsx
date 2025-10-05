import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/Card';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  verified?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  verified = false,
}) => {
  return (
    <Card variant="gradient" hover className="p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/50">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          {verified && (
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-4 border-slate-900">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div className="text-center">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-purple-400 text-sm">{role}</p>
        </div>
      </div>
    </Card>
  );
};
