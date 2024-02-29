import AdvancedSearch from "../components/AdvancedSearch";
import customRender from "./utils/customRender";
import { screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

const mockContextValue = {
  api: [[], vi.fn()], // Mock apiDefaults and its setter function
  LoggedIn: [false, vi.fn()], // Mock isLoggedIn and its setter function
  loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
  movieList: [[], vi.fn()], // Mock movies and its setter function
};

describe("Checking advanced search area headings are rendered", () => {
    test("Shows words Advanced Search in component", () => {
        customRender(<AdvancedSearch />, mockContextValue);

        const advancedSearchText = screen.getByText(/Advanced Search/i)
        expect(advancedSearchText).toBeInTheDocument();
    })
    test("Genre area is rendered", () => {
        customRender(<AdvancedSearch />, mockContextValue);

        const genreArea = screen.getByText(/Genre/i)
        expect(genreArea).toBeInTheDocument();
    })
    test("Shows language selection being rendered", () => {
        customRender(<AdvancedSearch />, mockContextValue);

        const languageArea = screen.getByText(/Language/i)
        expect(languageArea).toBeInTheDocument();
    })
    test("Shows Region selection being rendered", () => {
        customRender(<AdvancedSearch />, mockContextValue);

        const regionArea = screen.getByText(/Region/i)
        expect(regionArea).toBeInTheDocument();
    })
    test("Streaming providers selection is being rendered", () => {
        customRender(<AdvancedSearch />, mockContextValue);

        const streamingProviderArea = screen.getByText(/Streaming/i)
        expect(streamingProviderArea).toBeInTheDocument();
    })
    test("Search by selection is being rendered", () => {
        customRender(<AdvancedSearch />, mockContextValue)

        const searchByArea = screen.getByText(/Search by/i)
        expect(searchByArea).toBeInTheDocument();
    })
    test("Search button displays", () => {
        customRender(<AdvancedSearch />, mockContextValue)

        const buttonText = screen.getByText(/Search Movie/i)
        expect(buttonText).toBeInTheDocument();
    })
    
})

// basic render test completed