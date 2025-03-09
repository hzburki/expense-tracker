import { Link } from 'react-router-dom';
import { Avatar } from '@/components/ui';

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

interface SideMenuProps {
  userName?: string;
  avatarUrl?: string;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: '📊' },
  { label: 'Expenses', path: '/expenses', icon: '💰' },
  { label: 'Categories', path: '/categories', icon: '🏷️' },
  { label: 'Reports', path: '/reports', icon: '📈' },
  { label: 'Settings', path: '/settings', icon: '⚙️' },
];

export const SideMenu = ({ userName = 'John Doe', avatarUrl }: SideMenuProps) => {
  return (
    <aside className="h-full w-[80vw] border-r border-gray-200 bg-white md:w-64">
      {/* Profile Section - Only visible on mobile */}
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-6 md:hidden">
        <div className="flex flex-col items-center">
          <Avatar src={avatarUrl} alt={userName} size="lg" className="mb-3" />
          <span className="text-lg font-medium text-gray-900">{userName}</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <span className="mr-3">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};
