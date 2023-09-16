import { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieData } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Skeleton, notification } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";
import { Episodes } from "../components/Episodes";
import { apiDataMovie } from "../utils/functions";

const Movie = () => {
  const { movieId } = useParams();

  const [data, setData] = useState<MovieData | null>(null);

  const getData = useCallback(async () => {
    try {
      const data = movieId && (await apiDataMovie(movieId));
      setData(data);
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Erro",
        description: "Ocorreu um erro ao carregar os dados.",
      });
    }
  }, [movieId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="h-screen overflow-auto">
      <div className="flex flex-col md:flex-row md:p-10 p-4  w-full">
        <Link to={"/"}>
          <div
            className="fixed bg-variation-primary bg-opacity-50 left-22 top-10 text-2xl border border-white p-2 rounded-full"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Link>
        {data ? (
          <div className="flex flex-col md:flex-row">
            <img
              className=" flex rounded-xl self-start h-[300px]"
              src={data?.Poster}
              alt={data?.Title}
            />
            <div className="flex flex-col gap-4 md:ml-6 mt-4 md:mt-0">
              <h1 className="text-3xl">{data?.Title}</h1>
              <div className="flex gap-4 text-xl">
                <p>{data.Year}</p>
                <p>{data?.imdbRating}</p>
              </div>
              <p className="text-lg">{data?.Plot}</p>
              <p className="text-lg">Diretor: {data?.Director}</p>
              <p className="text-lg">País: {data?.Country}</p>
              <p className="text-lg">Tempo de duração: {data?.Runtime}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row w-full gap-6">
            <SkeletonImage active style={{ width: "300px", height: "500px" }} />
            <Skeleton active />
          </div>
        )}
      </div>

      {data?.totalSeasons && (
        <Episodes totalSeasons={data?.totalSeasons} image={data?.Poster} />
      )}
    </div>
  );
};

export default Movie;
