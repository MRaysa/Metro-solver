import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error = false,
  success = false,
  icon,
  className = '',
}) => {
  const baseStyles = 'w-full px-4 py-3 rounded-lg bg-slate-800/50 border-2 transition-all duration-200 outline-none text-white placeholder:text-slate-500';

  const stateStyles = error
    ? 'border-red-500 focus:border-red-400'
    : success
    ? 'border-green-500 focus:border-green-400'
    : 'border-slate-700 focus:border-purple-500';

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-sm font-medium text-slate-300">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseStyles} ${stateStyles} ${icon ? 'pr-12' : ''}`}
        />
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
