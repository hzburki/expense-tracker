import React from 'react';
import { format } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button.ui';
import { Transaction } from '@/types/transaction.type';

interface TransactionItemProps {
  transaction: Transaction;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}) => {
  const { description, amount, type, category, wallet, labels, date } = transaction;

  return (
    <div
      className={`flex items-center justify-between rounded-lg border p-4 transition-colors ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-medium text-gray-900">{description}</h4>
            {labels && labels.length > 0 && (
              <div className="flex space-x-1">
                {labels.map(label => (
                  <span
                    key={label}
                    className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
            <span>{category}</span>
            <span>•</span>
            <span>{wallet}</span>
            <span>•</span>
            <span>{format(new Date(date), 'h:mm a')}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`font-medium ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
          {type === 'income' ? '+' : '-'}
          {amount.toFixed(2)}
        </span>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={onEdit} className="h-8 w-8 p-0">
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onDelete}
            className="h-8 w-8 p-0 text-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
