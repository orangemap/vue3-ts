import axios, { Method, AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
// import store from "@/store";
// import G_CONFIG from "@config/index";

// import { Local } from "@/utils/local";
// import Qs from "qs";

export type TResult<T = any> = Promise<{
  data: T;
  code: number;
  count?: number;
  msg: string;
}>;

const request = axios.create({
  baseURL: ,
  headers: { "Content-Type": "application/json" },
  withCredentials: false
});

request.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res: any) => {
    const { code, message } = res.data || {};
    if (code) {
      switch (Number(code)) {
        case 200:
          return res.data;
        case 505:
          return res.data;
        case 500:
          ElMessage.error(`${message}`);
          return Promise.reject(res);
        case 1005: // 登录过期
          // store.dispatch("loginOut");
          return;
        default:
          ElMessage.error(message || "服务异常");
          return Promise.reject(res);
      }
    }
  },
  err => {
    switch (err?.response?.status) {
      case 400:
        break;
      case 401:
        break;
      case 405:
      case 500:
      default:
        break;
    }
    return Promise.reject(err.response);
  }
);

interface RequestOptions extends Partial<AxiosRequestConfig> {
  isForm?: boolean;
  transformParams?: (params: any) => any;
}
const createMethod = (method: Method = "get") => (
  url: string,
  options?: RequestOptions
) => {
  const {
    isForm = false,
    headers = {},
    transformParams,
    params,
    ...args
  } = options || {};

  let data = ["get"].includes(method) ? { params } : { data: params };
  // : { data: Qs.stringify(params, { arrayFormat: "brackets" }) };

  // 处理formdata形式
  if (isForm) {
    const formParams = new FormData();
    for (const key in params) {
      formParams.append(key, params[key]);
    }
    data.data = formParams;
    (options as any).headers = Object.assign({}, options?.headers, {
      "Content-Type": "multipart/form-data"
    });
  }
  if (typeof transformParams === "function") {
    data = transformParams(params);
  }

  return request(url, {
    method,
    headers,
    ...data,
    ...args
  } as any) as Promise<any>;
};

export const Post = createMethod("post");
export const Get = createMethod("get");
export const Delete = createMethod("delete");
export const Put = createMethod("put");
export const Patch = createMethod("patch");

export default request;
