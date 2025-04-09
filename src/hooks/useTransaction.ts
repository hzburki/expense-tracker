import { useState } from 'react';
import { Message } from '@/components/chat/chat-message-bubbles';

export interface TransactionResponse {
  success: boolean;
  data: {
    amount: number;
    category: string;
    description: string;
    date: Date;
  };
}

export const useTransaction = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const extractTransactionInfo = async (content: string): Promise<TransactionResponse> => {
    const mockLLMResponse = {
      success: true,
      data: {
        amount: parseFloat(content.match(/\$?(\d+(\.\d{1,2})?)/)?.[1] || '0'),
        category: content.toLowerCase().includes('food')
          ? 'Food'
          : content.toLowerCase().includes('transport')
            ? 'Transport'
            : content.toLowerCase().includes('shopping')
              ? 'Shopping'
              : 'Other',
        description: content,
        date: new Date(),
      },
    };

    return mockLLMResponse;
  };

  const saveTransaction = async (transactionInfo: TransactionResponse['data']) => {
    console.log('Saving transaction:', transactionInfo);
    return { success: true };
  };

  const processTransaction = async (
    content: string,
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  ) => {
    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const llmResponse = await extractTransactionInfo(content);

      if (llmResponse.success) {
        const saveResponse = await saveTransaction(llmResponse.data);

        if (saveResponse.success) {
          const transactionMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: `Transaction recorded:\nAmount: $${llmResponse.data.amount.toFixed(2)}\nCategory: ${llmResponse.data.category}\nDescription: ${llmResponse.data.description}`,
            type: 'transaction',
            timestamp: new Date(),
            transactionInfo: llmResponse.data,
          };

          setMessages(prev => [...prev, transactionMessage]);
        } else {
          throw new Error('Failed to save transaction');
        }
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Transaction error:', error);
      setErrorMessage('Failed to process transaction. Please try again.');
      setTimeout(() => setErrorMessage(null), 3000);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    errorMessage,
    processTransaction,
  };
};
