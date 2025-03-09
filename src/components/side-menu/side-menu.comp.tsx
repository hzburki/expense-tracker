import { Link } from 'react-router-dom';
import { Profile } from './profile.comp';
import {
  DashboardIcon,
  AccountsIcon,
  ExpensesIcon,
  AnalyticsIcon,
  ImportsIcon,
  ReportsIcon,
  BudgetsIcon,
  TemplatesIcon,
} from '@/assets/icons';

interface MenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface SideMenuProps {
  userName?: string;
  avatarUrl?: string;
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <DashboardIcon className="h-5 w-5" />,
  },
  {
    label: 'Accounts',
    path: '/accounts',
    icon: <AccountsIcon className="h-5 w-5" />,
  },
  {
    label: 'Expenses',
    path: '/expenses',
    icon: <ExpensesIcon className="h-5 w-5" />,
  },
  {
    label: 'Analytics',
    path: '/analytics',
    icon: <AnalyticsIcon className="h-5 w-5" />,
  },
  {
    label: 'Goals',
    path: '/goals',
    icon: <ReportsIcon className="h-5 w-5" />,
  },
  {
    label: 'Budgets',
    path: '/budgets',
    icon: <BudgetsIcon className="h-5 w-5" />,
  },
  {
    label: 'Templates',
    path: '/templates',
    icon: <TemplatesIcon className="h-5 w-5" />,
  },
  {
    label: 'Imports',
    path: '/imports',
    icon: <ImportsIcon className="h-5 w-5" />,
  },
];

export const SideMenu = ({ userName, avatarUrl }: SideMenuProps) => {
  return (
    <aside className="h-full w-[80vw] border-r border-gray-200 bg-white md:w-64">
      <Profile userName={userName} avatarUrl={avatarUrl} />

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
