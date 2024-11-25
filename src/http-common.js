import Axios from "axios";

const api = Axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
      },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;