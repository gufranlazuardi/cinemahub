import { MovieList, MovieVideoResult } from "../apis/types";

export interface Response {
  results: MovieList[];
  page: number;
  total_pages: number;
  total_result: number;
}

export interface MovieVideosResponse {
  id: number;
  results: MovieVideoResult[];
}
