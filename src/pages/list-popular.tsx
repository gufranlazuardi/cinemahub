import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieCardOnList from "@/components/MovieCardOnList";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

import { getPopularList, MovieItem } from "@/utils/apis/index";

import { CornerUpLeft } from "lucide-react";

import PaginationBar from "@/components/PaginationBar";

const ListPopular = () => {
  const [dataPopulars, setDataPopulars] = useState<MovieItem[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function fetchData() {
    try {
      const result = await getPopularList();
      setDataPopulars(result.results);
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

  const totalPages = Math.ceil(dataPopulars.length / pageSize);

  const visibleMovies = dataPopulars.slice(
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
          <h1 className="text-4xl font-bold py-2 mx-auto">Popular</h1>
        </div>
        <div className=" border-l-8 border-lime-500 pl-2">
          <p className="text-lg font-semibold">Recently Added</p>
        </div>
        <div className="py-5 gap-6 grid grid-cols-6">
          {visibleMovies.map((popular, index) => (
            <MovieCardOnList data={popular} key={index} />
          ))}
        </div>
      </div>

      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </Layout>
  );
};

export default ListPopular;
