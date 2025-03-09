import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'small' | 'normal' | 'large';
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'normal',
  className = '',
  ...props
}) => {
  const paddingStyles = {
    none: '',
    small: 'p-4',
    normal: 'p-8',
    large: 'p-12',
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
