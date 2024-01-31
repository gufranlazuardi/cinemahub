import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex items-center pb-8">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl text-green-600 font-bold">Cinemahub</h1>
        <div className="w-1/3 h-10 px-4 flex gap-4 border rounded-md items-center justify-between">
          <p className=" text-xs">Search...</p>
          <Search size={18} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
