import { useNavigate } from "react-router-dom";
import ComboBox from "./ComboBox";
import { Button } from "./ui/button";

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
        <div className="w-1/3 h-10 px-4 flex gap-4 rounded-md items-center justify-between">
          <ComboBox />
          <Button
            className=" bg-gradient-to-r from-[#1CD8D2] to-[#93EDC7] text-black"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
