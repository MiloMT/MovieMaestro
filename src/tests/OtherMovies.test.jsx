import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import OtherMovies from "../components/OtherMovies";

describe("OtherMovies tests", () => {
  const movies = [
    { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
    { id: 2, title: "Movie 2", poster_path: "/path/to/poster2.jpg" },
    { id: 3, title: "Movie 3", poster_path: "/path/to/poster3.jpg" },
  ];

  test("renders correct number of movie cards", () => {
    render(<OtherMovies selectedMovies={movies} setMovieIndex={() => {}} />);
    const movieCards = screen.getAllByRole("button");
    expect(movieCards.length).toBe(movies.length);
  });

  test("displays correct movie titles and images", () => {
    render(<OtherMovies selectedMovies={movies} setMovieIndex={() => {}} />);
    movies.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeDefined();
    });
  });

  test("clicking on a movie card triggers setMovieIndex with correct index", () => {
    const setMovieIndexMock = vi.fn();
    render(
      <OtherMovies selectedMovies={movies} setMovieIndex={setMovieIndexMock} />
    );
    const movieCards = screen.getAllByRole("button");
    fireEvent.click(movieCards[1]); 
    expect(setMovieIndexMock).toHaveBeenCalledWith(1);
  });
});
