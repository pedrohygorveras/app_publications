import { getUser, setUser } from "@/util/store";
import { refreshTokenAPI, isTokenExpired } from "@/services/auth";
import { sessionStorageUtil } from "../util/sessionStorageUtil";
import { findUser } from "@/services/user";

const checkAndRefreshToken = async (): Promise<boolean> => {
  const user = getUser();

  if (!user) {
    clearUserData();
    return false;
  }

  const isExpired = isTokenExpired(user.accessToken);
  const userResult = await findUser();

  const validUser = !userResult || userResult.error ? true : false;

  if (isExpired || validUser) {
    try {
      const { accessToken } = await refreshTokenAPI(user);
      user.accessToken = accessToken;
      setUser(user);
      sessionStorageUtil.set("user", user);
    } catch (error) {
      clearUserData();
      return false;
    }
  }

  const { refreshToken } = user;
  const result = await refreshTokenAPI({ refreshToken });

  if (result.error) {
    clearUserData();
    return false;
  }

  await setUser(result);
  return true;
};

const clearUserData = () => {
  setUser(null);
  sessionStorageUtil.remove("user");
};

export const authService = {
  checkAndRefreshToken,
  clearUserData,
};
