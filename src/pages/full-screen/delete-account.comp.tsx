import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, InputField, Button, Alert } from '@/components/ui';
import { useState } from 'react';
import { z } from 'zod';

const deleteAccountSchema = z.object({
  password: z.string().min(1, 'Password is required to confirm deletion'),
  confirmation: z
    .string()
    .min(1, 'Please type "delete" to confirm')
    .refine(val => val === 'delete', 'Please type "delete" to confirm'),
});

type DeleteAccountFormData = z.infer<typeof deleteAccountSchema>;

export const DeleteAccountSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DeleteAccountFormData>({
    resolver: zodResolver(deleteAccountSchema),
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmit = async (data: DeleteAccountFormData) => {
    try {
      // TODO: Implement account deletion logic
      console.log(data);
    } catch (error) {
      console.error('Account deletion failed:', error);
    }
  };

  if (!showConfirmation) {
    return (
      <Card>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Delete Account</h2>
            <p className="mt-1 text-sm text-gray-500">
              Permanently delete your account and all associated data.
            </p>
          </div>

          <Alert variant="danger" title="Warning">
            This action cannot be undone. This will permanently delete your account and remove all
            associated data from our servers.
          </Alert>

          <div className="flex justify-end">
            <Button
              type="button"
              variant="danger"
              size="md"
              onClick={() => setShowConfirmation(true)}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Confirm Account Deletion</h2>
          <p className="mt-1 text-sm text-gray-500">
            Please confirm your password and type "delete" to permanently remove your account.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Your Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            error={errors.password?.message}
          />

          <InputField
            label='Type "delete" to confirm'
            name="confirmation"
            placeholder='Type "delete"'
            register={register}
            error={errors.confirmation?.message}
          />

          <div className="flex items-center justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setShowConfirmation(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="danger" size="md" isLoading={isSubmitting}>
              Permanently Delete Account
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
