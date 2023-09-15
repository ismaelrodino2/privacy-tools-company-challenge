import { FormEvent, useCallback, useEffect, useState } from "react";
import { Movie, Movies } from "../utils/types";
import Card from "antd/es/card/Card";
import CardContent from "../components/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type FormData = {
  target: {
    elements: {
      searchInput: {
        value: string;
      };
    };
  };
}

export default function Home() {
  const [data, setData] = useState<Movies | null>(null);
  const [searchTerm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    const page = 1; // page from pagination
    setIsLoading(true);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&page=${page}&r=json&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }, [searchTerm]);
  // }, [searchTerm]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir o comportamento padrão de um formulário (recarregar a página)
    const { target } = e.target as typeof e.target & FormData;
    setSearchTerm(target.elements.searchInput.value);
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
      <div className="flex justify-center flex-wrap gap-5 items-center h-full overflow-auto pt-28">
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
                    <img
                      className="h-[360px]"
                      alt={movie.Title}
                      src={movie.Poster}
                    />
                  }
                >
                  <CardContent movie={movie} />
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
