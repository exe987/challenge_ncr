import { render, screen } from "@testing-library/react";
import BtnHome from "../components/btn_home/BtnHome";
import "@testing-library/jest-dom/extend-expect";

describe("BtnHome component", () => {
  it("renders without crashing", () => {
    // Render the BtnHome component
    render(<BtnHome />);

    // Check if the button with text "Salir" is present in the document
    const btnElement = screen.getByText("Salir");

    // Assertion: Verify that the button element is present in the document
    expect(btnElement).toBeInTheDocument();
  });

  it("has the correct link", () => {
    // Render the BtnHome component
    render(<BtnHome />);

    // Check if an element with role "link" is present in the document
    const linkElement = screen.getByRole("link");

    // Assertion: Verify that the link element has the attribute "href" with the value "/"
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
