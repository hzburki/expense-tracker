import { UseFormRegister, FieldValues, Path, UseFormSetValue, PathValue } from 'react-hook-form';
import { CalendarIcon, CloseIcon } from '@/assets/icons';
import { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DOBFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  error?: string;
  className?: string;
  placeholder?: string;
  value?: string | null;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  className?: string;
  onClear?: () => void;
  hasValue?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder, className, onClear, hasValue }, ref) => (
    <div className="relative">
      <input
        ref={ref}
        value={value || ''}
        onClick={onClick}
        readOnly
        placeholder={placeholder}
        className={className}
      />
      <button
        type="button"
        onClick={hasValue ? onClear : onClick}
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer p-1 text-gray-400 hover:text-gray-500"
      >
        {hasValue ? <CloseIcon className="h-5 w-5" /> : <CalendarIcon className="h-5 w-5" />}
      </button>
    </div>
  )
);

CustomInput.displayName = 'CustomInput';

export const DOBField = <T extends FieldValues>({
  label = 'Date of Birth',
  name,
  register,
  setValue,
  error,
  className = '',
  placeholder = 'Select date',
  value,
}: DOBFieldProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  useEffect(() => {
    setSelectedDate(value ? new Date(value) : null);
  }, [value]);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    setValue(name, (date ? date.toISOString().split('T')[0] : null) as PathValue<T, Path<T>>);
    setIsOpen(false);
  };

  const handleClear = () => {
    handleChange(null);
  };

  // Register the field
  register(name);

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
        onInputClick={() => setIsOpen(true)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        customInput={
          <CustomInput
            className={`h-10 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
            onClear={handleClear}
            hasValue={!!selectedDate}
          />
        }
        wrapperClassName="w-full"
        calendarClassName="shadow-xl border border-gray-200 rounded-xl bg-white font-inter"
        dayClassName={() => 'hover:bg-gray-100'}
        weekDayClassName={() => 'text-gray-500'}
        className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:outline-none"
        showPopperArrow={false}
        popperClassName="z-50"
        popperPlacement="bottom-start"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
