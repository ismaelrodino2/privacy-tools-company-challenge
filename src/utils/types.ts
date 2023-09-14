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


  