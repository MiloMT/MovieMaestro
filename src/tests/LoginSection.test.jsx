import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import customRender from "./utils/customRender";
import LoginSection from "../components/LoginSection";
import { vi } from "vitest";

const mockContextValue = {
    api: [[], vi.fn()], // Mock apiDefaults and its setter function
    LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
    loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
    movieList: [[], vi.fn()], // Mock movies and its setter function
};


describe("LoginSection component unit tests", () => {
    test("Renders login section", () => {
        customRender(<LoginSection />, mockContextValue);

        expect(screen.getByText).toBeDefined()
        expect(screen.getByText('Login')).toBeDefined()
    })
})


describe('LoginSection component a integration test', async () => {
    test("Works as Login Button properly ", () => {
        customRender(<LoginSection />, mockContextValue);

        const LoginButton = screen.getByRole("button", { name: /Login/i })
        expect(LoginButton).toBeInTheDocument()
    })
    test("LoginSection shows email form", () => {
        customRender(<LoginSection />, mockContextValue);
    
        const emailId = screen.getByTestId(/email/i)
        expect(emailId).toBeDefined()
    })

    test("LoginSection shows password form", () => {
        customRender(<LoginSection />, mockContextValue);
    
        const passwordId = screen.getByTestId(/password/i)
        expect(passwordId).toBeDefined()
    })
})

