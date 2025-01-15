import { ResponseProps } from "../types/ApiClient.types";

export const formatResponse = (response: ResponseProps) => {
  const { status, data, error } = response;

  return {
    status: typeof status === "number" ? status : 500,
    data: data,
    error: error,
  };
};
