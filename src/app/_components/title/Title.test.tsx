import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Title } from "./Title";

describe("Tests for title component", () => {
    const mainTitle = "Kitchen Recipes";

    beforeEach(() => {
        render(<Title text={mainTitle} />);
    });

    it("Should render the text passed as prop", () => {
        expect(screen.getByText(mainTitle)).toBeInTheDocument();
    });

    it("Should render an H2 Element", () => {
        const titleEl = screen.getByRole("heading", { level: 2 });
        expect(titleEl).toBeInTheDocument();
    });

    it("Should have tailwind classes applied", () => {
        const titleEl = screen.getByRole("heading", { level: 2 });

        expect(titleEl).toHaveClass("text-[32px]");
        expect(titleEl).toHaveClass("font-semibold");
    });
});

describe("Tests for special cases", () => {
    it("Should render an empty element if any text is provided via props", () => {
        render(<Title text="" />);
        expect(screen.getByRole("heading", { level: 2 })).toBeEmptyDOMElement();
    });
});
