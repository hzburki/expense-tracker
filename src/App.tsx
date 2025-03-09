import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Main pages
import {
  DashboardPage,
  ExpensesPage,
  AccountsPage,
  BudgetsPage,
  GoalsPage,
} from '@/pages/dashboard';
import { CategoriesPage } from '@/pages/settings';

// Auth pages
import { LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage } from './pages/auth';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/transactions',
    element: <ExpensesPage />,
  },
  {
    path: '/accounts',
    element: <AccountsPage />,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/budgets',
    element: <BudgetsPage />,
  },
  {
    path: '/goals',
    element: <GoalsPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
