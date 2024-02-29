import React from "react"
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react"
import customRender from "./utils/customRender"
import { test, expect } from "vitest"
import SideFilterMenu from "../components/SideFilterMenu"
// import userEvent from "@testing-library/user-event"
// import { Button } from '../components/SideFilterMenu'
// import beforeAll from "./mockMatchMedia"

import { vi } from 'vitest';

// Hardcoded mock context values
const mockContextValue = {
    api: [[], vi.fn()], // Mock apiDefaults and its setter function
    LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
    loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
    movieList: [[], vi.fn()], // Mock movies and its setter function
};

describe('SideFilterMenu', () => {
    test('Renders the search button', () => {
        // Mock window.matchMedia
        vi.spyOn(window, 'matchMedia').mockReturnValueOnce({
            matches: false, // Adjust based on your test scenarios
            addListener: vi.fn(),
            removeListener: vi.fn(),
        });

        customRender(<SideFilterMenu />, mockContextValue);

        expect(screen.getByText('Search Movie')).toBeDefined()

        // const searchMovieButton = screen.getByRole("button", { name: /Search Movie/i });
        // expect(searchMovieButton).toBeInTheDocument();
    });
})




//UNIT TEST FOR SIDE FILTER MENU
// describe('Side Filter Menu component', () => {
//     test('Renders the search button', () => {
//         customRender(<SideFilterMenu />, mockContextValue)

// describe('Side Filter Menu component', () => {
//     test('Renders the search button', () => {
//         // beforeAll(() => render(<SideFilterMenu />))
//         beforeAll(() => customRender(<SideFilterMenu />, mockContextValue))

//         expect(screen.getByText('Search Movie')).toBeDefined()


//         // const searchMovieButton = screen.getByRole("button", { name: /Search Movie/i });
//         // expect(searchMovieButton).toBeInTheDocument();
//     });
// });


//         const searchMovieButton = screen.getByRole("button", {name: /Search Movie/})


//         // const SerachMovie = screen.getByText('Search Movie')

//         // expect(screen.getByTestId("search-button")).not.toBeNull()

//         // const { container  } = customRender(<SideFilterMenu />, mockContextValue)

//         // const SearchMovie = screen.getByText('Search Movie')
//         // expect(SearchMovie).toBeInTheDocument()

//         const SearchMovie = screen.getByTestId('search-button')
//         expect(SearchMovie).toBeInTheDocument()

//         // const SearchButton = screen.getByRole("button", {name: "Search Movie"})
//         // expect(SearchButton).toBeInTheDocument()


//         // userEvent.click(screen.getByText("Search Movie"))

//         // expect(container.querySelector('Button')).not.toBeNull()




//     })
// })

// describe('Side Filter Menu component', () => {
//     test('Renders the search button', () => {
//         // beforeAll(() => render(<SideFilterMenu />))
//         // beforeAll(() => customRender(<SideFilterMenu />, mockContextValue))
//         customRender(<SideFilterMenu />, mockContextValue)
//         // render(<SideFilterMenu />)


//         expect(screen.getByTestId("search-button")).toBeDefined()
//     })
// })



// describe("SideFilterMenu Unit tests", () => {
//     test('Renders the search button', () => {
//         customRender(<SideFilterMenu />, mockContextValue)

//         const searchMovieButton = screen.getByRole("button", { name: /Search Movie/i })
//         expect(searchMovieButton).toBeInTheDocument()
//     })
// })