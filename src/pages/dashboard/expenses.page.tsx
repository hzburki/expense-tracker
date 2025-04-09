import React, { useState, useEffect } from 'react';
import { isWithinInterval } from 'date-fns';
import { DashboardLayout } from '@/layouts';
import { TransactionList, TransactionFilters, BulkActions } from '@/components/expenses';
import { DateRangeSelector } from '@/components/expenses/date-range-selector.comp';
import { Transaction } from '@/types/transaction.type';

// Mock data for demonstration
const mockWallets = [
  { value: 'cash', label: 'Cash' },
  { value: 'bank', label: 'Bank Account' },
  { value: 'credit', label: 'Credit Card' },
];

const mockCategories = [
  { value: 'food', label: 'Food' },
  { value: 'transport', label: 'Transport' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'entertainment', label: 'Entertainment' },
];

const mockLabels = [
  { value: 'business', label: 'Business' },
  { value: 'personal', label: 'Personal' },
  { value: 'family', label: 'Family' },
];

// Mock transactions data with recent dates and multiple transactions per day
const mockTransactions: Transaction[] = [
  // Today
  {
    id: '1',
    description: 'Grocery Shopping',
    amount: 120.5,
    type: 'expense',
    category: 'food',
    wallet: 'cash',
    labels: ['personal', 'family'],
    date: new Date(new Date().setHours(10, 30, 0, 0)).toISOString(), // Today at 10:30 AM
  },
  {
    id: '2',
    description: 'Coffee Shop',
    amount: 15.0,
    type: 'expense',
    category: 'food',
    wallet: 'credit',
    labels: ['personal'],
    date: new Date(new Date().setHours(8, 15, 0, 0)).toISOString(), // Today at 8:15 AM
  },
  // Yesterday
  {
    id: '3',
    description: 'Salary',
    amount: 5000.0,
    type: 'income',
    category: 'salary',
    wallet: 'bank',
    labels: ['business'],
    date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), // Yesterday
  },
  {
    id: '4',
    description: 'Movie Tickets',
    amount: 30.0,
    type: 'expense',
    category: 'entertainment',
    wallet: 'credit',
    labels: ['personal', 'family'],
    date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), // Yesterday
  },
  {
    id: '5',
    description: 'Dinner',
    amount: 85.0,
    type: 'expense',
    category: 'food',
    wallet: 'credit',
    labels: ['personal'],
    date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), // Yesterday
  },
  // 3 days ago
  {
    id: '6',
    description: 'Gas',
    amount: 45.75,
    type: 'expense',
    category: 'transport',
    wallet: 'credit',
    labels: ['personal'],
    date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), // 3 days ago
  },
  {
    id: '7',
    description: 'Gym Membership',
    amount: 50.0,
    type: 'expense',
    category: 'health',
    wallet: 'bank',
    labels: ['personal'],
    date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), // 3 days ago
  },
  // 7 days ago
  {
    id: '8',
    description: 'Freelance Work',
    amount: 1200.0,
    type: 'income',
    category: 'freelance',
    wallet: 'bank',
    labels: ['business'],
    date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(), // 7 days ago
  },
  {
    id: '9',
    description: 'Internet Bill',
    amount: 79.99,
    type: 'expense',
    category: 'utilities',
    wallet: 'bank',
    labels: ['personal'],
    date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(), // 7 days ago
  },
  // 15 days ago
  {
    id: '10',
    description: 'Phone Bill',
    amount: 65.0,
    type: 'expense',
    category: 'utilities',
    wallet: 'credit',
    labels: ['personal'],
    date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), // 15 days ago
  },
  {
    id: '11',
    description: 'Client Payment',
    amount: 2500.0,
    type: 'income',
    category: 'consulting',
    wallet: 'bank',
    labels: ['business'],
    date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), // 15 days ago
  },
  {
    id: '12',
    description: 'Office Supplies',
    amount: 150.0,
    type: 'expense',
    category: 'office',
    wallet: 'credit',
    labels: ['business'],
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const ExpensesPage = () => {
  // State for date range
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
    end: new Date(),
  });

  // State for selected transactions
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);

  // State for filtered transactions - initialize with mock data
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(mockTransactions);

  // State for active filters
  const [activeFilters, setActiveFilters] = useState({
    search: '',
    wallet: '',
    category: '',
    label: '',
    minAmount: '',
    maxAmount: '',
  });

  // Filter transactions based on selected date range and active filters
  useEffect(() => {
    const filtered = mockTransactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);

      // Filter by date range
      if (!isWithinInterval(transactionDate, { start: dateRange.start, end: dateRange.end })) {
        return false;
      }

      // Filter by search term
      if (activeFilters.search) {
        const searchTerm = activeFilters.search.toLowerCase();
        const matchesDescription = transaction.description.toLowerCase().includes(searchTerm);
        const matchesAmount = transaction.amount.toString().includes(searchTerm);

        if (!matchesDescription && !matchesAmount) {
          return false;
        }
      }

      // Filter by wallet
      if (activeFilters.wallet && transaction.wallet !== activeFilters.wallet) {
        return false;
      }

      // Filter by category
      if (activeFilters.category && transaction.category !== activeFilters.category) {
        return false;
      }

      // Filter by label
      if (
        activeFilters.label &&
        (!transaction.labels || !transaction.labels.includes(activeFilters.label))
      ) {
        return false;
      }

      // Filter by amount range
      if (activeFilters.minAmount && transaction.amount < parseFloat(activeFilters.minAmount)) {
        return false;
      }

      if (activeFilters.maxAmount && transaction.amount > parseFloat(activeFilters.maxAmount)) {
        return false;
      }

      return true;
    });

    // Sort by date in descending order
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    setFilteredTransactions(filtered);
  }, [dateRange, activeFilters]);

  // Handle transaction selection
  const handleSelectTransaction = (id: string) => {
    setSelectedTransactions(prev => {
      if (prev.includes(id)) {
        return prev.filter(transactionId => transactionId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Handle transaction edit
  const handleEditTransaction = (transaction: Transaction) => {
    console.log('Edit transaction:', transaction);
    // In a real app, this would open a modal or navigate to an edit page
  };

  // Handle transaction delete
  const handleDeleteTransaction = (id: string) => {
    console.log('Delete transaction:', id);
    // In a real app, this would call an API to delete the transaction
  };

  // Handle bulk delete
  const handleDeleteSelected = () => {
    console.log('Delete selected transactions:', selectedTransactions);
    // In a real app, this would call an API to delete multiple transactions
    setSelectedTransactions([]);
  };

  // Handle filter application
  const handleApplyFilters = (filters: {
    search: string;
    wallet: string;
    category: string;
    label: string;
    minAmount: string;
    maxAmount: string;
  }) => {
    setActiveFilters(filters);
  };

  // Handle filter reset
  const handleResetFilters = () => {
    setActiveFilters({
      search: '',
      wallet: '',
      category: '',
      label: '',
      minAmount: '',
      maxAmount: '',
    });
  };

  // Handle date range change
  const handleDateRangeChange = (start: Date, end: Date) => {
    setDateRange({ start, end });
  };

  return (
    <DashboardLayout>
      <div className="h-full overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
            <p className="mt-2 text-gray-600">
              Track and manage all your transactions in one place.
            </p>
          </div>

          <div className="mb-6">
            <DateRangeSelector onRangeChange={handleDateRangeChange} />
          </div>

          <div className="mb-6">
            <TransactionFilters
              wallets={mockWallets}
              categories={mockCategories}
              labels={mockLabels}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />
          </div>

          <div className="mb-4">
            <TransactionList
              transactions={filteredTransactions}
              selectedTransactions={selectedTransactions}
              onSelectTransaction={handleSelectTransaction}
              onEditTransaction={handleEditTransaction}
              onDeleteTransaction={handleDeleteTransaction}
            />
          </div>

          <BulkActions
            selectedCount={selectedTransactions.length}
            onDeleteSelected={handleDeleteSelected}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};
