import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Dropdown, DropdownItem } from './dropdown.ui';
import { UseFormRegister, UseFormSetValue, Path, FieldValues, PathValue } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: Option[];
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  error?: string;
  className?: string;
  value?: string | null;
  placeholder?: string;
}

export const SelectField = <T extends FieldValues>({
  label,
  name,
  options,
  register,
  setValue,
  error,
  className = '',
  value,
  placeholder = 'Select...',
}: SelectFieldProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  // Register the field but don't use the ref since we're controlling it
  register(name);

  return (
    <div className={`group space-y-2 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        align="left"
        className="z-10 w-full min-w-[200px]"
        triggerButton={
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-white px-4 text-left text-sm"
          >
            <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
              {selectedOption?.label || placeholder}
            </span>
            <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
          </button>
        }
      >
        {options.map(option => (
          <DropdownItem
            key={option.value}
            onClick={() => {
              setValue(name, option.value as PathValue<T, Path<T>>);
              setIsOpen(false);
            }}
            className={option.value === value ? 'bg-blue-50 font-medium text-blue-700' : ''}
          >
            {option.label}
          </DropdownItem>
        ))}
      </Dropdown>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
