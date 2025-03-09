import React from 'react';
import { IconButton } from '../ui/IconButton';

interface AvatarSelectorProps {
  value: string;
  style: string;
  onChange: (seed: string, style: string) => void;
}

const STYLES = ['adventurer', 'avataaars', 'bottts', 'fun-emoji', 'pixel-art'] as const;

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({ value, style, onChange }) => {
  const generateRandomSeed = () => Math.random().toString(36).substring(7);

  const handleRegenerate = () => {
    onChange(generateRandomSeed(), style);
  };

  const handleChangeStyle = () => {
    const currentIndex = STYLES.indexOf(style as (typeof STYLES)[number]);
    const nextIndex = (currentIndex + 1) % STYLES.length;
    onChange(value, STYLES[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="group relative">
        <img
          src={`https://api.dicebear.com/7.x/${style}/svg?seed=${value}`}
          alt="Avatar"
          className="h-24 w-24 rounded-full border-2 border-gray-200"
        />
        <IconButton
          variant="primary"
          onClick={handleRegenerate}
          className="absolute -right-2 -bottom-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </IconButton>
        <IconButton
          variant="primary"
          onClick={handleChangeStyle}
          className="absolute -top-2 -right-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
};
