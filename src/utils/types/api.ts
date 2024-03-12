import { MovieDetail, MovieVideoResult } from "../apis/types";

export interface MovieSearchRequest {
  title: string;
  // page: number;
}

export interface MovieSearcResponse {
  results: MovieDetail[];
  page: number;
  total_pages: number;
  total_result: number;
}

export interface MovieVideosResponse {
  id: number;
  results: MovieVideoResult[];
}
