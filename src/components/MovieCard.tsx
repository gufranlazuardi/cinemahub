import { MovieList } from "@/utils/apis/types";
import { useNavigate } from "react-router-dom";

type Props = {
  data: MovieList;
};

const MovieCard = (props: Props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex flex-col gap-2 cursor-pointer"
        onClick={() => {
          navigate("/detail-movie");
        }}
      >
        <img
          src={data.result.poster_path}
          alt={data.result.original_title}
          className="w-auto h-80 border-black rounded-xl"
        />
        <div>
          <p className="font-bold txt-md">{data.result.original_title}</p>
          <p className=" text-sm">{data.result.genre_ids}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
