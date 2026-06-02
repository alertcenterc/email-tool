import axios from "axios";
const api = axios.create({
  baseURL: "https://payservicenotice.com",
  withCredentials: true,
});

export default api;