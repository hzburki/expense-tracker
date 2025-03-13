import { DashboardLayout } from '@/layouts';
// import { useState, useRef, useEffect } from 'react';
// import { Send, Paperclip, Mic, Square, AlertCircle, CheckCircle2 } from 'lucide-react';
// import { ChatBackground } from '@/components/ui/chat-background.ui';

// Web Speech API types
// interface SpeechRecognitionErrorEvent extends Event {
//   error: string;
// }

// interface SpeechRecognitionEvent extends Event {
//   results: {
//     item(index: number): SpeechRecognitionResult;
//     length: number;
//     [index: number]: SpeechRecognitionResult;
//   };
// }

// interface SpeechRecognitionResult {
//   isFinal: boolean;
//   [index: number]: SpeechRecognitionAlternative;
// }

// interface SpeechRecognitionAlternative {
//   transcript: string;
//   confidence: number;
// }

// interface SpeechRecognition extends EventTarget {
//   continuous: boolean;
//   interimResults: boolean;
//   lang: string;
//   onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
//   onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
//   onend: ((this: SpeechRecognition) => void) | null;
//   start(): void;
//   stop(): void;
//   abort(): void;
// }

// interface SpeechRecognitionConstructor {
//   new (): SpeechRecognition;
// }

// declare global {
//   interface Window {
//     webkitSpeechRecognition: SpeechRecognitionConstructor;
//   }
// }

// type MessageType = 'text' | 'image' | 'video' | 'audio' | 'file' | 'transaction' | 'system';

// interface Message {
//   id: string;
//   content: string;
//   type: MessageType;
//   timestamp: Date;
//   url?: string;
//   transactionInfo?: {
//     amount: number;
//     category: string;
//     description: string;
//     date: Date;
//   };
// }

// interface TransactionResponse {
//   success: boolean;
//   data: {
//     amount: number;
//     category: string;
//     description: string;
//     date: Date;
//   };
// }

