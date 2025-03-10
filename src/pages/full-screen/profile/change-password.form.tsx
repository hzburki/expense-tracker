import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, InputField, Button } from '@/components/ui';
import { PasswordCriteria } from '@/components/common';
import { useState } from 'react';
import { z } from 'zod';

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

export const ChangePasswordSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const [showCriteria, setShowCriteria] = useState(false);
  const newPassword = watch('newPassword') || '';
  const confirmPassword = watch('confirmPassword');

  const onSubmit = async (data: PasswordFormData) => {
    try {
      // TODO: Implement password change logic
      console.log(data);
      reset();
      setShowCriteria(false);
    } catch (error) {
      console.error('Password change failed:', error);
    }
  };

  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
          <p className="mt-1 text-sm text-gray-500">
            Update your password to keep your account secure.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Current Password"
            name="currentPassword"
            type="password"
            placeholder="Enter your current password"
            register={register}
            error={errors.currentPassword?.message}
          />

          <div className="relative">
            <InputField
              label="New Password"
              name="newPassword"
              type="password"
              placeholder="Enter your new password"
              register={register}
              error={errors.newPassword?.message}
              onFocus={() => setShowCriteria(true)}
              onBlur={() => setShowCriteria(false)}
            />
            <PasswordCriteria password={newPassword} isVisible={showCriteria} />
          </div>

          <InputField
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
            register={register}
            error={errors.confirmPassword?.message}
          />

          {confirmPassword && confirmPassword !== newPassword && !errors.confirmPassword && (
            <p className="text-sm text-red-600">Passwords don't match</p>
          )}

          <div className="flex justify-end">
            <Button type="submit" isLoading={isSubmitting} size="md">
              Update Password
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
