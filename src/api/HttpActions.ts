
import * as Axios from 'axios';
import AxiosStatic from 'axios';

class HttpActions {
  private request: Axios.AxiosInstance;

  constructor(baseURL: string, auth?: string) {
    const baseConfig: Axios.AxiosRequestConfig = {
      baseURL,
      withCredentials: false,
    };

    this.request = AxiosStatic.create(baseConfig);

    this.request.interceptors.request.use((config) => {
      config.headers.Authorization = auth;
      return config;
    });
  }

  public get<T>(url: string, params?: object, options?: Axios.AxiosRequestConfig): Axios.AxiosPromise<T> {
    const config: Axios.AxiosRequestConfig = { params, ...options };
    return this.request.get(url, config);
  }

  public post<T>(url: string, data?: any, options?: Axios.AxiosRequestConfig): Axios.AxiosPromise<T> {
    return this.request.post(url, data, options);
  }

  public patch<T>(url: string, data: any, options: Axios.AxiosRequestConfig): Axios.AxiosPromise<T> {
    return this.request.patch(url, data, options);
  }

  public del<T>(url: string, data: any, params: object, options: Axios.AxiosRequestConfig): Axios.AxiosPromise<T> {
    const config: Axios.AxiosRequestConfig = { url, data, params, ...options };
    return this.request.delete(url, config);
  }

  public put<T>(url: string, data: any, params: object, options: Axios.AxiosRequestConfig): Axios.AxiosPromise<T> {
    return this.request.put(url, data, { params, ...options });
  }
}

export default HttpActions;
