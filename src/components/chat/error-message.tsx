import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  errorMessage: string | null;
  showMicPermissionWarning: boolean;
}

export const ErrorMessage = ({ errorMessage, showMicPermissionWarning }: ErrorMessageProps) => {
  if (!errorMessage && !showMicPermissionWarning) return null;

  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg">
      <div className="flex items-center gap-2">
        <AlertCircle className="h-5 w-5" />
        <span>{errorMessage || 'Please allow microphone access to record voice notes'}</span>
      </div>
    </div>
  );
};
