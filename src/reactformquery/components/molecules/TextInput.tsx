import clsx from 'clsx';
import { FieldErrorsImpl, useFormContext, useFormState } from 'react-hook-form';

interface Props {
  name: 'email' | 'password';
  label: string;
}

export const TextInput = ({ name, label }: Props) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  const error = get(errors, name, undefined);

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
        type="text"
        {...register(name)}
      />
      {error && <p className="text-red-500 text-xs italic">{JSON.stringify(error)}</p>}
    </div>
  );
};

function get(object: any, path: string, fallback: undefined): string | undefined {
  const dot = path.indexOf('.');

  if (object === undefined) {
    return fallback || undefined;
  }

  if (dot === -1) {
    if (path.length && path in object) {
      return object[path];
    }
    return fallback || undefined;
  }

  return get(object[path.substr(0, dot)], path.substr(dot + 1), fallback);
}
