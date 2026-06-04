import axios from "axios";
import { authStore } from "../src/pages/auth/authStore";

const api = axios.create({
  baseURL: "https://email-tool-yvld.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = authStore.getState().accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
