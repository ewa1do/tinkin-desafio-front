import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Searchbar } from "./Searchbar";

describe("Tests for searchbar component", () => {
    beforeEach(() => {
        render(<Searchbar />);
    });

    it("Should exists in the DOM", () => {
        const search = screen.getByTestId("searchbar");
        expect(search).toBeInTheDocument();
        expect(search).toBeVisible();
    });

    it("Should be a textbox element", () => {
        const search = screen.getByTestId("searchbar");
        expect(search).toHaveRole("textbox");
    });

    it("Should not be disabled", () => {
        expect(screen.getByTestId("searchbar")).not.toBeDisabled();
    });

    it("Should have a Search placeholder", () => {
        expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    });

    it("Should have an Icon corresponding with the assets", () => {
        const imgEl = screen.getByRole("img");

        expect(imgEl).toBeInTheDocument();
        expect(imgEl).toHaveAttribute("src", "search.svg");
        expect(imgEl).toHaveAttribute("alt", "Search icon");
    });
});
