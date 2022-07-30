import create from 'zustand';

interface UserState {
  user: string | null;
  setUser: (user: string | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));
