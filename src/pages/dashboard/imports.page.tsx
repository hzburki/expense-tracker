import { DashboardLayout } from '@/layouts';

export const ImportsPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Imports</h2>
        <p className="mt-4 text-gray-500">
          We're developing a powerful import system that will allow you to easily import
          transactions from bank statements, CSV files, and other popular financial platforms.
        </p>
      </div>
    </DashboardLayout>
  );
};
