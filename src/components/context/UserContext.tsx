import React, { useState } from "react";
export type AuthUser = {
  name: string;
  email: string;
};
type UserContextProviderProps = {
  children: React.ReactNode;
};
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
//Type Assertion
export const UserContext = React.createContext({} as UserContextType);
// export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
