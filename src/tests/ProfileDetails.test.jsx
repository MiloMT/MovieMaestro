import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileDetails from "../components/ProfileDetails";
import { Context } from "../components/App";

// Sample user data for testing
const user = {
  name: "John Doe",
  email: "john@example.com",
  streamingPlatform: [{ label: "Netflix" }, { label: "Amazon Prime" }],
  language: { label: "English", value: "en" },
  region: { label: "United States", value: "us" },
};

describe("ProfileDetails component", () => {
  it("renders user profile details correctly", () => {
    render(
      <Context.Provider value={{ loggedUser: [user, vi.fn()] }}>
        <ProfileDetails />
      </Context.Provider>
    );

    // expect(screen.getByTestId("profile-details")).toBeInTheDocument();
    expect(screen.getByText(user.name)).toBeDefined();
    expect(screen.getByText(user.email)).toBeDefined();

    user.streamingPlatform.forEach((platform) => {
      expect(screen.getByText(platform.label)).toBeDefined();
    });

    expect(
      screen.getByText(`${user.language.label} (${user.language.value})`)
    ).toBeDefined();
    expect(
      screen.getByText(`${user.region.label} (${user.region.value})`)
    ).toBeDefined();
  });

  it("displays default message for language and region if not set", () => {
    const userWithoutLanguageAndRegion = {
      ...user,
      language: null,
      region: null,
    };

    render(
      <Context.Provider
        value={{ loggedUser: [userWithoutLanguageAndRegion, vi.fn()] }}
      >
        <ProfileDetails />
      </Context.Provider>
    );

    expect(screen.getByText("Please select a language")).toBeDefined();
    expect(screen.getByText("Please select a region")).toBeDefined();
  });
});
