import React from 'react';
import { format } from 'date-fns';
import { Card } from '@/components/ui/card.ui';
import { TransactionItem } from './transaction-item.comp';
import { Transaction } from '@/types/transaction.type';

interface TransactionListProps {
  transactions: Transaction[];
  selectedTransactions: string[];
  onSelectTransaction: (id: string) => void;
  onEditTransaction: (transaction: Transaction) => void;
  onDeleteTransaction: (id: string) => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  selectedTransactions,
  onSelectTransaction,
  onEditTransaction,
  onDeleteTransaction,
}) => {
  // Group transactions by date
  const groupedTransactions = transactions.reduce<Record<string, Transaction[]>>(
    (acc, transaction) => {
      const date = format(new Date(transaction.date), 'yyyy-MM-dd');
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    },
    {}
  );

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedTransactions).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="space-y-6">
      {sortedDates.map(date => {
        const dateTransactions = groupedTransactions[date];
        const totalAmount = dateTransactions.reduce((sum, transaction) => {
          return sum + (transaction.type === 'income' ? transaction.amount : -transaction.amount);
        }, 0);

        return (
          <Card key={date} padding="small" className="overflow-visible">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                {format(new Date(date), 'EEEE, MMMM d, yyyy')}
              </h3>
              <div
                className={`text-lg font-semibold ${totalAmount >= 0 ? 'text-green-600' : 'text-red-600'}`}
              >
                {totalAmount >= 0 ? '+' : ''}
                {totalAmount.toFixed(2)}
              </div>
            </div>
            <div className="space-y-3">
              {dateTransactions.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  isSelected={selectedTransactions.includes(transaction.id)}
                  onSelect={() => onSelectTransaction(transaction.id)}
                  onEdit={() => onEditTransaction(transaction)}
                  onDelete={() => onDeleteTransaction(transaction.id)}
                />
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
