import { FullScreenLayout } from '@/layouts';
import { ChangePasswordSection } from './change-password.form';
import { DeleteAccountSection } from './delete-account.form';
import { ProfileSection } from './profile.form';

export const ProfilePage = () => {
  return (
    <FullScreenLayout screen="Profile" description="Manage your account settings and preferences.">
      <ProfileSection />
      <ChangePasswordSection />
      <DeleteAccountSection />
    </FullScreenLayout>
  );
};
