import { DashboardLayout } from '@/layouts';

export const BudgetsPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Budgets</h2>
          <p className="mt-4 text-gray-500">
            We're creating an intuitive budget management system where you can set spending limits,
            track your progress, and receive notifications to stay on top of your financial goals.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};
