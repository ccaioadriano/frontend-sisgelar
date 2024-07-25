import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { login as loginService } from "../services/auth/authService";
import { IUserLogin } from "../services/interfaces/IUserLogin";
import { AxiosError } from "axios";

interface AuthContextProps {
  userAuth: IUserLogin | undefined;
  login: (name: string, password: string) => Promise<string | void>;
  logout: () => void;
  loginError: string | undefined;
  isAuthenticated: boolean;
  setLoginError: (param: string) => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginError, setLoginError] = useState<string>();
  const [userAuth, setUser] = useState<IUserLogin>();
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
      if (res instanceof AxiosError) {
        switch (res.response?.status) {
          case 404:
            console.log(
              "Tentativa de login falhou. Verifique a rota da requisição."
            );
            setLoginError(
              "Tentativa de login falhou. Verifique a rota da requisição."
            );
            break;
          case 500:
            console.log(
              "Tentativa de login falhou. Verifique com o administrador do sistema."
            );
            setLoginError(
              "Tentativa de login falhou. Verifique com o administrador do sistema."
            );
            break;
          case 401:
            console.log(
              "Tentativa de login falhou. Verifique as credenciais e tente novamente."
            );
            setLoginError(
              "Credenciais inválidas. Verifique e tente novamente."
            );
            break;
        }
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
        userAuth,
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated: !!userAuth,
        loginError,
        setLoginError(param: string) {
          setLoginError(param);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
