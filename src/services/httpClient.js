import axios from "axios";
import {BASE_URL_DEV, BASE_URL_PRODUCTION, MIDA_APP_ENV} from "../utils/config";

const axiosInstance = axios.create({
  baseURL: BASE_URL_DEV,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      // Need to change this static value of token
      authtoken: 'Bearer token',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
