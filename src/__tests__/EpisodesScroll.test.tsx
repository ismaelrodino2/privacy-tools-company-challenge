import { expect, test } from "vitest";
import { EpisodesScroll } from "../components/EpisodesScroll";
import { render, screen } from "@testing-library/react";

test("renders episodes correctly", () => {
  const seasons = {
    Title: "title",
    Season: "1",
    totalSeasons: "2",
    Episodes: [
      {
        Title: "Pilot",
        Released: "2022-01-18",
        Episode: "1",
        imdbRating: "6.1",
        imdbID: "tt14506424",
      },
    ],
    Response: "True",
  };

  render(<EpisodesScroll seasons={seasons} image="path/to/image" />);

  expect(screen.getByText(/Pilot/i)).toBeDefined();
  expect(screen.getByText(/6.1/i)).toBeDefined();
  expect(screen.getByText(/\d{2}\/\d{2}\/\d{4}/)).toBeDefined();
});
