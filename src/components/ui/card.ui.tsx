import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'small' | 'normal' | 'large';
  overflow?: 'hidden' | 'visible';
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'normal',
  overflow = 'hidden',
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
      className={`rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 ${overflow === 'hidden' ? 'overflow-hidden' : 'overflow-visible'} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
