import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, InputField, Button, SelectField } from '@/components/ui';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DeleteAccountSection } from './delete-account.form';

const accountSchema = z.object({
  accountSelect: z.string().optional(),
  name: z.string().min(1, 'Account name is required'),
  type: z.enum(['cash', 'bank', 'credit', 'savings', 'investment']),
  balance: z.string().min(1, 'Balance is required'),
  currency: z.string().min(1, 'Currency is required'),
  description: z.string().optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

type Option = {
  value: string;
  label: string;
};

const accountTypes: Option[] = [
  { value: 'cash', label: 'Cash' },
  { value: 'bank', label: 'Bank Account' },
  { value: 'credit', label: 'Credit Card' },
  { value: 'savings', label: 'Savings Account' },
  { value: 'investment', label: 'Investment Account' },
];

const currencies: Option[] = [
  { value: 'USD', label: 'US Dollar ($)' },
  { value: 'EUR', label: 'Euro (€)' },
  { value: 'GBP', label: 'British Pound (£)' },
  { value: 'JPY', label: 'Japanese Yen (¥)' },
];

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

export const AddAccountSection = () => {
  const [searchParams] = useSearchParams();
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [showDeleteSection, setShowDeleteSection] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
  });

  useEffect(() => {
    const accountId = searchParams.get('account');
    if (accountId) {
      const account = mockAccounts.find(acc => acc.id === accountId);
      if (account) {
        setSelectedAccount(accountId);
        setIsUpdateMode(true);
        setShowDeleteSection(true);
        setValue('name', account.name);
        setValue('type', account.type);
        setValue('balance', account.balance);
        setValue('currency', account.currency);
        if (account.description) {
          setValue('description', account.description);
        }
      }
    }
  }, [searchParams, setValue]);

  const handleAccountSelect = (accountId: string) => {
    const account = mockAccounts.find(acc => acc.id === accountId);
    if (account) {
      setSelectedAccount(accountId);
      setIsUpdateMode(true);
      setShowDeleteSection(true);
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
      if (isUpdateMode) {
        // TODO: Implement account update logic
        console.log('Updating account:', selectedAccount, data);
      } else {
        // TODO: Implement account creation logic
        console.log('Creating account:', data);
      }
      reset();
      setSelectedAccount('');
      setIsUpdateMode(false);
      setShowDeleteSection(false);
    } catch (error) {
      console.error(isUpdateMode ? 'Account update failed:' : 'Account creation failed:', error);
    }
  };

  const handleDelete = () => {
    reset();
    setSelectedAccount('');
    setIsUpdateMode(false);
    setShowDeleteSection(false);
  };

  return (
    <>
      <Card>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {isUpdateMode ? 'Update Account' : 'Add New Account'}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {isUpdateMode
                ? 'Modify your existing financial account.'
                : 'Create a new financial account to track your balances.'}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <SelectField
              label="Select Account"
              name="accountSelect"
              options={mockAccounts.map(acc => ({ value: acc.id, label: acc.name }))}
              register={register}
              setValue={(name, value) => handleAccountSelect(value)}
              placeholder={
                isUpdateMode
                  ? 'Choose an account to update'
                  : 'Choose an existing account to update'
              }
            />

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
              {isUpdateMode && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    reset();
                    setSelectedAccount('');
                    setIsUpdateMode(false);
                    setShowDeleteSection(false);
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" isLoading={isSubmitting}>
                {isUpdateMode ? 'Update Account' : 'Add Account'}
              </Button>
            </div>
          </form>
        </div>
      </Card>

      {showDeleteSection && (
        <DeleteAccountSection
          accountName={mockAccounts.find(acc => acc.id === selectedAccount)!.name}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};
