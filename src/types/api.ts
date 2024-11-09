export type PaginateData<Data> = {
  data_per_page: Data;
  meta: {
    page: number;
    max_page: number;
  };
};

export interface PaginatedApiResponse<DataType> {
  success: boolean;
  message: string;
  statusCode: number;
  responseObject: PaginateData<DataType>;
}

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  statusCode: number;
  responseObject: T;
};

export type ApiError = {
  success: boolean;
  message: string;
  statusCode: number;
};

export type UninterceptedApiError = {
  success: boolean;
  message: string | Record<string, string[]>;
  statusCode: number;
};
