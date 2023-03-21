import { render, screen } from "@testing-library/react";
import App from "../components/App";

test('renders "Hola mundo"', () => {
  // Arrange
  render(<App />);
  // Act
  const divElement = screen.getByText("Titulo");
  // Assert
  expect(divElement).toBeInTheDocument();
});
