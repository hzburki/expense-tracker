import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Input } from '../../../components/ui/Input';
import { resetPasswordSchema, type ResetPasswordFormData } from './reset-password.schema';

export const ResetPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      // TODO: Implement reset password logic
      console.log(data);
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <div className="bg-lightGray flex min-h-screen items-center justify-center">
      <div className="shadow-card w-full max-w-md rounded-2xl bg-white p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="New Password"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 w-full rounded-xl py-2 text-white transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
          </button>

          <div className="text-center">
            <Link to="/login" className="text-info hover:underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
