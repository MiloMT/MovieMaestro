import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MovieDisplay from "../components/MovieDisplay";
import customRender from "./utils/customRender";

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};
describe(" Movie display render tests", () => {
  test("MovieDisplay renders without crashing", () => {
    const component = <MovieDisplay />;
    expect(component).toBeTruthy();
  });
})

// tests functional component can render without crashing. No other 
// tests can be performed without mocking.
