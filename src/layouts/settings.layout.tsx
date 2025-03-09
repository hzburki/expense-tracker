import { type ReactNode } from 'react';
import { DashboardLayout } from './dashboard.layout';

interface SettingsLayoutProps {
  children: ReactNode;
}

export const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <DashboardLayout>
      <div className="h-full bg-gray-50">
        <div className="mx-auto max-w-5xl p-6">{children}</div>
      </div>
    </DashboardLayout>
  );
};
