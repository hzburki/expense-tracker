import React, { useRef } from 'react';
import { IconButton } from '../ui/icon-button';

interface AvatarSelectorProps {
  value: string;
  style: string;
  onChange: (seed: string, style: string) => void;
  onImageUpload?: (file: File) => void;
}

const STYLES = ['adventurer', 'avataaars', 'bottts', 'fun-emoji', 'pixel-art'] as const;

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  value,
  style,
  onChange,
  onImageUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRegenerate = () => {
    const newSeed = Math.random().toString(36).substring(7);
    const currentIndex = STYLES.indexOf(style as (typeof STYLES)[number]);
    const nextIndex = (currentIndex + 1) % STYLES.length;
    onChange(newSeed, STYLES[nextIndex]);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageUpload) {
      onImageUpload(file);
    }
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
          onClick={handleFileUpload}
          className="absolute -top-2 -right-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </IconButton>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};
