import axiosWithConfig from "../axiosWithConfig";

export const getAllMovies = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/changes/`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailMovie = async (movie_id: number) => {
  try {
    const response = await axiosWithConfig.get(`/movie/${movie_id}`);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getListMovie = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/now_playing`);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
