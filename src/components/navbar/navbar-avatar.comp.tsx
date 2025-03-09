import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from '@/components/ui';
import { ProfileIcon, LogoutIcon } from '@/assets/icons';
import { NavbarTrigger } from './navbar-trigger.comp';

const dropdownItems = [
  {
    type: 'link',
    label: 'Profile',
    to: '/profile',
    icon: <ProfileIcon className="mr-2 h-4 w-4" />,
  },
  {
    type: 'button',
    label: 'Logout',
    icon: <LogoutIcon className="mr-2 h-4 w-4" />,
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
          <DropdownItem key={index} onClick={() => setIsOpen(false)}>
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
