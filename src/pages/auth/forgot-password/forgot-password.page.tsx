import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Input } from '../../../components/ui/Input';
import { forgotPasswordSchema, type ForgotPasswordFormData } from './forgot-password.schema';

export const ForgotPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      // TODO: Implement forgot password logic
      console.log(data);
    } catch (error) {
      console.error('Password reset request failed:', error);
    }
  };

  return (
    <div className="bg-lightGray flex min-h-screen items-center justify-center">
      <div className="shadow-card w-full max-w-md rounded-2xl bg-white p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 w-full rounded-xl py-2 text-white transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending Reset Link...' : 'Send Reset Link'}
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
