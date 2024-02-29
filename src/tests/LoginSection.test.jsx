import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import customRender from "./utils/customRender";
import LoginSection, { Button } from "../components/LoginSection";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";


// UNIT TEST FOR LOGIN SECTION
describe("LoginSection component unit tests", () => {
    test("Renders login section", () => {
        const mockContextValue = {
            api: [[], vi.fn()], // Mock apiDefaults and its setter function
            LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
            loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
            movieList: [[], vi.fn()], // Mock movies and its setter function
        };
        customRender(<LoginSection />, mockContextValue);

        expect(screen.getByText).toBeDefined()
        expect(screen.getByText('Login')).toBeDefined()
    })
})

// INTEGRATION TEST FOR LOGIN SECTION
describe('LoginSection component a integration test', async () => {
    test(""), () => {

        const mockContextValue = {
            api: [[], vi.fn()], // Mock apiDefaults and its setter function
            LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
            loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
            movieList: [[], vi.fn()], // Mock movies and its setter function
        };
        customRender(<LoginSection />, mockContextValue);

        const LoginButton = screen.getByRole("button", { name: /Login/i })
        expect(LoginButton).toBeInTheDocument()

        userEvent.click(screen.getByText("Login"))

    }
})
