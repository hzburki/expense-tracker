import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const InputField = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = 'text',
  placeholder = '',
  className = '',
  ...props
}: InputFieldProps<T>) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`h-10 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 placeholder:text-gray-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
