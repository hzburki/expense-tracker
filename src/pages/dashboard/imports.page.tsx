import React from 'react';
import { DashboardLayout } from '@/layouts';

export const ImportsPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Imports</h1>
          <p className="text-sm text-gray-500">
            Import your transactions from various sources and formats.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Coming Soon</h2>
          <p className="mt-4 text-gray-500">
            We're developing a powerful import system that will allow you to easily import
            transactions from bank statements, CSV files, and other popular financial platforms.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};
