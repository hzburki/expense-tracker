import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, InputField, Button, Alert } from '@/components/ui';
import { z } from 'zod';
import { useState } from 'react';

const deleteAccountSchema = z.object({
  confirmation: z
    .string()
    .min(1, 'Please type "delete" to confirm')
    .refine(val => val === 'delete', 'Please type "delete" to confirm'),
});

type DeleteAccountFormData = z.infer<typeof deleteAccountSchema>;

interface DeleteAccountSectionProps {
  accountName: string;
  onDelete: () => void;
}

export const DeleteAccountSection = ({ accountName, onDelete }: DeleteAccountSectionProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DeleteAccountFormData>({
    resolver: zodResolver(deleteAccountSchema),
  });

  const onSubmit = async (data: DeleteAccountFormData) => {
    try {
      // TODO: Implement account deletion logic
      console.log('Deleting account:', accountName);
      reset();
      setShowConfirmation(false);
      onDelete();
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
            <p className="mt-1 text-sm text-gray-500">Remove the account "{accountName}".</p>
          </div>

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
            Please confirm that you want to delete this account. This action cannot be undone.
          </p>
        </div>

        <Alert variant="danger" title="Warning">
          Deleting this account will permanently remove it and all associated transactions from your
          records. This action cannot be undone.
        </Alert>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              onClick={() => {
                setShowConfirmation(false);
                reset();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="danger" size="md" isLoading={isSubmitting}>
              <span className="hidden sm:inline">Permanently Delete Account</span>
              <span className="sm:hidden">Delete</span>
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
