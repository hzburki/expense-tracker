import React, { useRef } from 'react';
import { Send, Paperclip, Mic, Square } from 'lucide-react';

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: () => void;
  isProcessing: boolean;
  isTranscribing: boolean;
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ChatInput = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
  isProcessing,
  isTranscribing,
  isRecording,
  startRecording,
  stopRecording,
  handleFileUpload,
}: ChatInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border-t border-gray-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center space-x-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
          accept="image/*,video/*,application/pdf"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer p-2 text-gray-500 transition-colors hover:text-[#2563eb]"
          title="Upload files"
        >
          <Paperclip className="h-5 w-5" />
        </button>
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`cursor-pointer p-2 transition-colors ${
            isRecording ? 'text-red-500' : 'text-gray-500 hover:text-[#2563eb]'
          }`}
          title={isRecording ? 'Stop recording' : 'Start recording'}
        >
          {isRecording ? <Square className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </button>
        <input
          type="text"
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && !isProcessing && handleSendMessage()}
          placeholder={isTranscribing ? 'Listening...' : 'Type a message...'}
          className="flex-1 rounded-full border border-gray-300 p-2 text-gray-900 placeholder:font-light placeholder:text-gray-400 focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          disabled={isProcessing || isTranscribing}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isProcessing}
          className="cursor-pointer p-2 text-[#2563eb] transition-colors hover:text-blue-700 disabled:cursor-not-allowed disabled:text-gray-300"
          title="Send message"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
