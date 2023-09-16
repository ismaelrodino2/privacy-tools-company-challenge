import { Select } from "antd";
import { Season } from "../utils/types";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EpisodesScroll } from "./EpisodesScroll";
import { apiDataEpisodes } from "../utils/functions";

export const Episodes = ({
  totalSeasons,
  image,
}: {
  totalSeasons: number;
  image: string;
}) => {
  const [seasons, setSeasons] = useState<Season | null>(null);
  const [season, setSeason] = useState<number>(1);
  const { movieId } = useParams();
  
  const options = Array.from({ length: totalSeasons }, (_, index) => ({
    value: (index + 1).toString(),
    label: `Temporada - ${index + 1}`,
  }));

  const getSeasons = useCallback(async () => {
    try {
      const data = movieId && (await apiDataEpisodes(season, movieId));
      setSeasons(data);
    } catch (error) {
      console.error(error);
    }
  }, [movieId, season]);

  useEffect(() => {
    getSeasons();
  }, [getSeasons]);

  const handleChange = (value: string) => {
    setSeason(parseInt(value, 10));
  };
  return (
    <div className="">
      <div className="flex items-center md:pl-10 pl-4 py-10">
        <div className="w-24 h-1 bg-[#e2e2e2] relative hidden md:flex">
          <span className="absolute text-[#909090] -top-7 uppercase font-semibold">
            episódios
          </span>
        </div>
        <div className="flex-grow h-1 relative  bg-[#90909091]">
          <span className="pr-4 absolute text-[#909090] -top-7 md:left-24 uppercase font-semibold">
            Temporadas:
          </span>
          <div className="absolute -top-9 md:left-56 left-36">
            <Select
              defaultValue={"1"}
              style={{ width: 140 }}
              onChange={handleChange}
              options={[
                ...options,
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
        </div>
      </div>

      {seasons && <EpisodesScroll seasons={seasons} image={image} />}
    </div>
  );
};
