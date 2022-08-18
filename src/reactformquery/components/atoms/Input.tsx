import clsx from 'clsx';

import type { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx(
        'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700',
        'leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
      )}
    />
  );
};
