export interface AllMovie {
  result: {
    id: number;
    adult: boolean;
  }[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }[]
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 61.416;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: false;
}

export interface MovieList {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  result: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: string;
    vote_count: string;
  }[];
  total_pages: number;
  total_results: number;
}
