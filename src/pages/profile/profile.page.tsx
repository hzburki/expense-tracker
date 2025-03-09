import { FullScreenLayout } from '@/layouts';
import { Card } from '@/components/ui';

export const ProfilePage = () => {
  return (
    <FullScreenLayout>
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account settings and preferences.
          </p>
        </div>

        {/* Profile Section */}
        <Card>
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
              <img
                src="https://avatars.githubusercontent.com/u/12345678?v=4"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* User Info */}
            <div>
              <h2 className="text-xl font-medium text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-8 grid gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                defaultValue="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                defaultValue="john.doe@example.com"
              />
            </div>
          </div>
        </Card>
      </div>
    </FullScreenLayout>
  );
};
