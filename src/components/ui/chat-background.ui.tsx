interface ChatBackgroundProps {
  color?: string;
  opacity?: number;
}

export const ChatBackground = ({ color = '#667781', opacity = 0.025 }: ChatBackgroundProps) => {
  return (
    <div className="absolute inset-0 -z-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
        <defs>
          <pattern
            id="doodlePattern"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            {/* Tiny Dots */}
            <circle cx="2" cy="2" r="0.5" fill={color} />
            <circle cx="14" cy="2" r="0.5" fill={color} />
            <circle cx="8" cy="8" r="0.5" fill={color} />
            <circle cx="2" cy="14" r="0.5" fill={color} />
            <circle cx="14" cy="14" r="0.5" fill={color} />

            {/* Micro Curves */}
            <path d="M4 8 Q8 6, 12 8" stroke={color} strokeWidth="0.4" fill="none" />
            <path d="M4 10 Q8 12, 12 10" stroke={color} strokeWidth="0.4" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodlePattern)" />
      </svg>
    </div>
  );
};
