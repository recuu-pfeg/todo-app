import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Home from "./page";

afterEach(cleanup);

describe("Home page", () => {
  it("renders the app title", () => {
    render(<Home />);
    expect(screen.getByText("Todo App")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Home />);
    expect(
      screen.getByText("Add, complete, and delete your tasks.")
    ).toBeInTheDocument();
  });
});
