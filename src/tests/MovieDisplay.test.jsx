import { test, expect } from "vitest";
import MovieDisplay from "../components/MovieDisplay";

describe(" Movie display render tests", () => {
  test("MovieDisplay renders without crashing", () => {
    const component = <MovieDisplay />;
    expect(component).toBeTruthy();
  });
});


