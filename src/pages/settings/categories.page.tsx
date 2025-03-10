import React from 'react';
import { DashboardLayout } from '@/layouts';

export const CategoriesPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Categories</h1>
          <p className="text-sm text-gray-500">Manage your expense and income categories here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};
