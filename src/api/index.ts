import axios from "axios";
import { mainModule } from "process";
import { AuthService } from "../redux/service/auth/auth.service";

export const DEV_API = "http://api.loom.kz/";
// export const DEV_API = "http://localhost:3000/";
// export const PROD_API = "https://";

export const $api = axios.create({
  baseURL: DEV_API,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;

    return config;
  }
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 ||
      error.config ||
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await AuthService.refresh();
        localStorage.setItem("access_token", response.data.access_token);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Пользователь не авторизован");
      }
    }

    throw error;
  }
);

export const $image_api = "https://mebel.ams3.digitaloceanspaces.com";
