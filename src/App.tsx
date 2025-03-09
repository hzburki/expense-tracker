import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Main pages
import { DashboardPage } from './pages/dashboard.page';
import { TransactionsPage } from './pages/transactions.page';
import { WalletsPage } from './pages/wallets.page';
import { CategoriesPage } from './pages/categories.page';
import { BudgetsPage } from './pages/budgets.page';
import { GoalsPage } from './pages/goals.page';
import { TransactionFormPage } from './pages/transaction.form';

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
    element: <TransactionsPage />,
  },
  {
    path: '/wallets',
    element: <WalletsPage />,
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
    path: '/transaction/new',
    element: <TransactionFormPage />,
  },
  {
    path: '/transaction/:id',
    element: <TransactionFormPage />,
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
