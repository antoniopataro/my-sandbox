import React, { useState, useEffect, createContext } from "react";

interface UserContextProps {
  user: string;
  registerUser: (name: string) => void;
}

export const UserContext = createContext({} as UserContextProps);

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState("");

  const registerUser = (name: string) => {
    setUser(name);

    localStorage.setItem("goLedgerUser", name);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("goLedgerUser") || "";

    setUser(storedUser);
  }, []);

  return <UserContext.Provider value={{ user, registerUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;
