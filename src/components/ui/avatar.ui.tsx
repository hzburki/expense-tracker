interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-24 w-24',
} as const;

export const Avatar = ({ src, alt, size = 'md', className = '' }: AvatarProps) => {
  const sizeClasses = SIZES[size];

  return src ? (
    <img src={src} alt={alt || 'Avatar'} className={`rounded-full ${sizeClasses} ${className}`} />
  ) : (
    <div className={`rounded-full bg-gray-200 ${sizeClasses} ${className}`} />
  );
};
