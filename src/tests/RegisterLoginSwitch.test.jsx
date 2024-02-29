import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import customRender from "./utils/customRender";
import { vi } from "vitest";
import RegisterLoginSwitch from "../components/RegisterLoginSwitch";

const mockContextValue = {
    api: [[], vi.fn()], // Mock apiDefaults and its setter function
    LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
    loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
    movieList: [[], vi.fn()], // Mock movies and its setter function
};
//UNIT TESTING
describe("Register Login Switch component unit tests", () => {
    test("Renders a register and a login switch", () => {
        customRender(<RegisterLoginSwitch />, mockContextValue)

        expect(screen.getByText).toBeDefined()
        expect(screen.getByText('Login')).toBeDefined()
        expect(screen.getByText('Register')).toBeDefined()
    })
})

//INTEGRATION TESTING
describe("Register Login Switch component a integration tests", () => {
    test("Works as resgister switch", () => {
        customRender(<RegisterLoginSwitch />, mockContextValue)

        fireEvent.click(screen.getByTestId('register-switch'))
        expect(screen.getByText("Register")).toBeDefined()
    })

    test("Works as resgister and login switch", () => {
        customRender(<RegisterLoginSwitch />, mockContextValue)

        fireEvent.click(screen.getByTestId('login-switch'))
        expect(screen.getByText('Login')).toBeDefined()
    })
})
