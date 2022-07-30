import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => (
  <button
    onClick={onClick}
    className={clsx('bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded')}
  >
    {children}
  </button>
);
