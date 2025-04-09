export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  wallet: string;
  labels?: string[];
  date: string;
}
