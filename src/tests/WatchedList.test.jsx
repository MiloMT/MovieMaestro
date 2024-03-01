import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import customRender from "./utils/customRender";
import { vi } from "vitest";
import WatchedList from "../components/WatchedList";

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};

// UNIT TESTS
describe("WatchedList component tests", () => {
  test("Renders a empty message when no context is provided", () => {
    customRender(<WatchedList />, mockContextValue);

    const emptyMessage = screen.getByText(
      "Search movies to add to your watch list."
    );
    expect(emptyMessage).toBeInTheDocument();
  });
  


});
