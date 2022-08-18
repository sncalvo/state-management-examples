import clsx from 'clsx';
import { memo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button = memo(({ children, onClick, type = 'button' }: Props) => (
  <button
    onClick={onClick}
    className={clsx('bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded')}
    type={type}
  >
    {children}
  </button>
));

Button.displayName = 'Button';
