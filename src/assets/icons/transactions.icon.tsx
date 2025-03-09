import { SVGProps } from 'react';

export const TransactionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18m-18 4h18m-18 4h18"
    />
  </svg>
);
