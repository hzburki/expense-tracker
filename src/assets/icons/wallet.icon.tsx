import { type SVGProps } from 'react';

export const WalletIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M21 12V7H5a2 2 0 0 0 0 4h15v1a2 2 0 0 1-2 2H5a2 2 0 0 0 0 4h18v-5Z" />
      <path d="M3 5v14a2 2 0 0 0 2 2h18" />
    </svg>
  );
};
