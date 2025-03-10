import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FullScreenLayout } from '@/layouts';
import { Card, InputField, Button, DOBField } from '@/components/ui';
import { SelectField } from '@/components/ui/select-field.ui';
import { AvatarSelector } from '@/components/common';
import { ChangePasswordSection } from './change-password.comp';
import { DeleteAccountSection } from './delete-account.comp';
import { z } from 'zod';

const profileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  avatarSeed: z.string(),
  avatarStyle: z.string(),
  gender: z.enum(['male', 'female', 'other']).nullable(),
  dateOfBirth: z.string().nullable(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarSeed: Math.random().toString(36).substring(7),
      avatarStyle: 'avataaars',
      gender: null,
      dateOfBirth: null,
    },
  });

  const avatarSeed = watch('avatarSeed');
  const avatarStyle = watch('avatarStyle');
  const gender = watch('gender');

  const onSubmit = async (data: ProfileFormData) => {
    try {
      // TODO: Implement profile update logic
      console.log(data);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <FullScreenLayout>
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account settings and preferences.
          </p>
        </div>

        <Card overflow="visible">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm text-gray-500">Update your personal details.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-center">
                <AvatarSelector
                  value={avatarSeed}
                  style={avatarStyle}
                  onChange={(seed, style) => {
                    setValue('avatarSeed', seed);
                    setValue('avatarStyle', style);
                  }}
                />
              </div>

              <InputField
                label="Full Name"
                name="name"
                placeholder="Enter your full name"
                register={register}
                error={errors.name?.message}
              />

              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                register={register}
                error={errors.email?.message}
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField
                  label="Gender"
                  name="gender"
                  options={genderOptions}
                  register={register}
                  setValue={setValue}
                  value={gender}
                  error={errors.gender?.message}
                  placeholder="Select gender"
                />

                <DOBField
                  label="Date of Birth"
                  name="dateOfBirth"
                  register={register}
                  setValue={setValue}
                  error={errors.dateOfBirth?.message}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" isLoading={isSubmitting}>
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </Card>

        <ChangePasswordSection />
        <DeleteAccountSection />
      </div>
    </FullScreenLayout>
  );
};
