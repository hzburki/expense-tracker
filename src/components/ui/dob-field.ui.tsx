import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { CalendarIcon } from '@/assets/icons';
import { useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(false);
  const { ref: registerRef, ...registerRest } = register(name);

  const handleIconClick = () => {
    inputRef.current?.showPicker();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    registerRest.onChange(e);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={element => {
            registerRef(element);
            inputRef.current = element;
          }}
          id={name}
          type="date"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={registerRest.onBlur}
          name={registerRest.name}
          className={`h-10 w-full appearance-none rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden ${hasValue ? 'text-gray-900' : 'text-gray-500'} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
        />
        <button
          type="button"
          onClick={handleIconClick}
          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer p-1 text-gray-400 hover:text-gray-500"
        >
          <CalendarIcon className="h-5 w-5" />
        </button>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
