import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import customRender from "./utils/customRender";
import { vi } from "vitest";
import WishList from "../components/WishList";

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};

// UNIT TESTS
describe("WishList component tests", () => {
    test("WishList title being rendered", () => {
        customRender(<WishList />, mockContextValue)

        const title = screen.queryByText(/Wish List/i)
        expect(title).toBeInTheDocument()
    })

    test("Renders a empty message when no context is provided", () => {
        customRender(<WishList />, mockContextValue)

        const emptyMessage = screen.getByText("Search movies to add to your wish list.")
        expect(emptyMessage).toBeInTheDocument()
    })
    

})
