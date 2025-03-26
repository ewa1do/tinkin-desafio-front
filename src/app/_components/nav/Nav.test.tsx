import { render, screen } from "@testing-library/react";

import { Nav } from "./Nav";

it("Should contain logo image with src and alt attributes", () => {
    render(<Nav />);

    const img = screen.getByRole("img");

    expect(img.getAttribute("src")).toBe("logo.svg");
    expect(img.getAttribute("alt")).toBe("Logo Tinkin");
});
