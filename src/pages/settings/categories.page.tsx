import { DashboardLayout } from '@/layouts';

export const CategoriesPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Categories</h2>
        <p className="mt-4 text-gray-500">
          Manage and customize expense categories to better organize your spending patterns. Create,
          edit, and organize categories to gain deeper insights into where your money goes.
        </p>
      </div>
    </DashboardLayout>
  );
};
