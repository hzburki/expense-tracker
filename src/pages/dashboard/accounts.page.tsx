import React from 'react';
import { DashboardLayout } from '@/layouts';

export const AccountsPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Accounts</h1>
          <p className="text-sm text-gray-500">
            Manage your bank accounts, credit cards, and other financial accounts in one place.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Coming Soon</h2>
          <p className="mt-4 text-gray-500">
            We're building a powerful account management system where you'll be able to link your
            bank accounts, track balances, and manage your financial accounts seamlessly.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};
