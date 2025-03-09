import { Link } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: '📊' },
  { label: 'Expenses', path: '/expenses', icon: '💰' },
  { label: 'Categories', path: '/categories', icon: '🏷️' },
  { label: 'Reports', path: '/reports', icon: '📈' },
  { label: 'Settings', path: '/settings', icon: '⚙️' },
];

export const SideMenu = () => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white">
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
