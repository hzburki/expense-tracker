import { cn } from '@/utils';
import { Button } from './button.ui';
import type { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<typeof Button> {
  className?: string;
  type?: ComponentProps<'button'>['type'];
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'link';
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}) => {
  return (
    <Button
      {...props}
      className={cn(
        variant !== 'link' ? 'cursor-pointer !rounded-full !p-2' : 'cursor-pointer',
        className
      )}
      type={type}
      variant={variant}
    >
      {children}
    </Button>
  );
};
