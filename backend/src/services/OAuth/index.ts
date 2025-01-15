"use strict";

import OAuthRepository from "../../repositories/OAuth";

import {
  OAuthLoginProps,
  OAuthRegisterProps,
} from "../../../interfaces/OAuth.types";

class OAuthServices {
  constructor() {}

  async login(data: OAuthLoginProps) {
    try {
      const result = await OAuthRepository.login(data);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async register(data: OAuthRegisterProps) {
    try {
      const result = await OAuthRepository.register(data);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const result = await OAuthRepository.refreshToken(refreshToken);
      return result;
    } catch (error: any) {
      throw error;
    }
  }
}

export default new OAuthServices();
