import { useRef, useEffect } from 'react';
import { ChatBackground } from '@/components/ui/chat-background.ui';
import { ChatMessageBubble, Message } from './chat-message-bubbles';

interface ChatMessagesProps {
  messages: Message[];
  dragActive: boolean;
}

export const ChatMessages = ({ messages, dragActive }: ChatMessagesProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className={`relative flex-1 space-y-4 overflow-y-auto p-2 md:p-4 ${
        dragActive ? 'bg-[#2563eb]/5' : 'bg-[#efeae2]'
      }`}
    >
      <ChatBackground color="#667781" opacity={0.025} />
      {messages.map(message => (
        <ChatMessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
};
