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
      className={`rounded-2xl bg-white shadow-xl ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
