import React from 'react';
import { ChatHeader } from './chat-header';
import { ChatMessages } from './chat-messages';
import { ChatInput } from './chat-input';
import { AudioPreview } from './audio-preview';
import { ErrorMessage } from './error-message';
import { Message } from './chat-message-bubbles';

interface ChatContainerProps {
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  dragActive: boolean;
  messages: Message[];
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: () => void;
  isProcessing: boolean;
  isTranscribing: boolean;
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  audioBlob: Blob | null;
  setAudioBlob: (blob: Blob | null) => void;
  sendAudioMessage: () => void;
  errorMessage: string | null;
  showMicPermissionWarning: boolean;
}

export const ChatContainer = ({
  onDragOver,
  onDragLeave,
  onDrop,
  dragActive,
  messages,
  inputMessage,
  setInputMessage,
  handleSendMessage,
  isProcessing,
  isTranscribing,
  isRecording,
  startRecording,
  stopRecording,
  handleFileUpload,
  audioBlob,
  setAudioBlob,
  sendAudioMessage,
  errorMessage,
  showMicPermissionWarning,
}: ChatContainerProps) => {
  return (
    <div
      className="flex h-full flex-col"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <ChatHeader />
      <ChatMessages messages={messages} dragActive={dragActive} />

      {audioBlob && (
        <AudioPreview
          audioBlob={audioBlob}
          setAudioBlob={setAudioBlob}
          sendAudioMessage={sendAudioMessage}
        />
      )}

      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        isProcessing={isProcessing}
        isTranscribing={isTranscribing}
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        handleFileUpload={handleFileUpload}
      />

      <ErrorMessage
        errorMessage={errorMessage}
        showMicPermissionWarning={showMicPermissionWarning}
      />
    </div>
  );
};
