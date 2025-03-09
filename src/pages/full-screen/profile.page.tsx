import { DashboardLayout } from '@/layouts';
import { Avatar } from '@/components/ui';

export const ProfilePage = () => {
  // TODO: Replace with actual user data from auth context
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: undefined,
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">Profile Settings</h1>

        {/* Profile Section */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <Avatar src={user.avatarUrl} alt={user.name} size="lg" className="flex-shrink-0" />

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* Profile Form - Placeholder for now */}
          <div className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={user.name}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={user.email}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
