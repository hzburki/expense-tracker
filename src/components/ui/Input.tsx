import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
  ...props
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-darkGray mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className={`w-full rounded-xl border px-3 py-2 focus:ring-2 focus:outline-none ${
          error ? 'border-accent focus:ring-accent/20' : 'border-lightGray focus:ring-primary/20'
        }`}
        {...register(name)}
        {...props}
      />
      {error && <p className="text-accent mt-1 text-sm">{error}</p>}
    </div>
  );
};
