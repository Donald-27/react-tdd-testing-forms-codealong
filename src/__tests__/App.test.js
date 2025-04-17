import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import App from "../App";

test("checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
  userEvent.click(addPepperoni);
  expect(addPepperoni).not.toBeChecked();
});


// ✅ Add bonus tests below this line

test("user can select a pizza size", async () => {
  render(<App />);
  const select = screen.getByRole("combobox");
  expect(select.value).toBe("medium");
  userEvent.selectOptions(select, "large");
  expect(select.value).toBe("large");
});

test("displays selected size and topping in summary", async () => {
  render(<App />);
  const select = screen.getByRole("combobox");
  userEvent.selectOptions(select, "small");

  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(checkbox);

  expect(screen.getByText(/Size: small/i)).toBeInTheDocument();
  expect(screen.getByText(/Toppings: Pepperoni/i)).toBeInTheDocument();
});

test("contact info input updates when user types", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter your email or phone/i);
  userEvent.type(input, "test@example.com");
  expect(input).toHaveValue("test@example.com");
});

test("submit button is present", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /submit order/i });
  expect(button).toBeInTheDocument();
});
