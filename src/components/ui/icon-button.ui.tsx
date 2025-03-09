import { Button } from './button.ui';
import type { ComponentProps } from 'react';
import { cn } from '@/utils';

interface IconButtonProps extends ComponentProps<typeof Button> {
  className?: string;
  type?: ComponentProps<'button'>['type'];
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  className,
  type = 'button',
  ...props
}) => {
  return (
    <Button {...props} className={cn('cursor-pointer !rounded-full !p-2', className)} type={type}>
      {children}
    </Button>
  );
};
