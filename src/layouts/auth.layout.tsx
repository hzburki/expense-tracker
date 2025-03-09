import React from 'react';

interface AuthLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-gray-100 p-4 ${className}`}
      {...props}
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
};
