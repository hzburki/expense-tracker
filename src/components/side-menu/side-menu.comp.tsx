import { Link, useLocation } from 'react-router-dom';
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
  TagIcon,
  CurrencyIcon,
  LabelIcon,
} from '@/assets/icons';

interface MenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

interface SideMenuProps {
  userName?: string;
  avatarUrl?: string;
}

const menuSections: MenuSection[] = [
  {
    items: [
      {
        label: 'Dashboard',
        path: '/',
        icon: <DashboardIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Accounts',
        path: '/accounts',
        icon: <AccountsIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Expenses',
        path: '/expenses',
        icon: <ExpensesIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Analytics',
        path: '/analytics',
        icon: <AnalyticsIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Goals',
        path: '/goals',
        icon: <ReportsIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Budgets',
        path: '/budgets',
        icon: <BudgetsIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Imports',
        path: '/imports',
        icon: <ImportsIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        label: 'Categories',
        path: '/categories',
        icon: <TagIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Templates',
        path: '/templates',
        icon: <TemplatesIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Currencies',
        path: '/currencies',
        icon: <CurrencyIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
      {
        label: 'Labels',
        path: '/labels',
        icon: <LabelIcon className="h-7 w-7 md:h-5 md:w-5" />,
      },
    ],
  },
];

export const SideMenu = ({ userName, avatarUrl }: SideMenuProps) => {
  const location = useLocation();

  return (
    <aside className="h-full w-[80vw] border-r border-gray-200 bg-white md:w-64">
      <Profile userName={userName} avatarUrl={avatarUrl} />

      {/* Menu Items */}
      <div className="p-4">
        <nav className="space-y-6">
          {menuSections.map((section, index) => (
            <div key={index}>
              {index > 0 && <div className="mb-6 border-t border-gray-200" />}
              <div className="space-y-3 md:space-y-1">
                {section.title && (
                  <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase">
                    {section.title}
                  </h3>
                )}

                {section.items.map(item => {
                  const isActive =
                    location.pathname === item.path ||
                    (item.path !== '/' && location.pathname.startsWith(item.path));

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center rounded-lg px-4 py-4 text-lg transition-all duration-200 md:px-4 md:py-3 md:text-sm ${
                        isActive
                          ? 'bg-blue-100 font-semibold text-blue-700 shadow-sm ring-1 ring-blue-400/20'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`mr-4 md:mr-3 ${isActive ? 'text-blue-600' : ''}`}>
                        {item.icon}
                      </span>
                      <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
