import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends RouterLinkProps {
  variant?: 'default' | 'button';
  size?: 'sm' | 'md' | 'lg';
}

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'font-medium text-blue-600 transition-colors hover:text-blue-800',
    button:
      'inline-flex items-center justify-center rounded-xl bg-blue-600 font-medium text-white transition-colors hover:bg-blue-700',
  };

  const sizes = {
    sm: variant === 'button' ? 'px-3 py-2 text-sm' : 'text-sm',
    md: variant === 'button' ? 'px-4 py-2' : 'text-base',
    lg: variant === 'button' ? 'px-6 py-3 text-lg' : 'text-lg',
  };

  return (
    <RouterLink className={`${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </RouterLink>
  );
};
