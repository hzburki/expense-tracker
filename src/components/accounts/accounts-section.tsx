import { AccountCard } from './account-card';
import { AddAccountCard } from './add-account-card';
import { CreditCard, PiggyBank, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_ACCOUNTS = [
  {
    id: '1',
    name: 'Al-Meezan Retirement Fund',
    balance: '$12,345.67',
    color: '#4F46E5',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: '2',
    name: 'Savings',
    balance: '$8,901.23',
    color: '#10B681',
    icon: <PiggyBank className="h-6 w-6" />,
  },
  {
    id: '3',
    name: 'Cash',
    balance: '$234.56',
    color: '#F59E0B',
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    id: '4',
    name: 'Main Account',
    balance: '$12,345.67',
    color: '#0D76E5',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: '5',
    name: 'Main Account',
    balance: '$12,345.67',
    color: '#8F46E5',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: '6',
    name: 'Savings',
    balance: '$8,901.23',
    color: '#90B810',
    icon: <PiggyBank className="h-6 w-6" />,
  },
  {
    id: '7',
    name: 'Cash',
    balance: '$234.56',
    color: '#F53E0C',
    icon: <Wallet className="h-6 w-6" />,
  },
];

export const AccountsSection = () => {
  const navigate = useNavigate();

  const handleAccountClick = (accountId: string) => {
    navigate(`/accounts/manage?account=${accountId}`);
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Accounts</h2>
      </div>

      <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-2 lg:grid-cols-5">
        {MOCK_ACCOUNTS.map(account => (
          <AccountCard
            key={account.id}
            {...account}
            onClick={() => handleAccountClick(account.id)}
          />
        ))}
        <AddAccountCard onClick={() => navigate('/accounts/manage')} />
      </div>
    </div>
  );
};
