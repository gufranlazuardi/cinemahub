import Layout from "@/components/Layout";
import { CornerUpLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ListNowPlaying = () => {
  const navigate = useNavigate();

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
          <h1 className=" text-4xl font-bold py-2 mx-auto">Now Playing</h1>
        </div>
        <div className=" border-l-8 border-lime-500 pl-2">
          <p className="text-lg font-semibold">Recently Added</p>
        </div>
        <div className="py-5 gap-6 grid grid-cols-6">
          {"123456789101948484848484".split("").map((i) => (
            <div
              className="flex flex-col gap-2 cursor-pointer"
              onClick={() => {
                navigate("/detail-movie");
              }}
              key={i}
            >
              <img
                src="https://pbs.twimg.com/media/ESIJQ9IXYAIssnE?format=jpg&name=large"
                alt="no-time-to-die"
                className="w-auto h-80 border-black rounded-xl"
              />
              <div>
                <p className="font-bold txt-md">No Time To Die</p>
                <p className=" text-sm">2020</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
};

export default ListNowPlaying;
