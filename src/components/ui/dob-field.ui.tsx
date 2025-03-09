import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { CalendarIcon } from '@/assets/icons';

interface DOBFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  className?: string;
  placeholder?: string;
}

export const DOBField = <T extends FieldValues>({
  label = 'Date of Birth',
  name,
  register,
  error,
  className = '',
  placeholder = 'dd/mm/yyyy',
}: DOBFieldProps<T>) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          type="date"
          placeholder={placeholder}
          {...register(name)}
          className={`h-10 w-full appearance-none rounded-lg border border-gray-300 px-4 text-sm text-gray-900 [color-scheme:light] focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-datetime-edit-day-field]:text-gray-500 [&::-webkit-datetime-edit-month-field]:text-gray-500 [&::-webkit-datetime-edit-text]:text-gray-500 [&::-webkit-datetime-edit-year-field]:text-gray-500 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
        />
        <CalendarIcon className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
