import { DashboardLayout } from '@/layouts';

export const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Analytics</h2>
          <p className="mt-4 text-gray-500">
            We're developing powerful analytics tools to help you understand your spending patterns,
            track your savings goals, and make better financial decisions with beautiful charts and
            insights.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};
