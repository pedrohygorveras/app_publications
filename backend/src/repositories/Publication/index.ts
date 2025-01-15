"use strict";

import { PrismaClient } from "@prisma/client";
import {
  PublicationCreateProps,
  PublicationGetAllProps,
  PublicationUpdateProps,
} from "../../../interfaces/Publication.types";

class PublicationRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: PublicationCreateProps) {
    try {
      const publication = await this.prisma.publication.create({
        data: {
          ...data,
          defendant: "Instituto Nacional do Seguro Social - INSS",
          status: "new",
        },
      });

      return publication;
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async getAll(filters: PublicationGetAllProps) {
    try {
      const { index, limit, status, search, start_date, end_date } = filters;

      const publications = await this.prisma.publication.findMany({
        where: {
          AND: [
            {
              process_number: {
                contains: search || undefined,
                mode: "insensitive",
              },
            },
            {
              publication_date: {
                gte: start_date ? new Date(start_date) : undefined,
                lte: end_date ? new Date(end_date) : undefined,
              },
            },
            {
              status: status || undefined,
            },
          ],
        },
        orderBy: {
          publication_date: "desc",
        },
        take: limit,
        skip: limit * index,
      });
      return publications;
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async get(id: string) {
    try {
      const publication = await this.prisma.publication.findUnique({
        where: { publication_id: id },
      });
      return publication;
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async update(id: string, data: PublicationUpdateProps) {
    try {
      const updatedPublication = await this.prisma.publication.update({
        where: { publication_id: id },
        data: {
          ...data,
        },
      });

      return updatedPublication;
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async delete(id: string) {
    try {
      await this.prisma.publication.delete({
        where: { publication_id: id },
      });
    } catch (error: any) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default new PublicationRepository();
