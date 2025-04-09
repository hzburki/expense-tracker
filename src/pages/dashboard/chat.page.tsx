import { DashboardLayout } from '@/layouts';
import { useState } from 'react';

// Internal Imports
import { ChatContainer, Message } from '@/components/chat';
import { useSpeechRecognition, useAudioRecording, useTransaction } from '@/hooks';

export const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content:
        '👋 Welcome to your Expense Assistant!\n\n' +
        'I can help you track expenses in multiple ways:\n' +
        '💬 Send messages like "Spent $25 on lunch"\n' +
        '📸 Upload receipt images\n' +
        '🎙️ Record voice notes\n\n' +
        'Try any method to get started!',
      type: 'system',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: 'example',
      content: 'I spent $42.50 on groceries at Walmart',
      type: 'text',
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    },
    {
      id: 'transaction-example',
      content:
        'Transaction added:\n' +
        'Amount: $42.50\n' +
        'Category: Groceries\n' +
        'Description: Walmart purchase',
      type: 'system',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      transactionInfo: {
        amount: 42.5,
        category: 'Groceries',
        description: 'Walmart purchase',
        date: new Date(),
      },
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [dragActive, setDragActive] = useState(false);

  // Custom hooks
  const { isTranscribing, startTranscribing, stopTranscribing } =
    useSpeechRecognition(setInputMessage);
  const {
    isRecording,
    audioBlob,
    setAudioBlob,
    showMicPermissionWarning,
    startRecording,
    stopRecording,
  } = useAudioRecording();
  const { isProcessing, errorMessage, processTransaction } = useTransaction();

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      type: 'text',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    await processTransaction(inputMessage, setMessages);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileType = file.type.startsWith('image/')
      ? 'image'
      : file.type.startsWith('video/')
        ? 'video'
        : 'file';

    const newMessage: Message = {
      id: Date.now().toString(),
      content: file.name,
      type: fileType,
      timestamp: new Date(),
      url: URL.createObjectURL(file),
    };

    setMessages([...messages, newMessage]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const fileType = file.type.startsWith('image/')
        ? 'image'
        : file.type.startsWith('video/')
          ? 'video'
          : 'file';

      const newMessage: Message = {
        id: Date.now().toString(),
        content: file.name,
        type: fileType,
        timestamp: new Date(),
        url: URL.createObjectURL(file),
      };

      setMessages([...messages, newMessage]);
    }
  };

  const sendAudioMessage = () => {
    if (audioBlob) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: 'Voice Note',
        type: 'audio',
        timestamp: new Date(),
        url: URL.createObjectURL(audioBlob),
      };
      setMessages([...messages, newMessage]);
      setAudioBlob(null);
    }
  };

  const handleStartRecording = async () => {
    await startRecording();
    startTranscribing();
  };

  const handleStopRecording = () => {
    stopRecording();
    stopTranscribing();
  };

  return (
    <DashboardLayout>
      <ChatContainer
        onDragOver={e => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        dragActive={dragActive}
        messages={messages}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        isProcessing={isProcessing}
        isTranscribing={isTranscribing}
        isRecording={isRecording}
        startRecording={handleStartRecording}
        stopRecording={handleStopRecording}
        handleFileUpload={handleFileUpload}
        audioBlob={audioBlob}
        setAudioBlob={setAudioBlob}
        sendAudioMessage={sendAudioMessage}
        errorMessage={errorMessage}
        showMicPermissionWarning={showMicPermissionWarning}
      />
    </DashboardLayout>
  );
};
