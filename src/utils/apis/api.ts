import axiosWithConfig from "../axiosWithConfig";

export const getPopularList = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/popular`);
    // tambahin sesuatu
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getNowPlayingList = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/now_playing`);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
export const getTopRatedList = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/top_rated`);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getUpcomingList = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/upcoming`);

    return response.data;
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

export const getTrailerMovie = async (movie_id: number) => {
  try {
    const response = await axiosWithConfig.get(`movie/${movie_id}/videos`);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
