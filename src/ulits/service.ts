import axios from "axios";

const backendCall = axios.create({
  baseURL: "https://localhost:8000",
  timeout: 1000, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
backendCall.interceptors.request.use(
  (config) => {
    // Get token from localStorage (if using authentication)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
backendCall.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default backendCall;
