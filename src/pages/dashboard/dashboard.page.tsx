import { DashboardLayout } from '@/layouts';
import { AccountsSection } from '@/components/accounts/accounts-section';

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <AccountsSection />
    </DashboardLayout>
  );
};
