import { RequestOptionsProps, ResponseProps } from "./types/ApiClient.types";
import { formatResponse, parseResponse } from "./utils";

export class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
  }

  public async request({
    url,
    method = "GET",
    body,
    headers,
  }: RequestOptionsProps): Promise<ResponseProps> {
    try {
      const response = await fetch(`${this.baseUrl}/${url}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      const data = await parseResponse(response);

      if (!response.ok) {
        return formatResponse({
          status: response.status,
          data: data?.message || data?.error || "An error occurred",
          error: true,
        });
      }

      return formatResponse({
        status: response.status,
        data,
      });
    } catch (error: any) {
      return formatResponse({
        status: 500,
        data: error?.message || "Internal Server Error",
        error: true,
      });
    }
  }
}
