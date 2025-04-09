import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { Button } from '@/components/ui/button.ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthSelectorProps {
  selectedDate: Date;
  onMonthChange: (date: Date) => void;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({ selectedDate, onMonthChange }) => {
  const handlePreviousMonth = () => {
    onMonthChange(subMonths(selectedDate, 1));
  };

  const handleNextMonth = () => {
    onMonthChange(addMonths(selectedDate, 1));
  };

  const handleCurrentMonth = () => {
    onMonthChange(new Date());
  };

  const isCurrentMonth = format(selectedDate, 'yyyy-MM') === format(new Date(), 'yyyy-MM');

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={handlePreviousMonth} className="h-8 w-8 p-0">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-semibold text-gray-900">{format(selectedDate, 'MMMM yyyy')}</h2>
        <Button variant="outline" size="sm" onClick={handleNextMonth} className="h-8 w-8 p-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      {!isCurrentMonth && (
        <Button variant="outline" size="sm" onClick={handleCurrentMonth}>
          Current Month
        </Button>
      )}
    </div>
  );
};
