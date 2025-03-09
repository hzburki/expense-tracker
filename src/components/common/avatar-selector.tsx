import React, { useRef } from 'react';
import { IconButton } from '../ui/icon-button';
import { RefreshIcon, UploadIcon } from '@/assets/icons';
import { Avatar } from '@/components/ui';

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

  // Using DiceBear library (https://www.dicebear.com) which provides different avatar styles:
  // - adventurer: Adventurer style avatars
  // - avataaars: Avatar style similar to Apple's memoji
  // - bottts: Robot style avatars
  // - fun-emoji: Emoji style avatars
  // - pixel-art: Pixel art style avatars
  //
  // Random selection:
  // - Seed: Generated using Math.random().toString(36).substring(7) to create a random string
  // - Style: Cycles through styles array using modulo operator (currentIndex + 1) % length
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
        <Avatar
          src={`https://api.dicebear.com/7.x/${style}/svg?seed=${value}`}
          alt="Avatar"
          size="lg"
          className="border-2 border-gray-200"
        />
        <IconButton
          variant="primary"
          onClick={handleRegenerate}
          className="absolute -right-2 -bottom-2"
        >
          <RefreshIcon className="h-4 w-4" />
        </IconButton>
        <IconButton
          variant="primary"
          onClick={handleFileUpload}
          className="absolute -top-2 -right-2"
        >
          <UploadIcon className="h-4 w-4" />
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
