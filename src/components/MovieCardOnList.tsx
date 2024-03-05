import { MovieItem } from "@/utils/apis/types";
import { useNavigate } from "react-router-dom";

type Props = {
  data: MovieItem;
};

const MovieCardOnList = (props: Props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex flex-col gap-2 cursor-pointer"
        onClick={() => {
          navigate(`/detail-movie/${data.id}`);
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className="w-auto h-80 rounded-xl hover:scale-95 hover:bg-slate-900 hover:opacity-75 transition"
        />
        <div>
          <p className="font-bold text-md">{data.title}</p>
          <p className="text-sm">{new Date(data.release_date).getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCardOnList;
