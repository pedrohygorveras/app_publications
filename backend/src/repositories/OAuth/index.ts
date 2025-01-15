"use strict";

import { PrismaClient } from "@prisma/client";

import bcryptjs from "bcryptjs";

import {
  OAuthLoginProps,
  OAuthRegisterProps,
} from "../../../interfaces/OAuth.types";

import helpers from "../../helpers";

class OAuthRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async login(data: OAuthLoginProps) {
    try {
      const { email, password } = data;

      const user = await this.prisma.user.findFirst({
        where: { email },
      });

      if (user && user.password_hash) {
        let validator = bcryptjs.compareSync(password, user.password_hash);

        if (validator) {
          const userData = {
            user_id: user.user_id,
            name: user.name,
            email: user.email,
          };

          return {
            userData: userData,
            refreshToken: await helpers.oauth.generateRefreshToken(userData),
            accessToken: await helpers.oauth.generateToken(userData),
          };
        }
      }

      throw new Error("Usuário e/ou senha inválidos.");
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async register(data: OAuthRegisterProps) {
    try {
      const { name, email, password } = data;

      const user = await this.prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(password, salt);

        const new_user = await this.prisma.user.create({
          data: {
            name,
            email,
            password_hash: hash,
          },
        });

        const userData = {
          user_id: new_user.user_id,
          name: new_user.name,
          mail: new_user.email,
        };

        return {
          userData,
          refreshToken: await helpers.oauth.generateRefreshToken(userData),
          accessToken: await helpers.oauth.generateToken(userData),
        };
      }

      throw new Error("E-mail já cadastrado.");
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      let { err, decoded } = await helpers.oauth.validateRefreshToken(
        refreshToken
      );

      if (!err) {
        let { user_id } = decoded;

        const user = await this.prisma.user.findFirst({
          where: { user_id },
        });

        let userData:
          | {
              user_id: string;
              name?: string;
              surname?: string;
              mail?: string;
              photo?: string;
              first_access?: string;
            }
          | {} = {};

        if (user) {
          userData = {
            user_id: user.user_id,
            name: user.name,
            mail: user.email,
          };

          return {
            userData,
            refreshToken: await helpers.oauth.generateRefreshToken(userData),
            accessToken: await helpers.oauth.generateToken(userData),
          };
        } else {
          throw new Error("Usuário não encontrado.");
        }
      } else {
        throw new Error("Refresh token inválido.");
      }
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default new OAuthRepository();