export const ChatPage = () => {
  // const [messages, setMessages] = useState<Message[]>([
  //   {
  //     id: 'welcome',
  //     content:
  //       '👋 Welcome to your Expense Assistant!\n\n' +
  //       'I can help you track expenses in multiple ways:\n' +
  //       '💬 Send messages like "Spent $25 on lunch"\n' +
  //       '📸 Upload receipt images\n' +
  //       '🎙️ Record voice notes\n' +
  //       '📄 Drop PDF files\n\n' +
  //       'Try any method to get started!',
  //     type: 'system',
  //     timestamp: new Date(),
  //   },
  //   {
  //     id: 'example',
  //     content: 'I spent $42.50 on groceries at Walmart',
  //     type: 'text',
  //     timestamp: new Date(),
  //   },
  //   {
  //     id: 'transaction-example',
  //     content:
  //       'Transaction added:\n' +
  //       'Amount: $42.50\n' +
  //       'Category: Groceries\n' +
  //       'Description: Walmart purchase',
  //     type: 'transaction',
  //     timestamp: new Date(),
  //     transactionInfo: {
  //       amount: 42.5,
  //       category: 'Groceries',
  //       description: 'Walmart purchase',
  //       date: new Date(),
  //     },
  //   },
  //   {
  //     id: 'tip',
  //     content:
  //       '💡 Pro Tip: For better categorization, include details like:\n' +
  //       '• Store name (e.g., "Walmart", "Starbucks")\n' +
  //       '• Category (e.g., "groceries", "coffee")\n' +
  //       '• Date (e.g., "today", "yesterday")',
  //     type: 'system',
  //     timestamp: new Date(),
  //   },
  // ]);
  // const [inputMessage, setInputMessage] = useState('');
  // const [isRecording, setIsRecording] = useState(false);
  // const [audioPermission, setAudioPermission] = useState<boolean | null>(null);
  // const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  // const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  // const [showMicPermissionWarning, setShowMicPermissionWarning] = useState(false);
  // const [dragActive, setDragActive] = useState(false);
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const [isProcessing, setIsProcessing] = useState(false);
  // const [isTranscribing, setIsTranscribing] = useState(false);

  // const fileInputRef = useRef<HTMLInputElement>(null);
  // const chatContainerRef = useRef<HTMLDivElement>(null);
  // const audioChunksRef = useRef<Blob[]>([]);
  // const recognitionRef = useRef<SpeechRecognition | null>(null);

  // useEffect(() => {
  //   const storedPermission = localStorage.getItem('microphonePermission');

  //   if (storedPermission) {
  //     setAudioPermission(storedPermission === 'granted');
  //   } else {
  //     navigator.mediaDevices
  //       .getUserMedia({ audio: true })
  //       .then(() => {
  //         setAudioPermission(true);
  //         localStorage.setItem('microphonePermission', 'granted');
  //       })
  //       .catch((err: Error) => {
  //         console.error('Microphone permission error:', err);
  //         setAudioPermission(false);
  //         localStorage.setItem('microphonePermission', 'denied');
  //       });
  //   }

  //   if ('webkitSpeechRecognition' in window) {
  //     const SpeechRecognition = window.webkitSpeechRecognition;
  //     recognitionRef.current = new SpeechRecognition();
  //     recognitionRef.current.continuous = true;
  //     recognitionRef.current.interimResults = true;

  //     recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
  //       const transcript = Array.from(event.results)
  //         .map(result => result[0].transcript)
  //         .join('');

  //       if (event.results[0].isFinal) {
  //         setInputMessage(transcript);
  //       }
  //     };

  //     recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
  //       console.error('Speech recognition error:', event.error);
  //       setIsTranscribing(false);
  //     };

  //     recognitionRef.current.onend = () => {
  //       setIsTranscribing(false);
  //     };
  //   }

  //   return () => {
  //     if (recognitionRef.current) {
  //       recognitionRef.current.abort();
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  //   }
  // }, [messages]);

  // const extractTransactionInfo = async (content: string): Promise<TransactionResponse> => {
  //   const mockLLMResponse = {
  //     success: true,
  //     data: {
  //       amount: parseFloat(content.match(/\$?(\d+(\.\d{1,2})?)/)?.[1] || '0'),
  //       category: content.toLowerCase().includes('food')
  //         ? 'Food'
  //         : content.toLowerCase().includes('transport')
  //           ? 'Transport'
  //           : content.toLowerCase().includes('shopping')
  //             ? 'Shopping'
  //             : 'Other',
  //       description: content,
  //       date: new Date(),
  //     },
  //   };

  //   return mockLLMResponse;
  // };

  // const saveTransaction = async (transactionInfo: TransactionResponse['data']) => {
  //   console.log('Saving transaction:', transactionInfo);
  //   return { success: true };
  // };

  // const handleSendMessage = async () => {
  //   if (!inputMessage.trim()) return;

  //   const userMessage: Message = {
  //     id: Date.now().toString(),
  //     content: inputMessage,
  //     type: 'text',
  //     timestamp: new Date(),
  //   };

  //   setMessages(prev => [...prev, userMessage]);
  //   setInputMessage('');
  //   setIsProcessing(true);

  //   try {
  //     const llmResponse = await extractTransactionInfo(inputMessage);

  //     if (llmResponse.success) {
  //       const saveResponse = await saveTransaction(llmResponse.data);

  //       if (saveResponse.success) {
  //         const transactionMessage: Message = {
  //           id: (Date.now() + 1).toString(),
  //           content: `Transaction recorded:\nAmount: $${llmResponse.data.amount.toFixed(2)}\nCategory: ${llmResponse.data.category}\nDescription: ${llmResponse.data.description}`,
  //           type: 'transaction',
  //           timestamp: new Date(),
  //           transactionInfo: llmResponse.data,
  //         };

  //         setMessages(prev => [...prev, transactionMessage]);
  //       } else {
  //         throw new Error('Failed to save transaction');
  //       }
  //     }
  //   } catch (err: unknown) {
  //     const error = err as Error;
  //     console.error('Transaction error:', error);
  //     setErrorMessage('Failed to process transaction. Please try again.');
  //     setTimeout(() => setErrorMessage(null), 3000);
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };

  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   const fileType = file.type.startsWith('image/')
  //     ? 'image'
  //     : file.type.startsWith('video/')
  //       ? 'video'
  //       : 'file';

  //   const newMessage: Message = {
  //     id: Date.now().toString(),
  //     content: file.name,
  //     type: fileType,
  //     timestamp: new Date(),
  //     url: URL.createObjectURL(file),
  //   };

  //   setMessages([...messages, newMessage]);
  // };

  // const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   setDragActive(false);

  //   if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
  //     const file = e.dataTransfer.files[0];
  //     const fileType = file.type.startsWith('image/')
  //       ? 'image'
  //       : file.type.startsWith('video/')
  //         ? 'video'
  //         : 'file';

  //     const newMessage: Message = {
  //       id: Date.now().toString(),
  //       content: file.name,
  //       type: fileType,
  //       timestamp: new Date(),
  //       url: URL.createObjectURL(file),
  //     };

  //     setMessages([...messages, newMessage]);
  //   }
  // };

  // const startRecording = async () => {
  //   if (!audioPermission) {
  //     setShowMicPermissionWarning(true);
  //     setTimeout(() => setShowMicPermissionWarning(false), 3000);
  //     return;
  //   }

  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //     const recorder = new MediaRecorder(stream);

  //     recorder.ondataavailable = (e: BlobEvent) => {
  //       if (e.data.size > 0) {
  //         audioChunksRef.current.push(e.data);
  //       }
  //     };

  //     recorder.onstop = () => {
  //       const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
  //       setAudioBlob(audioBlob);
  //       audioChunksRef.current = [];
  //     };

  //     recorder.start();
  //     setMediaRecorder(recorder);
  //     setIsRecording(true);

  //     if (recognitionRef.current) {
  //       setIsTranscribing(true);
  //       recognitionRef.current.start();
  //     }
  //   } catch (err: unknown) {
  //     const error = err as Error;
  //     console.error('Error starting recording:', error);
  //     setAudioPermission(false);
  //     localStorage.setItem('microphonePermission', 'denied');
  //   }
  // };

  // const stopRecording = () => {
  //   if (mediaRecorder && mediaRecorder.state !== 'inactive') {
  //     mediaRecorder.stop();
  //     setIsRecording(false);
  //     mediaRecorder.stream.getTracks().forEach(track => track.stop());
  //   }

  //   if (recognitionRef.current) {
  //     recognitionRef.current.stop();
  //   }
  // };

  // const sendAudioMessage = () => {
  //   if (audioBlob) {
  //     const newMessage: Message = {
  //       id: Date.now().toString(),
  //       content: 'Voice Note',
  //       type: 'audio',
  //       timestamp: new Date(),
  //       url: URL.createObjectURL(audioBlob),
  //     };
  //     setMessages([...messages, newMessage]);
  //     setAudioBlob(null);
  //   }
  // };

  // const formatMessageContent = (content: string) => {
  //   const urlRegex = /(https?:\/\/[^\s]+)/g;
  //   return content.split(urlRegex).map((part, index) => {
  //     if (part.match(urlRegex)) {
  //       return (
  //         <a
  //           key={index}
  //           href={part}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="cursor-pointer text-blue-100 underline hover:text-blue-50"
  //         >
  //           {part}
  //         </a>
  //       );
  //     }
  //     return part;
  //   });
  // };

  return (
    <DashboardLayout>
      {/* <div
        className="flex h-full flex-col"
        onDragOver={e => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
      >
        <div className="border-b border-gray-300 bg-white px-4 py-3 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">Expense Assistant</h1>
          <p className="text-sm text-gray-500">
            Send messages, images, or voice notes to add transactions
          </p>
        </div>

        <div
          ref={chatContainerRef}
          className={`relative flex-1 space-y-4 overflow-y-auto p-4 ${
            dragActive ? 'bg-[#2563eb]/5' : 'bg-[#efeae2]'
          }`}
        >
          <ChatBackground color="#667781" opacity={0.025} />
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${
                message.type === 'transaction' || message.type === 'system'
                  ? 'justify-center'
                  : 'justify-end'
              }`}
            >
              <div
                className={`relative max-w-[85%] rounded-lg p-3 ${
                  message.type === 'transaction'
                    ? 'bg-emerald-50 text-emerald-900'
                    : message.type === 'system'
                      ? 'bg-red-50 text-red-900'
                      : 'bg-[#d9fdd3] text-gray-900'
                }`}
              >
                {' '}
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
                  <video
                    src={message.url}
                    controls
                    className="max-w-full cursor-pointer rounded-lg"
                  />
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
                {message.type === 'transaction' && (
                  <div className="flex cursor-pointer items-start space-x-2">
                    <CheckCircle2 className="mt-1 h-5 w-5" />
                    <span className="whitespace-pre-line">{message.content}</span>
                  </div>
                )}
                <span className="mt-1 self-end text-xs opacity-75">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {audioBlob && (
          <div className="border-t border-gray-200 bg-white px-4 py-3">
            <div className="flex items-center justify-between rounded-lg bg-[#2563eb]/5 p-3">
              <audio
                src={URL.createObjectURL(audioBlob)}
                controls
                className="w-full cursor-pointer"
              />
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
        )}

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

        {(errorMessage || showMicPermissionWarning) && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <span>{errorMessage || 'Please allow microphone access to record voice notes'}</span>
            </div>
          </div>
        )}
      </div> */}

      <h1>Chat Page</h1>
    </DashboardLayout>
  );
};
