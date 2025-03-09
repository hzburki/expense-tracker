import { type ReactNode } from 'react';
import { Navbar } from '@/components/navbar';
import { SideMenu } from '@/components/side-menu';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar />

      <div className="flex">
        {/* Side Menu - Fixed at left */}
        <SideMenu />

        {/* Main Content */}
        <main className="mt-16 ml-64 flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};
