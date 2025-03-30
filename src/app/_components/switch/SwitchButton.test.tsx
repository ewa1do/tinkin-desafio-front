import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SwitchButton } from "./SwitchButton";

describe("Tests for SwitchButton component", () => {
    it("Should be visible in the DOM", () => {
        render(<SwitchButton isCookedBefore={true} />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("Should render the correct image if isCookedBefore=true", () => {
        render(<SwitchButton isCookedBefore={true} />);
        expect(screen.getByRole("img")).toHaveAttribute("src", "/switch-active.svg");
    });

    it("Should render the correct image if isCookedBefore=false", () => {
        render(<SwitchButton isCookedBefore={false} />);
        expect(screen.getByRole("img")).toHaveAttribute("src", "/switch-inactive.svg");
    });
});
