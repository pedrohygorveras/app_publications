"use strict";

import jwt from "jsonwebtoken";
import { Status } from "@prisma/client";
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

const publications = {
  parseQueryValue<T>(
    value: any,
    parser: (val: any) => T,
    defaultValue?: T
  ): T | undefined {
    return value ? parser(value) : defaultValue;
  },

  parseStatus(value: any): Status | undefined {
    return Object.values(Status).includes(value as Status)
      ? (value as Status)
      : undefined;
  },
};

export default {
  oauth,
  publications,
};
