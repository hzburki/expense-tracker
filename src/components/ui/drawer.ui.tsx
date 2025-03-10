import { type ReactNode } from 'react';
import { CloseButton } from '@/components/ui';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'left' | 'right';
}

export const Drawer = ({ isOpen, onClose, children, position = 'left' }: DrawerProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-150 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 z-50 w-[80vw] transform bg-white transition-transform duration-200 ease-out ${
          position === 'left' ? 'left-0' : 'right-0'
        } ${isOpen ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <CloseButton size="sm" onClick={onClose} />
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </>
  );
};
