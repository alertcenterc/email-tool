import axios from "axios";
const api = axios.create({
  baseURL: "https://api.monetro.com.ng",
  withCredentials: true,
});

export default api;