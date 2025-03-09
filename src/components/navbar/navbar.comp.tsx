import { NavbarLogo } from './navbar-logo.comp';
import { NavbarAvatar } from './navbar-avatar.comp';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-4">
        {/* Logo/Brand */}
        <NavbarLogo />

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          <NavbarAvatar />
        </div>
      </div>
    </nav>
  );
};
