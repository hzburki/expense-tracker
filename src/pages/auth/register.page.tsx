import { z } from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField, Button, Card, Link } from '@/components/ui';
import { AuthLayout } from '@/layouts';
import { AvatarSelector, PasswordCriteria } from '@/components/common';
import { useNavigate } from 'react-router-dom';

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    avatarSeed: z.string(),
    avatarStyle: z.string(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one capital letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      avatarSeed: Math.random().toString(36).substring(7),
      avatarStyle: 'avataaars',
    },
  });

  const [isFocused, setIsFocused] = useState(false);
  const avatarSeed = watch('avatarSeed');
  const avatarStyle = watch('avatarStyle');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // TODO: Implement register logic
      console.log(data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join us to start tracking your expenses">
      <Card>
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
          <div className="relative">
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Choose a strong password"
              register={register}
              error={errors.password?.message}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <PasswordCriteria
              password={watch('password') || ''}
              isVisible={isFocused}
              className="absolute right-0 left-0"
            />
          </div>
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            register={register}
            error={errors.confirmPassword?.message}
          />

          <Button type="submit" fullWidth isLoading={isSubmitting}>
            Create Account
          </Button>

          <div className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login">Sign In</Link>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
};
