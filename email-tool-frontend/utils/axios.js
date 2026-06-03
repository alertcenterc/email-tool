import axios from "axios";
const api = axios.create({
  baseURL: "https://email-tool-yvld.onrender.com",
  withCredentials: true,
});

export default api;
