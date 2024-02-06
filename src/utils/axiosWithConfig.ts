import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  // Mengatur baseURL dari environment variable VITE_BASE_URL
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;

  // Menambahkan API key ke dalam parameter setiap permintaan
  axiosConfig.params = {
    ...axiosConfig.params,
    api_key: import.meta.env.VITE_API_KEY,
  };

  return axiosConfig;
});

export default axiosWithConfig;
