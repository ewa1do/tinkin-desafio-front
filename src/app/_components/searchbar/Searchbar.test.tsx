import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Searchbar } from "./Searchbar";

describe("Tests for searchbar component", () => {
    beforeEach(() => {
        render(<Searchbar dispatch={() => {}} />);
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

    it("Should the searchbar container have tailwind classes applied", () => {
        const container = screen.getByTestId("search-container");

        const classes = "flex bg-[#f9f9f9] w-10/12 md:w-9/12 lg:w-6/12 rounded-2xl p-1";
        const classList = classes.split(" ");

        for (const clss of classList) expect(container).toHaveClass(clss);
    });

    it("Should have the tailwind classed applied", () => {
        const classes = "text-2xl bg-[#f9f9f9] h-12 placeholder:text-lg w-full outline-none";
        const classList = classes.split(" ");

        const search = screen.getByTestId("searchbar");

        for (const clss of classList) expect(search).toHaveClass(clss);
    });
});
