import Layout from "@/components/Layout";
import MovieCard from "@/components/MovieCard";
import { useToast } from "@/components/ui/use-toast";
import { MovieDetail } from "@/utils/apis";
import { getSearchMovie } from "@/utils/apis/api";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchMovie = () => {
  const { toast } = useToast();
  const [searchResult, setSearchResult] = useState<MovieDetail[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  const searchItems = pathname.split("/search/")[1];

  function handleSearch(value: string) {
    if (value !== "") {
      searchParams.set("movie", value);
    } else {
      searchParams.delete("movie");
    }
    setSearchParams(searchParams);
  }

  async function fetchSearchMovie(query: string) {
    try {
      const result = await getSearchMovie({
        title: query,
      });

      setSearchResult(result.results);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    fetchSearchMovie(searchItems);
  }, [handleSearch]);

  return (
    <>
      <Layout>
        <div className="flex">
          <div className="py-5 gap-6 grid grid-cols-6">
            {searchResult.map((movie) => {
              return (
                <MovieCard
                  data={{
                    adult: movie.adult,
                    backdrop_path: movie.backdrop_path,
                    genre_ids: [],
                    id: movie.id,
                    original_language: movie.original_language,
                    original_title: movie.original_title,
                    overview: movie.overview,
                    poster_path: movie.poster_path,
                    release_date: movie.release_date,
                    title: movie.title ?? "default",
                    video: movie.video,
                    vote_average: "",
                    vote_count: "",
                  }}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SearchMovie;

// normalisasi dari movieitem ke moviedetail
