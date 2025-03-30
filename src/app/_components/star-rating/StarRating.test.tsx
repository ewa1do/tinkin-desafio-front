import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MAX_STARS_ALLOWED, StarRating } from "./StarRating";

describe("Tests for StarRating component", () => {
    it("Should have a max stars allowed length", () => {
        render(<StarRating reviews={3} />);

        const stars = screen.getAllByRole("img");
        expect(stars).toHaveLength(MAX_STARS_ALLOWED);
    });

    it("Should use correct SVG for active/inactive stars", () => {
        render(<StarRating reviews={2} />);

        const stars = screen.getAllByRole("img");
        expect(stars[0]).toHaveAttribute("src", "rating-star.svg");
        expect(stars[2]).toHaveAttribute("src", "rating-star-inactive.svg");
    });

    it("Should limit stars to Maximum allowed if are greater", () => {
        render(<StarRating reviews={MAX_STARS_ALLOWED + 10} />);

        expect(screen.getAllByRole("img")).toHaveLength(MAX_STARS_ALLOWED);
    });

    it("Should render all inactive stars when reviews=0", () => {
        render(<StarRating reviews={0} />);
        const inactiveStars = screen.getAllByAltText("star");

        inactiveStars.every((img) =>
            expect(img).toHaveAttribute("src", "rating-star-inactive.svg"),
        );
    });
});
