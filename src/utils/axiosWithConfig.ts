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

  axiosConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjgyZDBhOThiNGNlNjNjMzM4NmQ5MzE2ZmMwMzQ3NiIsInN1YiI6IjY1NmQ1MjU1OGVlMGE5MDBhZTg0ZmQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BUDIDWTFY3Xy9kDy82pc_RTr_v-Mdx8BFD-JQXfyFwI`;

  return axiosConfig;
});

export default axiosWithConfig;
