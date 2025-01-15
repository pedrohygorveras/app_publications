"use strict";

import PublicationRepository from "../../repositories/Publication";
import {
  PublicationCreateProps,
  PublicationGetAllProps,
  PublicationUpdateProps,
} from "../../../interfaces/Publication.types";

class PublicationServices {
  constructor() {}

  async create(data: PublicationCreateProps) {
    try {
      const result = await PublicationRepository.create(data);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async getAll(filters: PublicationGetAllProps) {
    try {
      const result = await PublicationRepository.getAll(filters);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async get(id: string) {
    try {
      const result = await PublicationRepository.get(id);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async update(id: string, data: PublicationUpdateProps) {
    try {
      const result = await PublicationRepository.update(id, data);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      await PublicationRepository.delete(id);
    } catch (error: any) {
      throw error;
    }
  }
}

export default new PublicationServices();
