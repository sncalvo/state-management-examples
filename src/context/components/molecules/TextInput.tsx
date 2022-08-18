import clsx from 'clsx';
import { memo } from 'react';
import { useSignInStore } from '../../contexts/SignInContext';

interface Props {
  name: 'email' | 'password';
  label: string;
}

function capitalize(word: 'email' | 'password') {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

export const TextInput = ({ name, label }: Props) => {
  const value = useSignInStore()[name];
  const onChange = useSignInStore()[`onChange${capitalize(name) as 'Email' | 'Password'}`];
  const error = useSignInStore().error;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className={clsx(
          'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline',
          error && 'border-red-500'
        )}
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

// export const TextInput = memo(UnmemoedTextInput);
