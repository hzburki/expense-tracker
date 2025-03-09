import { type ReactNode } from 'react';
import { Navbar } from '@/components/navbar';
import { SideMenu } from '@/components/side-menu';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Side Menu - Hidden on mobile, visible on md breakpoint and up */}
        <div className="hidden md:block">
          <SideMenu />
        </div>

        {/* Main Content - Full width on mobile, adjusted for sidebar on md and up */}
        <main className="flex-1 overflow-auto pt-[4rem] md:pl-[16rem]">{children}</main>
      </div>
    </div>
  );
};
