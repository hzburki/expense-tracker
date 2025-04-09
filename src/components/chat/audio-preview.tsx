import { Send, Square } from 'lucide-react';

interface AudioPreviewProps {
  audioBlob: Blob;
  setAudioBlob: (blob: Blob | null) => void;
  sendAudioMessage: () => void;
}

export const AudioPreview = ({ audioBlob, setAudioBlob, sendAudioMessage }: AudioPreviewProps) => {
  return (
    <div className="border-t border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between rounded-lg bg-[#2563eb]/5 p-3">
        <audio src={URL.createObjectURL(audioBlob)} controls className="w-full cursor-pointer" />
        <div className="flex gap-2">
          <button
            onClick={() => setAudioBlob(null)}
            className="cursor-pointer rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
          >
            <Square className="h-5 w-5" />
          </button>
          <button
            onClick={sendAudioMessage}
            className="cursor-pointer rounded-full bg-[#2563eb] p-2 text-white transition-colors hover:bg-blue-700"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
