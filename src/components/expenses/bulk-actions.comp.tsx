import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button.ui';

interface BulkActionsProps {
  selectedCount: number;
  onDeleteSelected: () => void;
}

export const BulkActions: React.FC<BulkActionsProps> = ({ selectedCount, onDeleteSelected }) => {
  if (selectedCount === 0) {
    return null;
  }

  return (
    <div className="sticky bottom-0 z-10 mt-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-lg">
      <div className="text-sm text-gray-700">
        <span className="font-medium">{selectedCount}</span> transaction
        {selectedCount !== 1 ? 's' : ''} selected
      </div>
      <Button variant="danger" size="sm" onClick={onDeleteSelected} className="flex items-center">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete Selected
      </Button>
    </div>
  );
};
