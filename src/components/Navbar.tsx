import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";

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
        <div className="flex gap-2 items-center">
          <Button
            className="flex gap-2 bg-green-600"
            onClick={() => {
              navigate("/favorite");
            }}
          >
            <p className="text-sm">Favorite</p>
            <Bookmark size={17} />
          </Button>
          <Button
            className="bg-green-600"
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
