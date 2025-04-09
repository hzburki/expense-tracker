import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, InputField, Button, SelectField } from '@/components/ui';
import { z } from 'zod';
import { useState } from 'react';

const accountSchema = z.object({
  accountSelect: z.string().optional(),
  name: z.string().min(1, 'Account name is required'),
  type: z.enum(['cash', 'bank', 'credit', 'savings', 'investment']),
  balance: z.string().min(1, 'Balance is required'),
  currency: z.string().min(1, 'Currency is required'),
  description: z.string().optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

const accountTypes = [
  { value: 'cash', label: 'Cash' },
  { value: 'bank', label: 'Bank Account' },
  { value: 'credit', label: 'Credit Card' },
  { value: 'savings', label: 'Savings Account' },
  { value: 'investment', label: 'Investment Account' },
] as const;

const currencies = [
  { value: 'USD', label: 'US Dollar ($)' },
  { value: 'EUR', label: 'Euro (€)' },
  { value: 'GBP', label: 'British Pound (£)' },
  { value: 'JPY', label: 'Japanese Yen (¥)' },
] as const;

// Mock data - replace with actual data from your backend
const mockAccounts = [
  {
    id: '1',
    name: 'Main Bank Account',
    type: 'bank' as const,
    balance: '5000.00',
    currency: 'USD',
    description: 'Primary checking account',
  },
  {
    id: '2',
    name: 'Savings',
    type: 'savings' as const,
    balance: '10000.00',
    currency: 'USD',
    description: 'Emergency fund',
  },
];

export const UpdateAccountSection = () => {
  const [selectedAccount, setSelectedAccount] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
  });

  const handleAccountSelect = (accountId: string) => {
    const account = mockAccounts.find(acc => acc.id === accountId);
    if (account) {
      setSelectedAccount(accountId);
      setValue('name', account.name);
      setValue('type', account.type);
      setValue('balance', account.balance);
      setValue('currency', account.currency);
      if (account.description) {
        setValue('description', account.description);
      }
    }
  };

  const onSubmit = async (data: AccountFormData) => {
    try {
      // TODO: Implement account update logic
      console.log('Updating account:', selectedAccount, data);
      reset();
      setSelectedAccount('');
    } catch (error) {
      console.error('Account update failed:', error);
    }
  };

  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Update Account</h2>
          <p className="mt-1 text-sm text-gray-500">Modify your existing financial accounts.</p>
        </div>

        <SelectField
          label="Select Account"
          name="accountSelect"
          options={mockAccounts.map(acc => ({ value: acc.id, label: acc.name }))}
          register={register}
          setValue={(name, value) => handleAccountSelect(value)}
          placeholder="Choose an account to update"
        />

        {selectedAccount && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField
              label="Account Name"
              name="name"
              placeholder="Enter account name"
              register={register}
              error={errors.name?.message}
            />

            <SelectField
              label="Account Type"
              name="type"
              options={accountTypes}
              register={register}
              setValue={setValue}
              error={errors.type?.message}
              placeholder="Select account type"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <InputField
                label="Balance"
                name="balance"
                type="number"
                step="0.01"
                placeholder="Enter balance"
                register={register}
                error={errors.balance?.message}
              />

              <SelectField
                label="Currency"
                name="currency"
                options={currencies}
                register={register}
                setValue={setValue}
                error={errors.currency?.message}
                placeholder="Select currency"
              />
            </div>

            <InputField
              label="Description (Optional)"
              name="description"
              placeholder="Enter account description"
              register={register}
              error={errors.description?.message}
            />

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  reset();
                  setSelectedAccount('');
                }}
              >
                Cancel
              </Button>
              <Button type="submit" isLoading={isSubmitting}>
                Update Account
              </Button>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};
