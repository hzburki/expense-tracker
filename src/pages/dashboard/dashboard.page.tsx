import { DashboardLayout } from '@/layouts';

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Dashboard</h2>
          <p className="mt-4 text-gray-500">
            We're working on bringing you a beautiful dashboard with insights into your spending
            habits, budget tracking, and financial goals. Stay tuned!
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};
