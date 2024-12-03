import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import UserService from "../API/UserService";
import { IUser } from "../types/types";

const AuthContext = createContext<{ user: IUser } | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser>(null);

  useEffect(() => {
    (async function () {
      try {
        setUser(await UserService.authenticate());
      } catch (e) {
        alert("An error occurred! Try later or contact support.");
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
