import Axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// 创建一个自定义的Axios实例
const instance: AxiosInstance = Axios.create({
  // 在这里设置默认的请求配置，例如 baseURL、timeout 等
  baseURL: "",
});

// 定义请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
    // 在发送请求之前可以对请求进行一些处理，例如设置请求头信息
    // config.headers = { ...config.headers, 'Authorization': 'Bearer token' };
    return config;
  },
  (error: AxiosError<any>) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 定义响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse<any>): AxiosResponse<any> => {
    // 对响应数据进行一些处理，例如解析数据
    return response.data;
  },
  (error: AxiosError<any>) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default instance;
