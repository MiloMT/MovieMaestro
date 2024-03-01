import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import customRender from "./utils/customRender";
import NavBar from "../components/Navbar";
import { vi } from "vitest";

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [false, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};

// UNIT TESTS
describe("NavBar component unit tests", () => {
  test("NavBar renders without crashing", () => {
    customRender(<NavBar />, mockContextValue);

    const navBarElement = screen.getByTestId("navbar");
    expect(navBarElement).toBeInTheDocument();
  });

  test("NavBar displays logo image", () => {
    customRender(<NavBar />, mockContextValue);

    const logoImage = screen.getByAltText("nav-logo");
    expect(logoImage).toBeInTheDocument();
  });

  test("Profile button is not shown when user is not logged in", () => {
    const mockContextValue = {
      api: [[], vi.fn()], // Mock apiDefaults and its setter function
      LoggedIn: [false, vi.fn()], // Mock isLoggedIn and its setter function
      loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
      movieList: [[], vi.fn()], // Mock movies and its setter function
    };
    customRender(<NavBar />, mockContextValue);

    const profileButton = screen.queryByText("POFILE");
    expect(profileButton).not.toBeInTheDocument();
  });
});

describe("Navbar integration tests", () => {
  test("Clicking on login button redirects to login page", async () => {
    customRender(<NavBar />, mockContextValue);

    const loginButton = screen.getByRole("button", { name: /LOGIN/i });
    await fireEvent.click(loginButton);
    expect(screen.getByText(/Login/i), { selector: "h6" }).toBeInTheDocument();
  });
});
