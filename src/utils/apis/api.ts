import axiosWithConfig from "../axiosWithConfig";
import { MovieSearcResponse, MovieSearchRequest } from "../types/api";

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

export const getSearchMovie = async (query?: MovieSearchRequest) => {
  try {
    // let params = "";

    // if (query) {
    //   const queryParams: string[] = [];

    //   let key: keyof typeof query;
    //   for (key in query) {
    //     queryParams.push(`${key}=${query[key]}`);
    //   }

    //   params = queryParams.join("&");
    // }

    const url = `/search/movie?query=${query?.title}`;
    console.log("url", url);
    const response = await axiosWithConfig.get(url);

    return response.data as MovieSearcResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

// buat pagination
// const url = `/search/movie?query=${query?.title}&page=${query}`;
