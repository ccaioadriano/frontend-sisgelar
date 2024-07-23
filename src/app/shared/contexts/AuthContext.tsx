import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { login as loginService } from "../services/auth/AuthService";
import { IUserLogin } from "../services/interfaces/IUserLogin";

interface AuthContextProps {
  user: IUserLogin | undefined;
  login: (name: string, password: string) => Promise<string | void>;
  logout: () => void;
  loginError: string | undefined;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginError, setLoginError] = useState<string>();
  const [user, setUser] = useState<IUserLogin>();
  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("user");
      const storageToken = localStorage.getItem("token");
      
      if (storageUser && storageToken) {
        const parsedUser: IUserLogin = JSON.parse(storageUser);
        setUser(parsedUser);
      }
    };
    loadingStoreData();
  }, []);

  const handleLogin = useCallback(
    async (name: string, password: string): Promise<string | void> => {
      const res = await loginService(name, password);

      if (res instanceof Error) {
        setLoginError("Credenciais inválidas.");
      } else {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user);
      }
    },
    []
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated: !!user,
        loginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
