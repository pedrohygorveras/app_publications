"use strict";

import jwt from "jsonwebtoken";

import env from "../../environments";

const oauth = {
  generateToken: async (payload: any): Promise<any> => {
    return jwt.sign(payload, env.SECRET, {
      expiresIn: env.TOKEN_LIFE,
    });
  },

  generateRefreshToken: async (payload: any): Promise<any> => {
    return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {
      expiresIn: env.REFRESH_TOKEN_LIFE,
    });
  },

  validateToken: (token: string): any => {
    return jwt.verify(token, env.SECRET, (err?, decoded?) => {
      return {
        err: err ? true : false,
        decoded,
      };
    });
  },

  validateRefreshToken: (token: string): any => {
    return jwt.verify(token, env.REFRESH_TOKEN_SECRET, (err?, decoded?) => {
      return {
        err: err ? true : false,
        decoded,
      };
    });
  },

  verifyToken: (token: string): any => {
    try {
      return jwt.verify(token, env.SECRET);
    } catch (error: any) {
      throw new Error("Invalid or expired token");
    }
  },
};

export default {
  oauth,
};
