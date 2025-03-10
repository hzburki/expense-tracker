import { DashboardLayout } from '@/layouts';

export const LabelsPage = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Labels</h2>
        <p className="mt-4 text-gray-500">
          Organize and tag your expenses with customizable labels for better tracking and reporting.
          Filter and analyze your spending patterns using powerful label-based categorization.
        </p>
      </div>
    </DashboardLayout>
  );
};
