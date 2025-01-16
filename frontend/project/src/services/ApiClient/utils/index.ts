import { ResponseProps } from "../types/ApiClient.types";

export const formatResponse = (response: ResponseProps) => {
  const { status, data, error } = response;

  return {
    status: typeof status === "number" ? status : 500,
    data: data,
    error: error,
  };
};

export const parseResponse = async (response: Response) => {
  const contentType = response.headers.get("Content-Type") || "";
  if (contentType.includes("application/json")) {
    try {
      return await response.json();
    } catch (error) {
      return null;
    }
  }
  return response.text();
};
