import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import customRender from "./utils/customRender";
import { test, expect, vi } from "vitest";
import MovieDisplay from "../components/MovieDisplay";

// Hardcoded mock context values
const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};

describe("SideFilterMenu component in MovieDisplay", () => {
  test("Renders the search button", () => {
    customRender(<MovieDisplay />, mockContextValue);

    const hiddenMenu = screen.queryByText(/Search movie/i);
    expect(hiddenMenu).not.toBeInTheDocument();
  });

  test("Close button is hidden", () => {
    const closeBotton = screen.queryByTestId("close-button");
    expect(closeBotton).not.toBeInTheDocument();
  });
});
