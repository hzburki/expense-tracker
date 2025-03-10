import { Link } from 'react-router-dom';
import { Avatar } from '@/components/ui';
import { CircleUserRound, LogOut } from 'lucide-react';
interface ProfileProps {
  userName?: string;
  avatarUrl?: string;
}

export const Profile = ({ userName = 'John Doe', avatarUrl }: ProfileProps) => {
  return (
    <div className="border-b border-gray-200 bg-gray-50 px-4 pt-8 pb-4 md:hidden">
      {/* Profile Info */}
      <div className="flex flex-col items-center">
        <Avatar src={avatarUrl} alt={userName} size="lg" className="mb-3" />
        <span className="mb-10 text-lg font-medium text-gray-900">{userName}</span>

        {/* Action Buttons */}
        <div className="grid w-full grid-cols-2 gap-3">
          <Link
            to="/profile"
            className="flex h-[60px] flex-col items-center justify-center rounded-xl bg-white px-2 text-gray-600 shadow-sm transition-all hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200"
          >
            <CircleUserRound className="mb-1.5 h-6 w-6" />
            <span className="text-sm font-medium">Profile</span>
          </Link>

          <button className="flex h-[60px] flex-col items-center justify-center rounded-xl bg-white px-2 text-red-600 shadow-sm transition-all hover:bg-red-50 active:bg-red-100">
            <LogOut className="mb-1.5 h-6 w-6" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
