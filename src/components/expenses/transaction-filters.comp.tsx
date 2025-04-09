import React from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card.ui';
import { InputField } from '@/components/ui/input-field.ui';
import { SelectField } from '@/components/ui/select-field.ui';
import { Button } from '@/components/ui/button.ui';
import { Search, Filter, X } from 'lucide-react';

interface FilterFormData {
  search: string;
  wallet: string;
  category: string;
  label: string;
  minAmount: string;
  maxAmount: string;
  startDate: string;
  endDate: string;
}

interface TransactionFiltersProps {
  wallets: { value: string; label: string }[];
  categories: { value: string; label: string }[];
  labels: { value: string; label: string }[];
  onApplyFilters: (filters: FilterFormData) => void;
  onResetFilters: () => void;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  wallets,
  categories,
  labels,
  onApplyFilters,
  onResetFilters,
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<FilterFormData>();

  const onSubmit = (data: FilterFormData) => {
    onApplyFilters(data);
  };

  const handleReset = () => {
    reset();
    onResetFilters();
  };

  return (
    <Card padding="small">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <InputField
              name="search"
              register={register}
              placeholder="Search by description or amount"
              className="pl-10"
            />
          </div>

          <SelectField
            name="wallet"
            label="Wallet"
            options={wallets}
            register={register}
            setValue={setValue}
            placeholder="All Wallets"
          />

          <SelectField
            name="category"
            label="Category"
            options={categories}
            register={register}
            setValue={setValue}
            placeholder="All Categories"
          />

          <SelectField
            name="label"
            label="Label"
            options={labels}
            register={register}
            setValue={setValue}
            placeholder="All Labels"
          />

          <div className="flex space-x-2">
            <InputField
              name="minAmount"
              register={register}
              placeholder="Min Amount"
              type="number"
              step="0.01"
            />
            <InputField
              name="maxAmount"
              register={register}
              placeholder="Max Amount"
              type="number"
              step="0.01"
            />
          </div>

          <div className="flex space-x-2">
            <InputField name="startDate" register={register} placeholder="Start Date" type="date" />
            <InputField name="endDate" register={register} placeholder="End Date" type="date" />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="flex items-center"
          >
            <X className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button type="submit" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
        </div>
      </form>
    </Card>
  );
};
