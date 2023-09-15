import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieData } from "../utils/types";
import { FloatButton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Movie = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [data, setData] = useState<MovieData | null>(null);

  const getData = useCallback(async () => {
    const page = 1; // page from pagination
    const response = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=${
        import.meta.env.VITE_API_KEY
      }
      }`
    );
    const data = await response.json();
    setData(data);
  }, [movieId]);
  // }, [searchTerm]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="flex flex-col md:flex-row p-10">
          <Link to={"/"}>
            <div className="fixed bg-variation-primary bg-opacity-70 left-22 top-10 text-2xl border border-white p-2 rounded-full" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </Link>


      <img className="  w-[300px]" src={data?.Poster} alt={data?.Title} />
      <div className="flex flex-col gap-4 md:ml-6 mt-4 md:mt-0">
        <h1 className="text-3xl">{data?.Title}</h1>
        <div className="flex gap-4 text-xl">
          <p>{data?.Year}</p> <p>{data?.imdbRating}</p>
        </div>
        <p className="text-lg">{data?.Plot}</p>
        <p className="text-lg">Diretor: {data?.Director}</p>
      </div>
    </div>
  );
};

export default Movie;

// "Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Crime, Drama","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.","Language":"English, Mandarin","Country":"United States, United Kingdom","Awards":"Nominated for 1 Oscar. 14 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,528,522","imdbID":"tt0372784","Type":"movie","DVD":"09 Sep 2009","BoxOffice":"$206,863,479","Production":"N/A","Website":"N/A","Response":"True"}
