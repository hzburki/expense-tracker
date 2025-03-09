import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Input } from '../../../components/ui/Input';
import { registerSchema, type RegisterFormData } from './regsiter.schema';

export const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // TODO: Implement register logic
      console.log(data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="bg-lightGray flex min-h-screen items-center justify-center">
      <div className="shadow-card w-full max-w-md rounded-2xl bg-white p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input label="Full Name" name="name" register={register} error={errors.name?.message} />
          <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            label="Confirm Password"
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
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className="text-darkGray text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-info hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
