import { FormEvent, useCallback, useEffect, useState } from "react";
import { Movie, Movies } from "../utils/types";
import Card from "antd/es/card/Card";
import CardContent from "../components/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Pagination, notification } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";
import { apiDataMovies } from "../utils/functions";

export default function Home() {
  const [data, setData] = useState<Movies | null>(null);
  const [searchTerm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleChange = (page: number) => {
    setCurrent(page);
    setImageLoaded(false);
  };

  const getData = useCallback(async () => {
    setIsLoading(true);

    try {
      const result = await apiDataMovies(searchTerm, current);
      setData(result);
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Erro",
        description: "Ocorreu um erro ao carregar os dados.",
      });
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, current]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = document.querySelector(
      'input[name="searchInput"]'
    ) as HTMLInputElement | null;
    if (searchInput) {
      setSearchTerm(searchInput.value);
      getData();
    }
  };

  return (
    <div className="text-primaryn h-full p-8 ">
      <form
        onSubmit={handleSearch}
        className="items-center  w-[calc(100%-21px-16px-64px)] rounded-3xl  border-white bg-variation-primary bg-opacity-70 border inline-flex fixed top-5 z-10"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white mx-4" />
        <input
          name="searchInput"
          type="text"
          placeholder="Pesquisar"
          className="bg-[transparent]  p-2 w-full text-white outline-none"
        />
        <button className="p-2 pr-4 rounded-r-3xl transition-background duration-1000 hover:bg-secondary">
          Pesquisar
        </button>
      </form>
      <div className="flex justify-center flex-wrap gap-5 items-center h-[calc(100vh-120px)] overflow-auto pt-28">
        {data?.Search?.map((movie: Movie) => {
          return (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <Card
                  loading={isLoading}
                  hoverable
                  className="w-[240px] bg-primary border-primary"
                  bodyStyle={{ padding: "4px" }}
                  cover={
                    <>
                      {imageLoaded ? null : (
                        <SkeletonImage
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "360px",
                          }}
                          active
                        />
                      )}
                      <div className="h-[360px]">
                        <img
                          alt={movie.Title}
                          src={movie.Poster}
                          onLoad={() => setImageLoaded(true)}
                          style={{
                            display: imageLoaded ? "block" : "none",
                            borderRadius: "12px",
                          }}
                        />
                      </div>
                    </>
                  }
                >
                  <CardContent movie={movie} />
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination
        total={data?.totalResults ? parseInt(data.totalResults) : 0}
        pageSize={10}
        current={current}
        onChange={(page) => handleChange(page)}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
}
