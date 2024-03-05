import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MovieCardOnList from "@/components/MovieCardOnList";
import PaginationBar from "@/components/PaginationBar";
import { useToast } from "@/components/ui/use-toast";
import { CornerUpLeft } from "lucide-react";
import Layout from "@/components/Layout";

import { getNowPlayingList, MovieItem } from "@/utils/apis/index";

const ListPopular = () => {
  const [dataNowPlaying, setDataNowPlaying] = useState<MovieItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();
  const pageSize = 12;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function fetchData() {
    try {
      const result = await getNowPlayingList();
      setDataNowPlaying(result.results);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  const handlePageChange = (direction: "prev" | "next") => {
    setCurrentPage((prevPage) =>
      direction === "prev" ? prevPage - 1 : prevPage + 1
    );
  };

  const totalPages = Math.ceil(dataNowPlaying.length / pageSize);

  const visibleMovies = dataNowPlaying.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
        <div className="border-l-8 border-lime-500 pl-2">
          <p className="text-lg font-semibold">Recently Added</p>
        </div>
        <div className="py-5 gap-6 grid grid-cols-6">
          {visibleMovies.map((nowPlaying, index) => (
            <MovieCardOnList data={nowPlaying} key={index} />
          ))}
        </div>

        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default ListPopular;
