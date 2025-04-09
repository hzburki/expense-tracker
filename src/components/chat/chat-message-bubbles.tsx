import { Paperclip } from 'lucide-react';
import { formatMessageContent } from './utils';
import { cn } from '@/utils/tailwind.utils';

export type MessageType = 'text' | 'image' | 'video' | 'audio' | 'file' | 'transaction' | 'system';

export interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  url?: string;
  transactionInfo?: {
    amount: number;
    category: string;
    description: string;
    date: Date;
  };
}

interface ChatMessageBubbleProps {
  message: Message;
}

export const ChatMessageBubble = ({ message }: ChatMessageBubbleProps) => {
  return (
    <div
      className={`flex text-sm md:text-base ${message.type === 'system' ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={cn(
          'relative max-w-[85%] rounded-lg p-2 md:p-3',
          message.type === 'system'
            ? 'bg-emerald-50 text-emerald-900'
            : message.type === 'transaction'
              ? 'bg-red-50 text-red-900'
              : 'bg-[#d9fdd3] text-gray-900'
        )}
      >
        {message.type === 'text' && (
          <p className="break-words">{formatMessageContent(message.content)}</p>
        )}
        {message.type === 'image' && (
          <img
            src={message.url}
            alt={message.content}
            className="max-w-full cursor-pointer rounded-lg"
          />
        )}
        {message.type === 'video' && (
          <video src={message.url} controls className="max-w-full cursor-pointer rounded-lg" />
        )}
        {message.type === 'audio' && (
          <audio src={message.url} controls className="w-full cursor-pointer" />
        )}
        {message.type === 'file' && (
          <div className="flex cursor-pointer items-center space-x-2">
            <Paperclip className="h-5 w-5" />
            <span className="break-all">{message.content}</span>
          </div>
        )}
        {message.type === 'system' && (
          <div className="flex cursor-pointer items-start space-x-2">
            <span className="whitespace-pre-line">{message.content}</span>
          </div>
        )}
        <span className="mt-1 text-xs opacity-75">
          {(() => {
            const date = new Date(message.timestamp);
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);

            let dateStr = '';
            if (date.toDateString() === today.toDateString()) {
              dateStr = 'Today';
            } else if (date.toDateString() === yesterday.toDateString()) {
              dateStr = 'Yesterday';
            } else if (today.getTime() - date.getTime() < 5 * 24 * 60 * 60 * 1000) {
              dateStr = date.toLocaleDateString([], { weekday: 'long' });
            } else {
              dateStr = `
                ${date.toLocaleDateString([], {
                  month: 'short',
                  day: 'numeric',
                })} ${date.getFullYear().toString().slice(-2)}`;
            }

            return `${dateStr} | ${date.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}`;
          })()}
        </span>
      </div>
    </div>
  );
};
