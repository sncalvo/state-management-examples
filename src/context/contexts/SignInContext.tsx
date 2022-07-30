import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface SignInFormContextProps {
  email: string;
  password: string;
  error?: string;
  onChangeEmail: (event: string) => void;
  onChangePassword: (event: string) => void;
  setError: (error?: string) => void;
}

const SignInContext = createContext<SignInFormContextProps>({
  email: '',
  password: '',
  error: undefined,
  onChangeEmail: () => {},
  onChangePassword: () => {},
  setError: () => {},
});

const SignInContextProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>();

  const value = useMemo(
    () => ({
      email,
      password,
      error,
      onChangeEmail: (event: string) => setEmail(event),
      onChangePassword: (event: string) => setPassword(event),
      setError: (error?: string) => setError(error),
    }),
    [email, password, error]
  );

  return <SignInContext.Provider value={value}>{children}</SignInContext.Provider>;
};

const useSignInContext = () => {
  return useContext(SignInContext);
};

export { SignInContextProvider, useSignInContext };
