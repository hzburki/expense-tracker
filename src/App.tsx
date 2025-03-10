import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Main pages
import {
  DashboardPage,
  ExpensesPage,
  AccountsPage,
  BudgetsPage,
  ImportsPage,
  GoalsPage,
  AnalyticsPage,
} from '@/pages/dashboard';

// Settings pages
import { CategoriesPage, TemplatesPage, CurrenciesPage, LabelsPage } from '@/pages/settings';

// Full Screen pages
import { ProfilePage } from '@/pages/full-screen';

// Auth pages
import { LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage } from './pages/auth';
import { ManualEntryPage, RecieptUploadPage, VoiceNotePage } from './pages/transactions';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/expenses',
    element: <ExpensesPage />,
  },
  {
    path: '/accounts',
    element: <AccountsPage />,
  },
  {
    path: '/analytics',
    element: <AnalyticsPage />,
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
    path: '/imports',
    element: <ImportsPage />,
  },
  // Full Screen Route
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  // Settings Routes
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/templates',
    element: <TemplatesPage />,
  },
  {
    path: '/currencies',
    element: <CurrenciesPage />,
  },
  {
    path: '/labels',
    element: <LabelsPage />,
  },
  // Auth Routes
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
  // Transaction Routes
  {
    path: '/transactions/manual',
    element: <ManualEntryPage />,
  },
  {
    path: '/transactions/voice',
    element: <VoiceNotePage />,
  },
  {
    path: '/transactions/upload',
    element: <RecieptUploadPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
