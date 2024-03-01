import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import customRender from "./utils/customRender";
import RegisterSection from "../components/RegisterSection";
import { vi } from "vitest";

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};

describe("RegisterSection component unit tests", () => {
  test("Renders Register section", () => {
    customRender(<RegisterSection />, mockContextValue);

    expect(screen.getByText).toBeDefined();
    expect(screen.getByText("Create Account")).toBeDefined();
  });
});

describe("RegisterSection component a integration test", async () => {
  test("Works as Register Button properly ", () => {
    customRender(<RegisterSection />, mockContextValue);

    const RegisterButton = screen.getByRole("button", {
      name: /Create Account/i,
    });
    expect(RegisterButton).toBeInTheDocument();
  });

  test("RegisterSection shows name form", () => {
    customRender(<RegisterSection />, mockContextValue);

    const nameId = screen.getByTestId(/name/i);
    expect(nameId).toBeDefined();
  });

  test("RegisterSection shows email form", () => {
    customRender(<RegisterSection />, mockContextValue);

    const emailId = screen.getByTestId(/email/i);
    expect(emailId).toBeDefined();
  });

  test("RegisterSection shows password form", () => {
    customRender(<RegisterSection />, mockContextValue);

    const passwordId = screen.getByTestId(/password/i);
    expect(passwordId).toBeDefined();
  });
});
