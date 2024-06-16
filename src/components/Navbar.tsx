import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 flex items-center pb-8">
      <div className="flex justify-between w-full">
        <h1
          className="text-3xl text-green-600 font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Cinemahub
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
