import { PlusIcon } from '@/assets/icons/plus.icon';
import { Button } from '@/components/ui/button.ui';

interface AddAccountCardProps {
  onClick: () => void;
}

export const AddAccountCard = ({ onClick }: AddAccountCardProps) => {
  return (
    <Button
      variant="outline"
      className="group flex h-16 w-full flex-row items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white text-gray-400 hover:border-blue-700 hover:bg-blue-50 md:gap-2"
      onClick={onClick}
    >
      <PlusIcon className="h-6 w-6 group-hover:text-blue-700" />
      <span className="text-xs font-medium group-hover:text-blue-700 md:text-sm">Add Account</span>
    </Button>
  );
};
