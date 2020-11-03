import { render, screen } from "@testing-library/react";

import IndexPage from ".";

describe("IndexPage", () => {
    it("renders without crashing", () => {
        render(<IndexPage />);

        expect(screen.getByRole("heading", { name: "Hello world" })).toBeInTheDocument();
    });
});
