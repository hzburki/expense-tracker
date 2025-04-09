import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button.ui';
import { InputField } from '@/components/ui/input-field.ui';
import { SelectField } from '@/components/ui/select-field.ui';

interface AccountFormProps {
  initialData?: AccountFormData;
  onSubmit: SubmitHandler<AccountFormData>;
}

interface AccountFormData {
  name: string;
  type: string;
  balance: number;
}

const accountTypes = [
  { value: 'cash', label: 'Cash' },
  { value: 'bank', label: 'Bank Account' },
  { value: 'credit', label: 'Credit Card' },
];

export const AccountForm: React.FC<AccountFormProps> = ({ initialData, onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccountFormData>({
    defaultValues: initialData || { name: '', type: 'cash', balance: 0 },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Account Name"
        name="name"
        register={register}
        error={errors.name?.message}
        placeholder="Enter account name"
      />

      <SelectField
        label="Account Type"
        name="type"
        options={accountTypes}
        register={register}
        setValue={setValue}
      />

      <InputField
        label="Balance"
        name="balance"
        register={register}
        error={errors.balance?.message}
        type="number"
        step="0.01"
        placeholder="Enter balance"
      />

      <Button type="submit" className="w-full">
        {initialData ? 'Update Account' : 'Create Account'}
      </Button>
    </form>
  );
};
