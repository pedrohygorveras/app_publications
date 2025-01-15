"use strict";

import { Request, Response } from "express";
import { validationResult, Result } from "express-validator";

import OAuthServices from "../../services/OAuth";

import {
  OAuthLoginProps,
  OAuthRegisterProps,
} from "../../../interfaces/OAuth.types";

class OAuthController {
  constructor() {}

  async login(req: Request | any, res: Response): Promise<Response> {
    const errors: Result = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const email = req.body.email as string;
    const password = req.body.password as string;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Invalid data. Email and password are required." });
    }

    const dataObj: OAuthLoginProps = {
      email: email,
      password: password,
    };

    try {
      let result = await OAuthServices.login(dataObj);

      return res.json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }

  async register(req: Request | any, res: Response): Promise<Response> {
    const errors: Result = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const name = req.body.name as string;
    const email = req.body.email as string;
    const password = req.body.password as string;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Invalid data. Name, email, and password are required.",
      });
    }

    const dataObj: OAuthRegisterProps = {
      name: name,
      email: email,
      password: password,
    };

    try {
      let result = await OAuthServices.register(dataObj);

      return res.json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }

  async refreshToken(req: Request | any, res: Response): Promise<Response> {
    const errors: Result = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const refreshToken = req.body.refreshToken as string;

    if (!refreshToken) {
      return res
        .status(400)
        .json({ message: "Invalid data. Refresh token is required." });
    }

    try {
      const result = await OAuthServices.refreshToken(refreshToken);
      return res.json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }
}

export default new OAuthController();
