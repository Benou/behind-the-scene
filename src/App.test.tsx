import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("Component App", () => {
  it("should render paragraph correctly", () => {
    render(<App />);

    const pElement = screen.getByText(/Behind the scene/i);
    expect(pElement).toBeInTheDocument();
  });
});
