import { test, expect } from "vitest";
import FastSearch from "../components/FastSearch";
import customRender from "./utils/customRender";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [false, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};

describe("FastSearch integration tests", () => {
  test("Shows words Fast Search in document", () => {
    customRender(<FastSearch />, mockContextValue);

    const fastSearchText = screen.getByText(/Fast Search/i);
    expect(fastSearchText).toBeInTheDocument();
  });

  test("Fast Search heading should appear with Genre", () => {
    customRender(<FastSearch />, mockContextValue);

    const headingText = screen.getByText(/Genre/i);
    expect(headingText).toBeInTheDocument();
  });

  test("Fast Search shows Search movie button", () => {
    customRender(<FastSearch />, mockContextValue);

    const buttonText = screen.getByText(/Search Movie/i);
    expect(buttonText).toBeInTheDocument();
  });

  });

