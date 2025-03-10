import { CircleCheck, CircleX } from 'lucide-react';
import { cn } from '@/utils';

interface AlertProps {
  variant: 'success' | 'danger';
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Alert = ({ variant, title, children, className }: AlertProps) => {
  const variants = {
    success: {
      container: 'border-green-200 bg-green-50',
      icon: 'text-green-800',
      title: 'text-green-800',
      content: 'text-green-700',
    },
    danger: {
      container: 'border-red-200 bg-red-50',
      icon: 'text-red-800',
      title: 'text-red-800',
      content: 'text-red-700',
    },
  };

  const Icon = variant === 'success' ? CircleCheck : CircleX;

  return (
    <div className={cn('rounded-lg border p-4', variants[variant].container, className)}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={cn('h-5 w-5', variants[variant].icon)} />
        </div>
        <div className="ml-3">
          <h3 className={cn('text-base leading-5 font-medium', variants[variant].title)}>
            {title}
          </h3>
          <div className={cn('mt-2 text-sm', variants[variant].content)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
