import Layout from "@/components/Layout";
import { useToast } from "@/components/ui/use-toast";
import { getDetailMovie } from "@/utils/apis";
import { MovieDetail } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const { toast } = useToast();
  const [detail, setDetail] = useState<MovieDetail>();
  const { movie_id } = useParams();

  console.log("params");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailMovie(parseInt(movie_id ?? ""));
      // const videoDetail = await
      setDetail(result);
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
        <img
          src={`https://image.tmdb.org/t/p/w500/${detail?.backdrop_path}`}
          alt={detail?.original_title}
          className="w-full h-96 bg-cover object-cover object-top"
        />

        <div className="flex gap-7">
          <div className="flex">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
              alt={detail?.original_title}
              className="w-36 h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">{detail?.original_title}</p>
            <p className=" text-md">
              {detail?.tagline}
              {/* deskripsi film */}
            </p>
            <div>
              <p>{detail?.release_date}</p>
              <p>{detail?.runtime}</p>
            </div>
            <p className=" text-7xl">9.4</p>
            <div className="flex gap-2 pt-1">
              <p className="w-fit h-fit border rounded-md px-4 py-1 text-sm">
                Action
              </p>
              <p className="w-fit h-fit border rounded-md px-4 py-1 text-sm">
                Adventure
              </p>
              <p className="w-fit h-fit border rounded-md px-4 py-1 text-sm">
                Thriller
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMovie;
