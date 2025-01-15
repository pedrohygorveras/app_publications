"use strict";

import { Request, Response } from "express";
import { validationResult, Result } from "express-validator";

import PublicationServices from "../../services/Publication";
import {
  PublicationGetAllProps,
  PublicationCreateProps,
  PublicationUpdateProps,
} from "../../../interfaces/Publication.types";

class PublicationController {
  constructor() {}

  async create(req: Request, res: Response): Promise<Response> {
    const errors: Result = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const dataObj: PublicationCreateProps = req.body;

    try {
      const result = await PublicationServices.create(dataObj);

      return res.status(201).json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const filters: PublicationGetAllProps = {
      limit: req.query.limit ? parseInt(req.query.limit as string) : 25,
      index: req.query.index ? parseInt(req.query.index as string) : 0,
      search: req.query.search ? (req.query.search as string) : undefined,
      start_date: req.query.start_date
        ? (req.query.start_date as string)
        : undefined,
      end_date: req.query.end_date ? (req.query.end_date as string) : undefined,
    };

    try {
      const result = await PublicationServices.getAll(filters);

      return res.status(200).json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }

  async get(req: Request, res: Response): Promise<Response> {
    const errors: Result = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const id = req.params.id;

    try {
      const result = await PublicationServices.get(id);

      if (!result) {
        return res.status(404).json({ message: "Publication not found." });
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const errors: Result = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const id = req.params.id;
    const dataObj: PublicationUpdateProps = req.body;

    try {
      const result = await PublicationServices.update(id, dataObj);

      return res.status(200).json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const errors: Result = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const id = req.params.id;

    try {
      await PublicationServices.delete(id);

      return res.status(204).send();
    } catch (error: any) {
      return res
        .status(500)
        .json({ error: error?.message || "Internal server error." });
    }
  }
}

export default new PublicationController();
