import { useState } from "react";
import { AuthContext } from "./Context";
import { AuthProviderProps } from "./types/Provider.types";
import { UserProps, AuthContextProps } from "./types/Context.types";
import {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
} from "./localStorage";
import { refreshToken } from "@/services/auth";
import { useNotifyError } from "@/hooks/useNotifyError";

const LOCAL_STORAGE_KEY = "user";

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { notifyError } = useNotifyError();

  const [user, setUser] = useState<UserProps | null>(() =>
    getLocalStorageItem<UserProps>(LOCAL_STORAGE_KEY)
  );

  const login = (userData: UserProps) => {
    setUser(userData);
    setLocalStorageItem(LOCAL_STORAGE_KEY, userData);
  };

  const logout = () => {
    setUser(null);
    removeLocalStorageItem(LOCAL_STORAGE_KEY);
  };

  const refreshAccessToken = async () => {
    try {
      if (!user) return;

      const result = await refreshToken({
        refreshToken: user.refreshToken,
      });

      if (result.error) {
        return notifyError(result.data);
      }

      const data: any = result.data;

      setUser(data);
      setLocalStorageItem(LOCAL_STORAGE_KEY, data);
    } catch {
      logout();
    }
  };

  const contextValue: AuthContextProps = {
    user,
    login,
    logout,
    refreshAccessToken,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
