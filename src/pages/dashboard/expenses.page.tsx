import { DashboardLayout } from '@/layouts';

export const ExpensesPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Expenses</h2>
        <p className="mt-4 text-gray-500">
          Track and manage all your transactions in one place, with powerful filtering and search
          capabilities. Categorize expenses, add notes, and gain detailed insights into your
          spending patterns over time.
        </p>
      </div>
    </DashboardLayout>
  );
};
