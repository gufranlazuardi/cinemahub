import { useNavigate } from "react-router-dom";

const TopRatedCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between pt-8">
        <h2 className="border-l-8 border-green-600 flex items-center pl-2 font-semibold text-lg">
          Top Rated
        </h2>
        <p
          className="text-sm cursor-pointer"
          onClick={() => {
            navigate("/list-top-rated");
          }}
        >
          See all
        </p>
      </div>
      <div className="py-5 gap-6 grid grid-cols-8">
        {"12345671".split("").map((i) => (
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
              className="w-40 h-auto border-black rounded-xl"
            />
            <div>
              <p className="font-bold txt-md">No Time To Die</p>
              <p className=" text-sm">2020</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopRatedCard;
