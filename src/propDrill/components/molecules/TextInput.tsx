import clsx from 'clsx';

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const TextInput = ({ name, label, value, onChange, error }: Props) => {
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
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};
