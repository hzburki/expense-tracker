import { DashboardLayout } from '@/layouts';

export const GoalsPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Goals</h2>
        <p className="mt-4 text-gray-500">
          We're building a goal-setting system to help you plan and track your financial objectives,
          whether it's saving for a vacation, buying a home, or building an emergency fund.
        </p>
      </div>
    </DashboardLayout>
  );
};
