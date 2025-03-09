import { Link } from 'react-router-dom';
import { CloseIcon } from '@/assets/icons';

interface FullScreenLayoutProps {
  children: React.ReactNode;
}

export const FullScreenLayout = ({ children }: FullScreenLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="relative mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
        {/* Close Button */}
        <div className="absolute top-4 right-4 sm:right-6 lg:right-8">
          <Link
            to="/"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:bg-gray-50 active:bg-gray-100"
          >
            <CloseIcon className="h-10 w-10 text-gray-700" />
          </Link>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
};
