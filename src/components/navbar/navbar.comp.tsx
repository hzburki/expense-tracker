import { useLocation } from 'react-router-dom';
import { NavbarLogo } from './navbar-logo.comp';
import { NavbarAvatar } from './navbar-avatar.comp';
import { getPageName } from '@/utils';

export const Navbar = () => {
  const { pathname } = useLocation();
  const pageName = getPageName(pathname);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-4">
        {/* Mobile: Page Name / Desktop: Logo */}
        <div className="md:hidden">
          <span className="text-xl font-semibold text-gray-800">{pageName}</span>
        </div>
        <div className="hidden md:block">
          <NavbarLogo />
        </div>

        {/* Right side items - Avatar only visible on desktop */}
        <div className="hidden md:block">
          <NavbarAvatar />
        </div>
      </div>
    </nav>
  );
};
