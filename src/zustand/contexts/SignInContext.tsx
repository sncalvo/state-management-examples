import create from 'zustand';

interface SignInFormContextProps {
  email: string;
  password: string;
  error?: string;
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
  setError: (error?: string) => void;
}

export const useSignInStore = create<SignInFormContextProps>((set) => ({
  email: '',
  password: '',
  error: undefined,
  onChangeEmail: (email: string) => set((state) => ({ ...state, email })),
  onChangePassword: (password: string) => set((state) => ({ ...state, password })),
  setError: (error?: string) => set((state) => ({ ...state, error })),
}));
