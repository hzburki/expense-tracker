import { DashboardLayout } from '@/layouts/dashboard.layout';

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome to your expense tracker dashboard.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Expenses Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">$2,450.85</p>
            <p className="mt-2 text-sm text-green-600">+12.5% from last month</p>
          </div>

          {/* Categories Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Categories</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">8</p>
            <p className="mt-2 text-sm text-gray-600">Active categories</p>
          </div>

          {/* This Month Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">This Month</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">$850.00</p>
            <p className="mt-2 text-sm text-red-600">+2.5% from budget</p>
          </div>

          {/* Recent Transactions Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Recent Transactions</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
            <p className="mt-2 text-sm text-gray-600">In the last 7 days</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="rounded-lg bg-white shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <div className="mt-6 space-y-4">
              {/* Placeholder for recent transactions list */}
              <p className="text-sm text-gray-500">No recent transactions to display.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
