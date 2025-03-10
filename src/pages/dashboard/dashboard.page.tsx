import { DashboardLayout } from '@/layouts';
import { AccountsSection } from '@/components/accounts/accounts-section';

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <AccountsSection />
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
