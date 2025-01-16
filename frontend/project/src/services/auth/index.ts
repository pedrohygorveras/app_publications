import { ApiClient } from "@/services/ApiClient";
import {
  SignInProps,
  RegisterProps,
  RefreshTokenProps,
} from "../types/auth.types";

const signIn = async (body: SignInProps) => {
  return new ApiClient().request({
    url: "oauth/login",
    method: "POST",
    body,
  });
};

const register = async (body: RegisterProps) => {
  return new ApiClient().request({
    url: "oauth/register",
    method: "POST",
    body,
  });
};

const refreshToken = async (body: RefreshTokenProps) => {
  return await new ApiClient().request({
    url: "oauth/refresh-token",
    method: "POST",
    body,
  });
};

export { signIn, register, refreshToken };
