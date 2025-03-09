import { useLocation } from 'react-router-dom';
import { NavbarLogo } from './navbar-logo.comp';
import { NavbarAvatar } from './navbar-avatar.comp';
import { getPageName } from '@/utils';
import { MenuIcon } from '@/assets/icons/menu.icon';

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { pathname } = useLocation();
  const pageName = getPageName(pathname);

  return (
    <nav className="fixed top-0 right-0 left-0 z-45 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-4">
        {/* Mobile: Menu Button and Page Name / Desktop: Logo */}
        <div className="flex items-center gap-3 md:block">
          <button
            onClick={onMenuClick}
            className="block rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <div className="md:hidden">
            <span className="text-xl font-semibold text-gray-800">{pageName}</span>
          </div>
          <div className="hidden md:block">
            <NavbarLogo />
          </div>
        </div>

        {/* Right side items - Avatar only visible on desktop */}
        <div className="hidden md:block">
          <NavbarAvatar />
        </div>
      </div>
    </nav>
  );
};
