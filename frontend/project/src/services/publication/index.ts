import { ApiClient } from "@/services/ApiClient";
import {
  CreatePublicationProps,
  UpdatePublicationProps,
  PublicationGetAllProps,
} from "../types/publication.types";

const createPublication = async (
  body: CreatePublicationProps,
  token: string
) => {
  return new ApiClient().request({
    url: "publication",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
  });
};

const getPublications = async (
  filters: PublicationGetAllProps,
  token: string
) => {
  const limit = `limit=${filters.limit || 25}`;
  const index = `index=${filters.index || 0}`;
  const search = filters.search
    ? `&search=${encodeURIComponent(filters.search)}`
    : "";
  const status = filters.status
    ? `&status=${encodeURIComponent(filters.status)}`
    : "";
  const startDate = filters.start_date
    ? `&start_date=${encodeURIComponent(filters.start_date)}`
    : "";
  const endDate = filters.end_date
    ? `&end_date=${encodeURIComponent(filters.end_date)}`
    : "";

  const queryString = `publication?${limit}&${index}${search}${status}${startDate}${endDate}`;

  return new ApiClient().request({
    url: queryString,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getPublicationById = async (id: string, token: string) => {
  return new ApiClient().request({
    url: `publication/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updatePublication = async (
  id: string,
  body: UpdatePublicationProps,
  token: string
) => {
  return new ApiClient().request({
    url: `publication/${id}`,
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
  });
};

const deletePublication = async (id: string, token: string) => {
  return new ApiClient().request({
    url: `publication/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  createPublication,
  getPublications,
  getPublicationById,
  updatePublication,
  deletePublication,
};
