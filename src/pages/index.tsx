import Layout from "@/components/Layout";
import MovieCard from "@/components/MovieCard";
import NowPlayingCard from "@/components/NowPlayingCard";
import TopRatedCard from "@/components/TopRatedCard";
import UpcomingCard from "@/components/UpcomingCard";
import { useToast } from "@/components/ui/use-toast";
import { getPopularList } from "@/utils/apis/api";
import { MovieList } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [populars, setPopulars] = useState<MovieList[]>([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  async function fetchPopular() {
    try {
      const result = await getPopularList();
      setPopulars(result.data.results);
      console.log(result);
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
      <div className="h-screen w-full flex flex-col">
        <div className="flex justify-between">
          <h2 className="border-l-8 border-green-600 flex items-center pl-2 font-semibold text-lg">
            Popular
          </h2>

          <div
            className="w-fit h-8 px-2 pt-1 rounded-md items-center justify-center cursor-pointer"
            onClick={() => {
              navigate("/movie/popular");
            }}
          >
            <p className="text-sm">See all</p>
          </div>
        </div>

        <div className="py-5 gap-6 grid grid-cols-6">
          {populars.map((popular, index) => (
            <MovieCard data={popular} key={index} />
          ))}
        </div>
        <TopRatedCard />
        <NowPlayingCard />
        <UpcomingCard />
      </div>
    </Layout>
  );
};

export default Home;
