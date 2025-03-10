import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarTrigger } from './navbar-trigger.comp';
import { Dropdown, DropdownItem } from '@/components/ui';
import { CircleUserRound, LogOut } from 'lucide-react';

const dropdownItems = [
  {
    type: 'link',
    label: 'Profile',
    to: '/profile',
    icon: <CircleUserRound className="mr-2 h-4 w-4" />,
  },
  {
    type: 'button',
    label: 'Logout',
    icon: <LogOut className="mr-2 h-4 w-4 text-red-500" />,
    className: 'text-red-600 hover:bg-red-50',
  },
];

export const NavbarAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={<NavbarTrigger onClick={() => setIsOpen(!isOpen)} userName="John Doe" />}
    >
      {dropdownItems.map((item, index) =>
        item.type === 'link' ? (
          <Link key={index} to={item.to || ''}>
            <DropdownItem>
              <span className="flex items-center">
                {item.icon}
                {item.label}
              </span>
            </DropdownItem>
          </Link>
        ) : (
          <DropdownItem key={index} onClick={() => setIsOpen(false)} className={item.className}>
            <span className="flex items-center">
              {item.icon}
              {item.label}
            </span>
          </DropdownItem>
        )
      )}
    </Dropdown>
  );
};
