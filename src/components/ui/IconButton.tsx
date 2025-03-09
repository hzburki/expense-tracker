import { Button } from './Button';
import type { ComponentProps } from 'react';
import { cn } from '@/libs/utils';

interface IconButtonProps extends ComponentProps<typeof Button> {
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button {...props} className={cn('cursor-pointer !rounded-full !p-2', className)}>
      {children}
    </Button>
  );
};
