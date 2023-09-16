import { formatDate } from "../utils/functions";
import { Episode, Season } from "../utils/types";

export const EpisodesScroll = ({
  seasons,
  image,
}: {
  seasons: Season;
  image: string;
}) => {
  return (
    <div className="md:pl-10 pl-4 max-h-[300px] overflow-auto">
      {seasons?.Episodes?.map((el: Episode) => {
        return (
          <div key={el.imdbID} className="flex text-lg gap-4">
            <img className="h-28 mt-4 rounded-xl" src={image} alt={el.Title} />

            <div className="flex items-center">
              <div className="flex flex-col ">
                <h2>
                  {el.Episode} . {el.Title}
                </h2>
                <p>
                  {el.imdbRating} - {formatDate(el.Released)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
