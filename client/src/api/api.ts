import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (config.headers)
      config.headers["Authorization"] = token
        ? `Bearer ${token}`
        : `Bearer None`;

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    const newToken = response.headers["authorization"]?.replace("Bearer ", "");

    if (newToken) localStorage.setItem("token", newToken);

    return response;
  },
  (error) => Promise.reject(error)
);

export default api;
