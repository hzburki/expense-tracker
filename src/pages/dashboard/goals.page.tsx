import React from 'react';
import { DashboardLayout } from '@/layouts';

export const GoalsPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Goals</h1>
          <p className="text-sm text-gray-500">
            Set and track your financial goals to achieve your dreams.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Coming Soon</h2>
          <p className="mt-4 text-gray-500">
            We're building a goal-setting system to help you plan and track your financial
            objectives, whether it's saving for a vacation, buying a home, or building an emergency
            fund.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};
