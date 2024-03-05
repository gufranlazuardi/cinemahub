import Layout from "@/components/Layout";
import { useToast } from "@/components/ui/use-toast";
import { getDetailMovie, getTrailerMovie } from "@/utils/apis";
import { MovieDetail, TrailerMovieResults } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const { toast } = useToast();
  const [detail, setDetail] = useState<MovieDetail>();
  const [trailer, setTrailer] = useState<TrailerMovieResults>();
  const { movie_id } = useParams();

  console.log("params");
  useEffect(() => {
    fetchData();
    fetchTrailer();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailMovie(parseInt(movie_id ?? ""));

      setDetail(result);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function fetchTrailer() {
    try {
      const result = await getTrailerMovie(+movie_id!);

      setTrailer(result);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500/${detail?.backdrop_path}`}
            alt={detail?.title}
            className="w-full h-96 object-cover object-top"
          />

          {/* youtube */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-cover object-cover">
            <iframe
              title={trailer?.name}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer?.key}`}
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
              alt={detail?.title}
              className="w-36 h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">{detail?.title}</p>
            <p className=" text-md">{detail?.tagline}</p>
            <div>
              <p>{detail?.release_date}</p>
              <p>{detail?.runtime}</p>
            </div>
            <p className="text-7xl">{detail?.vote_average.toFixed(1)}</p>
            {detail?.genres && (
              <div className="flex gap-2 pt-1">
                {detail.genres.map((genre) => (
                  <p
                    key={genre.id}
                    className="w-fit h-fit border rounded-md px-4 py-1 text-sm"
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMovie;
