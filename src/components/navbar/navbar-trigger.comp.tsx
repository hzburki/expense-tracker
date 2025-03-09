import { Avatar } from '@/components/ui/avatar.comp';

interface NavbarTriggerProps {
  onClick: () => void;
  userName: string;
  avatarUrl?: string;
}

export const NavbarTrigger = ({ onClick, userName, avatarUrl }: NavbarTriggerProps) => {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center space-x-2 focus:outline-none"
    >
      <Avatar src={avatarUrl} alt={userName} size="sm" />
      <span className="text-sm font-medium text-gray-700">{userName}</span>
    </button>
  );
};
