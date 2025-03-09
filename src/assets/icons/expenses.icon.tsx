import { SVGProps } from 'react';

export const ExpensesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 4l4 4H9v12H7V8H4l4-4z" />
    <path d="M16 20l-4-4h3V4h2v12h3l-4 4z" />
  </svg>
);
