// CardContent.test.jsx
import { expect, test } from "vitest";
import CardContent from "../components/CardContent";
import { render, screen } from "@testing-library/react";

test("renders movie details correctly", () => {
  const movie = {
    Title: "Batman Begins",
    Year: "2005",
    Type: "movie",
    imdbID: "",
    Poster: "",
  };

  render(<CardContent movie={movie} />);

  expect(screen.getByText(/Batman Begins/i)).toBeDefined();
  expect(screen.getByText(/2005/i)).toBeDefined();
  expect(screen.getByText(/movie/i)).toBeDefined();
});
