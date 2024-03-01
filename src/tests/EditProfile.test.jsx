import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import customRender from "./utils/customRender";
import { vi } from "vitest";
import EditProfile from "../components/ProfileDetails";



const mockContextValue = {
    api: [[], vi.fn()], // Mock apiDefaults and its setter function
    LoggedIn: [true, vi.fn()], // Mock isLoggedIn and its setter function
    loggedUser: ["mockUser", vi.fn()], // Mock user and its setter function
    movieList: [[], vi.fn()], // Mock movies and its setter function
};

describe("EditProfile component unit tests", () => {
    test("EditProfile shows a Edit Profile button", () => {
        customRender(<EditProfile />, mockContextValue)
        // const { editProfile } = render(<EditProfile />)

    })
})