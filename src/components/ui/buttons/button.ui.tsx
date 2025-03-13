import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'rounded-xl font-medium cursor-pointer transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-transparent',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 border border-transparent',
    outline: 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-600',
    danger: 'bg-red-600 text-white hover:bg-red-700 border border-transparent',
    link: 'bg-transparent text-blue-600 hover:text-blue-700 border-none p-0',
  };

  const sizes = {
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3.5 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <button
      className={`${variant !== 'link' ? baseStyles : ''} ${variants[variant]} ${variant !== 'link' ? sizes[size] : ''} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <span className="ml-2">{typeof children === 'string' ? 'Loading...' : children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
