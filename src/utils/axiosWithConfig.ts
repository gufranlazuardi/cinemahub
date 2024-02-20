import axios from "axios";

interface Queries {
  api_key: any;
  language: string;
}

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  let queries: Queries = {
    api_key: import.meta.env.VITE_API_KEY,
    language: "en-US",
  };

  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.params = {
    ...axiosConfig.params,
    ...queries,
  };

  // Include API Read Access Token in headers
  axiosConfig.headers.Authorization = `Bearer ${
    import.meta.env.VITE_API_READ_ACCESS_TOKEN
  }`;

  return axiosConfig;
});

export default axiosWithConfig;
