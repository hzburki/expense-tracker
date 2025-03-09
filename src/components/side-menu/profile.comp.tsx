import { Avatar } from '@/components/ui';

interface ProfileProps {
  userName?: string;
  avatarUrl?: string;
}

export const Profile = ({ userName = 'John Doe', avatarUrl }: ProfileProps) => {
  return (
    <div className="border-b border-gray-200 bg-gray-50 px-4 py-6 md:hidden">
      <div className="flex flex-col items-center">
        <Avatar src={avatarUrl} alt={userName} size="lg" className="mb-3" />
        <span className="text-lg font-medium text-gray-900">{userName}</span>
      </div>
    </div>
  );
};
