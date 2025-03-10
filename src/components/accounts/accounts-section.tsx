import { AccountCard } from './account-card';
import { AddAccountCard } from './add-account-card';
import { CreditCard, PiggyBank, Wallet, Settings } from 'lucide-react';
import { IconButton } from '../ui';
import { useNavigate } from 'react-router-dom';

const MOCK_ACCOUNTS = [
  {
    name: 'Al-Meezan Retirement Fund',
    balance: '$12,345.67',
    color: '#4F46E5',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    name: 'Savings',
    balance: '$8,901.23',
    color: '#10B681',
    icon: <PiggyBank className="h-6 w-6" />,
  },
  {
    name: 'Cash',
    balance: '$234.56',
    color: '#F59E0B',
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    name: 'Main Account',
    balance: '$12,345.67',
    color: '#0D76E5',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    name: 'Main Account',
    balance: '$12,345.67',
    color: '#8F46E5',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    name: 'Savings',
    balance: '$8,901.23',
    color: '#90B810',
    icon: <PiggyBank className="h-6 w-6" />,
  },
  {
    name: 'Cash',
    balance: '$234.56',
    color: '#F53E0C',
    icon: <Wallet className="h-6 w-6" />,
  },
];

export const AccountsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Accounts</h2>
        <IconButton
          variant="link"
          onClick={() => navigate('/accounts')}
          className="text-gray-500 hover:text-gray-700"
        >
          <Settings className="h-6 w-6" />
        </IconButton>
      </div>

      <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-2 lg:grid-cols-5">
        {MOCK_ACCOUNTS.map(account => (
          <AccountCard key={account.name} {...account} />
        ))}
        <AddAccountCard onClick={() => console.log('Add account clicked')} />
      </div>
    </div>
  );
};
