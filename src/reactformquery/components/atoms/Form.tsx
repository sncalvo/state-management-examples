import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props<T> {
  onSubmit: (values: T) => void;
}

const Form = <T,>({ children, onSubmit }: PropsWithChildren<Props<T>>) => {
  const { control, ...methods } = useForm<T>();

  const handleSubmit = methods.handleSubmit((values) => {
    const castedValues = values as T;
    if (onSubmit) onSubmit(castedValues);
  });

  return (
    <>
      <FormProvider {...methods} control={control}>
        <form onSubmit={handleSubmit} className="h-100 w-100">
          {children}
        </form>
      </FormProvider>
    </>
  );
};
export default Form;
