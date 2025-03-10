import { FullScreenLayout } from '@/layouts';
import { ChangePasswordSection } from './change-password.form';
import { DeleteAccountSection } from './delete-account.form';
import { ProfileSection } from './profile.form';

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

        <ProfileSection />
        <ChangePasswordSection />
        <DeleteAccountSection />
      </div>
    </FullScreenLayout>
  );
};
