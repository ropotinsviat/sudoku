import { createContext, useState, useEffect } from "react";
import UserService from "../API/UserService";
import { useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setUser(await UserService.authenticate());
      } catch (e) {
        alert("An error occured! Try later or contact support.");
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
