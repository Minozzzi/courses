import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import {userEvent} from '@testing-library/user-event'

import { Button } from ".";

describe("Button component", () => {
  it("should render with default variant and size", () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole('button', {name: /Click Me/i})

    expect(buttonElement).toHaveClass(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
    );
  });

  it("should render with a specific variant", () => {
    render(<Button variant="destructive">Delete</Button>);

    const buttonElement = screen.getByRole('button', {name: /delete/i})

    expect(buttonElement).toHaveClass(
      "bg-destructive text-destructive-foreground hover:bg-destructive/90"
    );
  });

  it("should render with a specific size", () => {
    render(<Button size="lg">Large Button</Button>);

    const buttonElement = screen.getByRole('button', {name: /large button/i})

    expect(buttonElement).toHaveClass("h-11 rounded-md px-8");
  });

  it("should render as a child component", () => {
    render(
      <Button asChild role="button">
        <span>Child Button</span>
      </Button>
    );

    const spanElement = screen.getByRole("button", { name: /child button/i });

    expect(spanElement.tagName).toBe("SPAN");
  });

  it("should apply additional class names", () => {
    render(<Button className="custom-class">Click Me</Button>);

    const buttonElement = screen.getByRole('button', {name: /Click Me/i})

    expect(buttonElement).toHaveClass("custom-class");
  });

  it("should forward refs", () => {
    const ref = { current: {} as HTMLButtonElement };

    render(<Button ref={ref}>Click Me</Button>);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("BUTTON");
  });

  it("should handle focus correctly, with and without disabled", async () => {
    const user = userEvent.setup();

    render(<Button>Enabled Button</Button>);
    const enabledButton = screen.getByRole("button", { name: /enabled button/i });

    await user.tab();
    expect(enabledButton).toHaveFocus();

    render(<Button disabled>Disabled Button</Button>);
    const disabledButton = screen.getByRole("button", { name: /disabled button/i });

    await user.tab();
    expect(disabledButton).not.toHaveFocus();
  });

  it("should handle onClick correctly, with and without disabled", async () => {
    const user = userEvent.setup();

    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Enabled Button</Button>);
    const enabledButton = screen.getByRole("button", { name: /enabled button/i });

    await user.click(enabledButton);
    expect(handleClick).toHaveBeenCalledTimes(1);

    render(<Button onClick={handleClick} disabled>Disabled Button</Button>);
    const disabledButton = screen.getByRole("button", { name: /disabled button/i });

    await user.click(disabledButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
