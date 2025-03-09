import { type ReactNode, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { SideMenu } from '@/components/side-menu';
import { Drawer } from '@/components/ui/drawer.ui';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar onMenuClick={() => setIsDrawerOpen(true)} />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Side Menu - Hidden on mobile, visible on md breakpoint and up */}
        <div className="hidden md:block">
          <SideMenu />
        </div>

        {/* Mobile Drawer */}
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <SideMenu />
        </Drawer>

        {/* Main Content - Full width on mobile, adjusted for sidebar on md and up */}
        <main className="flex-1 overflow-auto pt-[4rem] md:pl-[16rem]">{children}</main>
      </div>
    </div>
  );
};
