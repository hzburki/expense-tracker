import { ReactNode, useRef, useEffect } from 'react';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  triggerButton: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const Dropdown = ({
  isOpen,
  onClose,
  triggerButton,
  children,
  align = 'right',
  className = '',
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      {triggerButton}

      {isOpen && (
        <div
          className={`absolute mt-2 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const DropdownItem = ({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <button
    className={`block w-full cursor-pointer px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
