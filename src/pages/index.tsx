import Layout from "@/components/Layout";
import MovieCard from "@/components/MovieCard";
import { useToast } from "@/components/ui/use-toast";
import {
  getNowPlayingList,
  getPopularList,
  getTopRatedList,
  getUpcomingList,
} from "@/utils/apis/api";
import { MovieItem } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";
import { SearchIcon } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [populars, setPopulars] = useState<MovieItem[]>([]);
  const [topRateds, setTopRateds] = useState<MovieItem[]>([]);
  const [nowPlayings, setNowPlayings] = useState<MovieItem[]>([]);
  const [upcomings, setUpcomings] = useState<MovieItem[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchNowPlaying();
    fetchUpcoming();
  }, []);

  async function fetchPopular() {
    try {
      const result = await getPopularList();
      setPopulars(result.results.slice(0, 12));
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function fetchTopRated() {
    try {
      const result = await getTopRatedList();
      setTopRateds(result.results.slice(0, 12));
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function fetchNowPlaying() {
    try {
      const result = await getNowPlayingList();
      setNowPlayings(result.results.slice(0, 12));
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function fetchUpcoming() {
    try {
      const result = await getUpcomingList();
      setUpcomings(result.results.slice(0, 12));
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  const handleInputChange = debounce((value: string) => {
    setSearchInput(value);
  }, 500);

  function handleSearch() {
    if (searchInput !== "") {
      searchParams.set("movie", searchInput);
    } else {
      searchParams.delete("movie");
    }
    setSearchParams(searchParams);
    navigate(`/search/${searchInput}`);
  }

  return (
    <Layout>
      <div className="h-screen w-full flex flex-col gap-10">
        <div className="flex items-center border rounded-md px-4 py-2">
          <input
            className="w-full placeholder:italic rounded-md"
            type="text"
            placeholder="search movie..."
            height={10}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button onClick={handleSearch}>
            <SearchIcon size={17} />
          </button>
        </div>
        {/* popular */}
        <div className="flex flex-col">
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
              <div className="hover:bg-green-400 w-full p-2 transition rounded-sm">
                <p className="text-sm">See all</p>
              </div>
            </div>
          </div>
          <div className="py-5 gap-6 grid grid-cols-6">
            {populars.map((popular, index) => (
              <MovieCard data={popular} key={index} />
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h2 className="border-l-8 border-green-600 flex items-center pl-2 font-semibold text-lg">
              Top Rated
            </h2>
            <div
              className="w-fit h-8 px-2 pt-1 rounded-md items-center justify-center cursor-pointer"
              onClick={() => {
                navigate("/movie/top_rated");
              }}
            >
              <div className="hover:bg-green-400 w-full p-2 transition rounded-sm">
                <p className="text-sm">See all</p>
              </div>
            </div>
          </div>

          <div className="py-5 gap-6 grid grid-cols-6">
            {topRateds.map((topRated, index) => (
              <MovieCard data={topRated} key={index} />
            ))}
          </div>
        </div>

        {/* now playing */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h2 className="border-l-8 border-green-600 flex items-center pl-2 font-semibold text-lg">
              Now Playing
            </h2>

            <div
              className="w-fit h-8 px-2 pt-1 rounded-md items-center justify-center cursor-pointer"
              onClick={() => {
                navigate("/movie/now_playing");
              }}
            >
              <div className="hover:bg-green-400 w-full p-2 transition rounded-sm">
                <p className="text-sm">See all</p>
              </div>
            </div>
          </div>

          <div className="py-5 gap-6 grid grid-cols-6">
            {nowPlayings.map((nowPlaying, index) => (
              <MovieCard data={nowPlaying} key={index} />
            ))}
          </div>
        </div>

        {/* upcoming */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h2 className="border-l-8 border-green-600 flex items-center pl-2 font-semibold text-lg">
              Upcoming
            </h2>

            <div
              className="w-fit h-8 px-2 pt-1 rounded-md items-center justify-center cursor-pointer"
              onClick={() => {
                navigate("/movie/upcoming");
              }}
            >
              <div className="hover:bg-green-400 w-full p-2 transition rounded-sm">
                <p className="text-sm">See all</p>
              </div>
            </div>
          </div>

          <div className="py-5 gap-6 grid grid-cols-6">
            {upcomings.map((upcoming, index) => (
              <MovieCard data={upcoming} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
