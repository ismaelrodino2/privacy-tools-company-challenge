import { Movie } from "../utils/types";

const CardContent = ({ movie }: { movie: Movie }) => {
  return (
    <div className=" h-28 flex flex-col justify-between bg-[transparent] text-white">
      <h1 className="font-bold text-lg">
        {movie.Title.length > 48
          ? `${movie.Title.slice(0, 48)}...`
          : movie.Title}
      </h1>
      <div className="flex mt-4 justify-between">
        <p className="text-lg">{movie.Year}</p>
        <p className="text-lg">{movie.Type}</p>
      </div>
    </div>
  );
};

export default CardContent;
