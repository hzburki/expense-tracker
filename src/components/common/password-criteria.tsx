import React from 'react';
import { cn } from '@/utils';

interface PasswordCriteriaProps {
  password: string;
  className?: string;
  isVisible: boolean;
}

interface CriteriaItem {
  label: string;
  test: (password: string) => boolean;
}

const criteria: CriteriaItem[] = [
  {
    label: 'At least 8 characters',
    test: password => password.length >= 8,
  },
  {
    label: 'At least one number',
    test: password => /\d/.test(password),
  },
  {
    label: 'At least one capital letter',
    test: password => /[A-Z]/.test(password),
  },
  {
    label: 'At least one special character',
    test: password => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
];

export const PasswordCriteria: React.FC<PasswordCriteriaProps> = ({
  password,
  className,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white p-4 shadow-lg',
        className
      )}
    >
      <div className="space-y-2">
        {criteria.map((item, index) => {
          const criteriaPassed = item.test(password);
          return (
            <div key={index} className="flex items-center space-x-2">
              <div
                className={cn(
                  'h-2 w-2 rounded-full',
                  criteriaPassed ? 'bg-green-500' : 'bg-gray-300'
                )}
              />
              <span className={cn('text-sm', criteriaPassed ? 'text-green-500' : 'text-gray-500')}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
