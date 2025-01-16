export type HeadersProps = Record<string, string>;

export type RequestMethodProps = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type RequestOptionsProps = {
  url: string;
  method?: RequestMethodProps;
  body?: any;
  headers?: HeadersProps;
};

export type ResponseProps = {
  status: number;
  data: any;
  error?: boolean;
};
