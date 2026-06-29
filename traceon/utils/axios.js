import axios from "axios";

const api = axios.create({
  baseURL: "https://email-tool-yvld.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = "nothing";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
