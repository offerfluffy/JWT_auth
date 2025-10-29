import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = "http://localhost:5005/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const original = err.config;

    if (err.response?.status === 401 && original && !original._isRetry) {
      original._isRetry = true;

      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        original.headers.Authorization = `Bearer ${response.data.accessToken}`;

        return $api.request(original);
      } catch (error) {
        console.log("Not authorized (refresh failed)");
      }
    }

    throw err;
  }
);

export default $api;
