import React, { useState } from 'react';
import { subDays, startOfWeek, startOfMonth, startOfYear } from 'date-fns';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button.ui';
import { Card } from '@/components/ui/card.ui';

type RangeType = 'Range' | 'Weeks' | 'Months' | 'Years';
type PredefinedRange =
  | 'Last 7 days'
  | 'Last 30 days'
  | 'Last 90 days'
  | 'Last 12 months'
  | 'All'
  | 'Custom range'
  | 'Today'
  | 'This week'
  | 'This month'
  | 'This year';

interface DateRangeSelectorProps {
  onRangeChange: (startDate: Date, endDate: Date) => void;
}

export const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ onRangeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<PredefinedRange>('Last 30 days');
  const [activeTab, setActiveTab] = useState<RangeType>('Range');
  const [customStartDate, setCustomStartDate] = useState<string>('');
  const [customEndDate, setCustomEndDate] = useState<string>('');

  const handleRangeSelect = (range: PredefinedRange) => {
    setSelectedRange(range);
    let startDate = new Date();
    let endDate = new Date();

    switch (range) {
      case 'Last 7 days':
        startDate = subDays(new Date(), 7);
        break;
      case 'Last 30 days':
        startDate = subDays(new Date(), 30);
        break;
      case 'Last 90 days':
        startDate = subDays(new Date(), 90);
        break;
      case 'Last 12 months':
        startDate = subDays(new Date(), 365);
        break;
      case 'Today':
        startDate = new Date();
        break;
      case 'This week':
        startDate = startOfWeek(new Date());
        break;
      case 'This month':
        startDate = startOfMonth(new Date());
        break;
      case 'This year':
        startDate = startOfYear(new Date());
        break;
      case 'Custom range':
        if (customStartDate && customEndDate) {
          startDate = new Date(customStartDate);
          endDate = new Date(customEndDate);
        }
        break;
      case 'All':
        startDate = new Date(0); // Beginning of time
        break;
    }

    onRangeChange(startDate, endDate);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-64 items-center justify-between"
      >
        <span>{selectedRange}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <Card className="absolute top-full right-0 left-0 z-50 mt-1">
          <div className="p-4">
            <div className="mb-4 grid grid-cols-4 gap-0 rounded-lg bg-blue-50 p-1">
              {(['Range', 'Weeks', 'Months', 'Years'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-8">
              <div className="space-y-2">
                {[
                  'Last 7 days',
                  'Last 30 days',
                  'Last 90 days',
                  'Last 12 months',
                  'All',
                  'Custom range',
                ].map(range => (
                  <label key={range} className="flex cursor-pointer items-center space-x-2">
                    <input
                      type="radio"
                      name="range"
                      checked={selectedRange === range}
                      onChange={() => handleRangeSelect(range as PredefinedRange)}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{range}</span>
                  </label>
                ))}
                {selectedRange === 'Custom range' && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={customStartDate}
                      onChange={e => setCustomStartDate(e.target.value)}
                      className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                    <input
                      type="date"
                      value={customEndDate}
                      onChange={e => setCustomEndDate(e.target.value)}
                      className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {['Today', 'This week', 'This month', 'This year'].map(range => (
                  <label key={range} className="flex cursor-pointer items-center space-x-2">
                    <input
                      type="radio"
                      name="range"
                      checked={selectedRange === range}
                      onChange={() => handleRangeSelect(range as PredefinedRange)}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
