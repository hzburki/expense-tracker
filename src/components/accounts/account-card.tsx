import { type ReactNode } from 'react';

interface AccountCardProps {
  name: string;
  balance: string;
  color: string;
  icon: ReactNode;
}

export const AccountCard = ({ name, balance, color, icon }: AccountCardProps) => {
  return (
    <div
      className="relative h-16 w-full cursor-pointer overflow-hidden rounded-xl border border-transparent p-3.5 text-white shadow-lg transition-transform hover:scale-105"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-1/2 right-3 -translate-y-1/2 opacity-10">{icon}</div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <h3 className="truncate text-xs font-medium whitespace-nowrap text-white/90">{name}</h3>
        <p className="text-sm font-semibold text-white/90">{balance}</p>
      </div>
    </div>
  );
};
