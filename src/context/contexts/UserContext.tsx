import { createContext, ReactNode, useContext, useState } from 'react';

const UserContext = createContext<[string | null, (user: string | null) => void]>([null, () => {}]);

const useUser = () => {
  const userState = useState<string | null>(null);

  return userState;
};

const useUserStore = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const userState = useUser();

  return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
};

export { UserProvider, useUser, useUserStore };
