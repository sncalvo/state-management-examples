import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  innerAlignment: 'horizontal' | 'vertical';
  children: ReactNode;
}

export const Card = ({ innerAlignment, children }: Props) => {
  const alignmentClass = innerAlignment === 'horizontal' ? 'flex' : 'flex-col';

  return (
    <div
      className={clsx(
        'flex gap-2 p-4',
        alignmentClass,
        'border-2 border-black-200 rounded-lg shadow-lg'
      )}
    >
      {children}
    </div>
  );
};
