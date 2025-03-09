import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Input } from '../../../components/ui/Input';
import { loginSchema, type LoginFormData } from './login.schema';

export const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // TODO: Implement login logic
      console.log(data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="bg-lightGray flex min-h-screen items-center justify-center">
      <div className="shadow-card w-full max-w-md rounded-2xl bg-white p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Welcome Back</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-info text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 w-full rounded-xl py-2 text-white transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>

          <div className="text-center">
            <span>Don't have an account? </span>
            <Link to="/register" className="text-info hover:underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
