import { DashboardLayout } from '@/layouts';

export const TemplatesPage = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Templates</h2>
          <p className="mt-4 text-gray-500">
            Create and customize templates for your recurring expenses to save time and ensure
            consistency. Streamline your expense tracking by automating regular transactions with
            predefined templates.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};
