import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';
import { Link } from '../../../components/ui/Link';
import { AuthLayout } from '../../../layouts/auth.layout';
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
    <AuthLayout title="Welcome Back" subtitle="Please sign in to continue">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            error={errors.password?.message}
          />

          <div className="flex justify-end">
            <Link to="/forgot-password" size="sm">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" fullWidth isLoading={isSubmitting}>
            Sign In
          </Button>

          <div className="text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
};
