import { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import { AuthProviderProps } from "./types/Provider.types";
import { UserProps, AuthContextProps } from "./types/Context.types";
import {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
} from "./localStorage";
import { refreshToken } from "@/services/auth";

const LOCAL_STORAGE_KEY = "user";

const AuthProvider = ({ children }: AuthProviderProps) => {
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

      const response = await refreshToken({
        refreshToken: user.refreshToken,
      });

      if (response.error) {
        return logout();
      }

      const userData = response.data.userData;

      setUser(userData);
      setLocalStorageItem(LOCAL_STORAGE_KEY, userData);
    } catch {
      logout();
    }
  };

  useEffect(() => {
    const load = async () => {
      if (user) await refreshAccessToken();
    };

    load();
  }, [user]);

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
