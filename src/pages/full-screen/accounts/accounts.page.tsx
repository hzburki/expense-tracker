import { FullScreenLayout } from '@/layouts';
import { AddAccountSection } from './add-account.form';
import { DeleteAccountSection } from './delete-account.form';

export const AccountsManagementPage = () => {
  return (
    <FullScreenLayout screen="Accounts" description="Manage your financial accounts and balances.">
      <AddAccountSection />
      <DeleteAccountSection accountName="Bank Account" onDelete={() => {}} />
    </FullScreenLayout>
  );
};
