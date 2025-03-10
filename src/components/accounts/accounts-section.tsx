import { AccountCard } from './account-card';
import { Button } from '@/components/ui/button.ui';
import { AddAccountCard } from './add-account-card';
import { ArrowRightIcon, CreditCardIcon, PiggyBankIcon, WalletIcon } from '@/assets/icons';

const MOCK_ACCOUNTS = [
  {
    name: 'Main Account',
    balance: '$12,345.67',
    color: '#4F46E5',
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    name: 'Savings',
    balance: '$8,901.23',
    color: '#10B681',
    icon: <PiggyBankIcon className="h-6 w-6" />,
  },
  {
    name: 'Cash',
    balance: '$234.56',
    color: '#F59E0B',
    icon: <WalletIcon className="h-6 w-6" />,
  },
  {
    name: 'Main Account',
    balance: '$12,345.67',
    color: '#0D76E5',
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    name: 'Main Account',
    balance: '$12,345.67',
    color: '#8F46E5',
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    name: 'Savings',
    balance: '$8,901.23',
    color: '#90B810',
    icon: <PiggyBankIcon className="h-6 w-6" />,
  },
  {
    name: 'Cash',
    balance: '$234.56',
    color: '#F53E0C',
    icon: <WalletIcon className="h-6 w-6" />,
  },
];

export const AccountsSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Accounts</h2>
        <Button variant="outline" className="text-gray-500 hover:text-gray-700">
          View All
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
        {MOCK_ACCOUNTS.map(account => (
          <AccountCard key={account.name} {...account} />
        ))}
        <AddAccountCard onClick={() => console.log('Add account clicked')} />
      </div>
    </div>
  );
};
