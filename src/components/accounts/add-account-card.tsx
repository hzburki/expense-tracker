import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button.ui';

interface AddAccountCardProps {
  onClick: () => void;
}

export const AddAccountCard = ({ onClick }: AddAccountCardProps) => {
  return (
    <Button
      variant="outline"
      className="group flex h-14 w-full flex-row items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white text-gray-400 hover:border-blue-700 hover:bg-blue-50 sm:h-16 sm:rounded-xl md:gap-2"
      onClick={onClick}
    >
      <Plus className="h-6 w-6 group-hover:text-blue-700" />
      <span className="text-xs font-medium group-hover:text-blue-700 md:text-sm">Add Account</span>
    </Button>
  );
};
