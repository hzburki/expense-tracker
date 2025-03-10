import { DashboardLayout } from '@/layouts';

export const TemplatesPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Templates</h2>
        <p className="mt-4 text-gray-500">
          Create and customize templates for your recurring expenses to save time and ensure
          consistency. Streamline your expense tracking by automating regular transactions with
          predefined templates.
        </p>
      </div>
    </DashboardLayout>
  );
};
