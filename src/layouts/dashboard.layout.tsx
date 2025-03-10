import { type ReactNode, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { SideMenu } from '@/components/side-menu';
import { Drawer } from '@/components/ui/drawer.ui';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // TODO: Replace with actual user data from auth context
  const user = {
    name: 'John Doe',
    avatarUrl: undefined, // Add user avatar URL when available
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar - Fixed at top */}
      <Navbar onMenuClick={() => setIsDrawerOpen(true)} />

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Side Menu - Hidden on mobile, visible on md breakpoint and up */}
        <div className="hidden md:block">
          <SideMenu userName={user.name} avatarUrl={user.avatarUrl} />
        </div>

        {/* Mobile Drawer */}
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <SideMenu userName={user.name} avatarUrl={user.avatarUrl} />
        </Drawer>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};
