import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Main pages
import DashboardPage from './pages/dashboard.page';
import TransactionsPage from './pages/transactions.page';
import WalletsPage from './pages/wallets.page';
import CategoriesPage from './pages/categories.page';
import BudgetsPage from './pages/budgets.page';
import GoalsPage from './pages/goals.page';
import TransactionFormPage from './pages/transaction.form';

// Auth pages
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import ForgotPasswordPage from './pages/auth/forgot-password.page';
import ResetPasswordPage from './pages/auth/reset-password.page';

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
