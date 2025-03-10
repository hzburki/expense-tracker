import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CloseButtonProps {
  to?: string;
  size?: 'sm' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const CloseButton = ({ to, size = 'lg', onClick, className = '' }: CloseButtonProps) => {
  const sizeClasses = {
    sm: {
      button: 'h-10 w-10',
      icon: 'h-6 w-6',
    },
    lg: {
      button: 'h-14 w-14',
      icon: 'h-10 w-10',
    },
  };

  const commonClasses =
    'flex items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-all hover:bg-gray-50 active:bg-gray-100';

  if (to) {
    return (
      <Link to={to} className={`${commonClasses} ${sizeClasses[size].button} ${className}`}>
        <X className={`${sizeClasses[size].icon} text-gray-700`} />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${commonClasses} ${sizeClasses[size].button} ${className}`}
    >
      <X className={`${sizeClasses[size].icon} text-gray-700`} />
    </button>
  );
};
