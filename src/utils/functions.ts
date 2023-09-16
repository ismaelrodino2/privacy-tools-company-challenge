export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const apiDataMovie = async (movieId: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${movieId}&apikey=${
      import.meta.env.VITE_API_KEY
    }`
  );

  if (!response.ok) {
    throw new Error(`Erro ao carregar os dados. Status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export const apiDataMovies = async (searchTerm: string, current: number) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${searchTerm}&page=${current}&r=json&apikey=${
      import.meta.env.VITE_API_KEY
    }`
  );

  if (!response.ok) {
    throw new Error(`Erro ao carregar os dados. Status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};

export const apiDataEpisodes = async (season: number, movieId: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_API_KEY
    }&i=${movieId}&season=${season}`
  );

  const data = await response.json();
  return data;
};
