import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

const FavoriteCard = () => {
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="relative">
        <img
          src={
            "https://image.tmdb.org/t/p/w500//vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
          }
          className="w-fit h-[18rem] border-black rounded-xl hover:scale-95 hover:bg-slate-900 hover:opacity-75 transition"
          alt="Movie Poster"
        />
        <div className="flex gap-2 absolute top-1 left-1 z-20">
          <Button variant={"destructive"}>
            <Trash2 className="text-white cursor-pointer" size={18} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-md">Bad Moms</p>
        <p className="text-sm">2020</p>
      </div>
    </div>
  );
};

export default FavoriteCard;
