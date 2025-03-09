import { type ReactNode } from 'react';

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
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 z-50 w-64 transform bg-white transition-transform duration-300 ease-in-out ${
          position === 'left' ? 'left-0' : 'right-0'
        } ${isOpen ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'}`}
      >
        {children}
      </div>
    </>
  );
};
