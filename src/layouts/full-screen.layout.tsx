import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface FullScreenLayoutProps {
  children: React.ReactNode;
  screen: string;
  description: string;
}

export const FullScreenLayout = ({ children, screen, description }: FullScreenLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="relative mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{screen}</h1>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
          {/* Close Button */}
          <Link
            to="/"
            className="pointer-cursor flex h-14 w-14 items-center justify-center transition-all"
          >
            <X className="h-12 w-12 text-gray-700" />
          </Link>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl space-y-8 py-8">{children}</div>
      </div>
    </div>
  );
};
