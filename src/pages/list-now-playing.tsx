import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieCardOnList from "@/components/MovieCardOnList";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

import { getNowPlayingList, MovieItem } from "@/utils/apis/index";

import { CornerUpLeft } from "lucide-react";

const ListNowPlaying = () => {
  const [dataNowPlayings, setDataNowPlayings] = useState<MovieItem[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getNowPlayingList();
      setDataNowPlayings(result.results);
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
      <div className="flex flex-col">
        <div className="flex justify-around text-center items-center py-8">
          <div
            className="flex gap-2 cursor-pointer items-center"
            onClick={() => {
              navigate(-1);
            }}
          >
            <CornerUpLeft size={15} />
            <p>back</p>
          </div>
          <h1 className="text-4xl font-bold py-2 mx-auto">Now Playing</h1>
        </div>
        <div className=" border-l-8 border-lime-500 pl-2">
          <p className="text-lg font-semibold">Recently Added</p>
        </div>
        <div className="py-5 gap-6 grid grid-cols-6">
          {dataNowPlayings.map((nowPlaying, index) => (
            <MovieCardOnList data={nowPlaying} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ListNowPlaying;
