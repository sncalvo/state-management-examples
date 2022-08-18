import create from 'zustand';

interface UserContextProps {
  id?: string | number;
  setId: (id?: string | number) => void;
}

export const useUserStore = create<UserContextProps>((set) => ({
  id: undefined,
  setId: (id?: string | number) => set((state) => ({ ...state, id })),
}));
