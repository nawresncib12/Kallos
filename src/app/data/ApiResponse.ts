export default class ApiResponse<T> {
  status: number;
  message: string;
  data: T;

  constructor(apiResponse: Partial<ApiResponse<any>>) {
    this.status = apiResponse.status ?? 200;
    this.message = apiResponse.message ?? "";
    this.data = apiResponse.data ?? null
  }

  isOk() {
    return this.status > 199 && this.status < 300
  }
}
