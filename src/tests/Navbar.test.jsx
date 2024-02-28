import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import customRender from "./utils/customRender";
import { NavBar } from "../components/Navbar";

describe("NavBar component unit tests", () => {
  test("NavBar renders without crashing", () => {
    // Hardcoded mock context values
    const mockContextValue = {
      api: [[], vi.fn()], // Mock apiDefaults and its setter function
      LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
      loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
      movieList: [[], vi.fn()], // Mock movies and its setter function
    };

    customRender(<NavBar />, mockContextValue);

    const navBarElement = screen.getByTestId("navbar");
    expect(navBarElement).toBeInTheDocument();
  });
});
