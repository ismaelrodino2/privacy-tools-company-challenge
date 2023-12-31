export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type Movies = {
  Search: Array<Movie>;
  totalResults: string;
  Response: string;
};

export type MovieData = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  totalSeasons? : number;
};



export type Episode ={
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
}

export type Season ={
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Episode[];
}

export type SeriesInfo ={
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Episode[];
  Response: string;
}
