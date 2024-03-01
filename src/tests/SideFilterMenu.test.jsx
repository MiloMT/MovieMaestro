import React from "react"
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react"
import customRender from "./utils/customRender"
import { test, expect, vi } from "vitest"
import SideFilterMenu from "../components/SideFilterMenu"

// Hardcoded mock context values
const mockContextValue = {
    api: [[], vi.fn()], // Mock apiDefaults and its setter function
    LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
    loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
    movieList: [[], vi.fn()], // Mock movies and its setter function
};

describe('SideFilterMenu component in MovieDisplay', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(), 
            removeListener: vi.fn(), 
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });
    test('Renders the search button', () => {

        customRender(<SideFilterMenu />, mockContextValue);

        expect(screen.getByTestId("close-button"))
    });

    test('Close button is hidden', () => {

        const closeBotton = screen.queryByTestId('close-button')
        
        expect(closeBotton).not.toBeInTheDocument()
    })

})

