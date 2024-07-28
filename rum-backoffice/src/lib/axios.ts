import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { navigate } from "./actions/redirectAction";

enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

type ServerError = { message: string };

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "*/*",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

const injectToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return config;

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

class Http {
  private instance: AxiosInstance | null = null;
  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }
  initHttp() {
    const http = axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001/api",
      headers,
    });
    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );
    http.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        return this.handleError(error);
      }
    );
    this.instance = http;
    return http;
  }
  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, F = any, R = AxiosResponse<F>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  patch<T = any, F = any, R = AxiosResponse<F>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  isAxiosError<T>(error: any): error is AxiosError<T> {
    return error instanceof AxiosError;
  }

  private handleError(error: any) {
    // Check if error is AxiosError
    if (!this.isAxiosError<ServerError>(error))
      return Promise.reject(
        new Error("Đã có lỗi xảy ra. Vui lòng thử lại sau.")
      );

    // Check if response is esxit. If the response is esxit, this response is returned from server
    const { response } = error;
    if (!response)
      return Promise.reject(
        new Error("Đã có lỗi xảy ra. Vui lòng thử lại sau.")
      );

    // Handle for each error.
    const { status } = response;
    switch (status) {
      case StatusCode.BadRequest: {
        break;
      }
      case StatusCode.InternalServerError: {
        return Promise.reject(
          new Error("Đã có lỗi xảy ra. Vui lòng thử lại sau.")
        );
      }
      case StatusCode.Forbidden: {
        return Promise.reject(new Error("Tài nguyên truy cập bị cấm."));
      }
      case StatusCode.Unauthorized: {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return Promise.reject(new Error(response.data.message));
      }
      case StatusCode.TooManyRequests: {
        break;
      }
    }
    return Promise.reject(new Error(response.data.message));
  }
}

export const http = new Http();
